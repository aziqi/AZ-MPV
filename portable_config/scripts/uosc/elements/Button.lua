local Element = require('elements/Element')

---@alias ButtonProps {icon: string; on_click?: function; is_clickable?: boolean; anchor_id?: string; active?: boolean; badge?: string|number; foreground?: string; background?: string; tooltip?: string}

-- Clean tooltip text regardless of source.
-- Fixes: uPREV->Prev, uNEXT->Next, uSHUFFLE-PLAY->Shuffle Play, SID->Sub, AID->Aud
---@param tooltip string|nil
---@return string|nil
local function clean_tooltip(tooltip)
	if type(tooltip) ~= 'string' then return tooltip end
	-- Strip leading 'u' before an uppercase letter (e.g. uPREV->PREV)
	local s = tooltip:gsub('^u([A-Z])', '%1')
	-- Replace hyphens/underscores with spaces
	s = s:gsub('[-_]', ' ')
	
	-- Special mapping for specific abbreviations
	local replacements = {
		SID = 'Sub',
		AID = 'Aud',
	}

	-- Title-case each word
	local words = {}
	for word in s:gmatch('%S+') do
		local upper_word = word:upper()
		if replacements[upper_word] then
			words[#words + 1] = replacements[upper_word]
		else
			words[#words + 1] = word:sub(1, 1):upper() .. word:sub(2):lower()
		end
	end
	return table.concat(words, ' ')
end

---@class Button : Element
local Button = class(Element)

---@param id string
---@param props ButtonProps
function Button:new(id, props) return Class.new(self, id, props) --[[@as Button]] end
---@param id string
---@param props ButtonProps
function Button:init(id, props)
	self.icon = props.icon
	self.active = props.active
	self.tooltip = props.tooltip
	self.badge = props.badge
	self.foreground = props.foreground or fg
	self.background = props.background or bg
	self.is_clickable = true
	---@type fun()|nil
	self.on_click = props.on_click
	Element.init(self, id, props)
end

function Button:on_coordinates() self.font_size = round((self.by - self.ay) * 0.7) end
function Button:handle_cursor_click()
	if not self.on_click or not self.is_clickable then return end
	-- We delay the callback to next tick, otherwise we are risking race
	-- conditions as we are in the middle of event dispatching.
	mp.add_timeout(0.01, self.on_click)
end

function Button:render()
	local visibility = self:get_visibility()
	if visibility <= 0 then return end
	cursor:zone('primary_down', self, function() self:handle_cursor_click() end)

	local ass = assdraw.ass_new()
	local is_clickable = self.is_clickable and self.on_click ~= nil
	local is_hover = self.proximity_raw <= 0
	local foreground = self.active and self.background or self.foreground
	local background = self.active and self.foreground or self.background
	local background_opacity = self.active and 1 or config.opacity.controls

	if is_hover and is_clickable and background_opacity < 0.3 then background_opacity = 0.3 end

	-- Background
	if background_opacity > 0 then
		ass:rect(self.ax, self.ay, self.bx, self.by, {
			color = (self.active or not is_hover) and background or foreground,
			radius = state.radius,
			opacity = visibility * background_opacity,
		})
	end

	-- Tooltip on hover
	if is_hover and self.tooltip then ass:tooltip(self, clean_tooltip(self.tooltip)) end

	-- Badge
	local icon_clip
	if self.badge then
		local badge_font_size = self.font_size * 0.6
		local badge_opts = {size = badge_font_size, color = background, opacity = visibility}
		local badge_width = text_width(self.badge, badge_opts)
		local width, height = math.ceil(badge_width + (badge_font_size / 7) * 2), math.ceil(badge_font_size * 0.93)
		local bx, by = self.bx - 1, self.by - 1
		ass:rect(bx - width, by - height, bx, by, {
			color = foreground,
			radius = state.radius,
			opacity = visibility,
			border = self.active and 0 or 1,
			border_color = background,
		})
		ass:txt(bx - width / 2, by - height / 2, 5, self.badge, badge_opts)

		local clip_border = math.max(self.font_size / 20, 1)
		local clip_path = assdraw.ass_new()
		clip_path:round_rect_cw(
			math.floor((bx - width) - clip_border), math.floor((by - height) - clip_border), bx, by, 3
		)
		icon_clip = '\\iclip(' .. clip_path.scale .. ', ' .. clip_path.text .. ')'
	end

	-- Icon
	local x, y = round(self.ax + (self.bx - self.ax) / 2), round(self.ay + (self.by - self.ay) / 2)
	ass:icon(x, y, self.font_size, self.icon, {
		color = foreground,
		border = self.active and 0 or options.text_border * state.scale,
		border_color = background,
		opacity = visibility,
		clip = icon_clip,
	})

	return ass
end

return Button
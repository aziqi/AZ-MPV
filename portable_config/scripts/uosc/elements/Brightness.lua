local Element = require('elements/Element')

--[[ BrightnessSlider ]]

---@class BrightnessSlider : Element
local BrightnessSlider = class(Element)
---@param props? ElementProps
function BrightnessSlider:new(props) return Class.new(self, props) --[[@as BrightnessSlider]] end
function BrightnessSlider:init(props)
	Element.init(self, 'brightness_slider', props)
	self.pressed = false
	self.spacing = 0
	self.border_size = 0
	self:update_dimensions()
end

function BrightnessSlider:update_dimensions()
	self.border_size = math.max(0, round(options.volume_border * state.scale))
end

function BrightnessSlider:get_visibility() return Elements.brightness:get_visibility(self) end

function BrightnessSlider:set_brightness(brightness)
	brightness = clamp(-100, round(brightness), 100)
	if state.brightness == brightness then return end
	mp.commandv('set', 'brightness', brightness)
end

function BrightnessSlider:set_from_cursor()
	local fraction = (self.by - cursor.y - self.border_size) / (self.by - self.ay - self.border_size)
	self:set_brightness(-100 + (clamp(0, fraction, 1) * 200))
end

function BrightnessSlider:on_display() self:update_dimensions() end
function BrightnessSlider:on_options() self:update_dimensions() end
function BrightnessSlider:on_coordinates()
	local width = self.bx - self.ax
	self.spacing = round(width * 0.2)
end
function BrightnessSlider:on_global_mouse_move()
	if self.pressed then self:set_from_cursor() end
end
function BrightnessSlider:handle_wheel_up() self:set_brightness((state.brightness or 0) + 2) end
function BrightnessSlider:handle_wheel_down() self:set_brightness((state.brightness or 0) - 2) end

function BrightnessSlider:render()
	local visibility = self:get_visibility()
	local ax, ay, bx, by = self.ax, self.ay, self.bx, self.by
	local width, height = bx - ax, by - ay

	if width <= 0 or height <= 0 or visibility <= 0 then return end

	cursor:zone('primary_down', self, function()
		self.pressed = true
		self:set_from_cursor()
		cursor:once('primary_up', function() self.pressed = false end)
	end)
	cursor:zone('wheel_down', self, function() self:handle_wheel_down() end)
	cursor:zone('wheel_up', self, function() self:handle_wheel_up() end)

	local ass = assdraw.ass_new()
	local brightness_val = state.brightness or 0
	local fraction = (brightness_val + 100) / 200
	local brightness_y = self.ay + self.border_size +
		((height - (self.border_size * 2)) * (1 - clamp(0, fraction, 1)))

	-- Draws a rectangle
	---@param p number Padding from slider edges.
	---@param r number Border radius.
	---@param cy? number A y coordinate where to clip the path from the bottom.
	function create_brightness_path(p, r, cy)
		cy = cy or ay + p
		local ax, bx, by = ax + p, bx - p, by - p
		local d, rh = r * 2, r / 2
		local path = assdraw.ass_new()
		path:move_to(bx - r, by)
		path:line_to(ax + r, by)
		if cy > by - d then
			local subtracted_radius = (d - (cy - (by - d))) / 2
			local xbd = (r - subtracted_radius * 1.35)
			path:bezier_curve(ax + xbd, by, ax + xbd, cy, ax + r, cy)
			path:line_to(bx - r, cy)
			path:bezier_curve(bx - xbd, cy, bx - xbd, by, bx - r, by)
		else
			path:bezier_curve(ax + rh, by, ax, by - rh, ax, by - r)
			path:line_to(ax, cy + r)
			path:bezier_curve(ax, cy + rh, ax + rh, cy, ax + r, cy)
			path:line_to(bx - r, cy)
			path:bezier_curve(bx - rh, cy, bx, cy + rh, bx, cy + r)
			path:line_to(bx, by - r)
			path:bezier_curve(bx, by - rh, bx - rh, by, bx - r, by)
		end
		return path
	end

	-- BG & FG paths
	local bg_path = create_brightness_path(0, state.radius + self.border_size)
	local fg_path = create_brightness_path(self.border_size, state.radius, brightness_y)

	-- Background with Liquid Glass border
	ass:new_event()
	ass:append('{\\rDefault\\an7\\blur0\\bord1.2\\3c&Hffffff\\3a&Haa\\1c&H' .. bg ..
		'\\iclip(' .. fg_path.scale .. ', ' .. fg_path.text .. ')}')
	ass:opacity(config.opacity.slider, visibility)
	ass:pos(0, 0)
	ass:draw_start()
	ass:append(bg_path.text)
	ass:draw_stop()

	-- Foreground
	ass:new_event()
	ass:append('{\\rDefault\\an7\\blur0\\bord0\\1c&H' .. fg .. '}')
	ass:opacity(config.opacity.slider_gauge, visibility)
	ass:pos(0, 0)
	ass:draw_start()
	ass:append(fg_path.text)
	ass:draw_stop()

	-- Current brightness value
	local brightness_string = (brightness_val >= 0 and "+" or "") .. tostring(round(brightness_val))
	local font_size = round(((width * 0.6) - (#brightness_string * (width / 20))) * options.font_scale)
	if brightness_y < self.by - self.spacing then
		ass:txt(self.ax + (width / 2), self.by - self.spacing, 2, brightness_string, {
			size = font_size,
			color = fgt,
			opacity = visibility,
			clip = '\\clip(' .. fg_path.scale .. ', ' .. fg_path.text .. ')',
		})
	end
	if brightness_y > self.by - self.spacing - font_size then
		ass:txt(self.ax + (width / 2), self.by - self.spacing, 2, brightness_string, {
			size = font_size,
			color = bgt,
			opacity = visibility,
			clip = '\\iclip(' .. fg_path.scale .. ', ' .. fg_path.text .. ')',
		})
	end

	return ass
end

--[[ Brightness ]]

---@class Brightness : Element
local Brightness = class(Element)

function Brightness:new() return Class.new(self) --[[@as Brightness]] end
function Brightness:init()
	Element.init(self, 'brightness', {render_order = 7})
	self.size = 0
	self.reset_ay = 0
	self.slider = BrightnessSlider:new({anchor_id = 'brightness', render_order = self.render_order})
	self:update_dimensions()
end

function Brightness:destroy()
	self.slider:destroy()
	Element.destroy(self)
end

function Brightness:get_visibility()
	return self.slider.pressed and 1 or Elements:maybe('timeline', 'get_is_hovered') and -1
		or Element.get_visibility(self)
end

function Brightness:update_dimensions()
	local volume_size = round(options.volume_size * state.scale)
	self.size = volume_size
	local min_y = Elements:v('top_bar', 'by') or Elements:v('window_border', 'size', 0)
	local max_y = Elements:v('controls', 'ay') or Elements:v('timeline', 'ay')
		or display.height - Elements:v('window_border', 'size', 0)
	local available_height = max_y - min_y
	local max_height = available_height * 0.8
	local height = round(math.min(self.size * 8, max_height))
	self.enabled = height > self.size * 2
	local margin = (self.size / 2) + Elements:v('window_border', 'size', 0)
	local spacing = round(self.size * 0.25)
	
	if options.volume == 'left' then
		self.ax = round(margin + self.size + spacing)
	else
		self.ax = round(display.width - margin - self.size * 2 - spacing)
	end
	self.ay = min_y + round((available_height - height) / 2)
	self.bx = round(self.ax + self.size)
	self.by = round(self.ay + height)
	self.reset_ay = self.by - self.size
	self.slider.enabled = self.enabled
	self.slider:set_coordinates(self.ax, self.ay, self.bx, self.reset_ay)
end

function Brightness:on_display() self:update_dimensions() end
function Brightness:on_prop_border() self:update_dimensions() end
function Brightness:on_prop_title_bar() self:update_dimensions() end
function Brightness:on_controls_reflow() self:update_dimensions() end
function Brightness:on_options() self:update_dimensions() end

function Brightness:render()
	local visibility = self:get_visibility()
	if visibility <= 0 then return end

	-- Reset brightness on secondary click
	cursor:zone('secondary_click', self, function()
		mp.set_property_native('brightness', 0)
	end)

	-- Reset button
	local reset_rect = {ax = self.ax, ay = self.reset_ay, bx = self.bx, by = self.by}
	cursor:zone('primary_down', reset_rect, function() mp.commandv('set', 'brightness', 0) end)
	local ass = assdraw.ass_new()
	local width_half = (reset_rect.bx - reset_rect.ax) / 2
	local height_half = (reset_rect.by - reset_rect.ay) / 2
	local icon_size = math.min(width_half, height_half) * 1.5
	local icon_name = 'brightness_medium'
	local val = state.brightness or 0
	if val < 0 then
		icon_name = 'brightness_low'
	elseif val > 0 then
		icon_name = 'brightness_high'
	end
	local underlay_opacity = {main = visibility * 0.2, border = visibility * 0.5}
	
	-- We draw a matching liquid glass border background around the reset button area as well
	ass:icon(reset_rect.ax + width_half, reset_rect.ay + height_half, icon_size, 'brightness_medium',
		{border = options.text_border * state.scale, opacity = underlay_opacity, align = 5}
	)
	ass:icon(reset_rect.ax + width_half, reset_rect.ay + height_half, icon_size, icon_name,
		{opacity = visibility, align = 5}
	)
	return ass
end

return Brightness

---@alias ButtonData {icon: string; active?: boolean; badge?: string; command?: string | string[]; tooltip?: string;}
---@alias ButtonSubscriber fun(data: ButtonData)

local buttons = {
	---@type ButtonData[]
	data = {},
	---@type table<string, ButtonSubscriber[]>
	subscribers = {},
}

---@param name string
---@return ButtonData
function buttons:get(name)
	return self.data[name] or {icon = 'help_center', tooltip = 'Uninitialized button "' .. name .. '"'}
end

---@param name string
---@param callback fun(data: ButtonData)
function buttons:subscribe(name, callback)
	local pool = self.subscribers[name]
	if not pool then
		pool = {}
		self.subscribers[name] = pool
	end
	pool[#pool + 1] = callback
	return function() buttons:unsubscribe(name, callback) end
end

---@param name string
---@param callback? ButtonSubscriber
function buttons:unsubscribe(name, callback)
	if self.subscribers[name] then
		if callback == nil then
			self.subscribers[name] = {}
		else
			itable_delete_value(self.subscribers[name], callback)
		end
	end
end

---@param name string
function buttons:trigger(name)
	local pool = self.subscribers[name]
	if pool then
		local data = self:get(name)
		for _, callback in ipairs(pool) do callback(data) end
	end
end

-- Strip leading lowercase 'u' prefix from tooltip strings set by external scripts.
-- Handles all variants: 'uPREV' -> 'Prev', 'uNEXT' -> 'Next', 'uSHUFFLE-PLAY' -> 'Shuffle Play'
---@param tooltip string|nil
---@return string|nil
local function clean_tooltip(tooltip)
	if type(tooltip) ~= 'string' then return tooltip end
	-- Remove leading 'u' followed by an uppercase letter (e.g. uPREV -> PREV, uSHUFFLE -> SHUFFLE)
	local cleaned = tooltip:gsub('^u([A-Z])', '%1')
	-- Replace hyphens/underscores with spaces
	cleaned = cleaned:gsub('[-_]', ' ')
	-- Title-case each word: first letter upper, rest lower
	-- Split by spaces, capitalize each word individually
	local words = {}
	for word in cleaned:gmatch('%S+') do
		local titled = word:sub(1,1):upper() .. word:sub(2):lower()
		words[#words + 1] = titled
	end
	return table.concat(words, ' ')
end

---@param name string
---@param data ButtonData
function buttons:set(name, data)
	-- Clean tooltip before storing to remove external script 'u' prefix artifacts
	if data.tooltip then
		data.tooltip = clean_tooltip(data.tooltip)
	end
	buttons.data[name] = data
	buttons:trigger(name)
	request_render()
end

mp.register_script_message('set-button', function(name, data)
	if type(name) ~= 'string' then
		msg.error('Invalid set-button message: 1st parameter (name) must be a string.')
		return
	end
	if type(data) ~= 'string' then
		msg.error('Invalid set-button message: 2nd parameter (data) must be a string.')
		return
	end

	local data = utils.parse_json(data)
	if type(data) == 'table' and type(data.icon) == 'string' then
		buttons:set(name, data)
	end
end)

return buttons

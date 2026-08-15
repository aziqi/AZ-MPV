--[[
	Subtitle Settings Menu for UOSC Addons
]]

local menu_type = "k7subtitle"
local initialized = false

local defaults = {
	["sub-font-size"] = 30,
	["sub-bold"] = "yes",
	["sub-color"] = "#FFFFFF",
	["sub-back-color"] = "#00000000",
	["sub-margin-y"] = 10,
	["sub-delay"] = 0,
	["sub-scale"] = 1.0,
}

local num_actions = {
	{ name = "dec", icon = "remove", label = "Decrease" },
	{ name = "inc", icon = "add",    label = "Increase" },
}

local function get_back_opacity()
	local color = mp.get_property("sub-back-color", "#00000000")
	if type(color) == "string" and color:match("^#%x%x%x%x%x%x%x%x$") then
		local alpha = tonumber(color:sub(2, 3), 16) or 0
		return math.floor((alpha / 255) * 100 + 0.5)
	elseif type(color) == "string" and color:match("^#%x%x%x%x%x%x$") then
		return 100
	else
		return 0
	end
end

local function set_back_opacity(percent)
	local pct = math.max(0, math.min(100, percent))
	local alpha = math.floor((pct / 100) * 255 + 0.5)
	local hex = string.format("#%02X000000", alpha)
	mp.set_property("sub-back-color", hex)
end

local function build_menu_data()
	local font_size = mp.get_property_number("sub-font-size", 30)
	local is_bold = mp.get_property_bool("sub-bold", true)
	local opacity = get_back_opacity()
	local margin_y = mp.get_property_number("sub-margin-y", 10)
	local delay = mp.get_property_number("sub-delay", 0)
	local scale = mp.get_property_number("sub-scale", 1.0)

	local items = {
		-- Section: Text
		{ title = "─── Text Style ───", selectable = false, muted = true },
		{
			title = "📐 Font Size",
			hint = tostring(math.floor(font_size)),
			value = "font-size",
			actions = num_actions,
			actions_place = "outside",
		},
		{
			title = "🔤 Bold Text",
			hint = is_bold and "On" or "Off",
			icon = is_bold and "toggle_on" or "toggle_off",
			value = "toggle-bold",
			active = is_bold,
		},
		-- Section: Appearance & Position
		{ title = "─── Layout & Background ───", selectable = false, muted = true },
		{
			title = "🖤 Background Opacity",
			hint = tostring(opacity) .. "%",
			value = "opacity",
			actions = num_actions,
			actions_place = "outside",
		},
		{
			title = "📍 Vertical Position (Margin Y)",
			hint = tostring(math.floor(margin_y)),
			value = "margin-y",
			actions = num_actions,
			actions_place = "outside",
		},
		{
			title = "⏱️ Subtitle Delay",
			hint = string.format("%.1fs", delay),
			value = "delay",
			actions = num_actions,
			actions_place = "outside",
		},
		{
			title = "📏 Subtitle Scale",
			hint = string.format("%.1fx", scale),
			value = "scale",
			actions = num_actions,
			actions_place = "outside",
		},
		-- Section: Reset
		{ title = "─── Reset ───", selectable = false, muted = true },
		{
			title = "🔄 Reset to Default Settings",
			hint = "Reset All",
			value = "reset-all",
			icon = "restore",
		},
	}

	return {
		type = menu_type,
		title = "Subtitle Settings",
		keep_open = true,
		curtain = false,
		callback = { script_name, "subtitle-menu-event" },
		items = items,
	}
end

-- =============================================================================
-- Event Handlers
-- =============================================================================

local function update_menu()
	local menu_data = build_menu_data()
	local json = utils.format_json(menu_data)
	mp.commandv("script-message-to", "uosc", "update-menu", json)
end

function handle_subtitle_menu_event(json_str)
	if not initialized then return end
	local event = utils.parse_json(json_str)
	if not event then return end

	if event.type == "activate" then
		local val = event.value
		if type(val) ~= "string" then return end

		local action = event.action

		if val == "font-size" then
			local delta = (action == "dec") and -2 or 2
			local current = mp.get_property_number("sub-font-size", 30)
			mp.set_property_number("sub-font-size", math.max(8, math.min(100, current + delta)))
			mp.set_property("sub-ass-override", "force")
		elseif val == "toggle-bold" then
			local is_bold = mp.get_property_bool("sub-bold", true)
			mp.set_property_bool("sub-bold", not is_bold)
			mp.set_property("sub-ass-override", "force")
		elseif val == "opacity" then
			local current = get_back_opacity()
			local delta = (action == "dec") and -10 or 10
			set_back_opacity(current + delta)
			mp.set_property("sub-ass-override", "force")
		elseif val == "margin-y" then
			local delta = (action == "dec") and -5 or 5
			local current = mp.get_property_number("sub-margin-y", 10)
			mp.set_property_number("sub-margin-y", math.max(0, math.min(200, current + delta)))
		elseif val == "delay" then
			local delta = (action == "dec") and -0.1 or 0.1
			local current = mp.get_property_number("sub-delay", 0)
			mp.set_property_number("sub-delay", current + delta)
		elseif val == "scale" then
			local delta = (action == "dec") and -0.1 or 0.1
			local current = mp.get_property_number("sub-scale", 1.0)
			mp.set_property_number("sub-scale", math.max(0.1, math.min(5.0, current + delta)))
			mp.set_property("sub-ass-override", "force")
		elseif val == "reset-all" then
			mp.set_property("sub-ass-override", "no")
			mp.set_property_number("sub-font-size", defaults["sub-font-size"])
			mp.set_property("sub-bold", defaults["sub-bold"])
			mp.set_property("sub-color", defaults["sub-color"])
			mp.set_property("sub-back-color", defaults["sub-back-color"])
			mp.set_property_number("sub-margin-y", defaults["sub-margin-y"])
			mp.set_property_number("sub-delay", defaults["sub-delay"])
			mp.set_property_number("sub-scale", defaults["sub-scale"])
			mp.osd_message("Subtitle settings reset to default", 2)
		end

		mp.add_timeout(0.05, update_menu)
	end
end

function handle_uosc_menu_subtitle()
	if not initialized then return end
	local menu_data = build_menu_data()
	local json = utils.format_json(menu_data)
	mp.commandv("script-message-to", "uosc", "open-menu", json)
end

function subtitle_menu_init()
	initialized = true
end

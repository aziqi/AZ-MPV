--[[



 <KEY>   script-message uosc-menu-shader
 <KEY>   script-message uosc-menu-shader root

 <KEY>   script-message uosc-menu-subtext

 <KEY>   script-message uosc-menu-prop

 <KEY>   script-message uosc-element-vcs toggle
 <KEY>   script-message uosc-element-vcs enable
 <KEY>   script-message uosc-element-vcs disable

]]


local script_path = debug.getinfo(1, "S").source:sub(2)
local script_dir = script_path:match("(.*/)") or script_path:match("(.*\\)") or ""
package.path = script_dir .. "?.lua;" .. package.path

options = require("mp.options")
utils = require("mp.utils")
msg = require("mp.msg")

opts = {
	load = true,

	-- sub: menu_shader
	shader_dir           = "~~/shaders/",
	shader_exts          = "*,glsl,hook",
	shader_action_prefer = "set",
	shader_preset_save   = "session",
	shader_cache_dir     = "~~/",

	-- sub: subtext
	subtext_merge        = false,

	-- sub: prop
	prop_show_values     = false,
	prop_action_prefer   = "show",

	-- sub: vcs
	vcs_padding          = 30,
	vcs_tiles            = 12,
	vcs_chapter_mode     = false,

}
options.read_options(opts, nil)

if opts.load == false then
	msg.info("Script has been disabled on initialization")
	return
end

function incompat_check(full_str, tar_major, tar_minor, tar_patch)
	if full_str == "unknown" then
		return true
	end

	local clean_ver_str = full_str:gsub("^[^%d]*", "")
	local major, minor, patch = clean_ver_str:match("^(%d+)%.(%d+)%.(%d+)")
	major = tonumber(major)
	minor = tonumber(minor)
	patch = tonumber(patch or 0)
	if major < tar_major then
		return true
	elseif major == tar_major then
		if minor < tar_minor then
			return true
		elseif minor == tar_minor then
			if patch < tar_patch then
				return true
			end
		end
	end

	return false
end

-- =============================================================================
-- =============================================================================

local min_major = 0
local min_minor = 40
local min_patch = 0
local mpv_ver_curr = mp.get_property_native("mpv-version", "unknown")
if incompat_check(mpv_ver_curr, min_major, min_minor, min_patch) then
	msg.warn("Current mpv version (" .. (mpv_ver_curr or "Unknown") .. ") is lower than " .. min_major .. "." .. min_minor .. "." .. min_patch .. ", script terminated.")
	return
end

script_name = mp.get_script_name()

require("helper")
require("menu_shader")
require("menu_subtext")
require("menu_prop")
require("menu_subtitle")
require("element_vcs")

init = function()
	if uosc_ready then return end
	uosc_ready = true

	-- sub: menu_shader
	shader_menu_init()
	mp.register_script_message("shader-menu-event", handle_shader_menu_event)
	mp.register_script_message("uosc-menu-shader", handle_uosc_menu_shader)

	-- sub: menu_subtext
	subtext_menu_init()
	mp.register_script_message("subtext-menu-event", handle_subtext_menu_event)
	mp.register_script_message("uosc-menu-subtext", handle_uosc_menu_subtext)

	-- sub: menu_prop
	prop_menu_init()
	mp.register_script_message("prop-menu-event", handle_prop_menu_event)
	mp.register_script_message("uosc-menu-prop", handle_uosc_menu_prop)

	-- sub: menu_subtitle
	subtitle_menu_init()
	mp.register_script_message("subtitle-menu-event", handle_subtitle_menu_event)
	mp.register_script_message("uosc-menu-subtitle", handle_uosc_menu_subtitle)

	-- sub: vcs
	vcs_init()
	mp.register_script_message("uosc-element-vcs", handle_uosc_element_vcs)
end

-- Initialize immediately to prevent missed uosc-version messages due to script load order
init()


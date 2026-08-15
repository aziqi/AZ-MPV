--[[
	Auto Idle Logo Script for AZ-MPV
	Displays portable_config/logo.jpg ONLY when player is opened standalone in idle mode.
	If a video is loaded (e.g. double clicked from Explorer), it plays directly without showing the logo.
]]

local utils = require("mp.utils")
local logo_path = mp.command_native({"expand-path", "~~/logo.jpg"})
local is_loading = false

local function is_idle_without_files()
	local playlist_count = mp.get_property_number("playlist-count", 0)
	local idle_active = mp.get_property_bool("idle-active", false)
	local current_path = mp.get_property("path")

	-- If there are any files in the playlist (e.g. opened with video file), do not load logo
	if playlist_count > 0 and current_path and current_path ~= logo_path then
		return false
	end
	if playlist_count > 0 and (not current_path or current_path == "") then
		return false
	end
	if current_path == logo_path then
		return false
	end

	return idle_active or (playlist_count == 0 and (not current_path or current_path == ""))
end

local function load_logo()
	if is_loading then return end
	if is_idle_without_files() then
		is_loading = true
		mp.commandv("loadfile", logo_path, "replace")
		mp.set_property("pause", "yes")
		is_loading = false
	end
end

mp.register_event("idle", function()
	load_logo()
end)

mp.register_event("end-file", function(event)
	if event.reason == "eof" or event.reason == "stop" or event.reason == "error" then
		mp.add_timeout(0.05, function()
			load_logo()
		end)
	end
end)

-- Initial check on startup: only load if truly idle without any files
mp.add_timeout(0.1, function()
	load_logo()
end)


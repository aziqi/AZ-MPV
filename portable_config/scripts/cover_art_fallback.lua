--[[
DOCS_ None

Automatically attach a fallback cover art when loading audio-only files. Default path: "~~/cover_fbk.jpg"

(The --cover-art-files option is not used because it has a critical bug)
 https://github.com/mpv-player/mpv/issues/12219
 https://github.com/mpv-player/mpv/issues/12165

]]

local mp = require "mp"
mp.options = require "mp.options"

local user_opt = {
	load = true,
	cover = "~~/cover_fbk.jpg",
}
mp.options.read_options(user_opt)

if user_opt.load == false then
	mp.msg.info("Script disabled at initialization")
	return
end
-- Reason: flag: attached-picture
local min_major = 0
local min_minor = 40
local min_patch = 0
local mpv_ver_curr = mp.get_property_native("mpv-version", "unknown")
local function incompat_check(full_str, tar_major, tar_minor, tar_patch)
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
if incompat_check(mpv_ver_curr, min_major, min_minor, min_patch) then
	mp.msg.warn("Current mpv version (" .. (mpv_ver_curr or "unknown") .. ") is below " .. min_major .. "." .. min_minor .. "." .. min_patch .. ", script terminated.")
	return
end


function add_cover()
	local skip = mp.get_property_native("current-tracks/video/external", "")
	if skip ~= "" then return end
	local cover_path = mp.command_native({"expand-path", user_opt.cover})
		--           video-add   <url>      [<flags>            [<title>          [<lang> [<albumart>]]]]
		mp.commandv("video-add", cover_path, "attached-picture", "cover_fallback", "no",   "yes")
end

mp.register_event("file-loaded", add_cover)

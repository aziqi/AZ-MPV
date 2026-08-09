local utils = require("mp.utils")
local msg = require("mp.msg")
local script_name = mp.get_script_name()

local function handle_event(json)
    local event = utils.parse_json(json)
    if not event then return end
    if event.type == "activate" and event.value then
        -- Execute the command string, splitting by ; if necessary
        for cmd in string.gmatch(event.value, "([^;]+)") do
            local clean_cmd = cmd:match("^%s*(.-)%s*$")
            if clean_cmd and clean_cmd ~= "" then
                mp.command(clean_cmd)
            end
        end
    end
end

mp.register_script_message("aspect-menu-event", handle_event)

mp.add_key_binding(nil, "open", function()
    local menu = {
        type = "aspect_ratio_menu",
        title = "Aspect Ratio & Fit",
        keep_open = false,
        callback = {script_name, "aspect-menu-event"},
        items = {
            {title = "Paling Sesuai", hint = "Best Fit", value = "set video-aspect-override -1 ; set keepaspect yes ; set panscan 0.0 ; set video-unscaled no"},
            {title = "Paskan Layar", hint = "Stretch", value = "set video-aspect-override -1 ; set keepaspect no ; set panscan 0.0 ; set video-unscaled no"},
            {title = "Isi", hint = "Fill", value = "set video-aspect-override -1 ; set keepaspect yes ; set panscan 1.0 ; set video-unscaled no"},
            {title = "---"},
            {title = "16:9", hint = "", value = "set video-aspect-override 16/9 ; set keepaspect yes ; set panscan 0.0 ; set video-unscaled no"},
            {title = "4:3", hint = "", value = "set video-aspect-override 4/3 ; set keepaspect yes ; set panscan 0.0 ; set video-unscaled no"},
            {title = "21:9", hint = "", value = "set video-aspect-override 21/9 ; set keepaspect yes ; set panscan 0.0 ; set video-unscaled no"},
            {title = "Original", hint = "Reset", value = "set video-aspect-override -1 ; set keepaspect yes ; set panscan 0.0 ; set video-unscaled no"}
        }
    }
    
    local json_str = utils.format_json(menu)
    mp.commandv("script-message-to", "uosc", "open-menu", json_str)
end)

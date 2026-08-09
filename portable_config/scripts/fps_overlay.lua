local mp = require 'mp'

local overlay = mp.create_osd_overlay("ass-events")
local active = false
local timer = nil

local last_total_drops = mp.get_property_number("frame-drop-count", 0)
local drop_history = {0, 0, 0, 0}
local drop_idx = 1

local function get_fps_color(fps, target)
    if not target or target <= 0 then return "&H00FF00&" end
    local ratio = fps / target
    if ratio >= 0.95 then 
        return "&H00FF00&" -- Green
    elseif ratio >= 0.75 then 
        return "&H00FFFF&" -- Yellow
    else 
        return "&H0000FF&" -- Red
    end
end

local function update_overlay()
    local vf_fps = mp.get_property_number("estimated-vf-fps", 0)
    local disp_fps = mp.get_property_number("estimated-display-fps", 0)
    
    -- Fallback to nominal display-fps if estimated is 0 (e.g. video paused or backend unsupported)
    if disp_fps == 0 then
        disp_fps = mp.get_property_number("display-fps", 0)
    end
    
    -- Calculate recent drops (rolling 1 second window)
    local current_total_drops = mp.get_property_number("frame-drop-count", 0)
    local drop_delta = current_total_drops - last_total_drops
    if drop_delta < 0 then drop_delta = 0 end
    last_total_drops = current_total_drops
    
    drop_history[drop_idx] = drop_delta
    drop_idx = drop_idx + 1
    if drop_idx > 4 then drop_idx = 1 end
    
    local recent_drops = 0
    for i = 1, 4 do
        recent_drops = recent_drops + drop_history[i]
    end
    
    local fps_color = get_fps_color(vf_fps, disp_fps)
    
    -- ASS string to draw a nice top-left overlay
    -- {\an7} = Top Left
    -- {\bord1.5}{\shad1.5} = Text border and drop shadow for readability
    -- {\fs...} = Font size
    -- {\1c&HBBGGRR&} = Text Color
    
    local ass = string.format(
        "{\\an7}{\\pos(20,20)}{\\bord2}{\\shad1}{\\3c&H111111&}{\\4c&H111111&}" ..
        "{\\b1}{\\1c&H00D070&}{\\fs26}PERFORMANCE STATS{\\b0}{\\fs22}\\N" ..
        "{\\1c&HFFFFFF&}Render FPS : {\\b1}{\\1c%s}%.1f{\\b0}{\\1c&HFFFFFF&}\\N" ..
        "Display Hz : %.1f\\N" ..
        "Drop (1sec): %d",
        fps_color, vf_fps, disp_fps, recent_drops
    )
    
    overlay.data = ass
    overlay:update()
end

local function toggle_overlay()
    active = not active
    if active then
        update_overlay()
        timer = mp.add_periodic_timer(0.25, update_overlay)
    else
        if timer then 
            timer:kill() 
            timer = nil
        end
        overlay:remove()
    end
end

mp.add_key_binding(nil, "toggle-fps-overlay", toggle_overlay)

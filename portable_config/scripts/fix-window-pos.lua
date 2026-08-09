-- fix-window-pos.lua
-- Forces mpv window onto the primary monitor after all scripts are loaded.
-- Primary monitor (Mi Monitor): X=0..2560, Y=0..1440

local target_x = 200
local target_y = 150

mp.add_timeout(0.5, function()
    local wx = mp.get_property_number("window-pos-x")
    local wy = mp.get_property_number("window-pos-y")
    if wx == nil then return end
    if wx < 0 or wx > 2500 or wy < 0 then
        mp.msg.info(("Window off-screen at (%s,%s) - moving to (%d,%d)"):format(tostring(wx), tostring(wy), target_x, target_y))
        mp.set_property_number("window-pos-x", target_x)
        mp.set_property_number("window-pos-y", target_y)
    end
end)

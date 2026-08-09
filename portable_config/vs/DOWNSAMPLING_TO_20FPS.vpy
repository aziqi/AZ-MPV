### Decimate video to 20 FPS using SelectEvery
### Works with any source FPS (24, 30, 60, 120, etc.)

import vapoursynth as vs
from vapoursynth import core

clip = video_in
src_fps = container_fps

####################
# Target FPS
####################

TARGET_FPS = 20

####################
# Decimate
####################

def decimateToFps(clip, src_fps, target_fps=20):
    cycle   = round(src_fps)
    keep    = round(target_fps * cycle / src_fps)
    keep    = max(1, min(keep, cycle))
    offsets = [round(i * cycle / keep) for i in range(keep)]
    return core.std.SelectEvery(clip, cycle=cycle, offsets=offsets)

if src_fps > TARGET_FPS:
    clip = decimateToFps(clip, src_fps, target_fps=TARGET_FPS)
# else: sudah <= 20 FPS, tidak diubah

clip.set_output()

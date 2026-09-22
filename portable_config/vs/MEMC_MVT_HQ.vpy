### MVtools High Quality Frame Interpolation (CPU High Quality)
### Target: 60 FPS (Dense Vector Analysis & Pixel-Flow Interpolation)
### Parameters: pel=2, blksize=8, search=3 (Exhaustive), FlowFPS
### Docs: https://github.com/hooke007/mpv_PlayKit/wiki/3_K7sfunc

import vapoursynth as vs
from vapoursynth import core
import k7sfunc as k7f

clip = video_in

################
# User Options #
################

H_Pre   = 1440       # Max source height before processing
Fps_Out = 60.0       # Target frame rate (60 FPS recommended for CPU real-time)
Block   = False      # False = FlowFPS (pixel flow mask), True = BlockFPS
Lk_Fmt  = False      # Lock pixel format to YUV420P8

ret = k7f.FPS_CTRL(clip, fps_in=container_fps, fps_max=32.0, fps_ret=True)
clip = k7f.FMT_CTRL(clip, h_max=H_Pre, fmt_pix=1 if Lk_Fmt else 0)

target_fps = max(float(Fps_Out), container_fps * 2.0)
clip = k7f.MVT_MQ(clip, fps_in=container_fps, fps_out=target_fps, qty_lv=2, block=Block, blksize=8)
clip = core.std.AssumeFPS(clip, fpsnum=clip.fps_num, fpsden=clip.fps_den)

clip.set_output()

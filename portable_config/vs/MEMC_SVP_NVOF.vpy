### SVPflow Pro 180FPS Frame Interpolation (Hardware NVIDIA Optical Flow - RTX OFA)
### Optimized for NVIDIA GeForce RTX 4060 & 180Hz Displays
### Features: Hardware ASIC OFA + Auto-Crop 4px Edge Protection (No Red Border) + AssumeFPS Normal Speed
### Docs: https://github.com/hooke007/mpv_PlayKit/wiki/3_K7sfunc

import vapoursynth as vs
from vapoursynth import core
import k7sfunc as k7f

clip = video_in

############
# User Options #
############

H_Pre       = 1440       # Max source height before processing (1080 / 1440 / 2160)
Fps_Num     = 180        # Target FPS (180 for 180Hz displays, 144 for 144Hz, 60 for 60Hz)
Fps_Den     = 1
Abs         = True       # True = Absolute target FPS, False = Multiplier (e.g. 2x)
Gpu         = 0          # Primary discrete GPU index
Lk_Fmt      = False      # Lock pixel format to YUV420P8
Crop_Border = True       # Add sacrificial black borders before NVOF then crop to preserve 100% video content
Pad         = 16         # Sacrificial padding width in pixels (16px eliminates full watermark block + chroma bleed)

clip = k7f.FPS_CTRL(clip, fps_in=container_fps, fps_ret=True)
clip = k7f.FMT_CTRL(clip, h_max=H_Pre, fmt_pix=1 if Lk_Fmt else 0)

clip, clip8 = k7f.FMT2YUV_SP(clip)
multi_str = "true" if Abs else "false"

smooth_nvof_param = (
    "{rate:{num:%d,den:%d,abs:%s},"
    "algo:13,block:false,cubic:1,gpuid:%d,linear:true,"
    "mask:{cover:40,area:16,area_sharp:0.7},"
    "scene:{mode:3,blend:false,limits:{m1:2400,m2:3601,scene:5002,zero:125,blocks:40},luma:1.5}}"
    % (Fps_Num, Fps_Den, multi_str, Gpu)
)

if Crop_Border:
    clip = core.std.AddBorders(clip, left=Pad, right=Pad, top=Pad, bottom=Pad)
    clip8 = core.std.AddBorders(clip8, left=Pad, right=Pad, top=Pad, bottom=Pad)

clip = core.svp2.SmoothFps_NVOF(clip, smooth_nvof_param, nvof_src=clip8, src=clip, fps=container_fps)
clip = core.std.AssumeFPS(clip, fpsnum=clip.fps_num, fpsden=clip.fps_den)

if Crop_Border:
    clip = core.std.Crop(clip, left=Pad, right=Pad, top=Pad, bottom=Pad)

clip.set_output()

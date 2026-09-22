### SVPflow Pro 180FPS Frame Interpolation (Hardware NVOF Ultra Mode)
### Optimized for NVIDIA GeForce RTX (Optical Flow Accelerator) & 180Hz Displays
### Docs: https://github.com/hooke007/mpv_PlayKit/wiki/3_K7sfunc

import vapoursynth as vs
from vapoursynth import core
import k7sfunc as k7f

clip = video_in

############
# User Options #
############

H_Pre   = 1440       # Max source height before processing (1080 / 1440 / 2160)
Fps_Num = 180        # Target FPS (180 for 180Hz displays, 144 for 144Hz, 60 for 60Hz)
Fps_Den = 1
Abs     = True       # True = Absolute target FPS, False = Multiplier (e.g. 2x)
Nvof    = True       # True = Hardware NVIDIA Optical Flow Accelerator (RTX GPU)
Quality = "ultra"    # "ultra" = 2M Algo:23 + Bicubic + Linear Light + Mask 80/30
                     # "standard" = Default k7sfunc 1.5M Algo:13
Gpu     = 0          # Primary discrete GPU index
Lk_Fmt  = False      # Lock pixel format to YUV420P8

ret = k7f.FPS_CTRL(clip, fps_in=container_fps, fps_ret=True)
clip = k7f.FMT_CTRL(clip, h_max=H_Pre, fmt_pix=1 if Lk_Fmt else 0)

if Quality == "ultra" and Nvof:
    clip, clip8 = k7f.FMT2YUV_SP(clip)
    multi_str = "true" if Abs else "false"
    smooth_nvof_param = (
        "{rate:{num:%d,den:%d,abs:%s},"
        "algo:23,block:false,cubic:1,gpuid:%d,linear:true,"
        "mask:{cover:80,area:30,area_sharp:0.75},"
        "scene:{mode:3,blend:false,limits:{m1:2400,m2:3601,scene:5002,zero:125,blocks:40},luma:1.5}}"
        % (Fps_Num, Fps_Den, multi_str, Gpu)
    )
    clip = core.svp2.SmoothFps_NVOF(clip, smooth_nvof_param, nvof_src=clip8, src=clip, fps=container_fps)
elif Quality == "ultra" and not Nvof:
    clip, clip8 = k7f.FMT2YUV_SP(clip)
    multi_str = "true" if Abs else "false"
    super_param = "{pel:2,gpu:1,full:true,scale:{up:2,down:4}}"
    analyse_param = (
        "{vectors:3,block:{w:16,h:16,overlap:2},"
        "main:{levels:5,search:{type:4,distance:3,sort:true,satd:true,coarse:{width:960,type:4,distance:4,satd:true,trymany:true,bad:{sad:1000,range:0}}},"
        "penalty:{lambda:3.33,plevel:1.33,lsad:3300,pnew:50,pglobal:50,pzero:100,pnbour:65,prev:0}},"
        "refine:[{thsad:400,search:{type:4,distance:1,satd:false},penalty:{pnew:50}}]}"
    )
    smooth_param = (
        "{rate:{num:%d,den:%d,abs:%s},"
        "algo:23,block:false,cubic:1,gpuid:%d,linear:true,"
        "mask:{cover:80,area:30,area_sharp:0.75},"
        "scene:{mode:3,blend:false,limits:{m1:2400,m2:3601,scene:5002,zero:125,blocks:40},luma:1.5}}"
        % (Fps_Num, Fps_Den, multi_str, Gpu)
    )
    s = core.svp1.Super(clip8, super_param)
    v = core.svp1.Analyse(s["clip"], s["data"], clip, analyse_param)
    clip = core.svp2.SmoothFps(clip, s["clip"], s["data"], v["clip"], v["data"], smooth_param, src=clip, fps=container_fps)
else:
    clip = k7f.SVP_PRO(clip, fps_in=container_fps, fps_num=Fps_Num, fps_den=Fps_Den, abs=Abs, nvof=Nvof, gpu=Gpu)

clip.set_output()


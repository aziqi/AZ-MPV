### https://github.com/hooke007/mpv_PlayKit/wiki/3_K7sfunc

import vapoursynth as vs
from vapoursynth import core
import k7sfunc as k7f

core.num_threads = k7f.vs_t_dft
clip = video_in

############
############

H_Pre = 1440
Model = 23
Fps_Num = 2
Fps_Den = 1
Sc_Mode = 1
Stat_Th = 60.0
Gpu = 0
Gpu_T = 2
Lk_Fmt = False

ret = k7f.FPS_CTRL(clip, fps_in=container_fps, fps_ret=True)
clip = k7f.FMT_CTRL(clip, h_max=H_Pre, fmt_pix=1 if Lk_Fmt else 0)
clip = k7f.RIFE_STD(clip, model=Model, turbo=2, fps_num=Fps_Num, fps_den=Fps_Den, sc_mode=Sc_Mode, stat_th=Stat_Th, gpu=Gpu, gpu_t=Gpu_T)

clip.set_output()

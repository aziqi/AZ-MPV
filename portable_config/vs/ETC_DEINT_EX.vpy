### https://github.com/hooke007/mpv_PlayKit/wiki/3_K7sfunc

import vapoursynth as vs
from vapoursynth import core
import k7sfunc as k7f

clip = video_in

############
############

Deint_Lv = 4
Src_Type = 0
Tff = 0
Cpu = True
Gpu = -1

clip = k7f.DEINT_EX(clip, fps_in=container_fps, deint_lv=Deint_Lv, src_type=Src_Type, deint_den=1, tff=Tff, cpu=Cpu, gpu=Gpu)
clip.set_output()

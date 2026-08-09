### https://github.com/hooke007/mpv_PlayKit/wiki/3_K7sfunc

import vapoursynth as vs
from vapoursynth import core
import k7sfunc as k7f

clip = video_in

############
############

Nr_Lv = 30.0

clip = k7f.CCD_STD(clip, nr_lv=Nr_Lv)

clip.set_output()

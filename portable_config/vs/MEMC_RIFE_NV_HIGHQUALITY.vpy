### RIFE v4.6 — Balanced Quality 1080p 2x | RTX 4060 Laptop
### https://github.com/hooke007/mpv_PlayKit/wiki/3_K7sfunc

import vapoursynth as vs
from vapoursynth import core
import k7sfunc as k7f

core.num_threads = 4
clip = video_in

H_Pre   = 1080
Model   = 4262
Fps_Num = 2
Fps_Den = 1
Sc_Mode = 2     # Turun ke 1, kurangi CPU overhead
Gpu     = 0
Gpu_T   = 5     # Kembali ke 1 — frame delivery lebih merata & konsisten
Ws_Size = 0
Lk_Fmt  = False

clip = k7f.FMT_CTRL(clip, h_max=H_Pre, fmt_pix=0)

clip = k7f.RIFE_NV(
    clip,
    model    = Model,
    int8_qnt = True,
    turbo    = True,
    fps_in   = container_fps,
    fps_num  = Fps_Num,
    fps_den  = Fps_Den,
    sc_mode  = Sc_Mode,
    gpu      = Gpu,
    gpu_t    = Gpu_T,
    ws_size  = Ws_Size,
)

clip.set_output()




## Integer, pre-downscale processing source height (set to your monitor height)
## <46|4251|426|4262> Model to use
## Integer, Fps_Num/Fps_Den value is the frame rate multiplier
## Integer
## <0|1|2> Scene change detection mode, 0 to disable
## GPU device index to use, 0 is the first device
## <1|2|3> GPU thread count
## Integer, manually constrain VRAM (MiB) during engine build phase, minimum value is 128, set below this to maximize utilization
## <True|False> Lock pixel format to yuv420p8

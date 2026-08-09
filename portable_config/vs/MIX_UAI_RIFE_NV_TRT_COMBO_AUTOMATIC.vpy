### Combined: AI Upscaling + RIFE Frame Interpolation
### Optimized for 1080p Monitor (NVIDIA RTX + TensorRT)
### Logic:
###   - FPS >= 59  → upscale only (skip decimate & RIFE)
###   - FPS > 24   → decimate ke 24 FPS dulu → upscale → RIFE x2
###   - FPS <= 24  → upscale → RIFE x2

import vapoursynth as vs
from vapoursynth import core
import k7sfunc as k7f

core.num_threads = k7f.vs_t_dft
clip = video_in

################
# User Options #
################

## --- Upscaling ---
H_Pre    = 720
Model    = "the_database_AnimeJaNaiV2L1_x2_fp16_op17.onnx"
Fp16_Qnt = True
Gpu      = 0
Gpu_T    = 2
St_Eng   = False
Res_Opt  = [1280, 720]
Res_Max  = [1920, 1080]
Ws_Size  = 0
H_Max    = 1080
Lk_Fmt   = False

## --- RIFE Interpolation ---
H_Pre_RIFE  = 1080
Model_RIFE  = 46
Fps_Num     = 2
Fps_Den     = 1
Sc_Mode     = 2
Gpu_T_RIFE  = 3

## FPS Thresholds
TARGET_FPS     = 24   # Semua video di-decimate ke sini sebelum diproses
FPS_HIGH_LIMIT = 59   # FPS >= ini → skip semua, upscale saja

####################
# FPS Detection
####################

src_fps = container_fps  # float dari mpv

####################
# Fungsi decimate: buang frame secara merata pakai SelectEvery
####################

def decimateToFps(clip, src_fps, target_fps=24):
    cycle   = round(src_fps)
    keep    = round(target_fps * cycle / src_fps)
    keep    = max(1, min(keep, cycle))
    offsets = [round(i * cycle / keep) for i in range(keep)]
    return core.std.SelectEvery(clip, cycle=cycle, offsets=offsets)

####################
# Step 1: Decimate ke 24 FPS (jika FPS > 24 dan < 59)
####################

if src_fps >= FPS_HIGH_LIMIT:
    # 59+ FPS → tidak disentuh, langsung upscale, tanpa RIFE
    working_fps = src_fps
elif src_fps > TARGET_FPS:
    # 25–58 FPS → decimate ke 24 FPS dulu agar ringan
    clip = decimateToFps(clip, src_fps, target_fps=TARGET_FPS)
    working_fps = float(TARGET_FPS)
else:
    # <= 24 FPS → langsung proses
    working_fps = src_fps

####################
# Step 2: AI Upscaling (UAI_NV_TRT)
####################

ret  = k7f.FMT_CTRL(clip, h_max=1080, h_ret=True)
clip = k7f.FMT_CTRL(clip, h_max=H_Pre, fmt_pix=1 if Lk_Fmt else 0)

clip = k7f.UAI_NV_TRT(
    clip,
    crc       = False,
    model_pth = Model,
    opt_lv    = 3,
    cuda_opt  = [0, 0, 0],
    int8_qnt  = False,
    fp16_qnt  = Fp16_Qnt,
    gpu       = Gpu,
    gpu_t     = Gpu_T,
    st_eng    = St_Eng,
    res_opt   = Res_Opt,
    res_max   = Res_Max,
    ws_size   = Ws_Size,
)

clip = k7f.FMT_CTRL(clip, h_max=H_Max, fmt_pix=1 if Lk_Fmt else 0)

####################
# Step 3: RIFE x2 (hanya jika FPS sumber < 59)
# Input: 24 FPS → Output: 48 FPS
####################

if src_fps < FPS_HIGH_LIMIT:
    clip = k7f.FMT_CTRL(clip, h_max=H_Pre_RIFE, fmt_pix=1 if Lk_Fmt else 0)
    clip = k7f.RIFE_NV(
        clip,
        model    = Model_RIFE,
        int8_qnt = False,
        turbo    = True,
        fps_in   = working_fps,
        fps_num  = Fps_Num,
        fps_den  = Fps_Den,
        sc_mode  = Sc_Mode,
        gpu      = Gpu,
        gpu_t    = Gpu_T_RIFE,
        ws_size  = Ws_Size,
    )
# else: src_fps >= 59 → RIFE dilewati

clip.set_output()

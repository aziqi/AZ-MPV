### https://github.com/hooke007/mpv_PlayKit/wiki/3_K7sfunc
### ESRGAN upscaling, NVIDIA GPU only

import vapoursynth as vs
from vapoursynth import core
import k7sfunc as k7f

clip = video_in

############
# User Options #
############

H_Pre = 1080      # Integer, pre-downscale source height (pixels)
Lt_Hd = True      # <True|False> Whether to process sources above 720p
Model = 5005      # Model to use: 0, 2, 5005-5010
Gpu = 0           # GPU device index to use (0 = first device)
Gpu_T = 12        # GPU thread count (reduce for efficiency)
St_Eng = False    # <True|False> Use static engine
Ws_Size = 0       # Constrain VRAM usage (0 = no limit)
H_Max = 1440      # Output height limit (set to your monitor height)
Lk_Fmt = False    # <True|False> Lock pixel format to yuv420p8

############
# Model Reference #
############

# 0    - Default model (lightest)  — fast and efficient for basic upscaling
# 2    - Anime4K model             — designed for animation and cartoons
# 5005 - Balanced enhancement      — balance between sharpness and smoothness
# 5006 - High detail enhancement   — preserves detail without over-sharpening
# 5007 - Super resolution (live)   — high detail, suitable for video restoration
# 5008 - Extreme detail            — very sharp, slower processing
# 5009 - Restoration & denoising   — aggressive noise reduction
# 5010 - Ultra HD / extreme quality — heaviest model, best output quality

############
# Video Processing #
############

# Adjust format with temporary 1200px height limit before processing
ret = k7f.FMT_CTRL(clip, h_max=1200, h_ret=True)

# Set pixel format and height limit before running ESRGAN
clip = k7f.FMT_CTRL(clip, h_max=H_Pre, fmt_pix=1 if Lk_Fmt else 0)

# Apply ESRGAN NV for upscaling or noise reduction with NVIDIA-specific GPU options
clip = k7f.ESRGAN_NV(clip, lt_hd=Lt_Hd, model=Model, gpu=Gpu, gpu_t=Gpu_T, st_eng=St_Eng, ws_size=Ws_Size)

# Re-apply format and resolution limit after processing
clip = k7f.FMT_CTRL(clip, h_max=H_Max, fmt_pix=1 if Lk_Fmt else 0)

clip.set_output()


import vapoursynth as vs
from vapoursynth import core
import k7sfunc as k7f

core.num_threads = k7f.vs_t_dft
clip = video_in

############
############

H_Pre = 720
Model = "the_database_AnimeJaNaiV2L1_x2_fp32_op17.onnx"
Fp16_Qnt = True
Exh_Tune = False
Gpu = 0
Gpu_T = 2
H_Max = 1440
Lk_Fmt = False

ret = k7f.FMT_CTRL(clip, h_max=1200, h_ret=True)
clip = k7f.FMT_CTRL(clip, h_max=H_Pre, fmt_pix=1 if Lk_Fmt else 0)
clip = k7f.UAI_MIGX(clip, crc=False, model_pth=Model, fp16_qnt=Fp16_Qnt, exh_tune=Exh_Tune, gpu=Gpu, gpu_t=Gpu_T)
clip = k7f.FMT_CTRL(clip, h_max=H_Max, fmt_pix=1 if Lk_Fmt else 0)

clip.set_output()

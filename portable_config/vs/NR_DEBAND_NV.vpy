### NR_DEBAND_NV.vpy
### Anti-Banding terbaik menggunakan neo_f3kdb — untuk video 8-bit banding parah
### Plugin: neo_f3kdb (github.com/HomeOfAviSynthPlusEvolution/neo_f3kdb)
### Taruh di: ~~/vs/NR_DEBAND_NV.vpy
###
### Cara aktifkan:
###   Permanen  → vf=vapoursynth="~~/vs/NR_DEBAND_NV.vpy"  di mpv.conf
###   Shortcut  → D  vf toggle vapoursynth="~~/vs/NR_DEBAND_NV.vpy"  di input.conf

import vapoursynth as vs
from vapoursynth import core

clip = video_in

################
# User Options #
################

# Kekuatan threshold (lebih tinggi = lebih agresif hapus banding, tapi blur detail)
# Ringan: 48 | Normal: 64 | Kuat: 96 | Sangat Parah: 128
Y  = 64   # luma threshold
CB = 48   # chroma blue threshold
CR = 48   # chroma red threshold

# Radius deteksi banding
# 15 = ringan | 30 = normal | 45 = kuat (lebih berat di GPU)
RANGE = 30

# Grain sintetis — JANGAN 0, area deband akan terlihat "plastik"
# 8-16 = natural, hampir tidak terlihat
# 20-32 = film grain look
GRAIN_Y = 12
GRAIN_C = 8

####################
# Processing
####################

src = clip

# Step 1: Naikkan ke 16-bit agar proses lebih presisi, hasil lebih smooth
clip = core.resize.Bicubic(clip, format=vs.YUV420P16)

# Step 2: neo_f3kdb — deteksi dan hapus banding secara lokal per-pixel
# Jauh lebih cerdas dari deband bawaan mpv karena analisis tiap area secara independen
clip = core.neo_f3kdb.Deband(
    clip,
    range       = RANGE,
    y           = Y,
    cb          = CB,
    cr          = CR,
    grainy      = GRAIN_Y,
    grainc      = GRAIN_C,
    sample_mode = 2,      # 4 sample point — lebih akurat dari mode 1
    blur_first  = True,   # blur dulu sebelum threshold — hasil lebih smooth
)

# Step 3: Kembalikan ke format asli
clip = core.resize.Bicubic(clip, format=src.format)

clip.set_output()

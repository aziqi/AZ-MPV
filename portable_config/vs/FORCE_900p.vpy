### Auto 900p Resolution Normalizer — Aspek Ratio Otomatis
### Output tinggi SELALU 900px, lebar menyesuaikan aspek ratio sumber
### Tidak ada padding hitam, tidak ada crop

import vapoursynth as vs
from vapoursynth import core

clip = video_in

############
# User Options #
############

OUT_H = 900    # Tinggi output target (tinggi dikunci, lebar otomatis)

############
# Script #
############

src_w = clip.width
src_h = clip.height

# Hitung lebar output berdasarkan aspek ratio sumber
scale = OUT_H / src_h
scaled_w = int(src_w * scale)
scaled_h = OUT_H

# Pastikan kelipatan 2 (syarat YUV) — bulatkan ke bawah
scaled_w = scaled_w - (scaled_w % 2)
scaled_h = scaled_h - (scaled_h % 2)

# Resize
if scaled_w != src_w or scaled_h != src_h:
    clip = core.resize.Spline36(clip, width=scaled_w, height=scaled_h)

clip.set_output()

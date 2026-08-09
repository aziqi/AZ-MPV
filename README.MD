# 🎬 AZ-MPV

<p align="center">
  <b>Pemutar Video Next-Gen Berbasis MPV (Fork dari mpv-lazy / mpv_PlayKit) dengan AI Upscaling, Shaders, UI UOSC Modern, dan Subtitle Engine Khusus.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MPV-0.38+-purple.svg" alt="MPV Version">
  <img src="https://img.shields.io/badge/Fork--of-mpv__lazy%20%2F%20PlayKit-red.svg" alt="Fork">
  <img src="https://img.shields.io/badge/Architecture-x86__64-blue.svg" alt="Architecture">
  <img src="https://img.shields.io/badge/License-GPL--2.0-green.svg" alt="License">
  <img src="https://img.shields.io/badge/Status-Portable-orange.svg" alt="Portable">
</p>

---

## 🌟 Tentang AZ-MPV

**AZ-MPV** adalah pemutar media desktop tingkat tinggi yang dikembangkan sebagai **fork dan kelanjutan dari [mpv-lazy / mpv_PlayKit](https://github.com/hooke007/mpv_PlayKit)** buatan *hooke007*. Proyek ini telah dioptimasi dan dimodifikasi secara mendalam untuk memberikan kualitas visual terbaik, kemudahan penggunaan, dan fitur terlengkap bagi pengguna Indonesia.

Diracik khusus dengan perpaduan **AI Frame Interpolation (RIFE)**, **AI Super Resolution (ESRGAN/ARTCNN)**, **Custom Shaders (Anime4K/KrigBilateral)**, serta **UI UOSC Modern**, AZ-MPV siap memberikan pengalaman menonton kelas bioskop tanpa kerumitan konfigurasi.

---

## 🚀 Fitur Utama & Keunggulan

### 🎨 1. Subtitle Engine & Menu Khusus UOSC
- **Font Bawaan Ubuntu (Portable):** Menggunakan keluarga font **Ubuntu** yang sangat bersih, modern, dan sudah dibundel secara portable di dalam folder `portable_config/fonts/`.
- **⚙️ Menu Subtitle Settings:** Menu interaktif di UOSC untuk mengubah tampilan subtitle secara *real-time*:
  - 📐 **Ukuran Font** (`−` / `+` per 2 pt)
  - 🔤 **Bold Text** (Toggle On / Off)
  - 🖤 **Background Opacity** (`−` / `+` per 10%)
  - 📍 **Posisi Vertikal / Margin Y** (`−` / `+` per 5 px)
  - ⏱️ **Subtitle Delay** (`−` / `+` per 0.1s)
  - 📏 **Subtitle Scale** (`−` / `+` per 0.1x)
  - 🔄 **Reset to Default Settings**
- **Dynamic ASS Style:** Subtitle `.ass` (seperti anime) secara default tetap menampilkan gaya & animasi asli pembuatnya. Begitu Anda mengatur tampilan lewat menu UOSC, gaya akan menyesuaikan secara otomatis!
- **🌐 Auto Translation & Dual Subtitle:** Mendukung penerjemahan otomatis (`Alt+T`) dan penampilan dua baris subtitle sekaligus (`Alt+J`).

### 🤖 2. Pemrosesan Video & AI Upscaling (VapourSynth)
- **AI Motion Smoothing (RIFE):** Menghaluskan pergerakan video menjadi 60FPS+ secara *real-time* menggunakan NVIDIA TensorRT.
- **AI Super Resolution:** Meningkatkan ketajaman video resolusi rendah menggunakan model AI seperti **ESRGAN**, **ARTCNN**, dan **ACNET**.
- **🧼 Denoise & Deband AI:** Filter pembersih *noise* dan *banding* warna (BM3D & CCD) via VapourSynth.

### 🖌️ 3. Shaders Manager & Profil Otomatis
- **GPU Shader Pipeline:** Dilengkapi dengan `KrigBilateral.glsl` (Chroma Upscaling), `SSimSuperRes`, dan paket lengkap `Anime4K`.
- **Auto Profiling:**
  - 🌈 **HDR & Dolby Vision:** Penanganan otomatis warna BT.2020 PQ/HLG.
  - 🎨 **SDR-to-HDR:** Efek *Fake HDR* interaktif (`FX_FAKE_HDR_v2.glsl`).
  - 📺 **Anime Mode:** Optimalisasi *deband* & warna khusus kartun/anime.
  - 🔋 **Battery Saver:** Otomatis menghemat daya saat laptop tidak dicolokkan ke listrik.

### 🎛️ 4. Antarmuka (UI) UOSC & Fitur Player Modern
- **VLC-Style Aspect Ratio:** Tombol pengubah rasio gambar cepat (`16:9`, `21:9` Bioskop, `4:3`, `Standard`) dengan *letterbox* presisi di UI bawah.
- **Timeline Thumbnails:** Pratinjau gambar saat kursor digeser di *seek bar* (`thumbfast`).
- **Real-Time FPS Overlay:** Menampilkan indikator FPS dan performa pemutaran di layar.

### 🔊 5. Audio Pipeline & Dialog EQ
- **Loudness Normalization:** Menyeimbangkan volume suara (LUFS -16) agar dialog bisikan tidak terlalu pelan dan efek ledakan tidak memekakkan telinga.
- **Vocal Equalizer:** Optimasi frekuensi dialog (300Hz cut, 1.5kHz vocal boost, 3.5kHz clarity boost) yang sangat jernih untuk IEM & Speaker.

---

## ⌨️ Daftar Hotkey & Pintasan Tombol

| Tombol | Fungsi |
|---|---|
| **Klik Kanan** | Membuka Menu Utama AZ-MPV (UOSC) |
| **Klik Kiri (Tahan)** | Memindahkan posisi jendela video |
| **Scroll Mouse** | Mengatur Volume / Seeking video |
| **F2 / F3** | Mengaktifkan AI Upscaling & Frame Interpolation (RIFE) |
| **Ctrl + \`** | Membersihkan semua Shader aktif |
| **Alt + T** | Beralih mode Terjemahan Otomatis (Off → EN → ID) |
| **Alt + J** | Mengaktifkan Subtitle Kedua (Dual Subtitles) |
| **Ctrl + S / Ctrl + Shift + S** | Mengambil Screenshot (Scaled / Full Window) |
| **1 / 2** | Mengatur Contrast video |

---

## 📥 Cara Instalasi & Penggunaan

1. Buka halaman [**Releases**](https://github.com/aziqi/AZ-MPV/releases).
2. Unduh paket `.zip` versi **AZ-MPV** terbaru.
3. Ekstrak folder zip tersebut di lokasi mana saja (contoh: `C:\AZ-MPV` atau `D:\AZ-MPV`).
4. Jalankan **`mpv.exe`** atau **`MPV.bat`** untuk langsung mulai menonton!

---

## 📄 Lisensi & Kredit

- **Pengembang:** [Aziqi](https://github.com/aziqi)
- **Fork / Base Project:** [mpv-lazy / mpv_PlayKit by hooke007](https://github.com/hooke007/mpv_PlayKit)
- **Mesin Utama:** [MPV Player](https://mpv.io)
- **UI Engine:** [UOSC](https://github.com/tomaskovacik/uosc)

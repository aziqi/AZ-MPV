<p align="center">
  <img src="portable_config/logo.jpg" width="480" alt="AZ-MPV Logo">
</p>

<h1 align="center">🎬 AZ-MPV</h1>

<p align="center">
  <b>Pemutar Video Next-Gen Berbasis MPV (Fork dari mpv_PlayKit) dengan AI Upscaling, Shaders, UI UOSC Modern, dan Subtitle Engine Khusus.</b>
</p>

<p align="center">
  <b>🇮🇩 Bahasa Indonesia</b> | <a href="README.MD"><b>🇬🇧 English</b></a>
</p>

<p align="center">
  <a href="https://drive.google.com/file/d/1QyLVprMEWmaKsBpAuWCUBReWt5Fs2Oic/view?usp=sharing"><img src="https://img.shields.io/badge/Download-AZ--MPV%20(Google%20Drive)-brightgreen.svg?style=for-the-badge&logo=googledrive" alt="Download AZ-MPV"></a>
  <a href="https://github.com/aziqi/AZ-MPV/releases/tag/v1.0.0"><img src="https://img.shields.io/badge/Release-v1.0.0-blue.svg?style=for-the-badge&logo=github" alt="Latest Release"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MPV-0.38+-purple.svg?style=for-the-badge&logo=mpv" alt="MPV Version">
  <img src="https://img.shields.io/badge/Fork--of-mpv__PlayKit-red.svg?style=for-the-badge" alt="Fork">
  <img src="https://img.shields.io/badge/Language-Full%20English%20Translated-blue.svg?style=for-the-badge" alt="Full English Translated">
  <img src="https://img.shields.io/badge/Architecture-x86__64-blue.svg?style=for-the-badge" alt="Architecture">
  <img src="https://img.shields.io/badge/Status-Portable-orange.svg?style=for-the-badge" alt="Portable">
</p>

---

## 📌 Navigasi Cepat

- [🌟 Tentang AZ-MPV](#-tentang-az-mpv)
- [⚡ Perbandingan MPV Standar vs AZ-MPV](#-perbandingan-mpv-standar-vs-az-mpv)
- [🚀 Fitur Utama & Keunggulan](#-fitur-utama--keunggulan)
- [⌨️ Pintasan Tombol & Hotkey](#️-daftar-hotkey--pintasan-tombol)
- [📥 Cara Instalasi & Penggunaan](#-cara-instalasi--penggunaan)
- [📄 Lisensi & Kredit](#-lisensi--kredit)

---

## 🌟 Tentang AZ-MPV

**AZ-MPV** adalah pemutar media desktop tingkat tinggi yang dikembangkan sebagai **fork dan kelanjutan dari [MPV PLAYKIT](https://github.com/hooke007/mpv_PlayKit)** buatan *hooke007*. 

> 🌐 **Full English Translation:** Proyek asli *mpv_PlayKit* berasal dari komunitas Tiongkok dan menggunakan bahasa Mandarin (Cina) di seluruh menu dan konfigurasinya. Di **AZ-MPV**, seluruh menu antarmuka, file konfigurasi (`mpv.conf`, `input_uosc.conf`), skrip Lua/JS, dan OSD telah **diterjemahkan sepenuhnya ke Bahasa Inggris** (serta dilengkapi dukungan penerjemahan subtitle Bahasa Indonesia) untuk aksesibilitas maksimal.

Diracik khusus dengan perpaduan **AI Frame Interpolation (RIFE)**, **AI Super Resolution (ESRGAN/ARTCNN)**, **Custom Shaders (Anime4K/KrigBilateral)**, serta **UI UOSC Modern**, AZ-MPV siap memberikan pengalaman menonton kelas bioskop tanpa kerumitan konfigurasi.

---

## ⚡ Perbandingan MPV Standar vs AZ-MPV

| Fitur | MPV Standar | 🎬 **AZ-MPV** |
| :--- | :---: | :---: |
| **Antarmuka (UI)** | Minimalis / Teks Polos | **UI UOSC Modern dengan Glassmorphism & Control Bar** |
| **Subtitle Engine** | Font Sistem Standar | **Font Ubuntu Portable + Menu Subtitle Settings Interaktif** |
| **Pengatur Rasio Gambar** | Manual Konfigurasi | **Tombol Rasio Aspek VLC-Style 1-Klik (16:9, 21:9, 4:3)** |
| **AI Motion Smoothing** | ❌ Tidak Ada | **✅ RIFE AI 60FPS+ Smooth Motion (NVIDIA TensorRT)** |
| **AI Super Resolution** | ❌ Tidak Ada | **✅ Model AI ESRGAN, ARTCNN, & ACNET Pre-Configured** |
| **GPU Shader Suite** | ❌ Manual Setup | **✅ Paket Anime4K, KrigBilateral, & SSimSuperRes Siap Pakai** |
| **Pemrosesan Audio** | Mentah | **LUFS -16 Loudness Normalization + Vocal Clarity EQ** |
| **Bahasa Antarmuka** | Standar | **Full English Translated (100% Bebas Bahasa Cina)** |
| **Instalasi** | Perlu Setup | **100% Portable (Tinggal Ekstrak & Jalankan)** |

---

## 🚀 Fitur Utama & Keunggulan

### 🇬🇧 1. Full English Translation & Localization
- **100% Bebas Bahasa Cina:** Seluruh teks menu UOSC, OSD, komentar konfigurasi, dan pesan skrip dari *mpv_PlayKit* asli telah diterjemahkan secara bersih ke Bahasa Inggris.
- **🇮🇩 Indonesian Friendly:** Dilengkapi dengan fitur penerjemah subtitle otomatis (`Alt+T`) dan dukungan bawaan untuk subtitle Bahasa Indonesia (`slang=id`).

### 🎨 2. Subtitle Engine & Menu Khusus UOSC
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

### 🤖 3. Pemrosesan Video & AI Upscaling (VapourSynth)
- **AI Motion Smoothing (RIFE):** Menghaluskan pergerakan video menjadi 60FPS+ secara *real-time* menggunakan NVIDIA TensorRT.
- **AI Super Resolution:** Meningkatkan ketajaman video resolusi rendah menggunakan model AI seperti **ESRGAN**, **ARTCNN**, dan **ACNET**.
- **🧼 Denoise & Deband AI:** Filter pembersih *noise* dan *banding* warna (BM3D & CCD) via VapourSynth.

### 🖌️ 4. Shaders Manager & Profil Otomatis
- **GPU Shader Pipeline:** Dilengkapi dengan `KrigBilateral.glsl` (Chroma Upscaling), `SSimSuperRes`, dan paket lengkap `Anime4K`.
- **Auto Profiling:**
  - 🌈 **HDR & Dolby Vision:** Penanganan otomatis warna BT.2020 PQ/HLG.
  - 🎨 **SDR-to-HDR:** Efek *Fake HDR* interaktif (`FX_FAKE_HDR_v2.glsl`).
  - 📺 **Anime Mode:** Optimalisasi *deband* & warna khusus kartun/anime.
  - 🔋 **Battery Saver:** Otomatis menghemat daya saat laptop tidak dicolokkan ke listrik.

### 🎛️ 5. Antarmuka (UI) UOSC & Fitur Player Modern
- **VLC-Style Aspect Ratio:** Tombol pengubah rasio gambar cepat (`16:9`, `21:9` Bioskop, `4:3`, `Standard`) dengan *letterbox* presisi di UI bawah.
- **Timeline Thumbnails:** Pratinjau gambar saat kursor digeser di *seek bar* (`thumbfast`).
- **Real-Time FPS Overlay:** Menampilkan indikator FPS dan performa pemutaran di layar.

### 🔊 6. Audio Pipeline & Dialog EQ
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

1. Klik di sini untuk [**Unduh Paket Portable AZ-MPV (Google Drive)**](https://drive.google.com/file/d/1QyLVprMEWmaKsBpAuWCUBReWt5Fs2Oic/view?usp=sharing).
2. Ekstrak folder `.zip` yang diunduh ke lokasi mana saja (contoh: `C:\AZ-MPV` atau `D:\AZ-MPV`).
3. Jalankan **`mpv.exe`** atau **`MPV.bat`** untuk langsung mulai menonton!

## ❓ Pertanyaan yang Sering Diajukan (FAQ)

<details>
<summary><b>Q: Bagaimana cara menjadikan AZ-MPV sebagai pemutar video default di Windows?</b></summary>
Klik kanan file video apa saja (contoh: <code>.mkv</code> atau <code>.mp4</code>) ➔ Pilih <b>Open with (Buka dengan)</b> ➔ Pilih <b>Choose another app</b> ➔ Cari folder <code>AZ-MPV</code> Anda lalu pilih <code>mpv.exe</code> ➔ Centang <b>Always use this app (Selalu gunakan aplikasi ini)</b>.
</details>

<details>
<summary><b>Q: Bagaimana cara membuka Menu Subtitle Settings di UOSC?</b></summary>
Tekan tombol <code>Ctrl + Alt + S</code> atau klik kanan di mana saja pada layar pemutar untuk membuka menu UOSC, lalu pilih <b>📝 Subtitles ➔ ⚙️ Subtitle Settings</b>.
</details>

<details>
<summary><b>Q: Apakah AI Motion Smoothing (RIFE) membutuhkan VGA/GPU NVIDIA?</b></summary>
Ya, fitur penyesuaian gerak AI RIFE 60FPS+ memanfaatkan NVIDIA TensorRT untuk performa GPU terbaik.
</details>

---

## ⭐ Dukung Proyek Ini

Jika Anda menyukai **AZ-MPV**, beri bintang **🌟 Star** pada repositori ini di GitHub!

---

## 📄 Lisensi & Kredit

- **Pengembang:** [Aziqi](https://github.com/aziqi)
- **Fork / Base Project:** [MPV PLAYKIT by hooke007](https://github.com/hooke007/mpv_PlayKit) (Diterjemahkan secara penuh ke Bahasa Inggris & Indonesia)
- **Mesin Utama:** [MPV Player](https://mpv.io)
- **UI Engine:** [UOSC](https://github.com/tomaskovacik/uosc)

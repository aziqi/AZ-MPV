# 🎬 AZ-MPV

<p align="center">
  <b>Next-Gen MPV-Based Video Player (Fork of mpv_PlayKit) featuring AI Upscaling, Custom Shaders, Modern UOSC UI, and Dedicated Subtitle Engine.</b>
</p>

<p align="center">
  <a href="README.id.md"><b>Bahasa Indonesia</b></a> | <b>English</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MPV-0.38+-purple.svg" alt="MPV Version">
  <img src="https://img.shields.io/badge/Fork--of-mpv__PlayKit-red.svg" alt="Fork">
  <img src="https://img.shields.io/badge/Language-Full%20English%20Translated-brightgreen.svg" alt="Full English Translated">
  <img src="https://img.shields.io/badge/Architecture-x86__64-blue.svg" alt="Architecture">
  <img src="https://img.shields.io/badge/License-GPL--2.0-green.svg" alt="License">
  <img src="https://img.shields.io/badge/Status-Portable-orange.svg" alt="Portable">
</p>

---

## 🌟 About AZ-MPV

**AZ-MPV** is a high-performance desktop media player developed as a **fork and enhanced continuation of [MPV PLAYKIT](https://github.com/hooke007/mpv_PlayKit)** by *hooke007*. 

> 🌐 **Full English Translation:** The original *mpv_PlayKit* project originated in Chinese. In **AZ-MPV**, all interface menus, configuration files (`mpv.conf`, `input_uosc.conf`), Lua/JS scripts, and OSD messages have been **fully translated into English** (with added support for Indonesian subtitle auto-translation).

Combining **AI Motion Interpolation (RIFE)**, **AI Super Resolution (ESRGAN/ARTCNN)**, **Custom Shaders (Anime4K/KrigBilateral)**, and a **Modern UOSC UI**, AZ-MPV delivers a cinema-grade viewing experience out of the box with zero setup hassle.

---

## 🚀 Key Features

### 🇬🇧 1. Full English Translation & Localization
- **100% Chinese-Free Interface:** All UOSC menus, OSD messages, config comments, and script popups translated into clean English.
- **Auto Translation & Dual Subtitles:** Built-in subtitle translation (`Alt+T`) and dual subtitle rendering (`Alt+J`).

### 🎨 2. Subtitle Engine & Custom UOSC Menu
- **Ubuntu Font Family (Portable):** Clean, modern **Ubuntu** typography bundled portably inside `portable_config/fonts/`.
- **⚙️ Interactive Subtitle Settings Menu:** Real-time controls directly inside UOSC:
  - 📐 **Font Size** (`−` / `+` by 2 pt)
  - 🔤 **Bold Text** (Toggle On / Off)
  - 🖤 **Background Opacity** (`−` / `+` by 10%)
  - 📍 **Vertical Position / Margin Y** (`−` / `+` by 5 px)
  - ⏱️ **Subtitle Delay** (`−` / `+` by 0.1s)
  - 📏 **Subtitle Scale** (`−` / `+` by 0.1x)
  - 🔄 **Reset to Default Settings**
- **Dynamic ASS Override:** ASS subtitles (`.ass`) retain original author styles by default (`sub-ass-override=no`), but dynamically enable forced override whenever manually adjusted via UOSC.

### 🤖 3. AI Video Processing & Upscaling (VapourSynth)
- **AI Motion Smoothing (RIFE):** Real-time 60FPS+ frame interpolation powered by NVIDIA TensorRT.
- **AI Super Resolution:** Enhance low-resolution videos with **ESRGAN**, **ARTCNN**, and **ACNET** machine learning models.
- **🧼 AI Denoise & Deband:** Advanced BM3D & CCD filters via VapourSynth.

### 🖌️ 4. Shaders Manager & Auto Profiles
- **GPU Shader Pipeline:** Pre-configured with `KrigBilateral.glsl` (Chroma Upscaling), `SSimSuperRes`, and full `Anime4K` suite.
- **Smart Profiles:**
  - 🌈 **HDR & Dolby Vision:** Auto BT.2020 PQ/HLG color mapping.
  - 🎨 **SDR-to-HDR:** Interactive Fake HDR shader (`FX_FAKE_HDR_v2.glsl`).
  - 📺 **Anime Mode:** Dedicated debanding & anime color tuning.
  - 🔋 **Battery Saver:** Auto energy saving when unplugged.

### 🎛️ 5. Modern UOSC UI & Player Controls
- **VLC-Style Aspect Ratio Switcher:** Quick aspect ratio toggle (`16:9`, `21:9` Cinema, `4:3`, `Standard`) with precise letterboxing.
- **Timeline Thumbnails:** Hover preview thumbnails on seek bar (`thumbfast`).
- **Real-Time FPS Overlay:** Live performance & frame rate indicators.

### 🔊 6. Audio Pipeline & Vocal EQ
- **Loudness Normalization:** LUFS -16 audio leveling to balance soft whispers and loud action scenes.
- **Vocal Equalizer:** Dialogue frequency optimization (300Hz cut, 1.5kHz vocal boost, 3.5kHz clarity boost) ideal for IEMs & speakers.

---

## ⌨️ Shortcut Keys

| Key | Action |
|---|---|
| **Right Click** | Open Main AZ-MPV Menu (UOSC) |
| **Left Click (Drag)** | Move video window position |
| **Mouse Scroll** | Adjust volume / Seek video |
| **F2 / F3** | Toggle AI Upscaling & Frame Interpolation (RIFE) |
| **Ctrl + \`** | Clear all active shaders |
| **Alt + T** | Cycle Subtitle Auto-Translation (Off → EN → ID) |
| **Alt + J** | Toggle Secondary Subtitle (Dual Subtitles) |
| **Ctrl + S / Ctrl + Shift + S** | Take Screenshot (Scaled / Full Window) |
| **1 / 2** | Adjust video contrast |

---

## 📥 Installation & Usage

1. Go to the [**Releases**](https://github.com/aziqi/AZ-MPV/releases) page.
2. Download the latest **AZ-MPV** `.zip` package.
3. Extract to any directory (e.g., `C:\AZ-MPV` or `D:\AZ-MPV`).
4. Run **`mpv.exe`** or **`MPV.bat`** to start watching!

---

## 📄 License & Credits

- **Developer:** [Aziqi](https://github.com/aziqi)
- **Base Project:** [MPV PLAYKIT by hooke007](https://github.com/hooke007/mpv_PlayKit) (Originally in Chinese, fully translated & enhanced)
- **Core Engine:** [MPV Player](https://mpv.io)
- **UI Engine:** [UOSC](https://github.com/tomaskovacik/uosc)

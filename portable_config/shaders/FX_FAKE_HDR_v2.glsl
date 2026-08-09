// ═══════════════════════════════════════════════════════════════════════════
// FX_FAKE_HDR_v2.glsl  —  SDR to "Fake HDR" Look for mpv
// Metode: Vibrance + S-Curve Contrast + Highlight Bloom + Shadow Detail
//
// Referensi riset:
//   - Vibrance algorithm: github.com/mpv-player/mpv/discussions/14080 (kasper93)
//   - S-Curve contrast:   butterw/bShaders A-pack sCurve
//   - ACES filmic curve:  Narkowicz 2015 (knarkowicz.wordpress.com)
//   - Shadow lift:        butterw/bShaders bShadows
//   - Correct hook stage: HOOK OUTPUT (after tone mapping, before dither)
//                         github.com/mpv-player/mpv/discussions/14203
//
// PERBEDAAN vs versi lama:
//   ✅ VIBRANCE (bukan saturation) — boost warna pucat, lindungi warna jenuh
//   ✅ S-Curve contrast (bukan gamma) — lebih natural, tidak clip highlight
//   ✅ Highlight bloom — area terang "memancar" seperti HDR peak
//   ✅ Shadow detail boost — detail di area gelap muncul
//   ✅ HOOK OUTPUT — diaplikasikan di akhir pipeline (paling tepat)
//
// CARA PAKAI:
//   Taruh di: ~~/shaders/FX_FAKE_HDR_v2.glsl
//   Aktifkan: change-list glsl-shaders toggle "~~/shaders/FX_FAKE_HDR_v2.glsl"
//   TIDAK perlu vo=gpu-next (berjalan di vo=gpu biasa juga)
// ═══════════════════════════════════════════════════════════════════════════

// ── Tuning Parameters ──────────────────────────────────────────────────────
//
// VIBRANCE: Boost warna pucat/desaturated, warna jenuh tidak disentuh.
//   0.0 = off | 0.30 = halus | 0.55 = recommended | 0.80 = sangat vivid
#define VIBRANCE 0.55

// S_CURVE: Perkuat kontras (gelap lebih gelap, terang lebih terang).
//   0.0 = off | 0.20 = subtle | 0.35 = recommended | 0.55 = kuat
#define S_CURVE 0.35

// HIGHLIGHT_BLOOM: Simulasi HDR peak — area sangat terang "memancar".
//   0.0 = off | 0.10 = subtle | 0.20 = recommended | 0.35 = agresif
#define HIGHLIGHT_BLOOM 0.20

// SHADOW_LIFT: Angkat detail shadow agar tidak pure black (HDR black level).
//   0.0 = off | 0.03 = subtle | 0.05 = recommended | 0.10 = jelas
#define SHADOW_LIFT 0.04

// SATURATION: Boost saturasi global (di atas vibrance).
//   1.00 = normal | 1.10 = recommended | 1.20 = kuat
#define SATURATION 1.10

// ── Luma Coefficients BT.709 ───────────────────────────────────────────────
#define LUMA vec3(0.2126, 0.7152, 0.0722)

//!HOOK OUTPUT
//!BIND HOOKED
//!DESC FX_FAKE_HDR_v2: Vibrance+SCurve+Bloom+Shadow

vec4 hook() {
    vec4 col = HOOKED_tex(HOOKED_pos);
    vec3 c   = col.rgb;

    // ── 1. SHADOW LIFT ──────────────────────────────────────────────────────
    // Angkat bayangan gelap secara smooth, simulasi HDR black level yang kaya detail.
    // Formula: c = c + lift * (1-c)^2 — hanya efektif di area gelap
    #if SHADOW_LIFT > 0.0
        c += SHADOW_LIFT * (1.0 - c) * (1.0 - c) * (1.0 - c);
    #endif

    // ── 2. S-CURVE CONTRAST ─────────────────────────────────────────────────
    // S-curve: tekan midtone, perkuat kontras gelap/terang secara natural.
    // Jauh lebih baik dari gamma karena tidak clip highlight.
    // Formula: smoothstep blend antara linear dan strong curve
    #if S_CURVE > 0.0
        vec3 sc = c * c * (3.0 - 2.0 * c);                   // smoothstep curve
        c = mix(c, sc, S_CURVE);
    #endif

    // ── 3. VIBRANCE (bukan saturation!) ─────────────────────────────────────
    // VIBRANCE cerdas: boost warna PUCAT lebih kuat, warna JENUH dilindungi.
    // Hasilnya: warna "hidup" tanpa oversaturate area yang sudah vivid.
    // Rumus adaptif: semakin jenuh warna, semakin kecil boost-nya.
    #if VIBRANCE != 0.0
        float lum     = dot(c, LUMA);
        float maxC    = max(max(c.r, c.g), c.b);
        float minC    = min(min(c.r, c.g), c.b);
        float colorSat = maxC - minC;                         // saturasi pixel ini

        // Pixel sudah jenuh (colorSat tinggi) → boost kecil
        // Pixel pucat (colorSat rendah) → boost besar
        float vibrBoost = VIBRANCE * (1.0 - colorSat);
        c = mix(vec3(lum), c, 1.0 + vibrBoost);
    #endif

    // ── 4. GLOBAL SATURATION BOOST ──────────────────────────────────────────
    #if SATURATION != 1.0
        float lum2 = dot(c, LUMA);
        c = mix(vec3(lum2), c, SATURATION);
    #endif

    // ── 5. HIGHLIGHT BLOOM ──────────────────────────────────────────────────
    // Simulasi HDR peak brightness: area sangat terang (>0.75) "memancar".
    // Smooth mask agar transisi natural, tidak ada edge artifak.
    #if HIGHLIGHT_BLOOM > 0.0
        float brightness  = dot(c, LUMA);
        float bloomMask   = smoothstep(0.72, 1.0, brightness);
        // Bloom hanya tambahkan brightness, tidak ubah hue
        c += HIGHLIGHT_BLOOM * bloomMask * c;
    #endif

    // ── 6. Clamp final ──────────────────────────────────────────────────────
    c = clamp(c, 0.0, 1.0);

    return vec4(c, col.a);
}

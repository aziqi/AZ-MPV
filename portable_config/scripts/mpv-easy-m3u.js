/**
 * @mpv-easy/m3u
 *
 * Auto-load subtitle references from local M3U/M3U8 playlists.
 *
 * Supported playlist hints:
 *   #EXTVLCOPT:sub-file=<url-or-path>
 *   #EXT-X-MEDIA:TYPE=SUBTITLES,...,URI="<url-or-path>"   (HLS-style)
 *
 * When mpv opens a playlist file, this script scans it for subtitle references
 * and remembers them. Before the next media entry is opened, the subtitles are
 * injected via `options/sub-files`, ensuring they load with the video.
 */
import { definePlugin } from "@mpv-easy/plugin";
import { addHook, createLogger, dirname, getProperty, getPropertyNative, isRemote, joinPath, readFile, registerEvent, setPropertyNative, } from "@mpv-easy/tool";
import { Playlist } from "serde-m3u";
// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export const pluginName = "@mpv-easy/m3u";
export const defaultConfig = {
    enabled: true,
    priority: 30,
};
// ---------------------------------------------------------------------------
// Logger
// ---------------------------------------------------------------------------
const log = createLogger("m3u");
// ---------------------------------------------------------------------------
// Pending state
// ---------------------------------------------------------------------------
let pendingSubFiles = null;
let pendingSource = null;
// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function isAbsolutePath(s) {
    return s.startsWith("/") || /^[a-zA-Z]:[/\\]/.test(s);
}
function resolveUrl(base, value) {
    if (isRemote(value) || isAbsolutePath(value))
        return value;
    if (isRemote(base)) {
        return base.replace(/[^/]*$/, "") + value;
    }
    return joinPath(dirname(base), value);
}
function pushUnique(list, value) {
    if (!value || list.includes(value))
        return;
    list.push(value);
}
// ---------------------------------------------------------------------------
// M3U subtitle parser
// ---------------------------------------------------------------------------
/**
 * Scan an M3U/M3U8 file for subtitle references.
 * Returns an array of resolved subtitle URLs/paths, or null if none found.
 */
function parseSubtitlesFromM3u(path) {
    if (!path || isRemote(path))
        return null;
    if (!/\.m3u8?$/i.test(path))
        return null;
    const content = readFile(path);
    if (!content) {
        log.warn(`parseSubtitlesFromM3u: cannot read ${path}`);
        return null;
    }
    const result = [];
    const playlist = Playlist.fromString(content);
    // VLC options: #EXTVLCOPT:sub-file=<path>
    for (const entry of playlist.list) {
        for (const [key, value] of entry.vlc_opt) {
            if (key === "sub-file" && value) {
                pushUnique(result, resolveUrl(path, value));
            }
        }
    }
    // HLS media entries: #EXT-X-MEDIA:TYPE=SUBTITLES,...
    for (const media of playlist.findMedia(isSubtitleMedia)) {
        const uri = Playlist.getMediaAttr(media, "URI");
        if (uri) {
            pushUnique(result, resolveUrl(path, uri));
        }
    }
    return result.length > 0 ? result : null;
}
function isSubtitleMedia(attrs) {
    return attrs.some(([k, v]) => k === "TYPE" && v.toUpperCase() === "SUBTITLES");
}
// ---------------------------------------------------------------------------
// Apply pending subtitles
// ---------------------------------------------------------------------------
function applyPendingSubtitles() {
    if (!pendingSubFiles || pendingSubFiles.length === 0)
        return;
    const existing = getPropertyNative("options/sub-files", []);
    if (!Array.isArray(existing))
        return;
    for (const sub of pendingSubFiles) {
        pushUnique(existing, sub);
    }
    setPropertyNative("options/sub-files", existing);
    log.info(`applied ${pendingSubFiles.length} subtitle(s) from ${pendingSource} to ${getProperty("path")}`);
    pendingSubFiles = null;
    pendingSource = null;
}
// ---------------------------------------------------------------------------
// mpv hooks & events
// ---------------------------------------------------------------------------
export function m3u(config) {
    if (!config.enabled)
        return;
    addHook("on_load", config.priority, () => {
        const path = getProperty("path");
        if (!path)
            return;
        // Check if this is a playlist file with subtitle hints
        const subtitles = parseSubtitlesFromM3u(path);
        if (subtitles) {
            pendingSubFiles = subtitles;
            pendingSource = path;
            log.info(`remembered ${subtitles.length} subtitle(s) from playlist ${path}`);
            return;
        }
        // Not a playlist — apply any pending subtitles to the upcoming media entry
        applyPendingSubtitles();
    });
    registerEvent("file-loaded", () => {
        const tracks = getPropertyNative("track-list", []);
        const count = tracks.filter((t) => t.type === "sub").length;
        if (count > 0) {
            log.debug(`subtitle tracks available: ${count}`);
        }
    });
}
// ---------------------------------------------------------------------------
// Plugin entry
// ---------------------------------------------------------------------------
export default definePlugin((context) => ({
    name: pluginName,
    defaultConfig,
    create: () => {
        m3u(context[pluginName]);
    },
    destroy: () => {
        pendingSubFiles = null;
        pendingSource = null;
    },
}));

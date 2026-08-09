@echo off
:: MPV Launcher - always open on the main monitor
:: Created by Antigravity to fix multi-monitor window position issue
cd /d "%~dp0"
if "%~1"=="" (
    start "" mpv.exe --geometry=1280x720+200+100
) else (
    start "" mpv.exe --geometry=1280x720+200+100 %*
)

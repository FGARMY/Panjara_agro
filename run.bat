@echo off
title Panjara Agro - Website Launcher
color 0A
echo.
echo  ╔══════════════════════════════════════════╗
echo  ║   PANJARA AGRO - Premium Indian Spices   ║
echo  ║   One-Click Website Launcher              ║
echo  ╚══════════════════════════════════════════╝
echo.

cd /d "%~dp0"

:: Check if node_modules exists, install if not
if not exist "node_modules\" (
    echo  [1/3] Installing dependencies...
    call npm install
    echo.
) else (
    echo  [1/3] Dependencies already installed ✓
)

echo  [2/3] Starting development server...
echo.
echo  Website will open at: http://localhost:5173
echo  Press Ctrl+C to stop the server.
echo.

:: Wait 2 seconds then open browser
start "" /b cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:5173"

:: Start dev server (this blocks until stopped)
call npm run dev

pause

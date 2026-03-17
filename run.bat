@echo off
title Panjara Agro - Full-Stack Launcher
color 0A
echo.
echo  ==============================================================
echo  ===   PANJARA AGRO - Premium Indian Agro Exports         ===
echo  ===   One-Click Full-Stack Launcher                      ===
echo  ==============================================================
echo.

cd /d "%~dp0"

:: 1. Check and Install Dependencies
echo  [1/3] Verifying dependencies...
if not exist "node_modules\" call npm install
if not exist "frontend\node_modules\" (
    cd frontend && call npm install && cd ..
)
if not exist "backend\node_modules\" (
    cd backend && call npm install && cd ..
)

echo.
echo  [2/3] Starting Development Servers...
echo  ==============================================================
echo  === Frontend: http://localhost:5173                       ===
echo  === Backend:  http://localhost:3001                       ===
echo  ==============================================================
echo.

:: 2. Wait and Open Browser
:: We use a slightly longer timeout (5s) to ensure Vite is ready
start "" /b cmd /c "timeout /t 5 /nobreak >nul && start http://localhost:5173"

:: 3. Start concurrent dev servers
echo  [3/3] Launching Monorepo...
call npm run dev

pause

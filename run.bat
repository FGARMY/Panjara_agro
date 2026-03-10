@echo off
title Panjara Agro - Dev Server
echo.
echo  ========================================
echo    PANJARA AGRO - Starting Dev Server
echo  ========================================
echo.
cd /d "%~dp0"
call npm install 2>nul
echo.
echo  Opening browser...
start "" http://localhost:5173
call npm run dev
pause

@echo off
title InAmigos Premium WebApp Server
color 0B

echo ===================================================
echo     STARTING INAMIGOS FOUNDATION PREMIUM WEBAPP
echo ===================================================
echo.
echo Launching your local development server...
echo.

:: Open the browser
start http://localhost:5173/

:: Start the Vite dev server
call npm run dev

pause

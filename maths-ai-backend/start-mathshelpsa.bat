@echo off
title MathsHelpSA AI Startup

echo =====================================
echo       MathsHelpSA AI Startup
echo =====================================

echo.
echo Starting Ollama...
start "MathsHelpSA Ollama" cmd /k "ollama serve"

timeout /t 5 /nobreak >nul

echo.
echo Starting Node.js Backend...
start "MathsHelpSA Backend" cmd /k "cd /d %USERPROFILE%\OneDrive\Desktop\MATHSHELPSA\MathsHelpSA\maths-ai-backend && npm.cmd start"

timeout /t 5 /nobreak >nul

echo.
echo Starting Cloudflare Tunnel...
start "MathsHelpSA Cloudflare" cmd /k "cloudflared tunnel --protocol http2 --url http://localhost:3000"

echo.
echo MathsHelpSA startup commands launched!
pause
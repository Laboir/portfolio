@echo off
echo.
echo ============================================
echo   Pankaj Portfolio - GitHub Push Script
echo ============================================
echo.

:: Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed!
    echo Please install Git from: https://git-scm.com/downloads
    pause
    exit /b
)

echo [1/6] Initializing git...
git init

echo.
echo [2/6] Adding all files...
git add .

echo.
echo [3/6] Creating commit...
git commit -m "first commit"

echo.
echo [4/6] Setting main branch...
git branch -M main

echo.
echo [5/6] Adding GitHub remote...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/Laboir/Portflio.git

echo.
echo [6/6] Pushing to GitHub...
git push -u origin main --force

echo.
echo ============================================
echo   DONE! Code uploaded to GitHub successfully!
echo   Visit: https://github.com/Laboir/Portflio
echo ============================================
echo.
pause

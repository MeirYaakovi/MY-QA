@echo off
cd /d "%~dp0"
git add --renormalize .
git add -A
set /p msg="Commit message (or press Enter for 'update'): "
if "%msg%"=="" set msg=update
git commit -m "%msg%"
git push
echo.
echo Done!
pause

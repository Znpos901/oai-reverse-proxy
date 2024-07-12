@echo off
pushd %~dp0
set NODE_ENV=dev
call npm install --no-audit --no-fund --quiet
call npm install --save-dev @swc/core @swc/cli @swc/register
node start.js
pause
popd
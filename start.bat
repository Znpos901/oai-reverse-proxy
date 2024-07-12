@echo off
pushd %~dp0
call npm install --no-audit --no-fund --quiet
call npm install --save-dev @swc/core @swc/cli @swc-node/register
node start.js
pause
popd

const { spawn } = require('child_process');
const process = require('process');

try {
  const child = spawn('node', [
    '-r', '@swc-node/register',
    'src/server.ts'
  ], {
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'development' }
  });

  child.on('exit', (code) => {
    process.exit(code);
  });

  process.on('SIGINT', () => {
    child.kill('SIGINT');
  });
} catch (error) {
  console.error('启动失败:', error);
  process.exit(1);
}

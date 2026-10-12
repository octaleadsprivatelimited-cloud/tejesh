const { spawnSync } = require('node:child_process');
process.env.NODE_ENV = 'production';
require('react-scripts/config/env');
const env = { ...process.env };
if (env.VERCEL_ENV && env.VERCEL_ENV !== 'production') env.REACT_APP_NOINDEX = 'true';
const result = spawnSync(process.execPath, [require.resolve('react-scripts/scripts/build')], { stdio: 'inherit', env });
if (result.status !== 0) process.exit(result.status || 1);
Object.assign(process.env, env);
require('./prerender.cjs');

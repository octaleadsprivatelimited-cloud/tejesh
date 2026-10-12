const express = require('express');
const helmet = require('helmet');
const path = require('node:path');
const fs = require('node:fs');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config();

const app = express();
const buildPath = path.join(__dirname, 'build');
const config = require('./vercel.json');
app.disable('x-powered-by');
app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
app.use(express.json({ limit: '16kb' }));
app.use((req, res, next) => {
  if (process.env.REACT_APP_NOINDEX === 'true' || (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production')) res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  next();
});
for (const redirect of config.redirects.filter(rule => !rule.has)) {
  app.get(redirect.source, (req, res) => res.redirect(308, redirect.destination));
}
for (const endpoint of ['services', 'testimonials', 'portfolio', 'contact']) {
  app.all(`/api/${endpoint}`, require(`./api/${endpoint}`));
}
app.use('/api', (req, res) => res.status(404).json({ message: 'Endpoint not found' }));
app.use(express.static(buildPath, { redirect: false, extensions: ['html'], setHeaders(res, file) {
  if (file.endsWith('.html')) res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  else if (file.includes(`${path.sep}static${path.sep}`)) res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  else res.setHeader('Cache-Control', 'public, max-age=86400');
} }));
app.get('*', (req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex');
  if (path.extname(req.path)) return res.status(404).send('Not found');
  return res.status(404).sendFile(path.join(buildPath, '404.html'));
});
app.use((err, req, res, next) => {
  if (err.type === 'entity.too.large') return res.status(413).json({ success: false, message: 'Enquiry is too large' });
  if (err.type === 'entity.parse.failed') return res.status(400).json({ success: false, message: 'Invalid JSON' });
  console.error('Local request failed');
  return res.status(500).json({ success: false, message: 'Request failed' });
});
if (require.main === module) {
  if (!fs.existsSync(path.join(buildPath, 'index.html'))) throw new Error('Run npm run build before npm run serve');
  const port = process.env.PORT || 3000;
  app.listen(port, '127.0.0.1', () => console.log(`Tejesh Profine is running at http://localhost:${port}`));
}
module.exports = app;

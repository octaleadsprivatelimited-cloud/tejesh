const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');

async function main() {
  const catalog = {};
  let before = 0, after = 0;
  async function walk(directory) {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      if (['optimized', 'icons'].includes(entry.name)) continue;
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) { await walk(file); continue; }
      if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;
      const relative = path.relative('public', file).split(path.sep).join('/');
      const output = path.join('public/optimized', `${relative}.webp`);
      await fs.mkdir(path.dirname(output), { recursive: true });
      const info = await sharp(file).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 78 }).toFile(output);
      const variants = [];
      for (const width of [480, 960].filter(width => width < info.width)) {
        await sharp(file).rotate().resize({ width }).webp({ quality: 78 }).toFile(output.replace(/\.webp$/, `-${width}.webp`));
        variants.push(`${encodeURI(`/optimized/${relative}-${width}.webp`)} ${width}w`);
      }
      variants.push(`${encodeURI(`/optimized/${relative}.webp`)} ${info.width}w`);
      catalog[`/${relative}`] = { src: `/optimized/${relative}.webp`, width: info.width, height: info.height, srcSet: variants.join(', ') };
      before += (await fs.stat(file)).size;
      after += info.size;
    }
  }
  await walk('public');
  await fs.mkdir('public/icons', { recursive: true });
  for (const size of [32, 180, 192, 512]) await sharp('public/tp-logo.png').resize(size, size, { fit: 'contain', background: '#f2eee5' }).png().toFile(`public/icons/icon-${size}.png`);
  await fs.writeFile('src/data/images.json', `${JSON.stringify(catalog, null, 2)}\n`);
  console.log(`Optimized ${Object.keys(catalog).length} images: ${(before/1024).toFixed(0)} KB → ${(after/1024).toFixed(0)} KB`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });

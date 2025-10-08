import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import routes from './src/routes.js'; // Ensure routes.js uses `export default [...]`

function extractPaths(routesArray, basePath = '') {
  let paths = [];
  routesArray.forEach(route => {
    const fullPath = path.join(basePath, route.path || '');
    if (route.path) paths.push(fullPath.replace(/\\/g, '/'));
    if (route.children) {
      paths = paths.concat(extractPaths(route.children, fullPath));
    }
  });
  return paths;
}

const allPaths = extractPaths(routes);

// Convert array to readable stream
const links = allPaths.map(url => ({ url, changefreq: 'monthly', priority: url === '/' ? 1.0 : 0.8 }));
const stream = new SitemapStream({ hostname: 'https://humancaretrainambulance.com' });

const xmlStream = Readable.from(links).pipe(stream);

streamToPromise(xmlStream)
  .then(data => {
    fs.writeFileSync('./public/sitemap.xml', data.toString());
    console.log('✅ Sitemap generated at ./public/sitemap.xml');
  })
  .catch(err => {
    console.error('❌ Sitemap generation failed:', err);
  });

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://humancaretrainambulance.com';
const today = new Date().toISOString().split('T')[0];

// Routes / patterns that should NOT be indexed in sitemap
const EXCLUDE_PATHS = new Set([
  '*',
  '/aboutsection',
  '/trainambulancesection',
  '/whychooseus',
  '/testimonialssection',
  '/contactsection',
  '/videoplayer',
  '/herobanner',
  '/paymentpage',
  '/success',
  '/failure',
]);

// Determine priority & changefreq based on route type
function getRouteConfig(routePath) {
  const p = routePath.toLowerCase();

  if (p === '/' || p === '') {
    return { priority: '1.0', changefreq: 'daily' };
  }
  if (p === '/trainambulance') {
    return { priority: '0.9', changefreq: 'weekly' };
  }
  if (p.startsWith('/train-ambulance-services-in-')) {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  if (['/about', '/contact', '/blogs', '/testimonial'].includes(p)) {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  if (
    [
      '/train-ambulance-services',
      '/rail-ambulance-services',
      '/train-ambulance-cost',
      '/pan-india',
    ].includes(p)
  ) {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  if (['/termsandconditions', '/privacypolicy'].includes(p)) {
    return { priority: '0.3', changefreq: 'yearly' };
  }
  // Default for blog articles & other content
  return { priority: '0.7', changefreq: 'monthly' };
}

// Extract routes dynamically from src/App.jsx
function extractRoutesFromApp() {
  const appPath = path.join(__dirname, 'src', 'App.jsx');
  if (!fs.existsSync(appPath)) {
    console.warn('⚠️ src/App.jsx not found, using default routes.');
    return [];
  }

  const content = fs.readFileSync(appPath, 'utf-8');
  const routeRegex = /<Route\s+[^>]*path=["']([^"']+)["']/g;
  const foundRoutes = [];
  let match;

  while ((match = routeRegex.exec(content)) !== null) {
    const rawPath = match[1].trim();
    const lowerPath = rawPath.toLowerCase();

    if (EXCLUDE_PATHS.has(lowerPath) || rawPath === '*') {
      continue;
    }

    // Normalize canonical path: lowercase, ensure leading slash
    const canonicalPath = lowerPath.startsWith('/') ? lowerPath : `/${lowerPath}`;

    if (!foundRoutes.includes(canonicalPath)) {
      foundRoutes.push(canonicalPath);
    }
  }

  return foundRoutes;
}

function generate() {
  console.log('🔄 Generating sitemap.xml...');

  // Fallback / baseline routes
  const baselineRoutes = [
    '/',
    '/about',
    '/trainambulance',
    '/contact',
    '/testimonial',
    '/blogs',
    '/termsandconditions',
    '/privacypolicy',
    '/train-ambulance-services-in-varanasi',
    '/train-ambulance-services-in-mumbai',
    '/train-ambulance-services-in-kolkata',
    '/train-ambulance-services-in-chennai',
    '/train-ambulance-services-in-delhi',
    '/train-ambulance-services-in-bengaluru',
    '/train-ambulance-services-in-hyderabad',
    '/train-ambulance-services',
    '/rail-ambulance-services',
    '/train-ambulance-cost',
    '/pan-india',
    '/what-makes-humancare-the-best-rail-ambulance-service-in-india',
    '/train-ambulance-charges-vs-air-ambulance-cost',
    '/irctc-train-ambulance-booking-guide',
    '/inside-a-train-ambulance',
    '/train-ambulance-service-in-varanasi',
    '/train-ambulance-from-kolkata-to-vellore',
    '/train-ambulance-service-in-india',
    '/what-is-train-ambulance',
    '/train-ambulance-process',
    '/train-ambulance-eligibility',
    '/train-ambulance-safety',
  ];

  const appRoutes = extractRoutesFromApp();
  const allRoutesSet = new Set([...baselineRoutes, ...appRoutes]);

  // Sort with root "/" first, then alphabetically
  const sortedRoutes = Array.from(allRoutesSet).sort((a, b) => {
    if (a === '/') return -1;
    if (b === '/') return 1;
    return a.localeCompare(b);
  });

  const urlEntries = sortedRoutes.map((routePath) => {
    const { priority, changefreq } = getRouteConfig(routePath);
    const loc = routePath === '/' ? `${BASE_URL}/` : `${BASE_URL}${routePath}`;

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join('\n')}
</urlset>
`;

  // Write to public/sitemap.xml
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(publicSitemapPath, xml, 'utf-8');
  console.log(`✅ Generated ${publicSitemapPath} with ${sortedRoutes.length} URLs (lastmod: ${today})`);

  // If dist/ exists, also write directly to dist/sitemap.xml
  const distDir = path.join(__dirname, 'dist');
  if (fs.existsSync(distDir)) {
    const distSitemapPath = path.join(distDir, 'sitemap.xml');
    fs.writeFileSync(distSitemapPath, xml, 'utf-8');
    console.log(`✅ Updated ${distSitemapPath}`);
  }

  // Also update src/routes.js as a clean ES module export
  const routesJsPath = path.join(__dirname, 'src', 'routes.js');
  const routesJsContent = `// Auto-generated routes list
export default ${JSON.stringify(
    sortedRoutes.map((p) => ({ path: p, ...getRouteConfig(p) })),
    null,
    2
  )};
`;
  fs.writeFileSync(routesJsPath, routesJsContent, 'utf-8');
  console.log(`✅ Updated ${routesJsPath}`);
}

generate();

// PG Portfolio Service Worker — v1
const CACHE = 'pg-portfolio-v3';
const LOCAL_ASSETS = [
  './',
  './index.html',
  './support.js',
  './app.js',
  './manifest.json',
  './utils/ContentVariables.js',
  './utils/GalleryContents.js',
  './translations/ui/en.js',
  './translations/ui/id.js',
  './translations/ui/ja.js',
  './translations/portfolio/en.js',
  './translations/portfolio/id.js',
  './translations/portfolio/ja.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => {
      // Precache local assets; CDN assets and images are cached on first network hit
      return c.addAll(LOCAL_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Skip non-GET and cross-origin chrome-extension requests
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200 || res.type === 'opaque') return res;
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => cached || new Response('Offline', { status: 503 }));
    })
  );
});

const CACHE_NAME = 'v3_cache';
const ASSETS = [
  'o_clock1.4.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// Установка воркера и кэширование ресурсов
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Перехват запросов для работы офлайн
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});

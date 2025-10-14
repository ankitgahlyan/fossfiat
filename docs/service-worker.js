self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.open('fossfiat-cache').then(cache => {
      return cache.match(event.request).then(response => {
        return response || fetch(event.request).then(networkResponse => {
          try {
            const reqUrl = new URL(event.request.url);
            if (reqUrl.origin === self.location.origin) {
              cache.put(event.request, networkResponse.clone());
            }
          } catch (e) {
            // ignore URL parse errors
          }
          return networkResponse;
        }).catch(() => response);
      });
    })
  );
});

// Kill-switch service worker — shared by all three hyoonqt.my.id origins
// (this file is served as /sw.js on each). The old Jekyll (Chirpy PWA) site
// registered a worker at root scope, so returning visitors' browsers still
// run it and see stale content. This file intentionally differs byte-wise
// from that worker, so the browser installs it as an update on next visit;
// it then clears every cache, unregisters itself, and reloads open tabs.
// No page on this site ever registers a worker, so after this runs once,
// the origin stays worker-free. Keep this file until old clients age out,
// then it can be deleted.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Delete every CacheStorage bucket the old worker created.
      if (self.caches) {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      }
      // Claim clients so this worker takes over immediately.
      await self.clients.claim();
      // Unregister: after this there is no worker at all.
      await self.registration.unregister();
      // Force open tabs to reload from network (fresh HTML).
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});

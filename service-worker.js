const CACHE_NAME = "milind-site-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/about.html",
  "/contact.html",
  "/links.html",
  "/music.html",
  "/style.css",
  "/script.js",
  "/track1.jpg",
  "/track2.jpg",
  "/track3.jpg",
  "/track4.jpg"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

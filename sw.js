const CACHE_NAME = 'casetest-nhi-pwa-v1.5';
const urlsToCache = [
  "./", 
  "./index.html", 
  "./manifest.json", 
  "./sw.js", 
  "./3D_CASE CO GIẬT.html",
  "./3D_CASE HC NÔN TRỚ Ở TRẺ.html",
  "./3D_CASE HEN PHẾ QUẢN Ở TRẺ.html",
  "./3D_CASE HỘI CHỨNG THẬN THƯ TIÊN PHÁT.html",
  "./3D_CASE HỘI CHỨNG XUẤT HUYẾT.html",
  "./3D_CASE NHIỄM TRÙNG ĐƯỜNG TIỂU Ở TRẺ EM.html",
  "./3D_CASE SUY DINH DƯỠNG.html",
  "./3D_CASE SUY GIÁP TRẠNG BẨM SINH.html",
  "./3D_CASE SUY HÔ CẤP CẤP TRẺ EM.html",
  "./3D_CASE SỐC Ở TRẺ.html",
  "./3D_CASE THIẾU MÁU HUYẾT TÁN Ở TRẺ EM.html",
  "./3D_CASE TIM BẨM SINH.html",
  "./3D_CASE TIÊU CHẢY CẤP.html",
  "./3D_CASE TIÊU CHẢY KÉO DÀI.html",
  "./3D_CASE TIẾP CẬN TRẺ BỆNH NẶNG.html",
  "./3D_CASE TĂNG SẢN THƯỢNG THẬN BẨM SINH.html",
  "./3D_CASE VIÊM CẦU THẬN CẤP.html",
  "./3D_CASE VIÊM MÀNG NÃO.html",
  "./3D_CASE VIÊM NÃO Ở TRẺ.html",
  "./3D_CASE VIÊM PHẾ QUẢN PHỔI.html",
  "./3D_CASE VIÊM TIỂU PHẾ QUẢN.html",
  "./3D_CASE VÀNG DA SƠ SINH.html",
  "./3D_CASE XUẤT HUYẾT NỘI SỌ.html"
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) return caches.delete(cacheName);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

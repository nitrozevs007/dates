self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pwa-cache").then((cache) => {
      return cache.addAll(["/", "/index.html", "/styles.css", "/app.js"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

let deferredPrompt;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
});



window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  
  // Modal oynani ko'rsatish
  document.getElementById("installModal").style.display = "block";
});

// O‘rnatish tugmasi bosilganda
document.getElementById("installBtn").addEventListener("click", () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null;
    });
  }
  document.getElementById("installModal").style.display = "none";
});

// Modalni yopish
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("installModal").style.display = "none";
});


if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log("PWA rejimida ishga tushdi");
} else {
  console.log("Brauzer rejimida ishlayapti");
}

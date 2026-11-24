/**
 * Konfigurasi Global Pemilihan Ketua OSIS SMP Negeri 3 Jayapura 2026/2027
 */
const APP_CONFIG = {
  GAS_URL: 'https://script.google.com/macros/s/AKfycbwjdw7tNiJUnycwcYiBzoeXm6VPnn6FKMsEngEbTZ7eDr823L1t7CHq-lROnLMjTUNV/exec',
  TITLE: 'Pemilihan Ketua OSIS SMP Negeri 3 Jayapura Periode 2026/2027',
  LOGO_LEFT: 'https://i.imgur.com/6ym4GnU.png',
  LOGO_RIGHT: 'https://i.imgur.com/fpeCGav.png',
  CANDIDATES: [
    {
      no: 1,
      name: 'THEOFILUS IBO',
      photo: 'https://i.imgur.com/0W1ONL1.jpeg',
      color: '#13388F'
    },
    {
      no: 2,
      name: 'JHOSUA AYAWAILA',
      photo: 'https://i.imgur.com/J7GR7wB.jpeg',
      color: '#D62828'
    },
    {
      no: 3,
      name: 'SHINTA MOFUN',
      photo: 'https://i.imgur.com/8fp4sQr.jpeg',
      color: '#0077B6'
    },
    {
      no: 4,
      name: 'YULCE WENDA',
      photo: 'https://i.imgur.com/d73yab9.jpeg',
      color: '#2A9D8F'
    },
    {
      no: 5,
      name: 'ASYERA SINANU',
      photo: 'https://i.imgur.com/50w19hA.jpeg',
      color: '#E76F51'
    },
    {
      no: 6,
      name: 'M. BAYU',
      photo: 'https://i.imgur.com/zSiHtFx.jpeg',
      color: '#6A4C93'
    },
    {
      no: 7,
      name: 'SHIDQIYA NURSAMI',
      photo: 'https://i.imgur.com/3XlyDUy.jpeg',
      color: '#F4A261'
    }
  ]
};

// Preload semua gambar ke cache browser agar transisi antar halaman instan tanpa kedip
function preloadAssets() {
  const urls = [
    APP_CONFIG.LOGO_LEFT,
    APP_CONFIG.LOGO_RIGHT,
    ...APP_CONFIG.CANDIDATES.map(c => c.photo)
  ];
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

// Navigasi smooth dengan efek fade-out sebelum pindah halaman HTML
function smoothNavigate(targetUrl) {
  document.body.classList.add('page-exit');
  setTimeout(() => {
    window.location.href = targetUrl;
  }, 180);
}

window.addEventListener('DOMContentLoaded', () => {
  preloadAssets();
  requestAnimationFrame(() => {
    document.body.classList.add('page-loaded');
  });
});

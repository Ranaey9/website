// Sayfa tamamen yüklenince çalışacak
document.addEventListener("DOMContentLoaded", function() {
      
    // Bütün resim kutularını seç
    const resimler = document.querySelectorAll('.resim-box img');
  
    // Her resme tıklanınca büyütme efekti ekle
    resimler.forEach(function(resim) {
        resim.addEventListener('click', function() {
            // Eğer zaten büyümüşse eski haline döndür
            if (resim.classList.contains('buyuk')) {
                resim.classList.remove('buyuk');
            } else {
                // Diğer tüm resimlerde büyütmeyi kaldır
                resimler.forEach(function(r) { r.classList.remove('buyuk'); });
                // Sadece tıklanan resmi büyüt
                resim.classList.add('buyuk');
            }
        });
    });
  });
  
resimler.forEach(function(resim) {
    resim.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert("Resimleri koruyoruz");
    });
});

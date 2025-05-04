document.addEventListener("DOMContentLoaded", function() {
    
    // Hoş geldin mesajı
    alert("Ünlü Resimler sayfasına hoş geldin!");
      const resimler = document.querySelectorAll('.resim-box img');
  
    resimler.forEach(function(resim) {
        resim.addEventListener('click', function() {
            // Eğer zaten büyümüşse eski haline döndür
            if (resim.classList.contains('buyuk')) {
                resim.classList.remove('buyuk');
            } else {
                resimler.forEach(function(r) { r.classList.remove('buyuk'); });
                // Sadece tıklanan resmi büyüt
                resim.classList.add('buyuk');
            }
        });
    });
  });
  
// Arama kutusuyla resim filtreleme
resimler.forEach(function(resim) {
    resim.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert("Resimleri koruyoruz! 📷");
    });
});

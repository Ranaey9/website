
/// projr için
function project() {
  const htmlProgress = document.querySelector('.html');
  const cssProgress = document.querySelector('.css');
  const jsProgress = document.querySelector('.js');
  htmlProgress.style.width = '90%';
  cssProgress.style.width = '85%';
  jsProgress.style.width = '70%';
}

// telefon için
function telefonGoster() {
  alert("Telefon Numaram: 123 456 789");
}
document.getElementById("telefon-link").addEventListener("click", telefonGoster);

// uyarı msj
document.addEventListener('DOMContentLoaded', function() {
  const footer = document.getElementById('footerClick');

  footer.addEventListener('click', function() {
      window.alert('HATA: Bu alana tıklanamaz!');
  });
});
// yazdırmak için
<button onclick="window.print()">yazdır</button>


  

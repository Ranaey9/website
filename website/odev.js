 //hızlı geçiş
 requestAnimationFrame(() => {
  var divs = document.querySelectorAll(".progress");
  divs.forEach(div => {
    div.style.width = div.getAttribute("data-skill");
  });
});

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

//
//Eğer projede içerik olarak yükleniyorsa
document.getElementById("loadContentBtn").addEventListener("click", function() {
  const contentDiv = document.getElementById("content");

  const newContent = document.createElement("div");
  newContent.innerHTML = "<p>This is new dynamic content!</p>";
  contentDiv.appendChild(newContent);
});
// 

function showSection(id) {
  const sections = document.querySelectorAll(".card");
  sections.forEach(section => {
    section.classList.remove("active");
  });

  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.add("active");
  }
}

//


function toggleNav() {
  const navLinks = document.querySelector(".nav-links");
  const hamburgerBtn = document.querySelector(".hamburger-btn");

  hamburgerBtn.classList.toggle("active");

  // Smoothly rotate the bars:
  for (let i = 0; i < hamburgerBtn.children.length; i++) {
    hamburgerBtn.children[i].style.transform = `rotate(${
      hamburgerBtn.classList.contains("active") ? "20deg" : "0deg"
    })`;
  }

  navLinks.classList.toggle("show");
}
/* JavaScript to set the width dynamically based on the percentage */
document.addEventListener('DOMContentLoaded', function () {
  var abilities = document.querySelectorAll('.ability-percent');
  abilities.forEach(function (ability) {
    var percentage = ability.getAttribute('data-percentage');
    ability.style.width = percentage + '%';
  });
});
<script src="/* ================= SCRIPT.JS ================= */

// Wait until page fully loads
window.addEventListener("DOMContentLoaded", () => {

  /* ===== Theme Toggle ===== */
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }

  /* ===== Photo Slider ===== */
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlides() {
    slides.forEach(s => s.classList.remove("active"));
    if (slides.length > 0) {
      slides[index].classList.add("active");
      index = (index + 1) % slides.length;
    }
  }

  if (slides.length > 0) {
    showSlides();
    setInterval(showSlides, 3000);
  }

  /* ===== Floating Hearts Animation ===== */
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }

  setInterval(createHeart, 800);

});

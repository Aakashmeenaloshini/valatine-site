const toggle = document.getElementById("themeToggle"); toggle.onclick = () => document.body.classList.toggle("dark");

// slideshow let slides = document.querySelectorAll(".slide"); let index = 0;

setInterval(() => { slides[index].classList.remove("active"); index = (index + 1) % slides.length; slides[index].classList.add("active"); }, 3000);

// floating hearts setInterval(() => { const heart = document.createElement("div"); heart.innerHTML = "❤️"; heart.style.position = "fixed"; heart.style.left = Math.random()*100 + "vw"; heart.style.bottom = "0"; heart.style.fontSize = "20px"; heart.style.animation = "floatUp 4s linear"; document.body.appendChild(heart); setTimeout(()=>heart.remove(),4000); },800);

const style = document.createElement('style'); style.innerHTML =  @keyframes floatUp { from {transform: translateY(0); opacity:1} to {transform: translateY(-100vh); opacity:0} }; document.head.appendChild(style); 
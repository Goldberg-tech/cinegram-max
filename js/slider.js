document.addEventListener("DOMContentLoaded", () => {
  const heroEl = document.getElementById("hero");
  const dotsEl = document.getElementById("heroDots");
  if (!heroEl || !movies.hero) return;

  let current = 0;
  let timer   = null;

  /* Рендер слайдов */
  movies.hero.forEach((movie, i) => {
    const slide = document.createElement("div");
    slide.className = "hero-slide" + (i === 0 ? " active" : "");

    slide.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" loading="${i === 0 ? 'eager' : 'lazy'}">
      <div class="hero-info">
        <div class="hero-badge">${movie.genre}</div>
        <div class="hero-title">${movie.title}</div>
        <div class="hero-meta">${movie.year}</div>
        <div class="hero-desc">${movie.desc}</div>
        <button class="hero-btn" onclick="window.location.href='${playerLink}'">Смотреть</button>
      </div>
    `;

    // Fallback для hero-постера
    const img = slide.querySelector("img");
    img.onerror = () => {
      img.style.display = "none";
      slide.style.background = "linear-gradient(135deg, #0d1420, #1a3a6b)";
    };

    heroEl.appendChild(slide);
  });

  /* Рендер точек */
  movies.hero.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "hero-dot" + (i === 0 ? " active" : "");
    dot.onclick = () => goTo(i);
    dotsEl.appendChild(dot);
  });

  function goTo(idx) {
    const slides = heroEl.querySelectorAll(".hero-slide");
    const dots   = dotsEl.querySelectorAll(".hero-dot");
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function next() { goTo(current + 1); }

  function startTimer() { timer = setInterval(next, 5000); }
  function stopTimer()  { clearInterval(timer); }

  startTimer();

  // Пауза при касании
  heroEl.addEventListener("touchstart", stopTimer,  { passive: true });
  heroEl.addEventListener("touchend",   startTimer, { passive: true });
});

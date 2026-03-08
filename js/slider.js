document.addEventListener("DOMContentLoaded", () => {
  const heroEl = document.getElementById("hero");
  const dotsEl = document.getElementById("heroDots");
  if (!heroEl || !movies.hero) return;

  let current   = 0;
  let timer     = null;
  let startX    = 0;
  let startY    = 0;
  let isDragging = false;

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
  function prev() { goTo(current - 1); }

  function startTimer() { timer = setInterval(next, 5000); }
  function stopTimer()  { clearInterval(timer); }

  startTimer();

  /* ============================================================
     СВАЙП — определяем направление по дельте X vs Y
     Если горизонтальный свайп — меняем слайд
     Если вертикальный — пропускаем (скролл страницы)
     ============================================================ */
  heroEl.addEventListener("touchstart", e => {
    startX    = e.touches[0].clientX;
    startY    = e.touches[0].clientY;
    isDragging = true;
    stopTimer();
  }, { passive: true });

  heroEl.addEventListener("touchend", e => {
    if (!isDragging) return;
    isDragging = false;

    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;

    // Свайп засчитываем только если горизонтальная составляющая > вертикальной
    // и минимум 40px по горизонтали
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? next() : prev();
    }

    startTimer();
  }, { passive: true });

  heroEl.addEventListener("touchcancel", () => {
    isDragging = false;
    startTimer();
  }, { passive: true });
});

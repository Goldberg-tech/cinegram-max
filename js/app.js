window.addEventListener("DOMContentLoaded", () => {

  /* ============================================================
     TELEGRAM FULLSCREEN
     ============================================================ */
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    try {
      tg.expand();
      if (typeof tg.requestFullscreen === "function") tg.requestFullscreen();
    } catch(e) {}

    const fullscreenBtn = document.getElementById("fullscreenBtn");
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener("click", () => {
        try { tg.requestFullscreen(); } catch(e) {}
      });
    }

    /* ----------------------------------------------------------
       МОДАЛ ПОДТВЕРЖДЕНИЯ ВЫХОДА
       Перехватываем BackButton Telegram и системный жест «назад»
       ---------------------------------------------------------- */
    const exitModal    = document.getElementById("exitModal");
    const exitBackdrop = document.getElementById("exitBackdrop");
    const exitCancel   = document.getElementById("exitCancel");
    const exitConfirm  = document.getElementById("exitConfirm");

    function showExitModal() {
      exitModal.classList.add("open");
    }
    function hideExitModal() {
      exitModal.classList.remove("open");
    }
    function doExit() {
      tg.close();
    }

    // Кнопка «назад» Telegram
    if (tg.BackButton) {
      tg.BackButton.show();
      tg.BackButton.onClick(() => showExitModal());
    }

    // Клик по бэкдропу — закрыть модал
    exitBackdrop.addEventListener("click", hideExitModal);
    exitCancel.addEventListener("click",   hideExitModal);
    exitConfirm.addEventListener("click",  doExit);
  }

  /* ============================================================
     РЕНДЕР РЯДОВ ПОСТЕРОВ
     ============================================================ */
  function renderRow(id, data) {
    const row = document.getElementById(id);
    if (!row || !data) return;
    data.forEach(movie => {
      const div = document.createElement("div");
      div.className = "poster";

      const wrap = document.createElement("div");
      wrap.className = "poster-img-wrap";

      const img = document.createElement("img");
      img.alt = movie.title;
      img.loading = "lazy";

      // Fallback если постер не загрузился
      img.onerror = () => {
        wrap.innerHTML = `
          <div class="poster-placeholder">${movie.title}</div>
          <div class="poster-play">▶</div>
        `;
      };
      img.src = movie.poster;

      const play = document.createElement("div");
      play.className = "poster-play";
      play.textContent = "▶";

      wrap.appendChild(img);
      wrap.appendChild(play);

      const title = document.createElement("div");
      title.className = "poster-title";
      title.textContent = movie.title;

      div.appendChild(wrap);
      div.appendChild(title);

      div.onclick = () => { window.location.href = playerLink; };
      row.appendChild(div);
    });
  }

  renderRow("popular", movies.popular);
  renderRow("series",  movies.series);
  renderRow("comedy",  movies.comedy);
  renderRow("action",  movies.action);
  renderRow("crime",   movies.crime);
  renderRow("docs",    movies.docs);

});

window.addEventListener("DOMContentLoaded", () => {

  /* ============================================================
     TELEGRAM
     ============================================================ */
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();

    try {
      tg.expand();
      if (typeof tg.requestFullscreen === "function") tg.requestFullscreen();
    } catch(e) {}

    // НЕ показываем BackButton — тогда Telegram сам показывает "✕ Закрыть"
    // что выглядит правильно и не путает пользователя со стрелкой "назад"
    if (tg.BackButton) tg.BackButton.hide();

    /* МОДАЛ ВЫХОДА */
    const exitModal    = document.getElementById("exitModal");
    const exitBackdrop = document.getElementById("exitBackdrop");
    const exitCancel   = document.getElementById("exitCancel");
    const exitConfirm  = document.getElementById("exitConfirm");

    function showExitModal() { exitModal.classList.add("open"); }
    function hideExitModal() { exitModal.classList.remove("open"); }

    exitBackdrop.addEventListener("click", hideExitModal);
    exitCancel.addEventListener("click",   hideExitModal);
    exitConfirm.addEventListener("click",  () => tg.close());

    // Перехватываем свой обработчик закрытия через событие Telegram
    tg.onEvent("viewportChanged", () => {});
  }

  /* ============================================================
     РЕНДЕР РЯДОВ ПОСТЕРОВ
     ============================================================ */
  function renderRow(id, data) {
    const row = document.getElementById(id);
    if (!row || !data) return;

    data.forEach(movie => {
      const div  = document.createElement("div");
      div.className = "poster";

      const wrap = document.createElement("div");
      wrap.className = "poster-img-wrap";

      const img = document.createElement("img");
      img.alt     = movie.title;
      img.loading = "lazy";
      img.onerror = () => {
        wrap.innerHTML = `<div class="poster-placeholder">${movie.title}</div>`;
      };
      img.src = movie.poster;

      wrap.appendChild(img);

      const title = document.createElement("div");
      title.className  = "poster-title";
      title.textContent = movie.title;

      div.appendChild(wrap);
      div.appendChild(title);

      // Клик по ЛЮБОЙ части постера → плеер
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

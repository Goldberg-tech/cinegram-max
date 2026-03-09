window.addEventListener("DOMContentLoaded", () => {
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    try {
      tg.expand();
      if (typeof tg.requestFullscreen === "function") tg.requestFullscreen();
    } catch(e) {}
    try {
      if (typeof tg.disableVerticalSwipes === "function") tg.disableVerticalSwipes();
    } catch(e) {}
    if (tg.BackButton) tg.BackButton.hide();

    const exitModal    = document.getElementById("exitModal");
    const exitBackdrop = document.getElementById("exitBackdrop");
    const exitCancel   = document.getElementById("exitCancel");
    const exitConfirm  = document.getElementById("exitConfirm");
    function showExitModal() { exitModal.classList.add("open"); }
    function hideExitModal() { exitModal.classList.remove("open"); }
    tg.onEvent("close", () => showExitModal());
    exitBackdrop.addEventListener("click", hideExitModal);
    exitCancel.addEventListener("click",   hideExitModal);
    exitConfirm.addEventListener("click",  () => tg.close());
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
      title.className   = "poster-title";
      title.textContent = movie.title;
      div.appendChild(wrap);
      div.appendChild(title);
      div.onclick = () => { window.location.href = playerLink; };
      row.appendChild(div);
    });
  }

  renderRow("popular",   movies.popular);
  renderRow("series",    movies.series);
  renderRow("comedy",    movies.comedy);
  renderRow("action",    movies.action);
  renderRow("crime",     movies.crime);
  renderRow("drama",     movies.drama);
  renderRow("thriller",  movies.thriller);
  renderRow("war",       movies.war);
  renderRow("detective", movies.detective);
  renderRow("biography", movies.biography);
  renderRow("scifi",     movies.scifi);
  renderRow("cartoon",   movies.cartoon);
  renderRow("anime",     movies.anime);
});

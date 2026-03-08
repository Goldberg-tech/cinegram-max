const playerLink = "player.html";

// Постеры берутся с Кинопоиска по ID из URL фильма:
// https://www.kinopoisk.ru/film/XXXXXX/ → ID = XXXXXX
// Постер: https://st.kp.yandex.net/images/film_big/XXXXXX.jpg

const movies = {
  hero: [
    { title: "Джентльмены", year: "2019", genre: "Криминал · Комедия", desc: "Британский наркобарон решает продать свой бизнес — и запускает цепочку хаоса, шантажа и предательств.", poster: "https://st.kp.yandex.net/images/film_big/1143242.jpg" },
    { title: "Т-34", year: "2018", genre: "Боевик · Война", desc: "1944 год. Лейтенант Ивушкин и его экипаж совершают дерзкий побег из немецкого плена на легендарном танке.", poster: "https://st.kp.yandex.net/images/film_big/1041611.jpg" },
    { title: "Майор Гром: Чумной Доктор", year: "2021", genre: "Боевик · Супергерои", desc: "Петербургский детектив Игорь Гром выходит на след таинственного мстителя в маске чумного доктора.", poster: "https://st.kp.yandex.net/images/film_big/1108577.jpg" },
    { title: "Холоп", year: "2019", genre: "Комедия", desc: "Избалованного мажора помещают в симуляцию крепостной России XVIII века — без смартфона и привилегий.", poster: "https://st.kp.yandex.net/images/film_big/1220082.jpg" },
  ],

  popular: [
    { title: "Джентльмены",        poster: "https://st.kp.yandex.net/images/film_big/1143242.jpg" },
    { title: "Т-34",               poster: "https://st.kp.yandex.net/images/film_big/1041611.jpg" },
    { title: "Майор Гром",         poster: "https://st.kp.yandex.net/images/film_big/1108577.jpg" },
    { title: "Холоп",              poster: "https://st.kp.yandex.net/images/film_big/1220082.jpg" },
    { title: "Текст",              poster: "https://st.kp.yandex.net/images/film_big/1143219.jpg" },
    { title: "Бык",                poster: "https://st.kp.yandex.net/images/film_big/1220379.jpg" },
    { title: "Горько!",            poster: "https://st.kp.yandex.net/images/film_big/786861.jpg" },
    { title: "Легенда №17",        poster: "https://st.kp.yandex.net/images/film_big/714888.jpg" },
  ],

  series: [
    { title: "Триггер",            poster: "https://st.kp.yandex.net/images/film_big/1322324.jpg" },
    { title: "Метод",              poster: "https://st.kp.yandex.net/images/film_big/838050.jpg" },
    { title: "Кухня",              poster: "https://st.kp.yandex.net/images/film_big/689066.jpg" },
    { title: "Молодёжка",          poster: "https://st.kp.yandex.net/images/film_big/799299.jpg" },
    { title: "Слово пацана",       poster: "https://st.kp.yandex.net/images/film_big/5068033.jpg" },
    { title: "Игра в кальмара",    poster: "https://st.kp.yandex.net/images/film_big/1804402.jpg" },
    { title: "Чернобыль",          poster: "https://st.kp.yandex.net/images/film_big/1227803.jpg" },
    { title: "Шерлок",             poster: "https://st.kp.yandex.net/images/film_big/404900.jpg" },
  ],

  comedy: [
    { title: "Холоп",              poster: "https://st.kp.yandex.net/images/film_big/1220082.jpg" },
    { title: "Горько!",            poster: "https://st.kp.yandex.net/images/film_big/786861.jpg" },
    { title: "Ёлки",               poster: "https://st.kp.yandex.net/images/film_big/573209.jpg" },
    { title: "Джентльмены",        poster: "https://st.kp.yandex.net/images/film_big/1143242.jpg" },
    { title: "Кухня",              poster: "https://st.kp.yandex.net/images/film_big/689066.jpg" },
    { title: "Дурак",              poster: "https://st.kp.yandex.net/images/film_big/775276.jpg" },
  ],

  action: [
    { title: "Т-34",               poster: "https://st.kp.yandex.net/images/film_big/1041611.jpg" },
    { title: "Майор Гром",         poster: "https://st.kp.yandex.net/images/film_big/1108577.jpg" },
    { title: "Легенда №17",        poster: "https://st.kp.yandex.net/images/film_big/714888.jpg" },
    { title: "Движение вверх",     poster: "https://st.kp.yandex.net/images/film_big/941567.jpg" },
    { title: "Кинг Конг",          poster: "https://st.kp.yandex.net/images/film_big/843650.jpg" },
    { title: "Дюна",               poster: "https://st.kp.yandex.net/images/film_big/1552311.jpg" },
  ],

  crime: [
    { title: "Джентльмены",        poster: "https://st.kp.yandex.net/images/film_big/1143242.jpg" },
    { title: "Текст",              poster: "https://st.kp.yandex.net/images/film_big/1143219.jpg" },
    { title: "Бык",                poster: "https://st.kp.yandex.net/images/film_big/1220379.jpg" },
    { title: "Слово пацана",       poster: "https://st.kp.yandex.net/images/film_big/5068033.jpg" },
    { title: "Метод",              poster: "https://st.kp.yandex.net/images/film_big/838050.jpg" },
    { title: "Дурак",              poster: "https://st.kp.yandex.net/images/film_big/775276.jpg" },
  ],

  docs: [
    { title: "Чернобыль",          poster: "https://st.kp.yandex.net/images/film_big/1227803.jpg" },
    { title: "Легенда №17",        poster: "https://st.kp.yandex.net/images/film_big/714888.jpg" },
    { title: "Движение вверх",     poster: "https://st.kp.yandex.net/images/film_big/941567.jpg" },
    { title: "Дюна",               poster: "https://st.kp.yandex.net/images/film_big/1552311.jpg" },
  ],
};

const key = "7efc2fe0981cca4ee0017225bc7c1c71";

function putDataOnScreen(dados) {
  console.log(dados);
  window.document.querySelector(
    ".city"
  ).innerHTML = `${dados.name}, ${dados.sys.country}`;

  window.document.querySelector(".temp").innerHTML = `${Math.floor(
    dados.main.temp
  )}ºc`;

  window.document.querySelector(
    ".tempmax"
  ).innerHTML = `Temperatura Max: ${Math.floor(dados.main.temp_max)}ºc`;

  window.document.querySelector(
    ".tempmin"
  ).innerHTML = `Temperatura Mín ${Math.floor(dados.main.temp_min)}°C`;

  const icon = dados.weather[0].icon;

  document.querySelectorAll(
    ".img-previsao"
  ).src = `${`https://openweathermap.org/img/wn/${icon}.png`}`;

  window.document.querySelector(
    ".wrt-previsao"
  ).innerHTML = `${dados.weather[0].description}`;

  window.document.querySelector(
    ".humidity"
  ).innerHTML = `Umidade: ${dados.main.humidity}%`;

  window.document.querySelector(
    ".wind"
  ).innerHTML = `Vento: ${dados.wind.speed}km/h`;

  const geral = window.document.querySelector(".geral");
  geral.style.opacity = "1";
  geral.style.height = "400px";
  geral.style.transition = "height 500ms linear";
  geral.style.transition = "opacity 543ms linear";
  const searchContainer = window.document.querySelector(".search-container");
  searchContainer.style.marginTop = "0";
}

async function SearchCity(cityl) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityl}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  putDataOnScreen(dados);
}

function ButtonClick() {
  const city = document.querySelector(".input-city").value;

  SearchCity(city);
}

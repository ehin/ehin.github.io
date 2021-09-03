function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const apiKey = "b8cc7ae688e76ab7f751bb325568436d";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const citySapn = document.querySelector("#weather span:first-child");
      const weatherSpan = document.querySelector("#weather span:last-child");
      citySapn.innerText = data.name;
      weatherSpan.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert("Can't find weather.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

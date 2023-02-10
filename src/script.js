function updateTime() {
  //Athens
  let athensElement = document.querySelector("#athens");
  if (athensElement) {
    let athensDateElement = document.querySelector("#athens .date");
    let athensTimeElement = document.querySelector("#athens .time");
    let athensTime = moment().tz("Europe/Athens");

    athensDateElement.innerHTML = athensTime.format("MMMM Do, YYYY");
    athensTimeElement.innerHTML = athensTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = document.querySelector("#sydney .date");
    let sydneyTimeElement = document.querySelector("#sydney .time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Honolulu
  let honoluluElement = document.querySelector("#honolulu");
  if (honoluluElement) {
    let honoluluDateElement = document.querySelector("#honolulu .date");
    let honoluluTimeElement = document.querySelector("#honolulu .time");
    let honoluluTime = moment().tz("Pacific/Honolulu");

    honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do, YYYY");
    honoluluTimeElement.innerHTML = honoluluTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  console.log(cityTime.format("MMMM Do YYYY"));
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city" id="sydney">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
      </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);

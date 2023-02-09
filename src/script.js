function updateTime() {
  //Athens
  let athensElement = document.querySelector("#athens");
  let athensDateElement = document.querySelector("#athens .date");
  let athensTimeElement = document.querySelector("#athens .time");
  let athensTime = moment().tz("Europe/Athens");

  athensDateElement.innerHTML = athensTime.format("MMMM Do, YYYY");
  athensTimeElement.innerHTML = athensTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = document.querySelector("#sydney .date");
  let sydneyTimeElement = document.querySelector("#sydney .time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Honolulu
  let honoluluElement = document.querySelector("#honolulu");
  let honoluluDateElement = document.querySelector("#honolulu .date");
  let honoluluTimeElement = document.querySelector("#honolulu .time");
  let honoluluTime = moment().tz("Pacific/Honolulu");

  honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do, YYYY");
  honoluluTimeElement.innerHTML = honoluluTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);

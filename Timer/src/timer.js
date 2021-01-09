var DAY = document.getElementById("days");
var HOURS = document.getElementById("hours");
var MINUTES = document.getElementById("Minutes");
var SECONDS = document.getElementById("Seconds");
var Theme = document.getElementById("theme");

setInterval(Timer, 1000);

function Timer() {
  var Today = new Date().getTime();
  var Fest = new Date("Sep 19, 2021").getTime();

  var Time = Math.abs(Fest - Today);

  var days = Math.floor(Time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((Time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((Time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((Time % (1000 * 60)) / 1000);

  if (days <= 9) {
    days = "0" + days;
  }
  if (hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  DAY.innerHTML = days;
  HOURS.innerHTML = hours;
  MINUTES.innerHTML = minutes;
  SECONDS.innerHTML = seconds;
}

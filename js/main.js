"use-strict";

document.addEventListener("DOMContentLoaded", function(event) {
  var countDate = new Date("June 6, 2018 00:00:00").getTime();

  var secCounter = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("#day").innerText = days;
    document.querySelector("#hour").innerText = hours;
    document.querySelector("#min").innerText= minutes;
    document.querySelector("#sec").innerText = seconds;

  }, 1000);
});


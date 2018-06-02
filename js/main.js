"use-strict";

document.addEventListener("DOMContentLoaded", function(event) {
  // Typing for main page
  var options ={
    strings: ["Hi ^500Jasmine^500",
              "^500It's your special day today! ^500",
              "^500I'm here to make this day extra special for you :3 ^500",
              "^500So stop waiting and scroll down already XD ^500"],
    typeSpeed: 50,
    smartBackspace: true,
    backSpeed: 30,
    onComplete: typeComplete
  }
  var typed = new Typed(".intro-text", options);

  var trigger = document.querySelector("#enterButton");
  trigger.addEventListener('click', enter);
});

// Helper Functions
function typeComplete() {
  // Make the rest of the page visible and show arrow
}

function enter() {
  document.querySelector('#page1').classList.add("animated");
  document.querySelector('#page1').classList.add("bounceOutLeft");
  setTimeout(function() {
    //your code to be executed after 1 
    document.querySelector('#page1').style.display = "none";
    document.querySelector('#page2').style.display = "block";
    document.querySelector('#page2').classList.add("animated");
    document.querySelector('#page2').classList.add("bounceInRight");
  }, 700);
}


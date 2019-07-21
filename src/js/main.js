"use strict";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("serviceworker.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// place your code below

console.log(`Drink Up! 💙`);

const image = document.querySelector(".glass__image--js");
const counter = document.querySelector(".glass__counter--js");
const addButton = document.querySelector(".glass__button--add--js");
const removeButton = document.querySelector(".glass__button--remove--js");

const key = new Date().toISOString().slice(0, 10);

let count = 0;
let opacity = 0.5;

addButton.addEventListener("click", e => {
  if (count >= 10) {
    counter.innerHTML = "MAX";
    count = 10;
  } else {
    count += 1;
    counter.innerHTML = count;

    // LOCALSTORAGE
    if (localStorage.getItem("key")) {
      localStorage.getItem("key");
    }
    localStorage.setItem("key", count);

    // OPACITY
    if (opacity <= 0.5) opacity += 0.05;
    else {
      opacity = 0.5;
    }
  }
});

removeButton.addEventListener("click", e => {
  if (count <= 0) {
    count = 0;
  } else {
    count -= 1;
    counter.innerHTML = count;

    // LOCALSTORAGE
    if (localStorage.getItem("key")) {
      localStorage.getItem("key");
    }
    localStorage.setItem("key", count);

    // OPACITY
    if (opacity >= 0.5) opacity -= 0.05;
    else {
      opacity = 0.5;
    }
  }
});

image.style.opacity = opacity;

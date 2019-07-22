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
const value = document.querySelector(".glass__counter--js");
const addButton = document.querySelector(".glass__button--add-js");
const removeButton = document.querySelector(".glass__button--remove-js");

const key = new Date().toISOString().slice(0, 10);

// LOCAL STORAGE

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0);
  value.innerHTML = "0";
} else {
  value.innerHTML = localStorage.getItem(key);
}

// ADD VALUE LISTENER

addButton.addEventListener("click", e => {
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
  value.innerHTML = localStorage.getItem(key);
});

// REMOVE VALUE LISTENER

removeButton.addEventListener("click", e => {
  const currentCounter = parseInt(localStorage.getItem(key));
  if (currentCounter > 0) {
    localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);
    value.innerHTML = localStorage.getItem(key);
  }
});

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS20-5-01-JS/sw.js",
    {
      scope: "/ICS20-5-01-JS/",
    }
  )
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}
/**
 * setting up the values
 */
const randomNumber = Math.floor(Math.random() * 6) + 1
/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  document.getElementById("answer").innerHTML =
    "<p>Value is: " + slider.value + "</p>"
}

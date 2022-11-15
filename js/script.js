// Copyright (c) 2020 ali-mugamai All rights reserved
//
// Created by: ali mugamai
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-5-01-JS/sw.js", {
    scope: "/ICS20-5-01-JS/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}

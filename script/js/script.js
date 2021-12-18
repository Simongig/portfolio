"use strict";
var mybutton = document.querySelector("#btt-button");
var searchParams = new URLSearchParams(window.location.search);
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}
if (searchParams.get("pandorasBox") == "true") {
    var linktext = document.querySelector("#btt-button a");
    linktext.innerText = "🖕";
}
function addNavListener() {
    var navIcon = document.getElementById("nav-icon");
    var navElements = document.querySelector(".nav-elements");
    var allNavElements = document.querySelectorAll(".nav-element");
    var nav = document.querySelector("nav");
    var state = false;
    function changeState(event) {
        if (state) {
            nav.classList.remove("expand");
            navElements.classList.remove("show");
        }
        else {
            nav.classList.add("expand");
            navElements.classList.add("show");
        }
        state = !state;
        console.log(state);
    }
    navIcon.addEventListener("click", changeState);
    allNavElements.forEach(function (item) {
        item.addEventListener('click', changeState);
    });
}
function main() {
    addNavListener();
    return 1;
}
main();

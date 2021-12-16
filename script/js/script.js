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

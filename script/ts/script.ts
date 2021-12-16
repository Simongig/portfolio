
let mybutton: HTMLButtonElement = document.querySelector("#btt-button")! as HTMLButtonElement;
let searchParams:URLSearchParams = new URLSearchParams(window.location.search);

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction(): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
if(searchParams.get("pandorasBox") == "true") {
    let linktext:HTMLAnchorElement = document.querySelector("#btt-button a")! as HTMLAnchorElement;
    linktext.innerText = "🖕"
}
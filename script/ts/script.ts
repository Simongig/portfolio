
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

function addNavListener() {
    let navIcon:HTMLAnchorElement = document.getElementById("nav-icon") as HTMLAnchorElement;
    let navElements:HTMLDivElement = document.querySelector(".nav-elements") as HTMLDivElement;
    let nav:HTMLElement = document.querySelector("nav") as HTMLElement
    let state:boolean = false;
    console.log("test")

    function changeState(event:Event):void {
        if(state) {
            nav.classList.remove("expand")
            navElements.classList.remove("show")
        } else {
            nav.classList.add("expand")
            navElements.classList.add("show")
        }
        state = !state;
        console.log(state)

    }

    navIcon.addEventListener("click", changeState)
}



function main():Number {
    addNavListener();
    return 1
}

main();
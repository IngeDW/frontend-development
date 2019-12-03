/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");




var hart = document.querySelector(".hartlike");

function changeHart() {
    hart.src = "./images/hart-vol.svg";
    console.log("er is geklikt");
}

hart.addEventListener('click', changeHart);




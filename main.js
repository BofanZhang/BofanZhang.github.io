// General toggle visibility function
function toggleVisibility(element) {
  if (element.style.visibility === "hidden") {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
}

// Information On load
//alert("Please Use In Full Screen Mode. The Timeline Will Be Distorted if Not");

// Popup 1
document.getElementById("btn").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup1"));
});
document.getElementById("close").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup1"));
});

// Popup 2
document.getElementById("btn2").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup2"));
});
document.getElementById("close2").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup2"));
});
// Popup 3
const element3 = document.querySelector(`#popup3`);
let isAnimated = false;

document.getElementById("btn3").addEventListener("click", () => {
  if (isAnimated) {
    element3.classList.remove(`OpenAnimation`);
    element3.classList.add(`CloseAnimation`);
    isAnimated = false;
  } else {
    element3.classList.remove(`CloseAnimation`);
    element3.classList.add(`OpenAnimation`);
  }
  element3.classList.add(`OpenAnimation`);
});
document.getElementById("close3").addEventListener("click", () => {
  element3.classList.remove(`OpenAnimation`);
  element3.classList.add(`CloseAnimation`);
  toggleVisibility(document.getElementById("popup3"));
});
// Popup 4
document.getElementById("btn4").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup4"));
});
document.getElementById("close4").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup4"));
});
// Popup 5
document.getElementById("btn5").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup5"));
});
document.getElementById("close5").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup5"));
});
// Popup 8
document.getElementById("btn8").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup8"));
});
document.getElementById("close8").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup8"));
});
// Popup 9
document.getElementById("btn9").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup9"));
});
document.getElementById("close9").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup9"));
});
// Popup 10
document.getElementById("btn10").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup10"));
});
document.getElementById("close10").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup10"));
});

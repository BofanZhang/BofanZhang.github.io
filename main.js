// General toggle visibility function
function toggleVisibility(element) {
  if (element.style.visibility === "hidden") {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
}

// Information On load
alert(
  "Please Use In Full Screen Mode. The Timeline Will Be Distorted if Not. Also If the Box is on the line, please click the sides sticking out, as it's a bit buggy. Thank You"
);

// Popup 1
const element = document.querySelector(`#popup1`);
const element2 = document.querySelector(`#popup2`);
const element3 = document.querySelector(`#popup3`);
const element4 = document.querySelector(`#popup4`);
const element5 = document.querySelector(`#popup5`);
const element6 = document.querySelector(`#popup6`);
const element7 = document.querySelector(`#popup7`);
const element8 = document.querySelector(`#popup8`);
const element9 = document.querySelector(`#popup9`);
const element10 = document.querySelector(`#popup10`);
const element11 = document.querySelector(`#popup11`);

let isAnimated = false;
let isAnimated2 = false;
let isAnimated3 = false;
let isAnimated4 = false;
let isAnimated5 = false;
let isAnimated6 = false;
let isAnimated7 = false;
let isAnimated8 = false;
let isAnimated9 = false;
let isAnimated10 = false;
let isAnimated11 = false;

document.getElementById("btn").addEventListener("click", () => {
  if (isAnimated) {
    element.classList.remove(`OpenAnimation`);
    element.classList.add(`CloseAnimation`);
    isAnimated = false;
  } else {
    element.classList.remove(`CloseAnimation`);
    element.classList.add(`OpenAnimation`);
  }
});
document.getElementById("close").addEventListener("click", () => {
  element.classList.remove(`OpenAnimation`);
  element.classList.add(`CloseAnimation`);
});

// Popup 2
document.getElementById("btn2").addEventListener("click", () => {
  if (isAnimated2) {
    element2.classList.remove(`OpenAnimation`);
    element2.classList.add(`CloseAnimation`);
    isAnimated = false;
  } else {
    element2.classList.remove(`CloseAnimation`);
    element2.classList.add(`OpenAnimation`);
  }
});
document.getElementById("close2").addEventListener("click", () => {
  element2.classList.remove(`OpenAnimation`);
  element2.classList.add(`CloseAnimation`);
});
// Popup 3
document.getElementById("btn3").addEventListener("click", () => {
  if (isAnimated3) {
    element3.classList.remove(`OpenAnimation`);
    element3.classList.add(`CloseAnimation`);
    isAnimated3 = false;
  } else {
    element3.classList.remove(`CloseAnimation`);
    element3.classList.add(`OpenAnimation`);
  }
  element3.classList.add(`OpenAnimation`);
});
document.getElementById("close3").addEventListener("click", () => {
  element3.classList.remove(`OpenAnimation`);
  element3.classList.add(`CloseAnimation`);
});
// Popup 4
document.getElementById("btn4").addEventListener("click", () => {
  if (isAnimated4) {
    element4.classList.remove(`OpenAnimation`);
    element4.classList.add(`CloseAnimation`);
    isAnimated4 = false;
  } else {
    element4.classList.remove(`CloseAnimation`);
    element4.classList.add(`OpenAnimation`);
  }
});
document.getElementById("close4").addEventListener("click", () => {
  element4.classList.remove(`OpenAnimation`);
  element4.classList.add(`CloseAnimation`);
});
// Popup 5
document.getElementById("btn5").addEventListener("click", () => {
  if (isAnimated5) {
    element5.classList.remove(`OpenAnimation`);
    element5.classList.add(`CloseAnimation`);
    isAnimated5 = false;
  } else {
    element5.classList.remove(`CloseAnimation`);
    element5.classList.add(`OpenAnimation`);
  }
});
document.getElementById("close5").addEventListener("click", () => {
  element5.classList.remove(`OpenAnimation`);
  element5.classList.add(`CloseAnimation`);
});

// Popup 6
document.getElementById("btn6").addEventListener("click", () => {
  if (isAnimated6) {
    element6.classList.remove(`OpenAnimation`);
    element6.classList.add(`CloseAnimation`);
    isAnimated6 = false;
  } else {
    element6.classList.remove(`CloseAnimation`);
    element6.classList.add(`OpenAnimation`);
  }
});
document.getElementById("close6").addEventListener("click", () => {
  element6.classList.remove(`OpenAnimation`);
  element6.classList.add(`CloseAnimation`);
});

// Popup 7
document.getElementById("btn7").addEventListener("click", () => {
  if (isAnimated7) {
    element7.classList.remove(`OpenAnimation`);
    element7.classList.add(`CloseAnimation`);
    isAnimated7 = false;
  } else {
    element7.classList.remove(`CloseAnimation`);
    element7.classList.add(`OpenAnimation`);
  }
});
document.getElementById("close7").addEventListener("click", () => {
  element7.classList.remove(`OpenAnimation`);
  element7.classList.add(`CloseAnimation`);
});

// Popup 8
document.getElementById("btn8").addEventListener("click", () => {
  if (isAnimated8) {
    element8.classList.remove(`OpenAnimation`);
    element8.classList.add(`CloseAnimation`);
    isAnimated8 = false;
  } else {
    element8.classList.remove(`CloseAnimation`);
    element8.classList.add(`OpenAnimation`);
  }
});
document.getElementById("close8").addEventListener("click", () => {
  element8.classList.remove(`OpenAnimation`);
  element8.classList.add(`CloseAnimation`);
});
// Popup 9
document.getElementById("btn9").addEventListener("click", () => {
  if (isAnimated9) {
    element9.classList.remove(`OpenAnimation`);
    element9.classList.add(`CloseAnimation`);
    isAnimated9 = false;
  } else {
    element9.classList.remove(`CloseAnimation`);
    element9.classList.add(`OpenAnimation`);
  }
});
document.getElementById("close9").addEventListener("click", () => {
  element9.classList.remove(`OpenAnimation`);
  element9.classList.add(`CloseAnimation`);
});
// Popup 10
document.getElementById("btn10").addEventListener("click", () => {
  if (isAnimated10) {
    element10.classList.remove(`OpenAnimation`);
    element10.classList.add(`CloseAnimation`);
    isAnimated10 = false;
  } else {
    element10.classList.remove(`CloseAnimation`);
    element10.classList.add(`OpenAnimation`);
  }
});
document.getElementById("close10").addEventListener("click", () => {
  element10.classList.remove(`OpenAnimation`);
  element10.classList.add(`CloseAnimation`);
});
// Popup 11
document.getElementById("btn11").addEventListener("click", () => {
  if (isAnimated10) {
    element11.classList.remove(`OpenAnimation`);
    element11.classList.add(`CloseAnimation`);
    isAnimated11 = false;
  } else {
    element11.classList.remove(`CloseAnimation`);
    element11.classList.add(`OpenAnimation`);
  }
});
document.getElementById("close11").addEventListener("click", () => {
  element11.classList.remove(`OpenAnimation`);
  element11.classList.add(`CloseAnimation`);
});

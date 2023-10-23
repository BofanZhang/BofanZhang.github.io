// General toggle visibility function
function toggleVisibility(element) {
  if (element.style.visibility === "hidden") {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
}

// Usage:

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
document.getElementById("btn3").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup3"));
});
document.getElementById("close3").addEventListener("click", () => {
  toggleVisibility(document.getElementById("popup3"));
});

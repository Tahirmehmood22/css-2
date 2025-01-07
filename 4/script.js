const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

buttonContainer.addEventListener("click", () => {alert("Container clicked!");});

button1.setAttribute("onclick", "handleInlineClick(event)");
function handleInlineClick(event) {
  event.stopPropagation();
  alert("This is an inline event handler (Button 1).");
}

button2.onclick = function(event) {
  event.stopPropagation();
  alert("This is a DOM level 0 event handler (Button 2).");
};

button3.addEventListener("click", function(event) {
  event.stopPropagation();
  alert("This is a DOM level 2 event listener (Button 3).");
});

buttonChildContainer.addEventListener("click", function(event) {
  if (event.target.id === "button4" || event.target.id === "button5") {
    event.stopPropagation();
    alert(`This is event delegation (${event.target.textContent})`);
  } else {
    alert("Child container clicked!");
  }
});

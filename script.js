let slow = document.querySelector(".slow");
let normal = document.querySelector(".normal");
let fast = document.querySelector(".fast");
let item = document.querySelector(".item");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let array = [slow, normal, fast];
function disableButtons() {
  array.forEach((item) => {
    item.setAttribute("disabled", "disabled");
  });
}
function enableButtons() {
  array.forEach((item) => {
    item.removeAttribute("disabled");
  });
}
let changePosition = () => {
  let randomHeight = window.innerHeight * Math.random() * 0.9;
  let randomWidth = window.innerWidth * Math.random() * 0.9;

  item.style.left = `${randomWidth}px`;
  item.style.top = `${randomHeight}px`;
};
let handle;
function changeItemText() {
  item.textContent = "Catch me";
}
stop.addEventListener("click", () => {
  clearInterval(handle);
});
slow.addEventListener("click", () => {
  handle = setInterval(changePosition, 1500);
  disableButtons();
  changeItemText();
});
normal.addEventListener("click", () => {
  handle = setInterval(changePosition, 700);
  disableButtons();
  changeItemText();
});
fast.addEventListener("click", () => {
  handle = setInterval(changePosition, 500);
  disableButtons();
  changeItemText();
});
reset.addEventListener("click", () => {
  clearInterval(handle);
  item.style.left = `50%`;
  item.style.top = "50%";
  enableButtons();
});
item.addEventListener("click", () => {
  clearInterval(handle);
  enableButtons();
  item.style.left = `50%`;
  item.style.top = "50%";
  item.textContent = "Good job";
});

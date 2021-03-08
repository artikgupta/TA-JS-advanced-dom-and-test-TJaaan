let input = document.querySelector("#input");
let root = document.querySelector(".root");
let dragItems = document.querySelectorAll(".drag-items");

let allItems = [];

function handleSubmit(event) {
  if (event.keyCode === 13) {
    let value = event.target.value;
    allItems.push(value);
    input.value = "";
    createUI(allItems);
  }
}

for (const item of dragItems) {
  console.log(item);
  item.addEventListener("dragover", dragOver);
  item.addEventListener("dragenter", dragEnter);
  item.addEventListener("dragleave", dragLeave);
  item.addEventListener("drop", dragDrop);
}

function createUI(allItems) {
  root.innerHTML = "";
  allItems.forEach((ele) => {
    let li = document.createElement("li");
    li.innerText = ele;
    li.classList.add("drag-items");
    li.draggable = true;
    li.addEventListener("dragstart", handleDragStart, false);
    li.addEventListener("dragenter", handleEnter, false);
    li.addEventListener("dragover", handleDragOver, false);
    li.addEventListener("dragleave", handleLeave, false);
    li.addEventListener("drop", handleDrop, false);
    li.addEventListener("dragend", handleDragEnd, false);
    root.append(li);
  });
}

let dragSrcEl = null;

function handleDragStart(event) {
  this.style.opacity = "0.4";
  dragSrcEl = this;
  event.dataTransfer.effectAllowed = "move";
  console.log(event.dataTransfer);
  event.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = "move";
  return false;
}

function handleDrop(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  }
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData("text/html");
  }
  return false;
}
function handleEnter(event) {
  event.target.classList.add("over");
  // console.log(event.target.classList);
}
function handleLeave(event) {
  event.target.classList.remove("over");
  // console.log(event.target.classList);
}
function handleDragEnd(event) {
  this.style.opacity = "1";
  this.classList.remove("over");
  list
    .querySelectorAll("li")
    .forEach((element) => element.classList.remove("over"));
  // createUi(arr);
}

const array = [
  [
    {
      i: "fab fa-github",
      name: "GitHub",
    },
    {
      i: "fab fa-twitter",
      name: "Twitter",
    },
    {
      i: "fab fa-facebook-f",
      name: "FaceBook",
    },
    {
      i: "fab fa-instagram",
      name: "Instagram",
    },
    {
      i: "fab fa-bluetooth-b",
      name: "Bluetooth",
    },
  ],
  [
    {
      i: "fab fa-stack-overflow",
      name: "stack-overflow",
    },
    {
      i: "fab fa-stripe-s",

      name: "strip",
    },
    {
      i: "fab fa-trello",
      name: "trello",
    },
    {
      i: "fab fa-uber",
      name: "uber",
    },
    {
      i: "fab fa-vuejs",
      name: "vue js",
    },
  ],
];

const root = document.querySelector("ul");

const boxes = document.querySelector(".boxes");

let arr = array[Math.floor(Math.random() * array.length)];

let dragSrcEl = null;

function createUI(arr) {
  arr.forEach((element) => {
    const li = document.createElement("li");
    const i = document.createElement("i");
    i.classList = `${element.i} dragabble`;
    i.setAttribute("draggable", true);
    li.append(i);

    i.addEventListener("dragstart", dragStart, false);
    i.addEventListener("dragend", dragEndHandler, false);
    root.append(li);

    let spanText = document.createElement("span");
    spanText.classList = `brand-name`;
    spanText.innerText = `${element.name}`;

    let box = document.createElement("div");
    box.classList.add("drag-box");
    box.setAttribute("data-id", element.name);

    box.addEventListener("dragenter", dragEnterHandler, false);
    box.addEventListener("dragover", dragOverHandler, false);
    box.addEventListener("dragleave", dragLeaveHandler, false);
    box.addEventListener("drop", dropHandler, false);

    boxes.append(spanText, box);
  });
}

function dragStart(event) {
  event.target.style.opacity = "0.4";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text", this.dataset.id);
}

function dragEndHandler(event) {
  console.log(event);
}

function dragEnterHandler(event) {
  console.log(event);
}

function dragOverHandler(event) {
  console.log(event);
}

function dragLeaveHandler(event) {
  console.log(event);
}

function dropHandler(event) {
  event.stopPropagation();
  event.preventDefault();
  if (event.dataTransfer.getData("text") === event.target.dataset.id) {
    let elm = arr.find((element) => {
      if (element.name === event.target.dataset.id) {
        return element;
      }
    });
    console.log(elm.i);
    let createI = document.createElement("i");
    createI.classList = `${elm.i}`;
    event.target.append(createI);
    num += 1;
  }
}

createUI(arr);

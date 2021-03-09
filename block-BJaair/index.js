// writeCode

// ## Follow the instructions to complete this exercise

// - You will find a `TODO.md` file in the code folder
// - The `TODO.md` file contains all the instructions you will need to complete the project
// - Follow the instructions and complete the exercise
// - You can create any files you need to complete the exercise

let form = document.querySelector("form");
let body = document.querySelector("body");
let root = document.querySelector(".root");

let input = document.getElementById("input");

let categories = document.getElementById("categories");

let noticeBoard = ["Science", "Commerce", "Arts"];

function noticeBoardUI() {
  let container = document.createElement("div");
  container.classList.add("notice-board");
  noticeBoard.forEach((ele) => {
    let board = document.createElement("div");
    board.classList.add(ele.toLowerCase());

    let heading = document.createElement("h1");

    let notice = document.createElement("div");
    notice.classList.add("notice");

    heading.innerText = ele;
    board.append(heading, notice);
    container.append(board);
  });
  root.append(container);
}

class Notice {
  constructor(title) {
    this.title = title;
    this.notice = [];
  }

  addNotice(...args) {
    this.notice = this.notice.concat(args);
    this.createUI(this.title);
    return this.notice;
  }

  createUI(name) {
    let container = document.querySelector(`.${name}`);
    let notice = container.querySelector(".notice");
    notice.innerHTML = "";
    console.log(container);

    let ul = document.createElement("ul");

    this.notice.forEach((ele) => {
      let li = document.createElement("li");
      li.innerText = ele;
      ul.append(li);
    });
    notice.append(ul);
  }
}

let science = new Notice("science");
let arts = new Notice("arts");
let commerce = new Notice("commerce");

noticeBoardUI();

function noticeHandler() {
  let val = document.querySelector("#input").value.trim();
  if (!val) {
    return;
  }
  let categories = document.querySelector("#categories").value;
  console.log(val, categories);
  if (categories === "arts") {
    arts.addNotice(val);
  } else if (categories === "science") {
    science.addNotice(val);
  } else {
    commerce.addNotice(val);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  noticeHandler();
});

input.addEventListener("blur", noticeHandler);

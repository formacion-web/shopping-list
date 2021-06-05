
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const removeItem = (e) => {
  e.path[1].remove();
};

const checkItem = (e) => {
  e.path[1].classList.toggle("list__item--checked");
};

let initDelete = document.querySelectorAll(".list__delete-btn");
initDelete.forEach((e) => {
  e.addEventListener("click", removeItem);
});

let initChecked = document.querySelectorAll(".list__check-btn");
initChecked.forEach((e) => {
  e.addEventListener("click", checkItem);
});

let addItem = () => {
  const input = document.querySelector("input");
  if (!input.value.length) {
    input.focus();
    return;
  }

  let newItem = input.value;
  input.value = "";

  const aDelete = document.createElement("a");
  const aChecked = document.createElement("a");
  const li = document.createElement("li");

  li.classList.add("list__item");
  aDelete.classList.add("list__delete-btn");
  aChecked.classList.add("list__check-btn");

  li.textContent = newItem;
  aDelete.textContent = "X";
  aChecked.textContent = "✔";

  aDelete.addEventListener("click", removeItem);
  aChecked.addEventListener("click", checkItem);

  li.appendChild(aDelete);
  li.appendChild(aChecked);
  ul.appendChild(li);

  input.focus();
};

init = () => {
  button.addEventListener("click", addItem);
  document.querySelector("input").focus();
};

window.addEventListener("load", init);

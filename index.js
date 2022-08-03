"use strict";

const listItemsFromApi = (todos) => {
  let template = "";
  todos.map((item) => {
    const { title, completed } = item;
    template += `<li class="todo-wrapper">
    <input type="checkbox" class="todo-check" />
    <p class="todo-item">${title}</p>
  </li>`;
  });
  document.querySelector(".list-wrapper").innerHTML = template;
};

const listItem = (item) => {
  let template = "";
  const { title, completed } = item;
  template += `<li class="todo-wrapper">
  <input type="checkbox" class="todo-check" />
  <p class="todo-item">${title}</p>
</li>`;
};

const getTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/users/1/todos")
    .then((response) => response.json())
    .then((todos) => {
      let todosArray = todos;
      listItemsFromApi(todosArray);
    });
};

getTodos();

const clearAllItems = () => {
  document.querySelector(".list-wrapper").innerHTML = "";
};

document.querySelector(".clear-btn").addEventListener("click", clearAllItems);

const addItem = (item) => {
  let template = "";
  const value = document.querySelector(".input").value;

  template += `<li class="todo-wrapper">
  <input type="checkbox" class="todo-check" />
  <p class="todo-item">${value}</p>
  </li>`;
  document.querySelector(".list-wrapper").innerHTML = template;
  document.querySelector(".input").value = "";
};

document.querySelector(".add-btn").addEventListener("click", addItem);

var input = document.getElementById("input");
var btn = document.getElementById("btn");
var div = document.querySelector(".user-data");
let todos = [];
let getTodoItems = localStorage.getItem("todos");
if (!getTodoItems) {
  [];
} else {
  todos = JSON.parse(getTodoItems);
}

btn.addEventListener("click", () => {
  addTodo();
  renderNote();
});

function addTodo() {
  todoItem = input.value;
  todos.push(todoItem);
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
}

function renderNote() {
  let todoElem = "";
  todos.forEach((todo, index) => {
    todoElem += `<div class="todo-items">
          <li>${todo}</li>
          <button onclick="deleteTodo(${index})"><i class="fa-solid fa-trash"></i> <span>Delete</span></button>
        </div>`;
  });
  div.innerHTML = todoElem;
}

function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderNote();
}

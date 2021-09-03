const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const date = todoForm.querySelector("input:first-child");
const todoInput = todoForm.querySelector("input:last-child");

let todos = [];
const LOCAL_STORAGE_TODO_LIST = "todos";

function saveTodos() {
  localStorage.setItem(LOCAL_STORAGE_TODO_LIST, JSON.stringify(todos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "✖︎";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  todoList.appendChild(li);
}

function onTodoForm(event) {
  event.preventDefault();
  const newTodo = todoInput.value;

  if (todoInput.value === "") {
    return;
  }
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todos.push(newTodoObj);
  todoInput.value = "";

  paintTodo(newTodoObj);
  saveTodos();
}

// default date today.
date.value = new Date().toISOString().substr(0, 10);

// default get todos
const savedTodos = localStorage.getItem(LOCAL_STORAGE_TODO_LIST);
if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  todos = parsedToDos;
  parsedToDos.forEach((item) => paintTodo(item));
}

todoForm.addEventListener("submit", onTodoForm);

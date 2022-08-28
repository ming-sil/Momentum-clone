const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

const saveToDos = () => {
  localStorage.setItem("todos", JSON.stringify(toDos));
};

const deleteToDo = (e) => {
  // console.log(e.target.parentElement.innerText);
  const li = e.target.parentElement;
  li.remove();
};

const paintToDo = (newToDo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const handleToDoSubmit = (e) => {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

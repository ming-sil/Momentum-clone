const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const paintToDo = (newToDo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

const handleToDoSubmit = (e) => {
    e.preventDefault()
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo)
}

toDoForm.addEventListener("submit", handleToDoSubmit);
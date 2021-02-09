import { lists } from "./localStorage";

class AddTask {
  constructor(title, description, ddate, priority) {
    this.title = title;
    this.description = description;
    this.ddate = ddate;
    this.priority = priority;
    this.id = Date.now().toString();
  }
}

const title = document.querySelector("#title");
const description = document.querySelector("#description");
const ddate = document.querySelector("#date");
const priority = document.querySelector("#priority");
const todoindex = document.querySelector("#todoindex");
const submit = document.querySelector(".submit");
const modal = document.querySelector("#myModal");
const newTaskForm = document.querySelector("[data-new-task-form]");

function editTodo(todo, index) {
  modalCloseState();
  title.value = todo.title;
  description.value = todo.description;
  priority.value = todo.priority;
  ddate.value = todo.ddate;
  todoindex.value = index;
  submit.classList.add("edit");
}

function deleteTask(index) {
  const editindex = index;
  const selectedProject1 = lists.find((list) => list.id === selectedId);
  selectedProject1.tasks.splice(editindex, 1);
  if (submit.classList.contains("edit")) {
    submit.classList.remove("edit");
  }
  saveAndRender();
  newTaskForm.reset();
}

function addClass() {
  const elements = document.querySelectorAll(".card-priority");

  elements.forEach((element) => {
    console.log(element.textContent);
    if (element.textContent === "high") {
      return element.classList.add("btn-success");
    } else if (element.textContent === "medium") {
      return element.classList.add("btn-warning");
    } else {
      return element.classList.add("btn-danger");
    }
  });
}

let modalOpen = false;

function modalCloseState() {
  const modalHeader = document.querySelector(".modal-title");

  if (modalOpen) {
    modal.style.pointerEvents = "none";
    modal.style.transform = "scale(0)";
    modalOpen = false;
    newTaskForm.reset();
  } else {
    modalHeader.textContent = "Update Todo";
    newTaskForm.value = "Update";
    modal.style.pointerEvents = "auto";
    modal.style.transform = "scale(1)";
    modal.style.display = "block";
    modalOpen = true;
    newTaskForm.reset();
  }
}
export { AddTask, editTodo, deleteTask, addClass };

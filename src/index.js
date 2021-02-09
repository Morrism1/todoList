import "./style.css";

const projects = document.querySelector("[data-lists]");
const newProjectForm = document.querySelector("[data-project-form]");

const newProjectInput = document.querySelector("[data-project-input]");

const newTaskForm = document.querySelector("[data-new-task-form]");
const todoTemplate = document.querySelector("[data-todo-template]");
const cards = document.querySelector(".cards");
const modal = document.querySelector("#myModal");

const modalBtn = document.querySelector("#myBtn");
const closeModal = document.querySelector(".close");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const ddate = document.querySelector("#date");
const priority = document.querySelector("#priority");
const todoindex = document.querySelector("#todoindex");
const modalHeader = document.querySelector(".modal-title");

const submit = document.querySelector(".submit");

const LOCAL_STORAGE_PROJECT_KEY = "todo.lists";
const LOCAL_STORAGE_SELECTED_ID_KEY = "todo.selectedId";

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

let selectedId = localStorage.getItem(LOCAL_STORAGE_SELECTED_ID_KEY);

newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newProjectName = newProjectInput.value;
  if (newProjectName == null || newProjectName === "") return;
  const project = createProject(newProjectName);
  newProjectInput.value = null;
  lists.push(project);
  saveAndRender();
});

function createProject(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}
projects.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedId = e.target.dataset.listId;
    saveAndRender();
  }
});
function render() {
  renderProjects();
  const selectedProject = lists.find((list) => list.id === selectedId);
  if (selectedProject == null) {
    cards.style.display = "none";
  } else {
    cards.style.style = "";
    clearList(cards);
    renderTasks(selectedProject);
  }
}

function saveAndRender() {
  render();
  save();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_ID_KEY, selectedId);
}

function renderProjects() {
  clearList(projects);

  lists.forEach((list) => {
    const project = document.createElement("li");
    project.dataset.listId = list.id;
    project.classList.add("list-group-item");
    project.setAttribute("role", "button");
    project.innerText = list.name;
    if (list.id === selectedId) {
      project.classList.add("active");
    }
    projects.appendChild(project);
  });
}

function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

render();

class AddTask {
  constructor(title, description, ddate, priority) {
    this.title = title;
    this.description = description;
    this.ddate = ddate;
    this.priority = priority;
    this.id = Date.now().toString();
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (submit.classList.contains("edit")) {
    const editindex = todoindex.value;
    const selectedProject1 = lists.find((list) => list.id === selectedId);
    const todo = selectedProject1.tasks[editindex];
    todo.title = title.value;
    todo.description = description.value;
    todo.priority = priority.value;
    todo.ddate = ddate.value;

    selectedProject1.tasks[editindex] = todo;

    submit.classList.remove("edit");
  } else {
    const title1 = title.value;
    const description1 = description.value;
    const ddate1 = ddate.value;
    const priority1 = priority.value;
    const newtodo = new AddTask(title1, description1, ddate1, priority1);
    const selectedProject = lists.find((list) => list.id === selectedId);
    selectedProject.tasks.push(newtodo);
  }
  saveAndRender();
  modal.style.display = "none";
  newTaskForm.reset();
});

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalHeader.textContent = "New Todo";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = function modalwrite(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

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
  saveAndRender();
}

function renderTasks(selectedId) {
  selectedId.tasks.forEach((task) => {
    const todoList = document.importNode(todoTemplate.content, true);
    const todoTitle = todoList.querySelector(".card-title");
    todoTitle.innerText = task.title;
    const todoDescription = todoList.querySelector(".card-description");
    todoDescription.innerText = task.description;
    const todoPriority = todoList.querySelector(".card-priority");
    todoPriority.innerText = task.priority;
    todoPriority.classList.add("btn");
    const todoDdate = todoList.querySelector(".card-footer");
    todoDdate.innerText = `Due on ${task.ddate}`;
    const editBtn = todoList.querySelector(".edit-btn");
    let index = selectedId.tasks.indexOf(task);

    //todo =task
    editBtn.addEventListener("click", () => editTodo(task, index));
    const deleteTaskBtn = todoList.querySelector(".delete-btn");
    deleteTaskBtn.addEventListener("click", () => deleteTask(index));
    cards.appendChild(todoList);
    addClass();
  });
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
  } else {
    modalHeader.textContent = "Update Todo";
    newTaskForm.value = "Update";
    modal.style.pointerEvents = "auto";
    modal.style.transform = "scale(1)";
    modal.style.display = "block";
    modalOpen = true;
  }
}

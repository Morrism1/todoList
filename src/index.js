import {
  title,
  description,
  ddate,
  priority,
  todoindex,
  submit,
  modal,
  newTaskForm,
  newProjectInput,
  projects,
  newProjectForm,
  todoTemplate,
  cards,
  modalBtn,
  closeModal,
  modalHeader,
} from "./dom";

import { lists, save, object, clearList } from "./localStorage";
import { AddTask, editTodo, addClass } from "./addtodo";
import createProject from "./addproject";
import "./style.css";

const deleteTask = (todo, card) => {
  const editindex = todo.value;
  const selectedProject1 = lists.find((list) => list.id === object.selectedId);
  selectedProject1.tasks.splice(editindex, 1);

  if (submit.classList.contains("edit")) {
    submit.classList.remove("edit");
  }
  save();
  cards.removeChild(card);
};
const renderTasks = (selectedId) => {
  selectedId.tasks.forEach((task) => {
    const todoList = document.importNode(todoTemplate.content, true);
    const card = todoList.querySelector(".card");
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
    const index = selectedId.tasks.indexOf(task);

    editBtn.addEventListener("click", () => editTodo(task, index));
    const deleteTaskBtn = todoList.querySelector(".delete-btn");
    deleteTaskBtn.addEventListener("click", () => {
      deleteTask(todoindex, card);
    });
    cards.appendChild(todoList);
    addClass();
  });
};

const renderProjects = () => {
  clearList(projects);

  lists.forEach((list) => {
    const project = document.createElement("li");
    project.dataset.listId = list.id;
    project.classList.add("list-group-item");
    project.setAttribute("role", "button");
    project.innerText = list.name;
    if (list.id === object.selectedId) {
      project.classList.add("active");
    }
    projects.appendChild(project);
  });
};
const render = () => {
  renderProjects();
  const selectedProject = lists.find((list) => list.id === object.selectedId);
  if (selectedProject == null) {
    cards.style.display = "none";
  } else {
    cards.style.style = "";
    clearList(cards);
    renderTasks(selectedProject);
  }
};

render();
const saveAndRender = () => {
  render();
  save();
};
const defaultProject = () => {
  if (lists.length === 0) {
    const project = createProject("Default");
    object.selectedId = project.id;
    lists.push(project);
    saveAndRender();
  }
};

defaultProject();

newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newProjectName = newProjectInput.value;
  if (newProjectName == null || newProjectName === "") return;
  const project = createProject(newProjectName);
  newProjectInput.value = null;
  lists.push(project);
  saveAndRender();
});

projects.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName.toLowerCase() === "li") {
    object.selectedId = e.target.dataset.listId;
    saveAndRender();
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (submit.classList.contains("edit")) {
    const editindex = todoindex.value;
    const selectedProject1 = lists.find(
      (list) => list.id === object.selectedId
    );
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
    const selectedProject = lists.find((list) => list.id === object.selectedId);
    selectedProject.tasks.push(newtodo);
  }
  saveAndRender();
  modal.style.display = "none";
  newTaskForm.reset();
});

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalHeader.textContent = "New Todo";
  newTaskForm.reset();
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  newTaskForm.reset();
});

window.onclick = function modalwrite(e) {
  if (e.target === modal) {
    modal.style.display = "none";
    newTaskForm.reset();
  }
};

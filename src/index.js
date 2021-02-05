import "./style.css";

const projects = document.querySelector("[data-lists]");
const newProjectForm = document.querySelector("[data-project-form]");
const newProjectInput = document.querySelector("[data-project-input]");
const newProjectButton = document.querySelector("[data-project-button]");

const LOCAL_STORAGE_PROJECT_KEY = "todo.lists";
const LOCAL_STORAGE_SELECTED_ID_KEY = "todo.selectedId";

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedId = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_SELECTED_ID_KEY)
);

projects.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedId = e.target.dataset.listId;
    saveAndRender();
  }
});

newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newProjectName = newProjectInput.value;
  if (newProjectName == null || newProjectName === "") return;
  const project = createProject(newProjectName);
  newProjectInput.value = "";
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

function saveAndRender() {
  save();
  renderP();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_ID_KEY, selectedId);
}

function renderP() {
  clearList(projects);
  lists.forEach((list) => {
    const project = document.createElement("li");
    project.dataset.listId = list.id;
    project.classList.add("list-item");
    project.setAttribute("role", "button");
    project.innerText = list.name;
    if (list.id === selectedId) {
      project.classList.add("btn", "btn-secondary", "active");
    }
    projects.appendChild(project);
  });
}

function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

renderP();

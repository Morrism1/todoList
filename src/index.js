import "./style.css";

const projects = document.querySelector("[data-lists]");
const newProjectForm = document.querySelector("[data-project-form]");

const newProjectInput = document.querySelector("[data-project-input]");

const newProjectButton = document.querySelector("[data-project-button]");
const newTaskForm =document.querySelector('[data-new-task-form]');
const todoTemplate =document.querySelector('[data-todo-template]');
const cards =document.querySelector('.cards');

const LOCAL_STORAGE_PROJECT_KEY = "todo.lists";
const LOCAL_STORAGE_SELECTED_ID_KEY = "todo.selectedId";

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

let selectedId = localStorage.getItem(LOCAL_STORAGE_SELECTED_ID_KEY)



newProjectForm.addEventListener("submit", e => {
  e.preventDefault();
  const newProjectName = newProjectInput.value;
  if (newProjectName == null || newProjectName === '') return;
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
    if (e.target.tagName.toLowerCase() === 'li') {
      selectedId = e.target.dataset.listId;
      saveAndRender()


    }
  });
function render()
{
  renderProjects();
  const selectedProject =lists.find(list => list.id === selectedId) ;
  if(selectedProject == null)
  {
cards.style.display= 'none';
  }
  else
  {
    cards.style.style ='';
    clearList(cards);
  renderTasks(selectedProject);
  }
}

function saveAndRender() {
  save();
 
  render();
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

render();


class AddTask
{
  constructor(title,description,ddate,priority)
  {
    this.title=title;
    this.description=description;
    this.ddate=ddate;
    this.priority =priority;
  }
}



newTaskForm.addEventListener('submit', e=>
  {
e.preventDefault();

const title =document.querySelector("#title").value;
const description=document.querySelector('#description').value;
const ddate =document.querySelector("#date").value;
const priority =document.querySelector("#priority").value;
const todo =new AddTask(title,description,ddate,priority);
console.log(todo);
const selectedProject = lists.find(list =>list.id === selectedId);
selectedProject.tasks.push(todo);
saveAndRender();
  }
  )


const modal = document.querySelector('#myModal');

const modalBtn = document.querySelector('#myBtn');
const closeModal = document.querySelector('.close');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.onclick = function modalwrite(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

function renderTasks(selectedId)
{
  selectedId.tasks.forEach(task => {
    const todoList = document.importNode(todoTemplate.content,true);
    const todoTitle = todoList.querySelector(".card-title");
    todoTitle.innerText = task.title;
    const todoDescription = todoList.querySelector(".card-description");
    todoDescription.innerText = task.description;
    const todoPriority = todoList.querySelector(".card-priority");
    todoPriority.innerText = task.priority;
    cards.appendChild(todoList);
  }
    )
}

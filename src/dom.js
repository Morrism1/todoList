import {
  lists, object, clearList, save,
} from './localStorage';

const title = document.querySelector('#title');
const description = document.querySelector('#description');
const ddate = document.querySelector('#date');
const priority = document.querySelector('#priority');
const todoindex = document.querySelector('#todoindex');
const submit = document.querySelector('.submit');
const modal = document.querySelector('#myModal');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newProjectInput = document.querySelector('[data-project-input]');

const projects = document.querySelector('[data-lists]');
const newProjectForm = document.querySelector('[data-project-form]');
const todoTemplate = document.querySelector('[data-todo-template]');
const cards = document.querySelector('.cards');

const modalBtn = document.querySelector('#myBtn');
const closeModal = document.querySelector('.close');
const modalHeader = document.querySelector('.modal-title');
const spanMessage = document.querySelector('.message');

const validateForm = () => {
  const x = title.value;
  const y = description.value;
  const z = ddate.value;
  if (x === '') {
    spanMessage.innerHTML = 'Please fill the Title field';
    spanMessage.classList.add('alert', 'alert-danger');
    return false;
  }
  if (y === '') {
    spanMessage.innerHTML = 'Please fill the description field';
    spanMessage.classList.add('alert', 'alert-danger');
    return false;
  }
  if (z === '') {
    spanMessage.innerHTML = 'Please fill the due date field';
    spanMessage.classList.add('alert', 'alert-danger');
    return false;
  }
  return true;
};

let modalOpen = false;
const modalCloseState = () => {
  const modalHeader = document.querySelector('.modal-title');

  if (modalOpen) {
    modal.style.pointerEvents = 'none';
    modal.style.transform = 'scale(0)';
    modalOpen = false;
    newTaskForm.reset();
  } else {
    modalHeader.textContent = 'Update Todo';
    newTaskForm.value = 'Update';
    submit.innerHTML = 'update';
    modal.style.pointerEvents = 'auto';
    modal.style.transform = 'scale(1)';
    modal.style.display = 'block';
    modalOpen = true;
    newTaskForm.reset();
  }
};

const editTodo = (todo, index) => {
  modalCloseState();
  title.value = todo.title;
  description.value = todo.description;
  priority.value = todo.priority;
  ddate.value = todo.ddate;
  todoindex.value = index;
  submit.classList.add('edit');
};

const addClass = () => {
  const elements = document.querySelectorAll('.card-priority');

  elements.forEach((element) => {
    if (element.textContent === 'high') {
      return element.classList.add('btn-success');
    }
    if (element.textContent === 'medium') {
      return element.classList.add('btn-warning');
    }
    return element.classList.add('btn-danger');
  });
};

const deleteTask = (todo, card) => {
  const editindex = todo.value;
  const selectedProject1 = lists.find((list) => list.id === object.selectedId);
  selectedProject1.tasks.splice(editindex, 1);

  if (submit.classList.contains('edit')) {
    submit.classList.remove('edit');
  }
  save();
  cards.removeChild(card);
};

const renderProjects = () => {
  clearList(projects);

  lists.forEach((list) => {
    const project = document.createElement('li');
    project.dataset.listId = list.id;
    project.classList.add('list-group-item');
    project.setAttribute('role', 'button');
    project.innerText = list.name;
    if (list.id === object.selectedId) {
      project.classList.add('active');
    }
    projects.appendChild(project);
  });
};

const renderTasks = (selectedId) => {
  selectedId.tasks.forEach((task) => {
    const todoList = document.importNode(todoTemplate.content, true);
    const card = todoList.querySelector('.card');
    const todoTitle = todoList.querySelector('.card-title');
    todoTitle.innerText = task.title;
    const todoDescription = todoList.querySelector('.card-description');
    todoDescription.innerText = task.description;
    const todoPriority = todoList.querySelector('.card-priority');
    todoPriority.innerText = task.priority;
    todoPriority.classList.add('btn');
    const todoDdate = todoList.querySelector('.card-footer');
    todoDdate.innerText = `Due on ${task.ddate}`;
    const editBtn = todoList.querySelector('.edit-btn');
    const index = selectedId.tasks.indexOf(task);

    editBtn.addEventListener('click', () => editTodo(task, index));
    const deleteTaskBtn = todoList.querySelector('.delete-btn');
    deleteTaskBtn.addEventListener('click', () => {
      const deleteIndex = selectedId.tasks.indexOf(task);
      todoindex.value = deleteIndex;
      deleteTask(todoindex, card);
    });
    cards.appendChild(todoList);
    addClass();
  });
};

export {
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
  todoTemplate,
  cards,
  modalBtn,
  closeModal,
  modalHeader,
  newProjectForm,
  spanMessage,
  renderTasks,
  validateForm,
  renderProjects,
};

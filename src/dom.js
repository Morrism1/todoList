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
};

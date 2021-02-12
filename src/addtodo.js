import {
  title,
  description,
  ddate,
  priority,
  todoindex,
  submit,
  modal,
  newTaskForm,
} from './dom';

class AddTask {
  constructor(title, description, ddate, priority) {
    this.title = title;
    this.description = description;
    this.ddate = ddate;
    this.priority = priority;
    this.id = Date.now().toString();
  }
}
const validateForm = () => {
  const x = title.value;
  const y = description.value;
  const z = ddate.value;
  const spanMessage = document.querySelector('.message');
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


export {
  AddTask, editTodo, addClass, validateForm,
};

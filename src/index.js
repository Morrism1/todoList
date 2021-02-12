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
  cards,
  modalBtn,
  closeModal,
  modalHeader,
  renderTasks,
  validateForm,
  renderProjects,
  spanMessage,
} from './dom';

import {
  lists, save, object, clearList,
} from './localStorage';
import AddTask from './addtodo';
import createProject from './addproject';
import './style.css';

const render = () => {
  renderProjects();
  const selectedProject = lists.find((list) => list.id === object.selectedId);
  if (selectedProject == null) {
    cards.style.display = 'none';
  } else {
    cards.style.style = '';
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
    const project = createProject('Default');
    object.selectedId = project.id;
    lists.push(project);
    saveAndRender();
  }
};

defaultProject();

newProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newProjectName = newProjectInput.value;
  if (newProjectName == null || newProjectName === '') return;
  const project = createProject(newProjectName);
  newProjectInput.value = null;
  lists.push(project);
  saveAndRender();
});

projects.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.tagName.toLowerCase() === 'li') {
    object.selectedId = e.target.dataset.listId;
    saveAndRender();
  }
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (submit.classList.contains('edit')) {
    const editindex = todoindex.value;
    const selectedProject1 = lists.find(
      (list) => list.id === object.selectedId,
    );
    const todo = selectedProject1.tasks[editindex];
    todo.title = title.value;
    todo.description = description.value;
    todo.priority = priority.value;
    todo.ddate = ddate.value;

    selectedProject1.tasks[editindex] = todo;

    submit.classList.remove('edit');

    newTaskForm.reset();
    modal.style.display = 'none';
  } else if (validateForm()) {
    const title1 = title.value;
    const description1 = description.value;
    const ddate1 = ddate.value;
    const priority1 = priority.value;
    const newtodo = new AddTask(title1, description1, ddate1, priority1);
    const selectedProject = lists.find((list) => list.id === object.selectedId);

    selectedProject.tasks.push(newtodo);
    spanMessage.innerHTML = '';
    spanMessage.classList.remove('alert', 'alert-danger');
    newTaskForm.reset();
    modal.style.display = 'none';
  }
  saveAndRender();
});

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  modalHeader.textContent = 'New Todo';
  submit.innerHTML = 'Add';
  newTaskForm.reset();
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  newTaskForm.reset();
});

window.onclick = function modalwrite(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
    newTaskForm.reset();
  }
};

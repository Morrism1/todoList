import { render } from "./index";

const LOCAL_STORAGE_PROJECT_KEY = "todo.lists";
const LOCAL_STORAGE_SELECTED_ID_KEY = "todo.selectedId";

const cards = document.querySelector(".cards");

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

let selectedId = localStorage.getItem(LOCAL_STORAGE_SELECTED_ID_KEY);

function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_ID_KEY, selectedId);
}

function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function saveAndRender() {
  render();
  save();
}

export { lists, selectedId, save, saveAndRender, clearList };

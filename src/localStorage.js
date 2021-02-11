
const LOCAL_STORAGE_PROJECT_KEY = 'todo.lists';
const LOCAL_STORAGE_SELECTED_ID_KEY = 'todo.selectedId';


const lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];


const object = {
  selectedId: localStorage.getItem(LOCAL_STORAGE_SELECTED_ID_KEY),
};

const save = () => {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_ID_KEY, object.selectedId);
};

const clearList = (list) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};


export {
  lists, object, save, clearList,
};

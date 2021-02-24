/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addproject.js":
/*!***************************!*\
  !*** ./src/addproject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createProject(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: []
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);

/***/ }),

/***/ "./src/addtodo.js":
/*!************************!*\
  !*** ./src/addtodo.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddTask = function AddTask(title, description, ddate, priority) {
  _classCallCheck(this, AddTask);

  this.title = title;
  this.description = description;
  this.ddate = ddate;
  this.priority = priority;
  this.id = Date.now().toString();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTask);
module.exports = AddTask;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "ddate": () => (/* binding */ ddate),
/* harmony export */   "priority": () => (/* binding */ priority),
/* harmony export */   "todoindex": () => (/* binding */ todoindex),
/* harmony export */   "submit": () => (/* binding */ submit),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "newTaskForm": () => (/* binding */ newTaskForm),
/* harmony export */   "newProjectInput": () => (/* binding */ newProjectInput),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "todoTemplate": () => (/* binding */ todoTemplate),
/* harmony export */   "cards": () => (/* binding */ cards),
/* harmony export */   "modalBtn": () => (/* binding */ modalBtn),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "modalHeader": () => (/* binding */ modalHeader),
/* harmony export */   "newProjectForm": () => (/* binding */ newProjectForm),
/* harmony export */   "spanMessage": () => (/* binding */ spanMessage),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks),
/* harmony export */   "validateForm": () => (/* binding */ validateForm),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");

var title = document.querySelector('#title');
var description = document.querySelector('#description');
var ddate = document.querySelector('#date');
var priority = document.querySelector('#priority');
var todoindex = document.querySelector('#todoindex');
var submit = document.querySelector('.submit');
var modal = document.querySelector('#myModal');
var newTaskForm = document.querySelector('[data-new-task-form]');
var newProjectInput = document.querySelector('[data-project-input]');
var projects = document.querySelector('[data-lists]');
var newProjectForm = document.querySelector('[data-project-form]');
var todoTemplate = document.querySelector('[data-todo-template]');
var cards = document.querySelector('.cards');
var modalBtn = document.querySelector('#myBtn');
var closeModal = document.querySelector('.close');
var modalHeader = document.querySelector('.modal-title');
var spanMessage = document.querySelector('.message');

var validateForm = function validateForm() {
  var x = title.value;
  var y = description.value;
  var z = ddate.value;

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

var modalOpen = false;

var modalCloseState = function modalCloseState() {
  var modalHeader = document.querySelector('.modal-title');

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

var editTodo = function editTodo(todo, index) {
  modalCloseState();
  title.value = todo.title;
  description.value = todo.description;
  priority.value = todo.priority;
  ddate.value = todo.ddate;
  todoindex.value = index;
  submit.classList.add('edit');
};

var addClass = function addClass() {
  var elements = document.querySelectorAll('.card-priority');
  elements.forEach(function (element) {
    if (element.textContent === 'high') {
      return element.classList.add('btn-success');
    }

    if (element.textContent === 'medium') {
      return element.classList.add('btn-warning');
    }

    return element.classList.add('btn-danger');
  });
};

var deleteTask = function deleteTask(todo, card) {
  var editindex = todo.value;
  var selectedProject1 = _localStorage__WEBPACK_IMPORTED_MODULE_0__.lists.find(function (list) {
    return list.id === _localStorage__WEBPACK_IMPORTED_MODULE_0__.object.selectedId;
  });
  selectedProject1.tasks.splice(editindex, 1);

  if (submit.classList.contains('edit')) {
    submit.classList.remove('edit');
  }

  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.save)();
  cards.removeChild(card);
};

var renderProjects = function renderProjects() {
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.clearList)(projects);
  _localStorage__WEBPACK_IMPORTED_MODULE_0__.lists.forEach(function (list) {
    var project = document.createElement('li');
    project.dataset.listId = list.id;
    project.classList.add('list-group-item');
    project.setAttribute('role', 'button');
    project.innerText = list.name;

    if (list.id === _localStorage__WEBPACK_IMPORTED_MODULE_0__.object.selectedId) {
      project.classList.add('active');
    }

    projects.appendChild(project);
  });
};

var renderTasks = function renderTasks(selectedId) {
  selectedId.tasks.forEach(function (task) {
    var todoList = document.importNode(todoTemplate.content, true);
    var card = todoList.querySelector('.card');
    var todoTitle = todoList.querySelector('.card-title');
    todoTitle.innerText = task.title;
    var todoDescription = todoList.querySelector('.card-description');
    todoDescription.innerText = task.description;
    var todoPriority = todoList.querySelector('.card-priority');
    todoPriority.innerText = task.priority;
    todoPriority.classList.add('btn');
    var todoDdate = todoList.querySelector('.card-footer');
    todoDdate.innerText = "Due on ".concat(task.ddate);
    var editBtn = todoList.querySelector('.edit-btn');
    var index = selectedId.tasks.indexOf(task);
    editBtn.addEventListener('click', function () {
      return editTodo(task, index);
    });
    var deleteTaskBtn = todoList.querySelector('.delete-btn');
    deleteTaskBtn.addEventListener('click', function () {
      var deleteIndex = selectedId.tasks.indexOf(task);
      todoindex.value = deleteIndex;
      deleteTask(todoindex, card);
    });
    cards.appendChild(todoList);
    addClass();
  });
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _addtodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addtodo */ "./src/addtodo.js");
/* harmony import */ var _addproject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addproject */ "./src/addproject.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






var render = function render() {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();
  var selectedProject = _localStorage__WEBPACK_IMPORTED_MODULE_1__.lists.find(function (list) {
    return list.id === _localStorage__WEBPACK_IMPORTED_MODULE_1__.object.selectedId;
  });

  if (selectedProject == null) {
    _dom__WEBPACK_IMPORTED_MODULE_0__.cards.style.display = 'none';
  } else {
    _dom__WEBPACK_IMPORTED_MODULE_0__.cards.style.style = '';
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.clearList)(_dom__WEBPACK_IMPORTED_MODULE_0__.cards);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(selectedProject);
  }
};

render();

var saveAndRender = function saveAndRender() {
  render();
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.save)();
};

var defaultProject = function defaultProject() {
  if (_localStorage__WEBPACK_IMPORTED_MODULE_1__.lists.length === 0) {
    var project = (0,_addproject__WEBPACK_IMPORTED_MODULE_3__.default)('Default');
    _localStorage__WEBPACK_IMPORTED_MODULE_1__.object.selectedId = project.id;
    _localStorage__WEBPACK_IMPORTED_MODULE_1__.lists.push(project);
    saveAndRender();
  }
};

defaultProject();
_dom__WEBPACK_IMPORTED_MODULE_0__.newProjectForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var newProjectName = _dom__WEBPACK_IMPORTED_MODULE_0__.newProjectInput.value;
  if (newProjectName == null || newProjectName === '') return;
  var project = (0,_addproject__WEBPACK_IMPORTED_MODULE_3__.default)(newProjectName);
  _dom__WEBPACK_IMPORTED_MODULE_0__.newProjectInput.value = null;
  _localStorage__WEBPACK_IMPORTED_MODULE_1__.lists.push(project);
  saveAndRender();
});
_dom__WEBPACK_IMPORTED_MODULE_0__.projects.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.tagName.toLowerCase() === 'li') {
    _localStorage__WEBPACK_IMPORTED_MODULE_1__.object.selectedId = e.target.dataset.listId;
    saveAndRender();
  }
});
_dom__WEBPACK_IMPORTED_MODULE_0__.submit.addEventListener('click', function (e) {
  e.preventDefault();

  if (_dom__WEBPACK_IMPORTED_MODULE_0__.submit.classList.contains('edit')) {
    var editindex = _dom__WEBPACK_IMPORTED_MODULE_0__.todoindex.value;
    var selectedProject1 = _localStorage__WEBPACK_IMPORTED_MODULE_1__.lists.find(function (list) {
      return list.id === _localStorage__WEBPACK_IMPORTED_MODULE_1__.object.selectedId;
    });
    var todo = selectedProject1.tasks[editindex];
    todo.title = _dom__WEBPACK_IMPORTED_MODULE_0__.title.value;
    todo.description = _dom__WEBPACK_IMPORTED_MODULE_0__.description.value;
    todo.priority = _dom__WEBPACK_IMPORTED_MODULE_0__.priority.value;
    todo.ddate = _dom__WEBPACK_IMPORTED_MODULE_0__.ddate.value;
    selectedProject1.tasks[editindex] = todo;
    _dom__WEBPACK_IMPORTED_MODULE_0__.submit.classList.remove('edit');
    _dom__WEBPACK_IMPORTED_MODULE_0__.newTaskForm.reset();
    _dom__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = 'none';
  } else if ((0,_dom__WEBPACK_IMPORTED_MODULE_0__.validateForm)()) {
    var title1 = _dom__WEBPACK_IMPORTED_MODULE_0__.title.value;
    var description1 = _dom__WEBPACK_IMPORTED_MODULE_0__.description.value;
    var ddate1 = _dom__WEBPACK_IMPORTED_MODULE_0__.ddate.value;
    var priority1 = _dom__WEBPACK_IMPORTED_MODULE_0__.priority.value;
    var newtodo = new _addtodo__WEBPACK_IMPORTED_MODULE_2__.default(title1, description1, ddate1, priority1);
    var selectedProject = _localStorage__WEBPACK_IMPORTED_MODULE_1__.lists.find(function (list) {
      return list.id === _localStorage__WEBPACK_IMPORTED_MODULE_1__.object.selectedId;
    });
    selectedProject.tasks.push(newtodo);
    _dom__WEBPACK_IMPORTED_MODULE_0__.spanMessage.innerHTML = '';
    _dom__WEBPACK_IMPORTED_MODULE_0__.spanMessage.classList.remove('alert', 'alert-danger');
    _dom__WEBPACK_IMPORTED_MODULE_0__.newTaskForm.reset();
    _dom__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = 'none';
  }

  saveAndRender();
});
_dom__WEBPACK_IMPORTED_MODULE_0__.modalBtn.addEventListener('click', function () {
  _dom__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = 'block';
  _dom__WEBPACK_IMPORTED_MODULE_0__.modalHeader.textContent = 'New Todo';
  _dom__WEBPACK_IMPORTED_MODULE_0__.submit.innerHTML = 'Add';
  _dom__WEBPACK_IMPORTED_MODULE_0__.newTaskForm.reset();
});
_dom__WEBPACK_IMPORTED_MODULE_0__.closeModal.addEventListener('click', function () {
  _dom__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = 'none';
  _dom__WEBPACK_IMPORTED_MODULE_0__.newTaskForm.reset();
});

window.onclick = function modalwrite(e) {
  if (e.target === _dom__WEBPACK_IMPORTED_MODULE_0__.modal) {
    _dom__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = 'none';
    _dom__WEBPACK_IMPORTED_MODULE_0__.newTaskForm.reset();
  }
};

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lists": () => (/* binding */ lists),
/* harmony export */   "object": () => (/* binding */ object),
/* harmony export */   "save": () => (/* binding */ save),
/* harmony export */   "clearList": () => (/* binding */ clearList)
/* harmony export */ });
var LOCAL_STORAGE_PROJECT_KEY = 'todo.lists';
var LOCAL_STORAGE_SELECTED_ID_KEY = 'todo.selectedId';
var lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
var object = {
  selectedId: localStorage.getItem(LOCAL_STORAGE_SELECTED_ID_KEY)
};

var save = function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_ID_KEY, object.selectedId);
};

var clearList = function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 99;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  background-color: rgb(0, 0, 0); /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n  overflow: hidden;\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 15% auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;EAC3D,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,UAAU;AACZ","sourcesContent":[".modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 99;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  background-color: rgb(0, 0, 0); /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n  overflow: hidden;\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 15% auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvTGlzdC8uL3NyYy9hZGRwcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vc3JjL2FkZHRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJjcmVhdGVQcm9qZWN0IiwibmFtZSIsImlkIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwidGFza3MiLCJBZGRUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRkYXRlIiwicHJpb3JpdHkiLCJtb2R1bGUiLCJleHBvcnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9kb2luZGV4Iiwic3VibWl0IiwibW9kYWwiLCJuZXdUYXNrRm9ybSIsIm5ld1Byb2plY3RJbnB1dCIsInByb2plY3RzIiwibmV3UHJvamVjdEZvcm0iLCJ0b2RvVGVtcGxhdGUiLCJjYXJkcyIsIm1vZGFsQnRuIiwiY2xvc2VNb2RhbCIsIm1vZGFsSGVhZGVyIiwic3Bhbk1lc3NhZ2UiLCJ2YWxpZGF0ZUZvcm0iLCJ4IiwidmFsdWUiLCJ5IiwieiIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFkZCIsIm1vZGFsT3BlbiIsIm1vZGFsQ2xvc2VTdGF0ZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsInRyYW5zZm9ybSIsInJlc2V0IiwidGV4dENvbnRlbnQiLCJkaXNwbGF5IiwiZWRpdFRvZG8iLCJ0b2RvIiwiaW5kZXgiLCJhZGRDbGFzcyIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiZGVsZXRlVGFzayIsImNhcmQiLCJlZGl0aW5kZXgiLCJzZWxlY3RlZFByb2plY3QxIiwibGlzdHMiLCJsaXN0Iiwib2JqZWN0Iiwic3BsaWNlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJzYXZlIiwicmVtb3ZlQ2hpbGQiLCJyZW5kZXJQcm9qZWN0cyIsImNsZWFyTGlzdCIsInByb2plY3QiLCJjcmVhdGVFbGVtZW50IiwiZGF0YXNldCIsImxpc3RJZCIsInNldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwicmVuZGVyVGFza3MiLCJzZWxlY3RlZElkIiwidGFzayIsInRvZG9MaXN0IiwiaW1wb3J0Tm9kZSIsImNvbnRlbnQiLCJ0b2RvVGl0bGUiLCJ0b2RvRGVzY3JpcHRpb24iLCJ0b2RvUHJpb3JpdHkiLCJ0b2RvRGRhdGUiLCJlZGl0QnRuIiwiaW5kZXhPZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWxldGVUYXNrQnRuIiwiZGVsZXRlSW5kZXgiLCJyZW5kZXIiLCJzZWxlY3RlZFByb2plY3QiLCJzYXZlQW5kUmVuZGVyIiwiZGVmYXVsdFByb2plY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXdQcm9qZWN0TmFtZSIsInRhcmdldCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInRpdGxlMSIsImRlc2NyaXB0aW9uMSIsImRkYXRlMSIsInByaW9yaXR5MSIsIm5ld3RvZG8iLCJwdXNoIiwid2luZG93Iiwib25jbGljayIsIm1vZGFsd3JpdGUiLCJMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZIiwiTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9JRF9LRVkiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImZpcnN0Q2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDM0IsU0FBTztBQUNMQyxNQUFFLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxHQUFXQyxRQUFYLEVBREM7QUFFTEosUUFBSSxFQUFKQSxJQUZLO0FBR0xLLFNBQUssRUFBRTtBQUhGLEdBQVA7QUFLRDs7QUFFRCxpRUFBZU4sYUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztJQ1JNTyxPLEdBQ0osaUJBQVlDLEtBQVosRUFBbUJDLFdBQW5CLEVBQWdDQyxLQUFoQyxFQUF1Q0MsUUFBdkMsRUFBaUQ7QUFBQTs7QUFDL0MsT0FBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxPQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBLEU7Ozs7O1dDVkEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICBuYW1lLFxuICAgIHRhc2tzOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDtcbiIsImNsYXNzIEFkZFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGRhdGUsIHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmRkYXRlID0gZGRhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVGFzaztcclxubW9kdWxlLmV4cG9ydHMgPSBBZGRUYXNrOyIsImltcG9ydCB7XHJcbiAgbGlzdHMsIG9iamVjdCwgY2xlYXJMaXN0LCBzYXZlLFxyXG59IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcclxuXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcbmNvbnN0IGRkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcclxuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcclxuY29uc3QgdG9kb2luZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9pbmRleCcpO1xyXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215TW9kYWwnKTtcclxuY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctdGFzay1mb3JtXScpO1xyXG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0LWlucHV0XScpO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1saXN0c10nKTtcclxuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0LWZvcm1dJyk7XHJcbmNvbnN0IHRvZG9UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZG8tdGVtcGxhdGVdJyk7XHJcbmNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XHJcblxyXG5jb25zdCBtb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUJ0bicpO1xyXG5jb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XHJcbmNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXRpdGxlJyk7XHJcbmNvbnN0IHNwYW5NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcclxuXHJcbmNvbnN0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB4ID0gdGl0bGUudmFsdWU7XHJcbiAgY29uc3QgeSA9IGRlc2NyaXB0aW9uLnZhbHVlO1xyXG4gIGNvbnN0IHogPSBkZGF0ZS52YWx1ZTtcclxuICBpZiAoeCA9PT0gJycpIHtcclxuICAgIHNwYW5NZXNzYWdlLmlubmVySFRNTCA9ICdQbGVhc2UgZmlsbCB0aGUgVGl0bGUgZmllbGQnO1xyXG4gICAgc3Bhbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnYWxlcnQnLCAnYWxlcnQtZGFuZ2VyJyk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmICh5ID09PSAnJykge1xyXG4gICAgc3Bhbk1lc3NhZ2UuaW5uZXJIVE1MID0gJ1BsZWFzZSBmaWxsIHRoZSBkZXNjcmlwdGlvbiBmaWVsZCc7XHJcbiAgICBzcGFuTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdhbGVydCcsICdhbGVydC1kYW5nZXInKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKHogPT09ICcnKSB7XHJcbiAgICBzcGFuTWVzc2FnZS5pbm5lckhUTUwgPSAnUGxlYXNlIGZpbGwgdGhlIGR1ZSBkYXRlIGZpZWxkJztcclxuICAgIHNwYW5NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JywgJ2FsZXJ0LWRhbmdlcicpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmxldCBtb2RhbE9wZW4gPSBmYWxzZTtcclxuY29uc3QgbW9kYWxDbG9zZVN0YXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXRpdGxlJyk7XHJcblxyXG4gIGlmIChtb2RhbE9wZW4pIHtcclxuICAgIG1vZGFsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCknO1xyXG4gICAgbW9kYWxPcGVuID0gZmFsc2U7XHJcbiAgICBuZXdUYXNrRm9ybS5yZXNldCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtb2RhbEhlYWRlci50ZXh0Q29udGVudCA9ICdVcGRhdGUgVG9kbyc7XHJcbiAgICBuZXdUYXNrRm9ybS52YWx1ZSA9ICdVcGRhdGUnO1xyXG4gICAgc3VibWl0LmlubmVySFRNTCA9ICd1cGRhdGUnO1xyXG4gICAgbW9kYWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcclxuICAgIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIG1vZGFsT3BlbiA9IHRydWU7XHJcbiAgICBuZXdUYXNrRm9ybS5yZXNldCgpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGVkaXRUb2RvID0gKHRvZG8sIGluZGV4KSA9PiB7XHJcbiAgbW9kYWxDbG9zZVN0YXRlKCk7XHJcbiAgdGl0bGUudmFsdWUgPSB0b2RvLnRpdGxlO1xyXG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICBwcmlvcml0eS52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7XHJcbiAgZGRhdGUudmFsdWUgPSB0b2RvLmRkYXRlO1xyXG4gIHRvZG9pbmRleC52YWx1ZSA9IGluZGV4O1xyXG4gIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRDbGFzcyA9ICgpID0+IHtcclxuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXByaW9yaXR5Jyk7XHJcblxyXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnaGlnaCcpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYnRuLXN1Y2Nlc3MnKTtcclxuICAgIH1cclxuICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnbWVkaXVtJykge1xyXG4gICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdidG4td2FybmluZycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYnRuLWRhbmdlcicpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9ICh0b2RvLCBjYXJkKSA9PiB7XHJcbiAgY29uc3QgZWRpdGluZGV4ID0gdG9kby52YWx1ZTtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3QxID0gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gb2JqZWN0LnNlbGVjdGVkSWQpO1xyXG4gIHNlbGVjdGVkUHJvamVjdDEudGFza3Muc3BsaWNlKGVkaXRpbmRleCwgMSk7XHJcblxyXG4gIGlmIChzdWJtaXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0JykpIHtcclxuICAgIHN1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0Jyk7XHJcbiAgfVxyXG4gIHNhdmUoKTtcclxuICBjYXJkcy5yZW1vdmVDaGlsZChjYXJkKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlclByb2plY3RzID0gKCkgPT4ge1xyXG4gIGNsZWFyTGlzdChwcm9qZWN0cyk7XHJcblxyXG4gIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgcHJvamVjdC5kYXRhc2V0Lmxpc3RJZCA9IGxpc3QuaWQ7XHJcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtZ3JvdXAtaXRlbScpO1xyXG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICBwcm9qZWN0LmlubmVyVGV4dCA9IGxpc3QubmFtZTtcclxuICAgIGlmIChsaXN0LmlkID09PSBvYmplY3Quc2VsZWN0ZWRJZCkge1xyXG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJUYXNrcyA9IChzZWxlY3RlZElkKSA9PiB7XHJcbiAgc2VsZWN0ZWRJZC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmltcG9ydE5vZGUodG9kb1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG4gICAgY29uc3QgY2FyZCA9IHRvZG9MaXN0LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XHJcbiAgICBjb25zdCB0b2RvVGl0bGUgPSB0b2RvTGlzdC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10aXRsZScpO1xyXG4gICAgdG9kb1RpdGxlLmlubmVyVGV4dCA9IHRhc2sudGl0bGU7XHJcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSB0b2RvTGlzdC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1kZXNjcmlwdGlvbicpO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSB0b2RvTGlzdC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1wcmlvcml0eScpO1xyXG4gICAgdG9kb1ByaW9yaXR5LmlubmVyVGV4dCA9IHRhc2sucHJpb3JpdHk7XHJcbiAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICBjb25zdCB0b2RvRGRhdGUgPSB0b2RvTGlzdC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1mb290ZXInKTtcclxuICAgIHRvZG9EZGF0ZS5pbm5lclRleHQgPSBgRHVlIG9uICR7dGFzay5kZGF0ZX1gO1xyXG4gICAgY29uc3QgZWRpdEJ0biA9IHRvZG9MaXN0LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bicpO1xyXG4gICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZElkLnRhc2tzLmluZGV4T2YodGFzayk7XHJcblxyXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVkaXRUb2RvKHRhc2ssIGluZGV4KSk7XHJcbiAgICBjb25zdCBkZWxldGVUYXNrQnRuID0gdG9kb0xpc3QucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idG4nKTtcclxuICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gc2VsZWN0ZWRJZC50YXNrcy5pbmRleE9mKHRhc2spO1xyXG4gICAgICB0b2RvaW5kZXgudmFsdWUgPSBkZWxldGVJbmRleDtcclxuICAgICAgZGVsZXRlVGFzayh0b2RvaW5kZXgsIGNhcmQpO1xyXG4gICAgfSk7XHJcbiAgICBjYXJkcy5hcHBlbmRDaGlsZCh0b2RvTGlzdCk7XHJcbiAgICBhZGRDbGFzcygpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBkZGF0ZSxcclxuICBwcmlvcml0eSxcclxuICB0b2RvaW5kZXgsXHJcbiAgc3VibWl0LFxyXG4gIG1vZGFsLFxyXG4gIG5ld1Rhc2tGb3JtLFxyXG4gIG5ld1Byb2plY3RJbnB1dCxcclxuICBwcm9qZWN0cyxcclxuICB0b2RvVGVtcGxhdGUsXHJcbiAgY2FyZHMsXHJcbiAgbW9kYWxCdG4sXHJcbiAgY2xvc2VNb2RhbCxcclxuICBtb2RhbEhlYWRlcixcclxuICBuZXdQcm9qZWN0Rm9ybSxcclxuICBzcGFuTWVzc2FnZSxcclxuICByZW5kZXJUYXNrcyxcclxuICB2YWxpZGF0ZUZvcm0sXHJcbiAgcmVuZGVyUHJvamVjdHMsXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgZGRhdGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgdG9kb2luZGV4LFxyXG4gIHN1Ym1pdCxcclxuICBtb2RhbCxcclxuICBuZXdUYXNrRm9ybSxcclxuICBuZXdQcm9qZWN0SW5wdXQsXHJcbiAgcHJvamVjdHMsXHJcbiAgbmV3UHJvamVjdEZvcm0sXHJcbiAgY2FyZHMsXHJcbiAgbW9kYWxCdG4sXHJcbiAgY2xvc2VNb2RhbCxcclxuICBtb2RhbEhlYWRlcixcclxuICByZW5kZXJUYXNrcyxcclxuICB2YWxpZGF0ZUZvcm0sXHJcbiAgcmVuZGVyUHJvamVjdHMsXHJcbiAgc3Bhbk1lc3NhZ2UsXHJcbn0gZnJvbSAnLi9kb20nO1xyXG5cclxuaW1wb3J0IHtcclxuICBsaXN0cywgc2F2ZSwgb2JqZWN0LCBjbGVhckxpc3QsXHJcbn0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5pbXBvcnQgQWRkVGFzayBmcm9tICcuL2FkZHRvZG8nO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL2FkZHByb2plY3QnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICByZW5kZXJQcm9qZWN0cygpO1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QuaWQgPT09IG9iamVjdC5zZWxlY3RlZElkKTtcclxuICBpZiAoc2VsZWN0ZWRQcm9qZWN0ID09IG51bGwpIHtcclxuICAgIGNhcmRzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNhcmRzLnN0eWxlLnN0eWxlID0gJyc7XHJcbiAgICBjbGVhckxpc3QoY2FyZHMpO1xyXG4gICAgcmVuZGVyVGFza3Moc2VsZWN0ZWRQcm9qZWN0KTtcclxuICB9XHJcbn07XHJcblxyXG5yZW5kZXIoKTtcclxuY29uc3Qgc2F2ZUFuZFJlbmRlciA9ICgpID0+IHtcclxuICByZW5kZXIoKTtcclxuICBzYXZlKCk7XHJcbn07XHJcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIGlmIChsaXN0cy5sZW5ndGggPT09IDApIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KCdEZWZhdWx0Jyk7XHJcbiAgICBvYmplY3Quc2VsZWN0ZWRJZCA9IHByb2plY3QuaWQ7XHJcbiAgICBsaXN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgc2F2ZUFuZFJlbmRlcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmRlZmF1bHRQcm9qZWN0KCk7XHJcblxyXG5uZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IG5ld1Byb2plY3RJbnB1dC52YWx1ZTtcclxuICBpZiAobmV3UHJvamVjdE5hbWUgPT0gbnVsbCB8fCBuZXdQcm9qZWN0TmFtZSA9PT0gJycpIHJldHVybjtcclxuICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0TmFtZSk7XHJcbiAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gbnVsbDtcclxuICBsaXN0cy5wdXNoKHByb2plY3QpO1xyXG4gIHNhdmVBbmRSZW5kZXIoKTtcclxufSk7XHJcblxyXG5wcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsaScpIHtcclxuICAgIG9iamVjdC5zZWxlY3RlZElkID0gZS50YXJnZXQuZGF0YXNldC5saXN0SWQ7XHJcbiAgICBzYXZlQW5kUmVuZGVyKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlmIChzdWJtaXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0JykpIHtcclxuICAgIGNvbnN0IGVkaXRpbmRleCA9IHRvZG9pbmRleC52YWx1ZTtcclxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdDEgPSBsaXN0cy5maW5kKFxyXG4gICAgICAobGlzdCkgPT4gbGlzdC5pZCA9PT0gb2JqZWN0LnNlbGVjdGVkSWQsXHJcbiAgICApO1xyXG4gICAgY29uc3QgdG9kbyA9IHNlbGVjdGVkUHJvamVjdDEudGFza3NbZWRpdGluZGV4XTtcclxuICAgIHRvZG8udGl0bGUgPSB0aXRsZS52YWx1ZTtcclxuICAgIHRvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZTtcclxuICAgIHRvZG8uZGRhdGUgPSBkZGF0ZS52YWx1ZTtcclxuXHJcbiAgICBzZWxlY3RlZFByb2plY3QxLnRhc2tzW2VkaXRpbmRleF0gPSB0b2RvO1xyXG5cclxuICAgIHN1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0Jyk7XHJcblxyXG4gICAgbmV3VGFza0Zvcm0ucmVzZXQoKTtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSBlbHNlIGlmICh2YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgY29uc3QgdGl0bGUxID0gdGl0bGUudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbjEgPSBkZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgIGNvbnN0IGRkYXRlMSA9IGRkYXRlLnZhbHVlO1xyXG4gICAgY29uc3QgcHJpb3JpdHkxID0gcHJpb3JpdHkudmFsdWU7XHJcbiAgICBjb25zdCBuZXd0b2RvID0gbmV3IEFkZFRhc2sodGl0bGUxLCBkZXNjcmlwdGlvbjEsIGRkYXRlMSwgcHJpb3JpdHkxKTtcclxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QuaWQgPT09IG9iamVjdC5zZWxlY3RlZElkKTtcclxuXHJcbiAgICBzZWxlY3RlZFByb2plY3QudGFza3MucHVzaChuZXd0b2RvKTtcclxuICAgIHNwYW5NZXNzYWdlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgc3Bhbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYWxlcnQnLCAnYWxlcnQtZGFuZ2VyJyk7XHJcbiAgICBuZXdUYXNrRm9ybS5yZXNldCgpO1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbiAgc2F2ZUFuZFJlbmRlcigpO1xyXG59KTtcclxuXHJcbm1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIG1vZGFsSGVhZGVyLnRleHRDb250ZW50ID0gJ05ldyBUb2RvJztcclxuICBzdWJtaXQuaW5uZXJIVE1MID0gJ0FkZCc7XHJcbiAgbmV3VGFza0Zvcm0ucmVzZXQoKTtcclxufSk7XHJcblxyXG5jbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgbmV3VGFza0Zvcm0ucmVzZXQoKTtcclxufSk7XHJcblxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIG1vZGFsd3JpdGUoZSkge1xyXG4gIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBuZXdUYXNrRm9ybS5yZXNldCgpO1xyXG4gIH1cclxufTtcclxuIiwiY29uc3QgTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSA9ICd0b2RvLmxpc3RzJztcclxuY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9JRF9LRVkgPSAndG9kby5zZWxlY3RlZElkJztcclxuXHJcbmNvbnN0IGxpc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZKSkgfHwgW107XHJcblxyXG5jb25zdCBvYmplY3QgPSB7XHJcbiAgc2VsZWN0ZWRJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9JRF9LRVkpLFxyXG59O1xyXG5cclxuY29uc3Qgc2F2ZSA9ICgpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZLCBKU09OLnN0cmluZ2lmeShsaXN0cykpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfU0VMRUNURURfSURfS0VZLCBvYmplY3Quc2VsZWN0ZWRJZCk7XHJcbn07XHJcblxyXG5jb25zdCBjbGVhckxpc3QgPSAobGlzdCkgPT4ge1xyXG4gIHdoaWxlIChsaXN0LmZpcnN0Q2hpbGQpIHtcclxuICAgIGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5maXJzdENoaWxkKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGxpc3RzLCBvYmplY3QsIHNhdmUsIGNsZWFyTGlzdCxcclxufTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICBtYXJnaW46IDE1JSBhdXRvO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLDhCQUE4QixFQUFFLG1CQUFtQjtFQUNuRCxvQ0FBb0MsRUFBRSxxQkFBcUI7RUFDM0QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICBtYXJnaW46IDE1JSBhdXRvO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
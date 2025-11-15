import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");
const generateTodo = (data) => {
  const todoItem = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todoItem.getView();
  return todoElement;
};
const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = generateTodo(item);
    return todo;
  },
  containerSelector: ".todos__list",
});
section.renderItems(initialTodos);

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const id = uuidv4();
    const newTodo = {
      id,
      name: inputValues.name,
      date: new Date(inputValues.date),
      complete: false,
    };

    const todoElement = generateTodo(newTodo);
    section.addItem(todoElement);

    todoCounter.updateTotal(true);

    addTodoPopup.close();
  },
});

//const openModal = (modal) => {
//modal.classList.add("popup_visible");
//};

//const openModal = (modal) +> {
// modal.classList.add("popup_visible");
//};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};
function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
    todoCounter.updateTotal(false);
  } else {
    todoCounter.updateTotal(false);
  }
}

function handleEscapeClose(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".popup_visible");
    if (openedModal) {
      openedModal.classList.remove("popup_visible");
      document.removeEventListener("keyup", handleEscapeClose);
    }
  }
}

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
  document.addEventListener("keyup", handleEscapeClose);
});

// addTodoCloseBtn.addEventListener("click", () => {
// addTodoPopup.closes();
//});

//addTodoForm.addEventListener("submit", (evt) => {
//evt.preventDefault();
//const name = evt.target.name.value;
//const dateInput = evt.target.date.value;

//const date = new Date(dateInput);
// date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//const id = uuidv4();
//const values = { name, date, id };
//const todo = generateTodo(values);
//todosList.append(todo); // use additem method instead
//closeModal(addTodoPopupEl);

addTodoPopup.setEventListeners();

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();

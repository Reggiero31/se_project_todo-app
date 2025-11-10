import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidation.js";
import PopupwithForm from "../components/popupwithForm.js";
import Section from "../components/section.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const todocounter = TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupwithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (InputValues) => {
    // TODO - move code from existing submission handler to here
  },
});

addTodoPopup.setEventListeners();

const section = new Section({
  items: [], //pass initial todos
  renderer: () => {
    // TODO write the function
    // generate todo item
    // add it to the todo list
    // refer to the forEach loop in this file
  },
  containerSelector: "todo__list",
});
// call section instance's renderItems method
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
  todocounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if(completed) {
    todocounter.updateCompleted(false);
  };
}

const generateTodo = (data) => {
  const todoItem = new Todo(data, "#todo-template" , handleCheck , handleDelete);
  const todoElement = todoItem.getView();
  return todoElement;
};

function handleEscapeClose(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector("modal_is-opened");
    // find the currently opened modal
    // and close it
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

//addTodoPopup.close();
//});

//initialTodos.forEach((item) => {
// const todo = generateTodo(item);
//todosList.append(todo); // use additem method instead
//});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();

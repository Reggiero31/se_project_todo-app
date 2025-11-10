class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  handleEscapeClose() {
    if (Evt.key === "Escape") {
      // TODO - call the close method
    // TODO- how to set a function parementer
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup",  this.handleEscapeClose);
  }

  close() {
    // TODO - remove the class from the popup element
    console.log("close method called");
    // TODO - remove the escape listener
  }
  setEventListeners() {
    // this one listener will handler close button and modal listener
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("mousedown", this.close);
    // if the event targets classList contains "popup__close" or "popup"
    // then close the modal
  }
}

export default Popup;

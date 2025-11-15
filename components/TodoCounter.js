class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._total = todos.length;
    this._completed = todos.filter((todo) => todo.completed).length;
    this._updateText();
  }


  updateCompleted = (increment) => {
    this._completed += increment ? 1 : -1;
    this._updateText();
  };

  // Call this when a to-do is deleted, or when a to-do is
  // created via the form.
  updateTotal = (increment) => {
    this._total += increment ? 1 : -1;
    this._updateText();
  };

  _updateText() {
    if (this._element) {
      this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
    } else {
      console.warn("TodoCounter");
    }
  }
  _update(total, completed) {
    this._total = total;
    this._completed = completed;
    this._updateText();
  }
}

export default TodoCounter;

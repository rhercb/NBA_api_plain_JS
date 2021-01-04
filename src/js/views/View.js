export default class View {
  _data; // private variable decleration
  _loaderParent = document.querySelector("body");
  _body = document.getElementById("body");

  /**
   * JSDoc
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered
   * @param {boolean} [render=true] If false, create markup string insstead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    // Update algorithm that, works only on changes elements not whole html

    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup); // converts string into real DOM objects
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this._parentElement.querySelectorAll("*"));
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // Updates changed texts
      // isEqualNode check
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curEl.textContent = newEl.textContent;
      }
      // Updates changed attributes
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach((attr) =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    this._loaderParent.classList.add("no-scoll");
    const markup = `<div id="spinner" class="spinner"></div>`;
    this._loaderParent.insertAdjacentHTML("afterbegin", markup);
  }

  removeSpinner() {
    document.getElementById("spinner").remove();
    this._loaderParent.classList.remove("no-scoll");
  }

  renderError(message = this._errorMessage) {
    const markup = `<div class="error"><p>${message}</p></div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  /**
   * Function that hides and shows blocks with certain ID
   * @param {String} elementID Element ID from DOM
   */
  renderBodyElements(elementID) {
    const elementList = this._body.children;
    for (let item of elementList) {
      item.id === elementID
        ? item.classList.remove("hidden")
        : item.classList.add("hidden");
    }
  }
}

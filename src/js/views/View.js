export default class View {
  _data; // private variable decleration
  _loaderParent = document.querySelector("body");

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
}

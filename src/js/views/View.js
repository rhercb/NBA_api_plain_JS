export default class View {
  _data; // private variable decleration

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
    const markup = `<div class="spinner"><svg><use href="../../assets/nba-logo.svg"></use></svg></div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `<div class="error"><p>${message}</p></div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

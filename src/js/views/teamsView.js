import View from "./View";

class TeamsView extends View {
  _parentElement = document.querySelector(".body");

  _generateMarkup() {
    return this._data
      .map((results) => this._generateSingleMarkup(results))
      .join("");
  }

  _generateSingleMarkup(data) {
    return `<div>${data.city}</div>`;
  }
}

export default new TeamsView();

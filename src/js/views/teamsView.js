import View from "./View";

class TeamsView extends View {
  _parentElement = document.querySelector(".body__teams");

  _generateMarkup() {
    return this._data
      .map((results) => this._generateSingleMarkup(results))
      .join("");
  }

  _generateSingleMarkup(data) {
    return `<div data-team-key="${data.key}" class="team__wrapper col-12" style="background-color: #${data.primaryColor}70">
                <div class="team__image">
                    <img src="${data.logo}"/>
                </div>
                <div class="team__info">
                    <div class="team__name">
                        <p class="team__name--city">${data.city}</p>
                        <p class="team__name--name">${data.name}</p>
                    </div>
                </div>
            </div>`;
  }
}

export default new TeamsView();

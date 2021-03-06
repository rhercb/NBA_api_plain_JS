import View from "../View";

class TeamsView extends View {
  _parentElement = document.querySelector(".teams__list--wrapper");
  _errorMessage = "Sorry, but we could not get a data from API call.";

  addHandlerShowTeamPlayers(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const teamElement = e.target.closest(".team__wrapper");
      if (!teamElement) return;
      const teamKey = teamElement.dataset.teamKey;
      handler(teamKey);
    });
  }

  _generateMarkup() {
    return this._data
      .map((results) => this._generateSingleMarkup(results))
      .join("");
  }

  _generateSingleMarkup(data) {
    return `<a href="#/teams/${data.key}" data-team-key="${data.key}" class="team__wrapper ${data.key} col-mobile-4 col-tablet-4 col-desktop-3">
                <div class="team__image">
                    <img src="${data.logo}"/>
                </div>
                <div class="team__info">
                    <div class="team__name">
                        <p class="team__name--city">${data.city}</p>
                        <p class="team__name--name">${data.name}</p>
                    </div>
                </div>
            </a>`;
  }

  /**
   * Hides element with specific key
   * @param {String} key
   */
  hideElement(key) {
    const elementList = this._parentElement.children;
    for (let item of elementList) {
      item.dataset.teamKey === key ? item.classList.add("hidden") : "";
    }
  }

  /**
   * Shows element with specific key
   * @param {String} key
   */
  showElement(key) {
    const elementList = this._parentElement.children;
    for (let item of elementList) {
      item.dataset.teamKey === key ? item.classList.remove("hidden") : "";
    }
  }
}

export default new TeamsView();

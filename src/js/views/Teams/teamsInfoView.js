import View from "../View";

class TeamsView extends View {
  _parentElement = document.getElementById("team-info");
  _errorMessage = "Sorry, but we could not get infomation about this team";

  _generateMarkup() {
    return this._data
      .map((results) => this._generatePlayersMarkup(results))
      .join("");
  }

  _generatePlayersMarkup(data) {
    return `<a href="/#/players/${data.id}" class="player__wrapper col-3">
                <div class="player__image">
                    <img src="${data.photo}">
                </div>                
                <div class="player__info">
                    <div class="player__info--about"> 
                        <p class="player__info--position">${data.position}</p>
                        <p class="player__image--jersey">${data.jersey}</p>
                    </div>
                    <div class="player__info--data">
                        <p class="player__info--data-name">${data.name}</p>
                        <p class="player__info--data-surname">${data.surname}</p>
                    </div>
                </div>
            </a>`;
  }
}

export default new TeamsView();

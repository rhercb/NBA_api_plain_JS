import View from "../View";

class PlayerInfoView extends View {
  _parentElement = document.querySelector(".body__teams");
  _errorMessage = "Sorry, but we could not get infomation about this player";

  _generateMarkup() {
    return `<div class="player__wrapper col-3">
                <div class="player__image">
                    <img src="${this._data.photo}">
                </div>                
            </div>`;
  }
}

export default new PlayerInfoView();

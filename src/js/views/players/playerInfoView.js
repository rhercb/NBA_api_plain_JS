import View from "../View";

class PlayerInfoView extends View {
  _parentElement = document.getElementById("player-info");
  _errorMessage = "Sorry, but we could not get infomation about this player";

  _generateMarkup() {
    return `<div class=" ${this._data.team}">
                <div class="">
                    <img src="${this._data.photo}">
                </div>                
            </div>`;
  }
}

export default new PlayerInfoView();

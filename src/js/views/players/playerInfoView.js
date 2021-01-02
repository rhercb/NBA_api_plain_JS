import View from "../View";

import * as helper from "../../helper";

class PlayerInfoView extends View {
  _parentElement = document.querySelector(".player-info");
  _errorMessage = "Sorry, but we could not get infomation about this player";

  _generateMarkup() {
    return `
      <div class="player-info-banner">
        <div class="about-player container">
          <div class="player-number">#${this._data.jersey}</div>
          <div class="player-image">
            <img src="${this._data.photo}"/>
          </div>
          <div class="player-info">
            <div class="player-position">${this._data.position}</div>
            <p class="player-info--name">${this._data.name}</p>
            <p class="player-info--surname">${this._data.surname}</p>
          </div>
          <div class="player-desc">
            <p class="player-birthPlace"><span class="player-desc--before">Birth place:</span> ${
              this._data.birthCity
            }</p>
            <p class="player-date"><span class="player-desc--before">Birth date:</span> ${helper.convertDate(
              this._data.birth
            )}</p>
            <p class="player-height"><span class="player-desc--before">Height:</span> ${helper.convertHeight(
              this._data.height
            )}</p>
            <p class="player-weight"><span class="player-desc--before">Weight:</span> ${helper.convertWeight(
              this._data.weight
            )}</p>
            <p class="player-experience"><span class="player-desc--before">Years in league:</span> ${
              this._data.experience
            }</p>
            <p class="player-sallary"><span class="player-desc--before">Salary:</span> ${helper.convertSalary(
              this._data.salary
            )}</p>
          </div>
        </div>
      </div>
    `;
  }
}

export default new PlayerInfoView();

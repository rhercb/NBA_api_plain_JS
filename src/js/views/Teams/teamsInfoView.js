import View from "../View";

import * as helper from "../../helper";

class TeamsView extends View {
  _parentElement = document.querySelector(".team__player--wrapper");
  _errorMessage = "Sorry, but we could not get infomation about this team";

  _generateMarkup() {
    return this._data
      .map((results) => this._generatePlayersMarkup(results))
      .join("");
  }

  _generatePlayersMarkup(data) {
    this._parentElement.classList.add(data.team);

    return `<div class="player__wrapper ${data.team}">
              <div class="team__player--header">                    
                <p class="player__about--jersey">${data.jersey}</p>
                <div class="team__player--data">
                    <p class="player__data--data-name">${data.name}</p>
                    <p class="player__data--data-surname">${data.surname}</p>
                </div>
                <p class="player__about--position">${helper.convertPlayerPositionCategory(
                  data.positionCategory
                )}</p>
              </div>            
              <div class="player__image">
                  <img src="${data.photo}">
              </div>                
              <div class="team__player--footer">
                  <ul class="player__info--list">
                    <li>
                      <span>Height</span>
                      <span>${helper.convertHeight(data.height)}</span>
                    </li>
                    <li>
                      <span>Position</span>
                      <span>${helper.convertPlayerPositionCategory(
                        data.position
                      )}</span>
                    </li>
                    <li>
                      <span>Date of birth</span>
                      <span>${helper.convertDate(data.birth)}</span>
                    </li>
                    <li>
                      <span>Years pro</span>
                      <span>${data.experience}</span>
                    </li>
                    <li>
                      <span>Weight</span>
                      <span>${helper.convertWeight(data.weight)}</span>
                    </li>
                    <li>
                      <span>From</span>
                      <span>${data.birthCity}</span>
                    </li>
                  </ul>
                  <a href="/#/players/${
                    data.id
                  }" class="player__info--more"><span>About Player</span></a>
              </div>
          </div>`;
  }
}

export default new TeamsView();

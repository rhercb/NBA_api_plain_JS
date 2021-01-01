import View from "./View";

class PlayersView extends View {
  _parentElement = document.querySelector(".body__teams");

  addHandlerShowTeamPlayers(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const teamElement = e.target.closest(".team__wrapper");
      if (!teamElement) return;
      const teamKey = teamElement.dataset.teamKey;
      handler(teamKey);
    });
  }
}

export default new PlayersView();

import View from "../View";

class TeamsSortingView extends View {
  _parentElement = document.querySelector(".teams__list--sorting");

  addSortingHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".list-button");
      if (!btn) return;
      //   btn.classList.add("active");
      let conference = btn.dataset.show;

      //   btn.classList.contains("active") ? (data = conference) : (data = "");
      handler(conference);
    });
  }
}

export default new TeamsSortingView();

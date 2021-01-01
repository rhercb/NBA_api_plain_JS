import Router from "./Router";

import teamsController from "../controllers/teamsController";

const router = new Router({
  mode: "hash",
  root: "/",
});

router
  .add(/player\/(.*)/, (id) => {
    console.log(`player with id: ${id}`);
  })
  .add(/products\/(.*)\/specification\/(.*)/, (id, specification) => {
    alert(`products: ${id} specification: ${specification}`);
  })
  .add("", () => {
    teamsController.init;
  });

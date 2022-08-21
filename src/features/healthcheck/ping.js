import { addPlug } from "../../lib/plug";
import Router from "@koa/router";

const injector = (app) => {
  const router = new Router();

  app.use(router.routes()).use(router.allowedMethods());

  router.get("/ping", (ctx) => {
    ctx.body = "pong";
    return;
  });
};

addPlug(injector);

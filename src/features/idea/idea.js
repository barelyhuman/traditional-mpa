import { addPlug } from "../../lib/plug";
import Router from "@koa/router";
import { marked } from "marked";
import { getTemplate } from "../../lib/get-template";
import { IndexView } from ".";
import {render} from "preact-render-to-string";
import { NewView } from "./new";
import { ShowView } from "./show";

const injector = (app) => {
  const router = new Router();

  app.keys = [process.env.SESSION_SECRET_1, process.env.SESSION_SECRET_2];

  app.use(router.routes()).use(router.allowedMethods());

  router

    .get("/ideas/new", async (ctx) => {
      ctx.body = render(
        NewView({
          _csrf: ctx.state._csrf,
        })
      );
    })

    .get("/ideas", async (ctx) => {
      const data = await fetchAll({
        db: ctx.db,
      });

      ctx.body = render(IndexView({ ideas: data }));
    })

    .get("/ideas/:id", async (ctx) => {
      const { id } = ctx.request.params;
      const idea = await fetchById({
        db: ctx.db,
        id,
      });

      ctx.body = render(
        ShowView({
          idea: idea,
        })
      );
    })

    .post("/ideas", async (ctx) => {
      const body = ctx.request.body;

      const encodedDescription = Buffer.from(marked(body.description)).toString(
        "base64"
      );

      await create({
        db: ctx.db,
        name: body.name,
        description: encodedDescription,
        source: body.source,
      });

      ctx.redirect("/ideas");
    });
};

async function create({ db, name, description, source } = {}) {
  let trx;
  try {
    trx = await db.transaction();
    await trx("ideas").insert({
      name,
      description,
      source,
    });
    await trx.commit();
  } catch (err) {
    trx && (await trx.rollback());
    throw err;
  }
}

async function fetchAll({ db } = {}) {
  const ideas = await db("ideas").where({});
  return ideas;
}

async function fetchById({ db, id } = {}) {
  const idea = await db("ideas")
    .where({
      id,
    })
    .first();

  if (idea.description) {
    idea.descriptionHTML = Buffer.from(idea.description, "base64").toString(
      "ascii"
    );
  }

  return idea;
}

addPlug(injector);

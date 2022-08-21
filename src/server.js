import Koa from "koa";
import { plug } from "./lib/plug";
import bodyParser from "koa-bodyparser";
import path from "path";
import dotenv from "dotenv";
import CSRF from "koa-csrf";
import { db } from "./lib/db";
import convert from "koa-convert";
import koaSession from "koa-generic-session";

// import features
import "./features/healthcheck/ping";
import "./features/idea/idea";

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

const PORT = process.env.PORT || 3000;

const app = new Koa();

app.context.db = db();
app.use(bodyParser());
app.use(convert(koaSession()));
app.use(new CSRF());

// invoke all features
plug(app);

app.listen(PORT, () => {
  console.log(">> Listening on:", PORT);
});

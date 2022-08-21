import _ from "lodash";
import { readFileSync } from "fs";
import { join } from "path";

export function getTemplate(relto,name) {
  const templ = readFileSync(join(relto, name), "utf-8");
  return _.template(templ);
}

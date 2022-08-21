const plugs = [];

export function plug(app) {
  plugs.forEach((x) => {
    x(app)
  });
}

export function addPlug(fn) {
  plugs.push(fn);
}

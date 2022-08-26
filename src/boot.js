const { register } = require("esbuild-register/dist/node");
const { unregister } = register({
  jsxFactory:"h",
  jsxFragment:"h",
});
require("./server");
unregister();

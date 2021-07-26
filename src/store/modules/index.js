const files = require.context("./", false, /\.js$/);

const modules = {};

files.keys().map((k) => {
  if (k === "./index.js") return;
  const str = k.slice(2, -3);
  modules[str] = files(k).default;
});

export default {
  ...modules,
};

/**
 * Meta builder config
 * @see https://github.com/studiometa/webpack-config#readme
 */
module.exports = {
  src: ["./src/js/app.js", "./src/css/**/[!_]*.scss"],
  dist: "./dist/",
  public: "/dist/",
  watch: ["*.html"]
};

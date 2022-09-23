const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [],
    },

    /* 设置scss自动注入 */
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        /* 定义自动注入的路径 */
        path.join(__dirname, "./src/assets/styles/variables.scss"),
        path.join(__dirname, "./src/assets/styles/mixins.scss"),
      ],
    },
  },
});

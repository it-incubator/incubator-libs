import { defineConfig } from "tsup";

const { sassPlugin, postcssModules } = require("esbuild-sass-plugin");

export default defineConfig({
  esbuildPlugins: [
    sassPlugin({
      type: "style",
      transform: postcssModules({}),
    }),
  ],
});

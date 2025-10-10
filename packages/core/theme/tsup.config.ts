import {defineConfig} from "tsup";

export default defineConfig((options) => ({
  ...options,
  clean: true,
  target: "es2019",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
}));

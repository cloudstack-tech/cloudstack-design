import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/packages/index.ts"],
  format: ["cjs", "esm"],
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "react/jsx-dev-runtime",
  ],
  loader: {
    ".tsx": "tsx",
  },
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
    options.jsx = "automatic";
    options.jsxImportSource = "react";
  },
});

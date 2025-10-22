import {createRequire} from "node:module";
import {dirname, join} from "node:path";
import type {StorybookConfig} from "@storybook/nextjs-vite";

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: [
    "./welcome.mdx",
    // Only include stories from component source directories, not from node_modules
    "../../../packages/components/*/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../../packages/components/*/stories/**/*.mdx",
    // "../../../packages/core/theme/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs-vite"),
    options: {},
  },
  staticDirs: ["../public"],
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

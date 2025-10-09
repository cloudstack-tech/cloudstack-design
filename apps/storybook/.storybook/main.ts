import type {StorybookConfig} from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "./welcome.mdx",
    "../../../packages/components/**/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../../packages/core/theme/**/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["..\\public"],
};
export default config;

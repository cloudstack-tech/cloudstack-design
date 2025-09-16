import type { StorybookConfig } from "@storybook/nextjs-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["..\\public"],
  viteFinal: async (config) => {
    // 添加路径别名以匹配 Next.js 配置
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, "../src"),
    };

    // 确保 CSS 配置支持 PostCSS
    config.css = config.css || {};
    config.css.postcss = resolve(__dirname, "../postcss.config.mjs");

    return config;
  },
};
export default config;

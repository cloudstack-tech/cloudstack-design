import {createRequire} from "node:module";
import {dirname, join} from "node:path";
import type {StorybookConfig} from "@storybook/nextjs-vite";
import remarkGfm from "remark-gfm";

const require = createRequire(import.meta.url);

/**
 * FIXME: 修改 moduleResolution 为 bundler 后，Storybook 文档案例无法正常构建，需要修改为 node
 *
 * ✗ Build failed in 626ms
 * => Failed to build the preview
 * [vite]: Rollup failed to resolve import "@storybook/addon-docs/blocks" from "D:/rokuko/cloudstack-design/packages/components/flex/stories/flex.mdx".
 * This is most likely unintended because it can break your application at runtime.
 * If you do want to externalize this module explicitly add it to
 * `build.rollupOptions.external`
 */

const config: StorybookConfig = {
  stories: [
    "./welcome.mdx",
    // Only include stories from component source directories, not from node_modules
    "../../../packages/components/*/stories/**/*.mdx",
    "../../../packages/components/*/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../../../packages/core/theme/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    // workaround: https://storybook.js.org/docs/writing-docs/mdx#markdown-tables-arent-rendering-correctly
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
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

// see: https://storybook.js.org/docs/faq#how-do-i-fix-module-resolution-in-special-environments
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

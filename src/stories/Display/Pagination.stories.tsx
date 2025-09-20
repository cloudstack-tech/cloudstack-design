import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Display 展示/Pagination 分页",
} satisfies Meta;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};

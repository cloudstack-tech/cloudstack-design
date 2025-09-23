import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Layout 布局/Grid 网格布局",
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

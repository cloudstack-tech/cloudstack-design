import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Layout 布局/Space 间距",
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

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Resizable from "./resizable";

const meta = {
  title: "Layout 布局/Resizable 分割面板",
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  component: Resizable,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

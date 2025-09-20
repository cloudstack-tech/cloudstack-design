import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Data 数据/Input Group 输入框组",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

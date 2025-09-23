import { Spin } from "@/packages/components";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Feedback 反馈/Spin 加载中",
  component: Spin,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Spin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

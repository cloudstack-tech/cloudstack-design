import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toast } from "@/packages/components";

const meta = {
  title: "Feedback 反馈/Toast 吐司",
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;

export const Default: StoryObj<typeof Toast> = {
  args: {
    children: "Toast",
  },
};

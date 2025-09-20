import { Progress } from "@/packages/components";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Display 展示/Progress 进度",
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: "Progress",
  },
};

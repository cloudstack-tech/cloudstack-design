import { Skeleton } from "@/packages/components";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Feedback 反馈/Skeleton 骨架屏",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: "Skeleton",
  },
};

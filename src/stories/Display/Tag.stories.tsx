import { Tag } from "@/packages/components";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Display 展示/Tag 标签",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tag>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: "Tag",
  },
};

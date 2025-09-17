import { Divider } from "@/packages/components";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Layout/Divider",
  parameters: {
    layout: "centered",
  },
  component: Divider,
  //   tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {},
};

export const Horizontal: Story = {
  args: {},
};

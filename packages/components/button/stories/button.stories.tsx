import {Button} from "../src";
import type {Meta, StoryFn, StoryObj} from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

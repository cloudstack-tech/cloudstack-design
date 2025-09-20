import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Display 展示/Accordion 手风琴",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {},
    variant: {},
  },
} satisfies Meta;

export default meta;

export const Default: StoryObj<typeof meta> = {};

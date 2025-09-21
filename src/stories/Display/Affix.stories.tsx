import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Display 展示/Affix 固定",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta;

export default meta;

export const Default: StoryObj<typeof meta> = {};

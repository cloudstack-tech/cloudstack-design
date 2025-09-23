import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Data 数据/AutoComplete 自动补全",
} satisfies Meta;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};

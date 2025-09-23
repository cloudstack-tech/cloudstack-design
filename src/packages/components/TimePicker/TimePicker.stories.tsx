import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Data 数据/TimePicker 时间选择",
} satisfies Meta;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};

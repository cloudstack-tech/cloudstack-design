import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Radio } from "@/packages/components";

export default {
  title: "Data 数据/Radio 单选框",
  component: Radio,
} satisfies Meta<typeof Radio>;

export const Default: StoryObj<typeof Radio> = {
  args: {
    children: "Radio",
  },
};

import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Slider } from "@/packages/components";

export default {
  title: "Data 数据/Slider 滑块",
  component: Slider,
} satisfies Meta<typeof Slider>;

export const Default: StoryObj<typeof Slider> = {
  args: {
    children: "Slider",
  },
};

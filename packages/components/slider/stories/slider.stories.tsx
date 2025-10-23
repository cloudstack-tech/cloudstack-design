import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {slider} from "@cloudstack-design/theme";

import {Slider, SliderProps} from "../src";

export default {
  title: "Components/Data Entry 数据输入/Slider 滑动输入条",
  component: Slider,
  argTypes: {},
} as Meta<typeof Slider>;

const defaultProps = {
  ...slider.defaultVariants,
};

const Template = (args: SliderProps) => <Slider {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

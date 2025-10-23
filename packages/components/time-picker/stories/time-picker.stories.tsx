import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {timePicker} from "@cloudstack-design/theme";

import {TimePicker, TimePickerProps} from "../src";

export default {
  title: "Components/Data Entry 数据输入/TimePicker 时间选择器",
  component: TimePicker,
  argTypes: {},
} as Meta<typeof TimePicker>;

const defaultProps = {
  ...timePicker.defaultVariants,
};

const Template = (args: TimePickerProps) => <TimePicker {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {datePicker} from "@cloudstack-design/theme";

import {DatePicker, DatePickerProps} from "../src";

export default {
  title: "Components/Data Entry 数据输入/DatePicker 日期选择器",
  component: DatePicker,
  argTypes: {},
} as Meta<typeof DatePicker>;

const defaultProps = {
  ...datePicker.defaultVariants,
};

const Template = (args: DatePickerProps) => <DatePicker {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

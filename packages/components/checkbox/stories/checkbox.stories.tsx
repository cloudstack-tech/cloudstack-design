import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {checkbox} from "@cloudstack-design/theme";

import {Checkbox, CheckboxProps} from "../src";

export default {
  title: "Components/Data Entry 数据输入/Checkbox 复选框",
  component: Checkbox,
  argTypes: {},
} as Meta<typeof Checkbox>;

const defaultProps = {
  ...checkbox.defaultVariants,
};

const Template = (args: CheckboxProps) => <Checkbox {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

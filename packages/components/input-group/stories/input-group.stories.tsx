import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {inputGroup} from "@cloudstack-design/theme";

import {InputGroup, InputGroupProps} from "../src";

export default {
  title: "Components/Data Entry 数据输入/InputGroup 输入框组",
  component: InputGroup,
  argTypes: {},
} as Meta<typeof InputGroup>;

const defaultProps = {
  ...inputGroup.defaultVariants,
};

const Template = (args: InputGroupProps) => <InputGroup {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

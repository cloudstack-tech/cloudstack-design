import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {label} from "@cloudstack-design/theme";

import {Label, LabelProps} from "../src";

export default {
  title: "Components/Data Entry 数据输入/Label 标签",
  component: Label,
  argTypes: {},
} as Meta<typeof Label>;

const defaultProps = {
  ...label.defaultVariants,
};

const Template = (args: LabelProps) => <Label {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

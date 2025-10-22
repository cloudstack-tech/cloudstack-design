import React from "react";
import {Meta} from "@storybook/react";
import { checkbox } from "@cloudstack-design/theme";

import { Checkbox, CheckboxProps } from "../src";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
  },
} as Meta<typeof Checkbox>;

const defaultProps = {
  ...checkbox.defaultVariants,
};

const Template = (args: CheckboxProps) => <Checkbox {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
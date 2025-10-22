import React from "react";
import {Meta} from "@storybook/react";
import { switch } from "@cloudstack-design/theme";

import { Switch, SwitchProps } from "../src";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
  },
} as Meta<typeof Switch>;

const defaultProps = {
  ...switch.defaultVariants,
};

const Template = (args: SwitchProps) => <Switch {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
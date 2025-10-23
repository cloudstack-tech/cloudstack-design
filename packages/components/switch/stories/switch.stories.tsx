import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {switchComponent} from "@cloudstack-design/theme";
import {Switch, SwitchProps} from "../src";

export default {
  title: "Components/Data Entry 数据输入/Switch 开关",
  component: Switch,
  argTypes: {},
} as Meta<typeof Switch>;

const defaultProps = {
  ...switchComponent.defaultVariants,
};

const Template = (args: SwitchProps) => <Switch {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

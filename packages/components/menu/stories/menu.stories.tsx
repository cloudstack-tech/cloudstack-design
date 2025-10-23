import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {menu} from "@cloudstack-design/theme";

import {Menu, MenuProps} from "../src";

export default {
  title: "Components/Navigation 导航/Menu 菜单",
  component: Menu,
  argTypes: {},
} as Meta<typeof Menu>;

const defaultProps = {
  ...menu.defaultVariants,
};

const Template = (args: MenuProps) => <Menu {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

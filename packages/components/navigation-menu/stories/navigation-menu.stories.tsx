import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {navigationMenu} from "@cloudstack-design/theme";

import {NavigationMenu, NavigationMenuProps} from "../src";

export default {
  title: "Components/Navigation 导航/NavigationMenu 导航菜单",
  component: NavigationMenu,
  argTypes: {},
} as Meta<typeof NavigationMenu>;

const defaultProps = {
  ...navigationMenu.defaultVariants,
};

const Template = (args: NavigationMenuProps) => <NavigationMenu {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {dropdown} from "@cloudstack-design/theme";

import {Dropdown, DropdownProps} from "../src";

export default {
  title: "Components/Navigation 导航/Dropdown 下拉菜单",
  component: Dropdown,
  argTypes: {},
} as Meta<typeof Dropdown>;

const defaultProps = {
  ...dropdown.defaultVariants,
};

const Template = (args: DropdownProps) => <Dropdown {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

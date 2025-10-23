import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {drawer} from "@cloudstack-design/theme";

import {Drawer, DrawerProps} from "../src";

export default {
  title: "Components/Feedback 反馈/Drawer 抽屉",
  component: Drawer,
  argTypes: {},
} as Meta<typeof Drawer>;

const defaultProps = {
  ...drawer.defaultVariants,
};

const Template = (args: DrawerProps) => <Drawer {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

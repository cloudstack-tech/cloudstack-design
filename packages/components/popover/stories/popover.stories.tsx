import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {popover} from "@cloudstack-design/theme";

import {Popover, PopoverProps} from "../src";

export default {
  title: "Components/Data Display 数据展示/Popover 气泡卡片",
  component: Popover,
  argTypes: {},
} as Meta<typeof Popover>;

const defaultProps = {
  ...popover.defaultVariants,
};

const Template = (args: PopoverProps) => <Popover {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

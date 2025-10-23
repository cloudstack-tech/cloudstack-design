import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {tooltip} from "@cloudstack-design/theme";

import {Tooltip, TooltipProps} from "../src";

export default {
  title: "Components/Data Display 数据展示/Tooltip 文字提示",
  component: Tooltip,
  argTypes: {},
} as Meta<typeof Tooltip>;

const defaultProps = {
  ...tooltip.defaultVariants,
};

const Template = (args: TooltipProps) => <Tooltip {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

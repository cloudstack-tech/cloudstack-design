import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {badge} from "@cloudstack-design/theme";

import {Badge, BadgeProps} from "../src";

export default {
  title: "Components/Data Display 数据展示/Badge 徽章",
  component: Badge,
  argTypes: {},
} as Meta<typeof Badge>;

const defaultProps = {
  ...badge.defaultVariants,
};

const Template = (args: BadgeProps) => <Badge {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

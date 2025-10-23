import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {descriptions} from "@cloudstack-design/theme";

import {Descriptions, DescriptionsProps} from "../src";

export default {
  title: "Components/Data Display 数据展示/Descriptions 描述列表",
  component: Descriptions,
  argTypes: {},
} as Meta<typeof Descriptions>;

const defaultProps = {
  ...descriptions.defaultVariants,
};

const Template = (args: DescriptionsProps) => <Descriptions {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

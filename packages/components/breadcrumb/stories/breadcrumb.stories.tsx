import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {breadcrumb} from "@cloudstack-design/theme";

import {Breadcrumb, BreadcrumbProps} from "../src";

export default {
  title: "Components/Navigation 导航/Breadcrumb 面包屑",
  component: Breadcrumb,
  argTypes: {},
} as Meta<typeof Breadcrumb>;

const defaultProps = {
  ...breadcrumb.defaultVariants,
};

const Template = (args: BreadcrumbProps) => <Breadcrumb {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {pagination} from "@cloudstack-design/theme";

import {Pagination, PaginationProps} from "../src";

export default {
  title: "Components/Navigation 导航/Pagination 分页",
  component: Pagination,
  argTypes: {},
} as Meta<typeof Pagination>;

const defaultProps = {
  ...pagination.defaultVariants,
};

const Template = (args: PaginationProps) => <Pagination {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {table} from "@cloudstack-design/theme";

import {Table, TableProps} from "../src";

export default {
  title: "Components/Data Display 数据展示/Table 表格",
  component: Table,
  argTypes: {},
} as Meta<typeof Table>;

const defaultProps = {
  ...table.defaultVariants,
};

const Template = (args: TableProps) => <Table {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

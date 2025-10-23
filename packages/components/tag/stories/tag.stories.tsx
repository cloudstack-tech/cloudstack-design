import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {tag} from "@cloudstack-design/theme";

import {Tag, TagProps} from "../src";

export default {
  title: "Components/Data Display 数据展示/Tag 标签",
  component: Tag,
  argTypes: {},
} as Meta<typeof Tag>;

const defaultProps = {
  ...tag.defaultVariants,
};

const Template = (args: TagProps) => <Tag {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

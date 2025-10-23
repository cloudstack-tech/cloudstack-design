import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {skeleton} from "@cloudstack-design/theme";

import {Skeleton, SkeletonProps} from "../src";

export default {
  title: "Components/Data Display 数据展示/Skeleton 骨架屏",
  component: Skeleton,
  argTypes: {},
} as Meta<typeof Skeleton>;

const defaultProps = {
  ...skeleton.defaultVariants,
};

const Template = (args: SkeletonProps) => <Skeleton {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

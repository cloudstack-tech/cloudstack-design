import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {progress} from "@cloudstack-design/theme";

import {Progress, ProgressProps} from "../src";

export default {
  title: "Components/Data Display 数据展示/Progress 进度条",
  component: Progress,
  argTypes: {},
} as Meta<typeof Progress>;

const defaultProps = {
  ...progress.defaultVariants,
};

const Template = (args: ProgressProps) => <Progress {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

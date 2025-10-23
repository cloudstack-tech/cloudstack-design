import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {toast} from "@cloudstack-design/theme";

import {Toast, ToastProps} from "../src";

export default {
  title: "Components/Feedback 反馈/Toast 全局提示",
  component: Toast,
  argTypes: {},
} as Meta<typeof Toast>;

const defaultProps = {
  ...toast.defaultVariants,
};

const Template = (args: ToastProps) => <Toast {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

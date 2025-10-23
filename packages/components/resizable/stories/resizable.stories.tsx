import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {resizable} from "@cloudstack-design/theme";

import {Resizable, ResizableProps} from "../src";

export default {
  title: "Components/Layout 布局/Resizable 分割面板",
  component: Resizable,
  argTypes: {},
} as Meta<typeof Resizable>;

const defaultProps = {
  ...resizable.defaultVariants,
};

const Template = (args: ResizableProps) => <Resizable {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

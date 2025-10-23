import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {steps} from "@cloudstack-design/theme";

import {Steps, StepsProps} from "../src";

export default {
  title: "Components/Navigation 导航/Steps 步骤条",
  component: Steps,
  argTypes: {},
} as Meta<typeof Steps>;

const defaultProps = {
  ...steps.defaultVariants,
};

const Template = (args: StepsProps) => <Steps {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

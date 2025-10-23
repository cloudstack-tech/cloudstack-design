import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {timeline} from "@cloudstack-design/theme";

import {Timeline, TimelineProps} from "../src";

export default {
  title: "Components/Navigation 导航/Timeline 时间线",
  component: Timeline,
  argTypes: {},
} as Meta<typeof Timeline>;

const defaultProps = {
  ...timeline.defaultVariants,
};

const Template = (args: TimelineProps) => <Timeline {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

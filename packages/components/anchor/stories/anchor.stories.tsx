import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {anchor} from "@cloudstack-design/theme";

import {Anchor, AnchorProps} from "../src";

export default {
  title: "Components/Navigation 导航/Anchor 锚点",
  component: Anchor,
  argTypes: {},
} as Meta<typeof Anchor>;

const defaultProps = {
  ...anchor.defaultVariants,
};

const Template = (args: AnchorProps) => <Anchor {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

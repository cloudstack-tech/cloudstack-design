import React from "react";
import {Meta} from "@storybook/react";
import { radio } from "@cloudstack-design/theme";

import { Radio, RadioProps } from "../src";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
  },
} as Meta<typeof Radio>;

const defaultProps = {
  ...radio.defaultVariants,
};

const Template = (args: RadioProps) => <Radio {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
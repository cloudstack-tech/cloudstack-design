import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {autocomplete} from "@cloudstack-design/theme";

import {Autocomplete, AutocompleteProps} from "../src";

export default {
  title: "Components/Data Entry 数据输入/Autocomplete 自动完成",
  component: Autocomplete,
  argTypes: {},
} as Meta<typeof Autocomplete>;

const defaultProps = {
  ...autocomplete.defaultVariants,
};

const Template = (args: AutocompleteProps) => <Autocomplete {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

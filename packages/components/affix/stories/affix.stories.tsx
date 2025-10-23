import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {affix} from "@cloudstack-design/theme";

import {Affix, AffixProps} from "../src";

export default {
  title: "Components/Data Display 数据展示/Affix 固钉",
  component: Affix,
  argTypes: {},
} as Meta<typeof Affix>;

const defaultProps = {
  ...affix.defaultVariants,
};

const Template = (args: AffixProps) => <Affix {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

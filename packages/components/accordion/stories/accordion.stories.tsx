import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {accordion} from "@cloudstack-design/theme";

import {Accordion, AccordionProps} from "../src";

export default {
  title: "Components/Data Display 数据展示/Accordion 折叠面板",
  component: Accordion,
  argTypes: {},
} as Meta<typeof Accordion>;

const defaultProps = {
  ...accordion.defaultVariants,
};

const Template = (args: AccordionProps) => <Accordion {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

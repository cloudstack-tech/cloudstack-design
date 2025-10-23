import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {form} from "@cloudstack-design/theme";

import {Form, FormProps} from "../src";

export default {
  title: "Components/Data Entry 数据输入/Form 表单",
  component: Form,
  argTypes: {},
} as Meta<typeof Form>;

const defaultProps = {
  ...form.defaultVariants,
};

const Template = (args: FormProps) => <Form {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

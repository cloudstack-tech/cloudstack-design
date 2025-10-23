import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {upload} from "@cloudstack-design/theme";

import {Upload, UploadProps} from "../src";

export default {
  title: "Components/Data Entry 数据输入/Upload 上传",
  component: Upload,
  argTypes: {},
} as Meta<typeof Upload>;

const defaultProps = {
  ...upload.defaultVariants,
};

const Template = (args: UploadProps) => <Upload {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

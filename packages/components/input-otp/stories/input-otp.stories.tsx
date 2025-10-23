import React from "react";
import {Meta} from "@storybook/nextjs-vite";

import {InputOtp, InputOtpProps} from "../src";

export default {
  title: "Components/Data Entry 数据输入/InputOTP 验证码输入",
  component: InputOtp,
  argTypes: {},
} as Meta<typeof InputOtp>;

const Template = (args: InputOtpProps) => <InputOtp {...args} />;

export const Default = {
  render: Template,
};

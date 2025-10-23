import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {modal} from "@cloudstack-design/theme";

import {Modal, ModalProps} from "../src";

export default {
  title: "Components/Feedback 反馈/Modal 对话框",
  component: Modal,
  argTypes: {},
} as Meta<typeof Modal>;

const defaultProps = {
  ...modal.defaultVariants,
};

const Template = (args: ModalProps) => <Modal {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

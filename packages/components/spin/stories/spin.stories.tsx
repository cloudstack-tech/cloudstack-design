import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Spin} from "../src";
import {LoaderCircle, Loader2} from "lucide-react";

const meta: Meta<typeof Spin> = {
  title: "Components/Feedback 反馈/Spin 加载中",
  component: Spin,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {type: "select"},
      options: ["sm", "md", "lg"],
    },
    color: {
      control: {type: "select"},
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spin>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "加载中...",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <Spin size="sm" label="小" />
      <Spin size="md" label="中" />
      <Spin size="lg" label="大" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <Spin color="default" label="默认" />
      <Spin color="primary" label="主要" />
      <Spin color="secondary" label="次要" />
      <Spin color="success" label="成功" />
      <Spin color="warning" label="警告" />
      <Spin color="danger" label="危险" />
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <Spin icon={LoaderCircle} label="圆形" />
      <Spin icon={Loader2} label="自定义" />
    </div>
  ),
};

export const InContainer: Story = {
  render: () => (
    <div className="flex h-48 w-full items-center justify-center rounded-lg border border-default-200 bg-default-50">
      <Spin label="数据加载中..." />
    </div>
  ),
};

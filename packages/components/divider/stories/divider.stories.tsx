import React from "react";
import {Meta, StoryObj} from "@storybook/nextjs-vite";
import {divider} from "@cloudstack-design/theme";

import {Divider} from "../src";

const meta = {
  title: "Components/Layout 布局/Divider 分割线",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "分割线的方向",
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
      description: "分割线的颜色",
    },
    thickness: {
      control: {type: "number", min: 1, max: 10},
      description: "分割线的粗细（像素）",
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof Divider>;

const defaultProps = {
  ...divider.defaultVariants,
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
  render: (args) => (
    <div className="w-80">
      <Divider {...args} />
    </div>
  ),
};

export const Horizontal: Story = {
  args: {
    ...defaultProps,
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="w-80">
      <div className="py-2">内容上方</div>
      <Divider {...args} />
      <div className="py-2">内容下方</div>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    ...defaultProps,
    orientation: "vertical",
  },
  render: (args) => (
    <div className="flex h-24 items-center">
      <div className="px-4">左侧内容</div>
      <Divider {...args} />
      <div className="px-4">右侧内容</div>
    </div>
  ),
};

export const WithThickness: Story = {
  args: {
    ...defaultProps,
    thickness: 2,
  },
  render: (args) => (
    <div className="space-y-4 w-80">
      <div>
        <p className="mb-2 text-sm text-gray-600">粗细: 1px</p>
        <Divider {...args} thickness={1} />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">粗细: 2px</p>
        <Divider {...args} thickness={2} />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">粗细: 4px</p>
        <Divider {...args} thickness={4} />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  args: {
    ...defaultProps,
  },
  render: (args) => (
    <div className="space-y-4 w-80">
      <div>
        <p className="mb-2 text-sm text-gray-600">默认</p>
        <Divider {...args} color="default" />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">主要</p>
        <Divider {...args} color="primary" />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">次要</p>
        <Divider {...args} color="secondary" />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">成功</p>
        <Divider {...args} color="success" />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">警告</p>
        <Divider {...args} color="warning" />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">危险</p>
        <Divider {...args} color="danger" />
      </div>
    </div>
  ),
};

export const InButtonGroup: Story = {
  args: {
    ...defaultProps,
    orientation: "vertical",
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <button className="px-4 py-2 text-sm hover:bg-gray-100 rounded">按钮 1</button>
      <Divider {...args} className="h-6" />
      <button className="px-4 py-2 text-sm hover:bg-gray-100 rounded">按钮 2</button>
      <Divider {...args} className="h-6" />
      <button className="px-4 py-2 text-sm hover:bg-gray-100 rounded">按钮 3</button>
    </div>
  ),
};

export const InList: Story = {
  args: {
    ...defaultProps,
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="w-80">
      <div className="py-3 px-4">列表项 1</div>
      <Divider {...args} />
      <div className="py-3 px-4">列表项 2</div>
      <Divider {...args} />
      <div className="py-3 px-4">列表项 3</div>
      <Divider {...args} />
      <div className="py-3 px-4">列表项 4</div>
    </div>
  ),
};

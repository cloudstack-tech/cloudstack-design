import React from "react";
import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Badge} from "../src";

const meta = {
  title: "Components/Data Display 数据展示/Badge 徽章",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Default: Story = {
  args: {
    children: "Badge",
    variant: "solid",
    color: "default",
  },
};

// 不同颜色
export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge color="default">Default</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="info">Info</Badge>
    </div>
  ),
};

// 不同变体
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-2">Solid</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="solid" color="default">
            Default
          </Badge>
          <Badge variant="solid" color="primary">
            Primary
          </Badge>
          <Badge variant="solid" color="secondary">
            Secondary
          </Badge>
          <Badge variant="solid" color="success">
            Success
          </Badge>
          <Badge variant="solid" color="warning">
            Warning
          </Badge>
          <Badge variant="solid" color="danger">
            Danger
          </Badge>
          <Badge variant="solid" color="info">
            Info
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">Outline</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="outline" color="default">
            Default
          </Badge>
          <Badge variant="outline" color="primary">
            Primary
          </Badge>
          <Badge variant="outline" color="secondary">
            Secondary
          </Badge>
          <Badge variant="outline" color="success">
            Success
          </Badge>
          <Badge variant="outline" color="warning">
            Warning
          </Badge>
          <Badge variant="outline" color="danger">
            Danger
          </Badge>
          <Badge variant="outline" color="info">
            Info
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">Flat</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="flat" color="default">
            Default
          </Badge>
          <Badge variant="flat" color="primary">
            Primary
          </Badge>
          <Badge variant="flat" color="secondary">
            Secondary
          </Badge>
          <Badge variant="flat" color="success">
            Success
          </Badge>
          <Badge variant="flat" color="warning">
            Warning
          </Badge>
          <Badge variant="flat" color="danger">
            Danger
          </Badge>
          <Badge variant="flat" color="info">
            Info
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">Dot</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge variant="dot" color="default" />
          <Badge variant="dot" color="primary" />
          <Badge variant="dot" color="secondary" />
          <Badge variant="dot" color="success" />
          <Badge variant="dot" color="warning" />
          <Badge variant="dot" color="danger" />
          <Badge variant="dot" color="info" />
        </div>
      </div>
    </div>
  ),
};

// 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-2">Small</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge size="sm" color="default">
            Small
          </Badge>
          <Badge size="sm" color="primary">
            Small
          </Badge>
          <Badge size="sm" color="success">
            Small
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">Medium (默认)</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge size="md" color="default">
            Medium
          </Badge>
          <Badge size="md" color="primary">
            Medium
          </Badge>
          <Badge size="md" color="success">
            Medium
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">Large</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge size="lg" color="default">
            Large
          </Badge>
          <Badge size="lg" color="primary">
            Large
          </Badge>
          <Badge size="lg" color="success">
            Large
          </Badge>
        </div>
      </div>
    </div>
  ),
};

// 不同圆角
export const Radius: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Badge radius="none" color="primary">
        None
      </Badge>
      <Badge radius="sm" color="primary">
        Small
      </Badge>
      <Badge radius="md" color="primary">
        Medium
      </Badge>
      <Badge radius="lg" color="primary">
        Large
      </Badge>
      <Badge radius="full" color="primary">
        Full
      </Badge>
    </div>
  ),
};

// 数字徽章
export const WithNumber: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 items-center">
      <div className="relative inline-flex">
        <button className="px-4 py-2 bg-gray-100 rounded-lg">消息</button>
        <Badge className="absolute -top-2 -right-2" color="danger" size="sm" radius="full">
          99+
        </Badge>
      </div>

      <div className="relative inline-flex">
        <button className="px-4 py-2 bg-gray-100 rounded-lg">通知</button>
        <Badge className="absolute -top-2 -right-2" color="danger" size="sm" radius="full">
          5
        </Badge>
      </div>

      <div className="relative inline-flex">
        <button className="px-4 py-2 bg-gray-100 rounded-lg">邮件</button>
        <Badge variant="dot" className="absolute top-0 right-0" color="danger" />
      </div>
    </div>
  ),
};

// 组合使用
export const Combined: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">标签组合</h3>
        <div className="flex flex-wrap gap-2">
          <Badge color="primary">React</Badge>
          <Badge color="secondary">TypeScript</Badge>
          <Badge color="success">Tailwind CSS</Badge>
          <Badge color="info">Next.js</Badge>
          <Badge variant="outline" color="default">
            Storybook
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">状态标签</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="flat" color="success">
            运行中
          </Badge>
          <Badge variant="flat" color="warning">
            警告
          </Badge>
          <Badge variant="flat" color="danger">
            已停止
          </Badge>
          <Badge variant="flat" color="default">
            待处理
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">带点标签</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="dot" color="success" />
            <span className="text-sm">在线</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="dot" color="warning" />
            <span className="text-sm">离开</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="dot" color="danger" />
            <span className="text-sm">离线</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="dot" color="default" />
            <span className="text-sm">未知</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

// 禁用状态
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge isDisabled color="default">
        Disabled
      </Badge>
      <Badge isDisabled color="primary">
        Disabled
      </Badge>
      <Badge isDisabled color="success">
        Disabled
      </Badge>
      <Badge isDisabled variant="outline" color="primary">
        Disabled
      </Badge>
      <Badge isDisabled variant="flat" color="success">
        Disabled
      </Badge>
    </div>
  ),
};

// 自定义样式
export const CustomStyles: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
        渐变徽章
      </Badge>
      <Badge className="bg-black text-white border-black shadow-lg">黑色徽章</Badge>
      <Badge className="bg-yellow-400 text-black border-yellow-500 font-bold">粗体徽章</Badge>
    </div>
  ),
};

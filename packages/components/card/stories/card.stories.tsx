import React from "react";
import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Card} from "../src";

const meta = {
  title: "Components/Data Display 数据展示/Card 卡片",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["cube", "flat", "bordered", "shadow"],
    },
    hoverable: {
      control: "boolean",
    },
    collapsible: {
      control: "boolean",
    },
  },
  args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础卡片
export const Default: Story = {
  args: {
    children: "这是一个基础卡片内容",
  },
};

// 带标题
export const WithTitle: Story = {
  args: {
    title: "卡片标题",
    children: "这是一个带标题的卡片",
  },
};

// 不同变体
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Cube（默认）</h3>
        <Card variant="cube" title="Cube Card">
          带边框和阴影的标准卡片样式
        </Card>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Flat</h3>
        <Card variant="flat" title="Flat Card">
          扁平化背景色卡片样式
        </Card>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Bordered</h3>
        <Card variant="bordered" title="Bordered Card">
          仅边框无阴影的卡片样式
        </Card>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Shadow</h3>
        <Card variant="shadow" title="Shadow Card">
          无边框带阴影的卡片样式
        </Card>
      </div>
    </div>
  ),
};

// 可悬停
export const Hoverable: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card title="可悬停" hoverable={true}>
        悬停时会显示阴影效果
      </Card>
      <Card title="不可悬停" hoverable={false}>
        悬停时没有阴影效果
      </Card>
    </div>
  ),
};

// 可折叠
export const Collapsible: Story = {
  args: {
    title: "可折叠卡片",
    children: (
      <div className="space-y-2">
        <p>点击标题区域可以折叠/展开内容。</p>
        <p>点击右侧的箭头图标也可以切换折叠状态。</p>
        <p>这对于需要节省空间的场景非常有用。</p>
      </div>
    ),
    collapsible: true,
  },
};

// 默认折叠
export const DefaultCollapsed: Story = {
  args: {
    title: "默认折叠状态",
    children: "这个卡片默认是折叠状态，点击标题可以展开",
    collapsible: true,
    defaultCollapsed: true,
  },
};

// 长内容
export const LongContent: Story = {
  args: {
    title: "长内容卡片",
    children: (
      <div className="space-y-3 max-w-md">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </div>
    ),
    collapsible: true,
  },
};

// 无标题卡片
export const NoTitle: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card>
        <div className="text-center">简单内容卡片</div>
      </Card>
      <Card hoverable={false}>
        <div className="text-center">无悬停效果</div>
      </Card>
    </div>
  ),
};

// 自定义类名
export const CustomStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Card
        title="自定义根元素样式"
        className="w-96"
        classNames={{
          base: "border-2 border-blue-500",
        }}
      >
        自定义边框颜色
      </Card>

      <Card
        title="自定义标题样式"
        classNames={{
          title: "text-lg font-bold text-blue-600",
        }}
      >
        自定义标题样式
      </Card>

      <Card
        title="自定义多个部分"
        classNames={{
          base: "shadow-xl",
          header: "bg-gradient-to-r from-blue-500 to-purple-500",
          title: "text-white",
          body: "bg-gray-50",
        }}
      >
        完全自定义的卡片样式
      </Card>
    </div>
  ),
};

// 复杂内容
export const ComplexContent: Story = {
  render: () => (
    <Card title="用户信息" variant="shadow" className="w-96">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
            JD
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">John Doe</h3>
            <p className="text-sm text-gray-600">前端工程师</p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">邮箱：</span>
            <span className="text-gray-900">john.doe@example.com</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">电话：</span>
            <span className="text-gray-900">+86 138 0000 0000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">地址：</span>
            <span className="text-gray-900">北京市朝阳区</span>
          </div>
        </div>
      </div>
    </Card>
  ),
};

// 卡片画廊
export const Gallery: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-4xl">
      <Card>简单卡片</Card>
      <Card title="带标题">带标题的卡片</Card>
      <Card title="可折叠" collapsible>
        点击标题折叠内容
      </Card>
      <Card title="扁平样式" variant="flat">
        扁平化背景
      </Card>
      <Card title="阴影样式" variant="shadow">
        深阴影效果
      </Card>
      <Card title="无悬停" hoverable={false}>
        禁用悬停效果
      </Card>
    </div>
  ),
};

// 响应式布局
export const ResponsiveLayout: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} title={`卡片 ${i}`} collapsible>
          <p>这是卡片 {i} 的内容</p>
          <p className="text-sm text-gray-600 mt-2">响应式布局示例</p>
        </Card>
      ))}
    </div>
  ),
};

// 嵌套卡片
export const NestedCards: Story = {
  render: () => (
    <Card title="外层卡片" variant="shadow" className="w-[600px]">
      <div className="space-y-4">
        <p>这是外层卡片的内容</p>
        <Card title="内层卡片 1" variant="bordered">
          嵌套卡片内容 1
        </Card>
        <Card title="内层卡片 2" variant="flat">
          嵌套卡片内容 2
        </Card>
      </div>
    </Card>
  ),
};

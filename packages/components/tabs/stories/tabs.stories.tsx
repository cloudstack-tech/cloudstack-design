import React from "react";
import {Tabs, Tab} from "../src";
import type {Meta, StoryObj} from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础示例
export const Default: Story = {
  args: {
    defaultActiveKey: "1",
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab key="1" tabKey="1">
        首页
      </Tab>
      <Tab key="2" tabKey="2">
        产品
      </Tab>
      <Tab key="3" tabKey="3">
        关于
      </Tab>
    </Tabs>
  ),
};

// 不同变体
export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Underlined (默认)</h3>
        <Tabs defaultActiveKey="1" variant="underlined">
          <Tab key="1" tabKey="1">
            首页
          </Tab>
          <Tab key="2" tabKey="2">
            产品
          </Tab>
          <Tab key="3" tabKey="3">
            关于
          </Tab>
        </Tabs>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Solid</h3>
        <Tabs defaultActiveKey="1" variant="solid">
          <Tab key="1" tabKey="1">
            首页
          </Tab>
          <Tab key="2" tabKey="2">
            产品
          </Tab>
          <Tab key="3" tabKey="3">
            关于
          </Tab>
        </Tabs>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Light</h3>
        <Tabs defaultActiveKey="1" variant="light">
          <Tab key="1" tabKey="1">
            首页
          </Tab>
          <Tab key="2" tabKey="2">
            产品
          </Tab>
          <Tab key="3" tabKey="3">
            关于
          </Tab>
        </Tabs>
      </div>
    </div>
  ),
};

// 不同颜色
export const Colors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Primary (默认)</h3>
        <Tabs defaultActiveKey="1" color="primary">
          <Tab key="1" tabKey="1">
            首页
          </Tab>
          <Tab key="2" tabKey="2">
            产品
          </Tab>
          <Tab key="3" tabKey="3">
            关于
          </Tab>
        </Tabs>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Default</h3>
        <Tabs defaultActiveKey="1" color="default">
          <Tab key="1" tabKey="1">
            首页
          </Tab>
          <Tab key="2" tabKey="2">
            产品
          </Tab>
          <Tab key="3" tabKey="3">
            关于
          </Tab>
        </Tabs>
      </div>
    </div>
  ),
};

// 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Small</h3>
        <Tabs defaultActiveKey="1" size="sm">
          <Tab key="1" tabKey="1">
            首页
          </Tab>
          <Tab key="2" tabKey="2">
            产品
          </Tab>
          <Tab key="3" tabKey="3">
            关于
          </Tab>
        </Tabs>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Medium (默认)</h3>
        <Tabs defaultActiveKey="1" size="md">
          <Tab key="1" tabKey="1">
            首页
          </Tab>
          <Tab key="2" tabKey="2">
            产品
          </Tab>
          <Tab key="3" tabKey="3">
            关于
          </Tab>
        </Tabs>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Large</h3>
        <Tabs defaultActiveKey="1" size="lg">
          <Tab key="1" tabKey="1">
            首页
          </Tab>
          <Tab key="2" tabKey="2">
            产品
          </Tab>
          <Tab key="3" tabKey="3">
            关于
          </Tab>
        </Tabs>
      </div>
    </div>
  ),
};

// 不同动画效果
export const Animations: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Slide (默认)</h3>
        <Tabs defaultActiveKey="1" animation="slide">
          <Tab key="1" tabKey="1">
            首页
          </Tab>
          <Tab key="2" tabKey="2">
            产品
          </Tab>
          <Tab key="3" tabKey="3">
            关于
          </Tab>
        </Tabs>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Flash</h3>
        <Tabs defaultActiveKey="1" animation="flash">
          <Tab key="1" tabKey="1">
            首页
          </Tab>
          <Tab key="2" tabKey="2">
            产品
          </Tab>
          <Tab key="3" tabKey="3">
            关于
          </Tab>
        </Tabs>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">None</h3>
        <Tabs defaultActiveKey="1" animation="none">
          <Tab key="1" tabKey="1">
            首页
          </Tab>
          <Tab key="2" tabKey="2">
            产品
          </Tab>
          <Tab key="3" tabKey="3">
            关于
          </Tab>
        </Tabs>
      </div>
    </div>
  ),
};

// 全宽
export const FullWidth: Story = {
  render: () => (
    <div className="w-[600px]">
      <Tabs defaultActiveKey="1" fullWidth>
        <Tab key="1" tabKey="1">
          首页
        </Tab>
        <Tab key="2" tabKey="2">
          产品
        </Tab>
        <Tab key="3" tabKey="3">
          关于
        </Tab>
      </Tabs>
    </div>
  ),
};

// 带图标
export const WithIcon: Story = {
  render: () => (
    <Tabs defaultActiveKey="1">
      <Tab key="1" tabKey="1" icon={<span>🏠</span>}>
        首页
      </Tab>
      <Tab key="2" tabKey="2" icon={<span>📦</span>}>
        产品
      </Tab>
      <Tab key="3" tabKey="3" icon={<span>ℹ️</span>}>
        关于
      </Tab>
    </Tabs>
  ),
};

// 禁用状态
export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultActiveKey="1">
      <Tab key="1" tabKey="1">
        首页
      </Tab>
      <Tab key="2" tabKey="2" isDisabled>
        产品（禁用）
      </Tab>
      <Tab key="3" tabKey="3">
        关于
      </Tab>
    </Tabs>
  ),
};

// 受控模式
export const Controlled: Story = {
  render: () => {
    const [activeKey, setActiveKey] = React.useState("1");

    return (
      <div className="space-y-4">
        <Tabs value={activeKey} onTabChange={(key) => setActiveKey(String(key))}>
          <Tab key="1" tabKey="1">
            首页
          </Tab>
          <Tab key="2" tabKey="2">
            产品
          </Tab>
          <Tab key="3" tabKey="3">
            关于
          </Tab>
        </Tabs>
        <div className="text-sm text-gray-600">当前激活: {activeKey}</div>
      </div>
    );
  },
};

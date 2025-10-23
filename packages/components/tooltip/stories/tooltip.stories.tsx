import React from "react";
import {Meta, StoryObj} from "@storybook/nextjs-vite";
import {tooltip} from "@cloudstack-design/theme";

import {Tooltip, TooltipProps} from "../src";

export default {
  title: "Components/Data Display 数据展示/Tooltip 文字提示",
  component: Tooltip,
  argTypes: {
    placement: {
      control: "select",
      options: [
        "top",
        "top-start",
        "top-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
      ],
      description: "Tooltip 的位置",
    },
    color: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger"],
      description: "Tooltip 的颜色",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tooltip 的大小",
    },
    showArrow: {
      control: "boolean",
      description: "是否显示箭头",
    },
    delay: {
      control: "number",
      description: "延迟显示时间（毫秒）",
    },
    isDisabled: {
      control: "boolean",
      description: "是否禁用",
    },
  },
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

const defaultProps = {
  ...tooltip.defaultVariants,
};

// 基础示例
export const Default: Story = {
  args: {
    ...defaultProps,
    content: "这是一个提示信息",
    children: (
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        悬停查看提示
      </button>
    ),
  },
};

// 不同位置
export const Placement: Story = {
  render: () => (
    <div className="flex flex-col gap-16 items-center justify-center min-h-[400px]">
      <div className="flex gap-4">
        <Tooltip content="Top Start" placement="top-start">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Top Start</button>
        </Tooltip>
        <Tooltip content="Top" placement="top">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Top</button>
        </Tooltip>
        <Tooltip content="Top End" placement="top-end">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Top End</button>
        </Tooltip>
      </div>
      <div className="flex gap-16">
        <div className="flex flex-col gap-4">
          <Tooltip content="Left Start" placement="left-start">
            <button className="px-4 py-2 bg-gray-500 text-white rounded">Left Start</button>
          </Tooltip>
          <Tooltip content="Left" placement="left">
            <button className="px-4 py-2 bg-gray-500 text-white rounded">Left</button>
          </Tooltip>
          <Tooltip content="Left End" placement="left-end">
            <button className="px-4 py-2 bg-gray-500 text-white rounded">Left End</button>
          </Tooltip>
        </div>
        <div className="flex flex-col gap-4">
          <Tooltip content="Right Start" placement="right-start">
            <button className="px-4 py-2 bg-gray-500 text-white rounded">Right Start</button>
          </Tooltip>
          <Tooltip content="Right" placement="right">
            <button className="px-4 py-2 bg-gray-500 text-white rounded">Right</button>
          </Tooltip>
          <Tooltip content="Right End" placement="right-end">
            <button className="px-4 py-2 bg-gray-500 text-white rounded">Right End</button>
          </Tooltip>
        </div>
      </div>
      <div className="flex gap-4">
        <Tooltip content="Bottom Start" placement="bottom-start">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Bottom Start</button>
        </Tooltip>
        <Tooltip content="Bottom" placement="bottom">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Bottom</button>
        </Tooltip>
        <Tooltip content="Bottom End" placement="bottom-end">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Bottom End</button>
        </Tooltip>
      </div>
    </div>
  ),
};

// 不同颜色
export const Colors: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip content="默认颜色" color="default">
        <button className="px-4 py-2 bg-gray-500 text-white rounded">Default</button>
      </Tooltip>
      <Tooltip content="主要颜色" color="primary">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Primary</button>
      </Tooltip>
      <Tooltip content="成功颜色" color="success">
        <button className="px-4 py-2 bg-green-500 text-white rounded">Success</button>
      </Tooltip>
      <Tooltip content="警告颜色" color="warning">
        <button className="px-4 py-2 bg-yellow-500 text-white rounded">Warning</button>
      </Tooltip>
      <Tooltip content="危险颜色" color="danger">
        <button className="px-4 py-2 bg-red-500 text-white rounded">Danger</button>
      </Tooltip>
    </div>
  ),
};

// 不同大小
export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip content="小号提示文字" size="sm">
        <button className="px-4 py-2 bg-gray-500 text-white rounded">Small</button>
      </Tooltip>
      <Tooltip content="中号提示文字" size="md">
        <button className="px-4 py-2 bg-gray-500 text-white rounded">Medium</button>
      </Tooltip>
      <Tooltip content="大号提示文字" size="lg">
        <button className="px-4 py-2 bg-gray-500 text-white rounded">Large</button>
      </Tooltip>
    </div>
  ),
};

// 无箭头
export const WithoutArrow: Story = {
  args: {
    content: "没有箭头的提示",
    showArrow: false,
    children: <button className="px-4 py-2 bg-gray-500 text-white rounded">无箭头</button>,
  },
};

// 延迟显示
export const Delay: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip content="立即显示" delay={0}>
        <button className="px-4 py-2 bg-gray-500 text-white rounded">立即显示</button>
      </Tooltip>
      <Tooltip content="延迟 500ms" delay={500}>
        <button className="px-4 py-2 bg-gray-500 text-white rounded">延迟 500ms</button>
      </Tooltip>
      <Tooltip content="延迟 1000ms" delay={1000}>
        <button className="px-4 py-2 bg-gray-500 text-white rounded">延迟 1000ms</button>
      </Tooltip>
    </div>
  ),
};

// 长文本
export const LongContent: Story = {
  args: {
    content:
      "这是一个很长的提示信息，用于展示 Tooltip 组件在处理长文本时的表现。它会自动换行并且有最大宽度限制。",
    children: <button className="px-4 py-2 bg-gray-500 text-white rounded">长文本提示</button>,
  },
};

// 禁用状态
export const Disabled: Story = {
  args: {
    content: "这个提示不会显示",
    isDisabled: true,
    children: (
      <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed">
        禁用状态
      </button>
    ),
  },
};

// 受控模式
export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div className="flex gap-4 items-center">
        <Tooltip content="受控的 Tooltip" isOpen={isOpen} onOpenChange={setIsOpen}>
          <button className="px-4 py-2 bg-gray-500 text-white rounded">受控 Tooltip</button>
        </Tooltip>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "隐藏" : "显示"} Tooltip
        </button>
      </div>
    );
  },
};

// 自定义样式
export const CustomStyle: Story = {
  args: {
    content: "自定义样式的提示",
    className: "!bg-purple-600 !text-yellow-300 font-bold",
    children: <button className="px-4 py-2 bg-purple-500 text-white rounded">自定义样式</button>,
  },
};

// 复杂内容
export const ComplexContent: Story = {
  args: {
    content: (
      <div className="flex flex-col gap-1">
        <div className="font-bold">提示标题</div>
        <div className="text-xs">这里是详细的描述信息</div>
      </div>
    ),
    children: <button className="px-4 py-2 bg-gray-500 text-white rounded">复杂内容</button>,
  },
};

import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Space} from "../src";
import {Button} from "../../button/src";

const meta = {
  title: "Components/Layout 布局/Space 间距",
  component: Space,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "间距方向",
    },
    align: {
      control: "select",
      options: ["start", "end", "center", "baseline"],
      description: "对齐方式",
    },
    size: {
      control: "select",
      options: ["small", "middle", "large"],
      description: "间距大小",
    },
    wrap: {
      control: "boolean",
      description: "是否自动换行",
    },
  },
} satisfies Meta<typeof Space>;

export default meta;

type Story = StoryObj<typeof meta>;

// 示例按钮组件
const ExampleButton = ({className = "", children, ...props}: any) => (
  <Button variant="outline" {...props}>
    {children}
  </Button>
);

// 示例标签组件
const ExampleTag = ({className = "", children, ...props}: any) => (
  <span
    className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary ${className}`}
    {...props}
  >
    {children}
  </span>
);

export const Default: Story = {
  args: {
    size: "small",
  },
  render: (args) => (
    <Space {...args}>
      <ExampleButton>按钮1</ExampleButton>
      <ExampleButton>按钮2</ExampleButton>
      <ExampleButton>按钮3</ExampleButton>
    </Space>
  ),
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
    size: "middle",
  },
  render: (args) => (
    <Space {...args}>
      <ExampleButton>按钮1</ExampleButton>
      <ExampleButton>按钮2</ExampleButton>
      <ExampleButton>按钮3</ExampleButton>
    </Space>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm text-gray-600">Small 间距 (8px)</p>
        <Space size="small">
          <ExampleButton>按钮1</ExampleButton>
          <ExampleButton>按钮2</ExampleButton>
          <ExampleButton>按钮3</ExampleButton>
        </Space>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Middle 间距 (16px)</p>
        <Space size="middle">
          <ExampleButton>按钮1</ExampleButton>
          <ExampleButton>按钮2</ExampleButton>
          <ExampleButton>按钮3</ExampleButton>
        </Space>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Large 间距 (24px)</p>
        <Space size="large">
          <ExampleButton>按钮1</ExampleButton>
          <ExampleButton>按钮2</ExampleButton>
          <ExampleButton>按钮3</ExampleButton>
        </Space>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">自定义间距 (48px)</p>
        <Space size={12}>
          <ExampleButton>按钮1</ExampleButton>
          <ExampleButton>按钮2</ExampleButton>
          <ExampleButton>按钮3</ExampleButton>
        </Space>
      </div>
    </div>
  ),
};

export const WithAlignment: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm text-gray-600">Start 对齐</p>
        <Space align="start" className="h-24 bg-gray-50 px-4">
          <ExampleButton className="h-8">短按钮</ExampleButton>
          <ExampleButton className="h-16">中等按钮</ExampleButton>
          <ExampleButton className="h-12">高按钮</ExampleButton>
        </Space>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Center 对齐 (默认)</p>
        <Space align="center" className="h-24 bg-gray-50 px-4">
          <ExampleButton className="h-8">短按钮</ExampleButton>
          <ExampleButton className="h-16">中等按钮</ExampleButton>
          <ExampleButton className="h-12">高按钮</ExampleButton>
        </Space>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">End 对齐</p>
        <Space align="end" className="h-24 bg-gray-50 px-4">
          <ExampleButton className="h-8">短按钮</ExampleButton>
          <ExampleButton className="h-16">中等按钮</ExampleButton>
          <ExampleButton className="h-12">高按钮</ExampleButton>
        </Space>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Baseline 对齐</p>
        <Space align="baseline" className="h-24 bg-gray-50 px-4">
          <span className="text-sm">小文字</span>
          <span className="text-lg">中文字</span>
          <span className="text-2xl">大文字</span>
        </Space>
      </div>
    </div>
  ),
};

export const WithSplit: Story = {
  render: () => (
    <Space split={<span className="text-gray-400">|</span>}>
      <a href="#" className="text-primary hover:underline">
        首页
      </a>
      <a href="#" className="text-primary hover:underline">
        产品
      </a>
      <a href="#" className="text-primary hover:underline">
        关于我们
      </a>
      <a href="#" className="text-primary hover:underline">
        联系方式
      </a>
    </Space>
  ),
};

export const WithWrap: Story = {
  render: () => (
    <div className="w-80 border border-dashed border-gray-300 p-4">
      <p className="mb-2 text-sm text-gray-600">容器宽度限制，自动换行</p>
      <Space wrap size="small">
        <ExampleTag>标签1</ExampleTag>
        <ExampleTag>标签2</ExampleTag>
        <ExampleTag>标签3</ExampleTag>
        <ExampleTag>很长的标签4</ExampleTag>
        <ExampleTag>标签5</ExampleTag>
        <ExampleTag>标签6</ExampleTag>
        <ExampleTag>标签7</ExampleTag>
        <ExampleTag>标签8</ExampleTag>
      </Space>
    </div>
  ),
};

export const ArraySize: Story = {
  render: () => (
    <div className="w-80 border border-dashed border-gray-300 p-4">
      <p className="mb-2 text-sm text-gray-600">不同的水平和垂直间距 [8, 16]</p>
      <Space wrap size={[8, 16]}>
        <ExampleTag>标签1</ExampleTag>
        <ExampleTag>标签2</ExampleTag>
        <ExampleTag>标签3</ExampleTag>
        <ExampleTag>很长的标签4</ExampleTag>
        <ExampleTag>标签5</ExampleTag>
        <ExampleTag>标签6</ExampleTag>
      </Space>
    </div>
  ),
};

export const Compact: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm text-gray-600">普通 Space</p>
        <Space>
          <ExampleButton>按钮1</ExampleButton>
          <ExampleButton>按钮2</ExampleButton>
          <ExampleButton>按钮3</ExampleButton>
        </Space>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Space.Compact 水平紧凑</p>
        <Space.Compact>
          <ExampleButton>按钮1</ExampleButton>
          <ExampleButton>按钮2</ExampleButton>
          <ExampleButton>按钮3</ExampleButton>
        </Space.Compact>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Space.Compact 垂直紧凑</p>
        <Space.Compact direction="vertical">
          <ExampleButton>按钮1</ExampleButton>
          <ExampleButton>按钮2</ExampleButton>
          <ExampleButton>按钮3</ExampleButton>
        </Space.Compact>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Space.Compact 块级元素</p>
        <Space.Compact block>
          <ExampleButton>按钮1</ExampleButton>
          <ExampleButton>按钮2</ExampleButton>
          <ExampleButton>按钮3</ExampleButton>
        </Space.Compact>
      </div>
    </div>
  ),
};

export const CustomElement: Story = {
  render: () => (
    <Space as="section" className="p-4 bg-gray-50">
      <ExampleButton>按钮1</ExampleButton>
      <ExampleButton>按钮2</ExampleButton>
      <ExampleButton>按钮3</ExampleButton>
    </Space>
  ),
};

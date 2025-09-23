import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Space from "./index";
import { Button } from "../Button";
import { cn } from "@/packages/utils";

const meta = {
  title: "Layout 布局/Space 间距",
  component: Space,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    align: {
      control: "radio",
      options: ["start", "end", "center", "baseline"],
      description: "对齐方式",
    },
    direction: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "间距方向",
    },
    size: {
      control: "radio",
      options: ["small", "middle", "large"],
      description: "间距大小",
    },
    wrap: {
      control: "boolean",
      description: "环绕类型的间距",
    },
  },
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof meta>;

// 示例按钮组件
const ExampleButton = ({ children, ...props }: any) => (
  <Button variant="outline" {...props}>
    {children}
  </Button>
);

// 示例标签组件
const ExampleTag = ({ children, className, ...props }: any) => (
  <span
    className={cn(
      "inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary",
      className
    )}
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
  args: {},
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm text-gray-600">Small 间距</p>
        <Space size="small">
          <ExampleButton>按钮1</ExampleButton>
          <ExampleButton>按钮2</ExampleButton>
          <ExampleButton>按钮3</ExampleButton>
        </Space>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Middle 间距</p>
        <Space size="middle">
          <ExampleButton>按钮1</ExampleButton>
          <ExampleButton>按钮2</ExampleButton>
          <ExampleButton>按钮3</ExampleButton>
        </Space>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Large 间距</p>
        <Space size="large">
          <ExampleButton>按钮1</ExampleButton>
          <ExampleButton>按钮2</ExampleButton>
          <ExampleButton>按钮3</ExampleButton>
        </Space>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">自定义间距 (数字)</p>
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
  args: {},
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm text-gray-600">Start 对齐</p>
        <Space align="start" className="h-16 bg-gray-50 px-4">
          <ExampleButton className="h-8">短按钮</ExampleButton>
          <ExampleButton className="h-12">中等按钮</ExampleButton>
          <ExampleButton className="h-10">高按钮</ExampleButton>
        </Space>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Center 对齐 (默认)</p>
        <Space align="center" className="h-16 bg-gray-50 px-4">
          <ExampleButton className="h-8">短按钮</ExampleButton>
          <ExampleButton className="h-12">中等按钮</ExampleButton>
          <ExampleButton className="h-10">高按钮</ExampleButton>
        </Space>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">End 对齐</p>
        <Space align="end" className="h-16 bg-gray-50 px-4">
          <ExampleButton className="h-8">短按钮</ExampleButton>
          <ExampleButton className="h-12">中等按钮</ExampleButton>
          <ExampleButton className="h-10">高按钮</ExampleButton>
        </Space>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Baseline 对齐</p>
        <Space align="baseline" className="h-16 bg-gray-50 px-4">
          <span className="text-sm">小文字</span>
          <span className="text-lg">中文字</span>
          <span className="text-2xl">大文字</span>
        </Space>
      </div>
    </div>
  ),
};

export const WithSplit: Story = {
  args: {
    split: <span className="text-gray-400">|</span>,
  },
  render: (args) => (
    <Space {...args}>
      <span>首页</span>
      <span>产品</span>
      <span>关于我们</span>
      <span>联系方式</span>
    </Space>
  ),
};

export const WithWrap: Story = {
  args: {
    wrap: true,
    size: "small",
  },
  render: (args) => (
    <div className="w-64 border border-dashed border-gray-300 p-4">
      <p className="mb-2 text-sm text-gray-600">容器宽度限制，自动换行</p>
      <Space {...args}>
        <ExampleTag>标签1</ExampleTag>
        <ExampleTag>标签2</ExampleTag>
        <ExampleTag>标签3</ExampleTag>
        <ExampleTag>很长的标签4</ExampleTag>
        <ExampleTag>标签5</ExampleTag>
        <ExampleTag>标签6</ExampleTag>
        <ExampleTag>标签7</ExampleTag>
      </Space>
    </div>
  ),
};

export const ArraySize: Story = {
  args: {
    size: [8, 16], // [水平间距, 垂直间距]
    wrap: true,
  },
  render: (args) => (
    <div className="w-64 border border-dashed border-gray-300 p-4">
      <p className="mb-2 text-sm text-gray-600">不同的水平和垂直间距</p>
      <Space {...args}>
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
  args: {},
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

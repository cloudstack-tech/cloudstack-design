import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Flex} from "../src";

const meta = {
  title: "Layout 布局/Flex 弹性布局",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "row-reverse", "col", "col-reverse"],
      description: "flex 方向",
    },
    justify: {
      control: "select",
      options: ["start", "end", "center", "between", "around", "evenly"],
      description: "主轴对齐方式",
    },
    align: {
      control: "select",
      options: ["start", "end", "center", "baseline", "stretch"],
      description: "交叉轴对齐方式",
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
      description: "是否换行",
    },
    gap: {
      control: "number",
      description: "间距（会乘以4）",
    },
    inline: {
      control: "boolean",
      description: "是否为 inline-flex",
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

// 示例子元素样式
const FlexBox = ({className = "", children, ...props}: any) => (
  <div
    className={`px-6 py-1 bg-primary text-white rounded-xs ${className}`}
    style={{textAlign: "center"}}
    {...props}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    gap: 4,
  },
  render: (args) => (
    <Flex {...args}>
      <FlexBox>1</FlexBox>
      <FlexBox>2</FlexBox>
      <FlexBox>3</FlexBox>
    </Flex>
  ),
};

export const Column: Story = {
  args: {
    direction: "col",
    gap: 4,
  },
  render: (args) => (
    <Flex {...args}>
      <FlexBox>1</FlexBox>
      <FlexBox>2</FlexBox>
      <FlexBox>3</FlexBox>
    </Flex>
  ),
};

export const JustifyCenter: Story = {
  args: {
    justify: "center",
    gap: 4,
    className: "w-96 border border-dashed border-gray-300 p-4",
  },
  render: (args) => (
    <Flex {...args}>
      <FlexBox>1</FlexBox>
      <FlexBox>2</FlexBox>
      <FlexBox>3</FlexBox>
    </Flex>
  ),
};

export const JustifyBetween: Story = {
  args: {
    justify: "between",
    className: "w-96 border border-dashed border-gray-300 p-4",
  },
  render: (args) => (
    <Flex {...args}>
      <FlexBox>1</FlexBox>
      <FlexBox>2</FlexBox>
      <FlexBox>3</FlexBox>
    </Flex>
  ),
};

export const AlignCenter: Story = {
  args: {
    align: "center",
    gap: 4,
    className: "h-48 border border-dashed border-gray-300 p-4",
  },
  render: (args) => (
    <Flex {...args}>
      <FlexBox className="h-10">短</FlexBox>
      <FlexBox className="h-20">中</FlexBox>
      <FlexBox className="h-16">高</FlexBox>
    </Flex>
  ),
};

export const FlexGrow: Story = {
  args: {
    gap: 4,
    className: "w-full",
  },
  render: (args) => (
    <Flex {...args}>
      <FlexBox>固定</FlexBox>
      <FlexBox style={{flex: 1}}>弹性</FlexBox>
      <FlexBox>固定</FlexBox>
    </Flex>
  ),
};

export const Wrap: Story = {
  args: {
    wrap: "wrap",
    gap: 4,
    className: "w-64 border border-dashed border-gray-300 p-4",
  },
  render: (args) => (
    <Flex {...args}>
      <FlexBox>1</FlexBox>
      <FlexBox>2</FlexBox>
      <FlexBox>3</FlexBox>
      <FlexBox>4</FlexBox>
      <FlexBox>5</FlexBox>
      <FlexBox>6</FlexBox>
    </Flex>
  ),
};

export const CustomElement: Story = {
  args: {
    as: "section",
    gap: 4,
    justify: "center",
    align: "center",
  },
  render: (args) => (
    <Flex {...args}>
      <FlexBox>使用 section 元素</FlexBox>
      <FlexBox>而不是 div</FlexBox>
    </Flex>
  ),
};

// 展示不同 gap 值
export const DifferentGaps: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm text-gray-600">gap: 1 (4px)</p>
        <Flex gap={1}>
          <FlexBox>1</FlexBox>
          <FlexBox>2</FlexBox>
          <FlexBox>3</FlexBox>
        </Flex>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">gap: 2 (8px)</p>
        <Flex gap={2}>
          <FlexBox>1</FlexBox>
          <FlexBox>2</FlexBox>
          <FlexBox>3</FlexBox>
        </Flex>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">gap: 4 (16px)</p>
        <Flex gap={4}>
          <FlexBox>1</FlexBox>
          <FlexBox>2</FlexBox>
          <FlexBox>3</FlexBox>
        </Flex>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">gap: 8 (32px)</p>
        <Flex gap={8}>
          <FlexBox>1</FlexBox>
          <FlexBox>2</FlexBox>
          <FlexBox>3</FlexBox>
        </Flex>
      </div>
    </div>
  ),
};

// 展示所有 justify 组合
export const AllJustifyOptions: Story = {
  render: () => (
    <div className="space-y-6">
      {(["start", "end", "center", "between", "around", "evenly"] as const).map((justify) => (
        <div key={justify}>
          <p className="mb-2 text-sm text-gray-600 font-medium">justify: {justify}</p>
          <Flex justify={justify} gap={2} className="w-96 border border-dashed border-gray-300 p-4">
            <FlexBox>1</FlexBox>
            <FlexBox>2</FlexBox>
            <FlexBox>3</FlexBox>
          </Flex>
        </div>
      ))}
    </div>
  ),
};

// 展示所有 align 组合
export const AllAlignOptions: Story = {
  render: () => (
    <div className="space-y-6">
      {(["start", "end", "center", "baseline", "stretch"] as const).map((align) => (
        <div key={align}>
          <p className="mb-2 text-sm text-gray-600 font-medium">align: {align}</p>
          <Flex
            align={align}
            gap={2}
            className="h-32 w-96 border border-dashed border-gray-300 p-4"
          >
            <FlexBox className={align === "stretch" ? "" : "h-10"}>短</FlexBox>
            <FlexBox className={align === "stretch" ? "" : "h-20"}>中</FlexBox>
            <FlexBox className={align === "stretch" ? "" : "h-16"}>高</FlexBox>
          </Flex>
        </div>
      ))}
    </div>
  ),
};

// 复杂布局示例
export const ComplexLayout: Story = {
  render: () => (
    <Flex
      direction="col"
      gap={4}
      className="w-full max-w-2xl border border-gray-200 rounded-lg p-6"
    >
      {/* Header */}
      <Flex justify="between" align="center" className="border-b border-gray-200 pb-4">
        <div className="text-lg font-semibold">标题</div>
        <Flex gap={2}>
          <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">取消</button>
          <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
            确定
          </button>
        </Flex>
      </Flex>

      {/* Content */}
      <Flex direction="col" gap={3} className="flex-1">
        <div className="text-sm text-gray-600">这是一个使用 Flex 组件构建的复杂布局示例</div>
        <Flex gap={4}>
          <div className="flex-1 p-4 bg-gray-50 rounded">左侧内容</div>
          <div className="flex-1 p-4 bg-gray-50 rounded">右侧内容</div>
        </Flex>
      </Flex>

      {/* Footer */}
      <Flex justify="end" gap={2} className="border-t border-gray-200 pt-4">
        <span className="text-sm text-gray-500">Footer 信息</span>
      </Flex>
    </Flex>
  ),
};

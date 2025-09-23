import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Flex from "./index";
import { cn } from "@/packages/utils";

const meta = {
  title: "Layout 布局/Flex 弹性布局",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    vertical: {
      control: "boolean",
      description: "flex 主轴的方向是否垂直",
    },
    justify: {
      control: "radio",
      options: ["start", "end", "center", "between", "around", "evenly"],
      description: "主轴对齐方式",
    },
    align: {
      control: "radio",
      options: ["start", "end", "center", "stretch", "baseline"],
      description: "交叉轴对齐方式",
    },
    gap: {
      control: "range",
      description: "间距",
    },
    flex: {
      control: "number",
      description: "弹性布局",
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

// 示例子元素样式
const FlexBox = ({ className, children, ...props }: any) => (
  <Flex
    className={cn(
      "text-select-item-bg-active px-6 py-1 rounded-xs bg-primary even:bg-primary/50",
      className
    )}
    {...props}
  >
    {children}
  </Flex>
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

export const Vertical: Story = {
  args: {
    vertical: true,
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
    className: "w-96 border border-dashed border-gray-300",
  },
  render: (args) => (
    <Flex {...args}>
      <FlexBox>1</FlexBox>
      <FlexBox>2</FlexBox>
      <FlexBox>3</FlexBox>
    </Flex>
  ),
};

export const SpaceBetween: Story = {
  args: {
    justify: "space-between",
    className: "w-96 border border-dashed border-gray-300",
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
    className: "h-48 border border-dashed border-gray-300",
  },
  render: (args) => (
    <Flex {...args}>
      <FlexBox className="h-10">Short</FlexBox>
      <FlexBox className="h-20">Medium</FlexBox>
      <FlexBox className="h-16">Tall</FlexBox>
    </Flex>
  ),
};

export const FlexGrow: Story = {
  args: {
    gap: 4,
  },
  render: (args) => (
    <Flex {...args}>
      <FlexBox>Fixed</FlexBox>
      <FlexBox flex="1">Flexible</FlexBox>
      <FlexBox>Fixed</FlexBox>
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

// 新增：展示不同 gap 值的示例
export const DifferentGaps: Story = {
  args: {},
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm text-gray-600">gap: 1 (gap-1)</p>
        <Flex gap={1}>
          <FlexBox>1</FlexBox>
          <FlexBox>2</FlexBox>
          <FlexBox>3</FlexBox>
        </Flex>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">gap: 2 (gap-2)</p>
        <Flex gap={2}>
          <FlexBox>1</FlexBox>
          <FlexBox>2</FlexBox>
          <FlexBox>3</FlexBox>
        </Flex>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">gap: 4 (gap-4)</p>
        <Flex gap={4}>
          <FlexBox>1</FlexBox>
          <FlexBox>2</FlexBox>
          <FlexBox>3</FlexBox>
        </Flex>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">gap: 8 (gap-8)</p>
        <Flex gap={8}>
          <FlexBox>1</FlexBox>
          <FlexBox>2</FlexBox>
          <FlexBox>3</FlexBox>
        </Flex>
      </div>
    </div>
  ),
};

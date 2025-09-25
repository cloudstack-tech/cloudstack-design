import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Stack, { HStack, VStack } from "./index";
import { cn } from "@/packages/utilities";

const meta = {
  title: "Layout 布局/Stack 堆叠布局",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
    },
    spacing: {
      control: { type: "select" },
      options: ["small", "medium", "large", 0, 1, 2, 3, 4, 5, 6],
    },
    align: {
      control: { type: "select" },
      options: ["start", "end", "center", "stretch", "baseline"],
    },
    justify: {
      control: { type: "select" },
      options: ["start", "end", "center", "between", "around", "evenly"],
    },
    wrap: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// 示例子元素样式
const StackBox = ({ className, children, ...props }: any) => (
  <div
    className={cn(
      "text-select-item-bg-active px-6 py-1 rounded-xs bg-primary even:bg-primary/50",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    spacing: "medium",
    align: "stretch",
  },
  render: (args) => (
    <Stack {...args} className="w-64">
      <StackBox>项目 1</StackBox>
      <StackBox>项目 2</StackBox>
      <StackBox>项目 3</StackBox>
    </Stack>
  ),
};

export const VerticalStack: Story = {
  args: {
    direction: "vertical",
    spacing: "large",
    align: "center",
  },
  render: (args) => (
    <Stack {...args} className="w-64">
      <StackBox>垂直堆叠 1</StackBox>
      <StackBox>垂直堆叠 2</StackBox>
      <StackBox>垂直堆叠 3</StackBox>
    </Stack>
  ),
};

export const HorizontalStack: Story = {
  args: {
    direction: "horizontal",
    spacing: "medium",
    align: "center",
  },
  render: (args) => (
    <Stack {...args}>
      <StackBox>水平 1</StackBox>
      <StackBox>水平 2</StackBox>
      <StackBox>水平 3</StackBox>
    </Stack>
  ),
};

export const WithDivider: Story = {
  args: {
    direction: "vertical",
    spacing: "medium",
    divider: <hr className="w-full border-gray-300" />,
  },
  render: (args) => (
    <Stack {...args} className="w-64">
      <StackBox>带分隔符 1</StackBox>
      <StackBox>带分隔符 2</StackBox>
      <StackBox>带分隔符 3</StackBox>
    </Stack>
  ),
};

export const DifferentSpacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-medium">Small 间距</h3>
        <Stack spacing="small" className="w-64">
          <StackBox>项目 1</StackBox>
          <StackBox>项目 2</StackBox>
          <StackBox>项目 3</StackBox>
        </Stack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Medium 间距</h3>
        <Stack spacing="medium" className="w-64">
          <StackBox>项目 1</StackBox>
          <StackBox>项目 2</StackBox>
          <StackBox>项目 3</StackBox>
        </Stack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Large 间距</h3>
        <Stack spacing="large" className="w-64">
          <StackBox>项目 1</StackBox>
          <StackBox>项目 2</StackBox>
          <StackBox>项目 3</StackBox>
        </Stack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">自定义间距 (数值)</h3>
        <Stack spacing={8} className="w-64">
          <StackBox>项目 1</StackBox>
          <StackBox>项目 2</StackBox>
          <StackBox>项目 3</StackBox>
        </Stack>
      </div>
    </div>
  ),
};

export const AlignmentOptions: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-medium">Start 对齐</h3>
        <Stack align="start" className="w-64 bg-gray-50 p-4">
          <StackBox>短</StackBox>
          <StackBox>较长的内容</StackBox>
          <StackBox>很长很长的内容项目</StackBox>
        </Stack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Center 对齐</h3>
        <Stack align="center" className="w-64 bg-gray-50 p-4">
          <StackBox>短</StackBox>
          <StackBox>较长的内容</StackBox>
          <StackBox>很长很长的内容项目</StackBox>
        </Stack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Stretch 对齐 (默认)</h3>
        <Stack align="stretch" className="w-64 bg-gray-50 p-4">
          <StackBox>短</StackBox>
          <StackBox>较长的内容</StackBox>
          <StackBox>很长很长的内容项目</StackBox>
        </Stack>
      </div>
    </div>
  ),
};

// HStack 示例
export const HStackExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-medium">HStack 基本用法</h3>
        <HStack spacing="medium">
          <StackBox className="bg-red-100">红色</StackBox>
          <StackBox className="bg-green-100">绿色</StackBox>
          <StackBox className="bg-blue-100">蓝色</StackBox>
        </HStack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Stack.H 用法</h3>
        <Stack.H spacing="large" align="center">
          <StackBox className="bg-purple-100">紫色</StackBox>
          <StackBox className="bg-yellow-100">黄色</StackBox>
          <StackBox className="bg-pink-100">粉色</StackBox>
        </Stack.H>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Stack.Horizontal 用法</h3>
        <Stack.Horizontal spacing="small" justify="center">
          <StackBox className="bg-indigo-100">靛色</StackBox>
          <StackBox className="bg-cyan-100">青色</StackBox>
          <StackBox className="bg-teal-100">蓝绿色</StackBox>
        </Stack.Horizontal>
      </div>
    </div>
  ),
};

// VStack 示例
export const VStackExamples: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="mb-4 text-lg font-medium">VStack 基本用法</h3>
        <VStack spacing="medium" className="w-48">
          <StackBox className="bg-red-100">项目 1</StackBox>
          <StackBox className="bg-green-100">项目 2</StackBox>
          <StackBox className="bg-blue-100">项目 3</StackBox>
        </VStack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Stack.V 用法</h3>
        <Stack.V spacing="large" align="center" className="w-48">
          <StackBox className="bg-purple-100">项目 A</StackBox>
          <StackBox className="bg-yellow-100">项目 B</StackBox>
          <StackBox className="bg-pink-100">项目 C</StackBox>
        </Stack.V>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Stack.Vertical 用法</h3>
        <Stack.Vertical spacing="small" className="w-48">
          <StackBox className="bg-indigo-100">第一个</StackBox>
          <StackBox className="bg-cyan-100">第二个</StackBox>
          <StackBox className="bg-teal-100">第三个</StackBox>
        </Stack.Vertical>
      </div>
    </div>
  ),
};

export const ResponsiveExample: Story = {
  render: () => (
    <div>
      <h3 className="mb-4 text-lg font-medium">响应式布局示例</h3>
      <Stack
        direction="vertical"
        spacing="medium"
        className="sm:flex-row sm:space-y-0 sm:space-x-4"
      >
        <StackBox>在小屏幕垂直排列</StackBox>
        <StackBox>在大屏幕水平排列</StackBox>
        <StackBox>自动适应</StackBox>
      </Stack>
    </div>
  ),
};

export const NestedStacks: Story = {
  render: () => (
    <div>
      <h3 className="mb-4 text-lg font-medium">嵌套堆叠示例</h3>
      <VStack spacing="large" className="w-80">
        <StackBox>顶部项目</StackBox>
        <HStack spacing="medium" justify="center">
          <StackBox className="bg-red-100">左</StackBox>
          <StackBox className="bg-green-100">中</StackBox>
          <StackBox className="bg-blue-100">右</StackBox>
        </HStack>
        <StackBox>底部项目</StackBox>
      </VStack>
    </div>
  ),
};

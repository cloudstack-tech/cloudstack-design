import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Stack, HStack, VStack} from "../src";

const meta = {
  title: "Components/Layout 布局/Stack 堆叠",
  component: Stack,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "堆叠方向",
    },
    spacing: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "间距大小",
    },
    align: {
      control: "select",
      options: ["start", "end", "center", "stretch", "baseline"],
      description: "交叉轴对齐方式",
    },
    justify: {
      control: "select",
      options: ["start", "end", "center", "between", "around", "evenly"],
      description: "主轴对齐方式",
    },
    wrap: {
      control: "boolean",
      description: "是否换行",
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

// 示例盒子组件
const ExampleBox = ({className = "", children, ...props}: any) => (
  <div
    className={`px-6 py-3 bg-primary/10 text-primary rounded-md border border-primary/20 flex items-center justify-center ${className}`}
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
      <ExampleBox>项目 1</ExampleBox>
      <ExampleBox>项目 2</ExampleBox>
      <ExampleBox>项目 3</ExampleBox>
    </Stack>
  ),
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
    spacing: "large",
    align: "center",
  },
  render: (args) => (
    <Stack {...args} className="w-64">
      <ExampleBox>垂直堆叠 1</ExampleBox>
      <ExampleBox>垂直堆叠 2</ExampleBox>
      <ExampleBox>垂直堆叠 3</ExampleBox>
    </Stack>
  ),
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    spacing: "medium",
    align: "center",
  },
  render: (args) => (
    <Stack {...args}>
      <ExampleBox>水平 1</ExampleBox>
      <ExampleBox>水平 2</ExampleBox>
      <ExampleBox>水平 3</ExampleBox>
    </Stack>
  ),
};

export const DifferentSpacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600">Small 间距 (8px)</p>
        <Stack spacing="small" className="w-64">
          <ExampleBox>项目 1</ExampleBox>
          <ExampleBox>项目 2</ExampleBox>
          <ExampleBox>项目 3</ExampleBox>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Medium 间距 (16px)</p>
        <Stack spacing="medium" className="w-64">
          <ExampleBox>项目 1</ExampleBox>
          <ExampleBox>项目 2</ExampleBox>
          <ExampleBox>项目 3</ExampleBox>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Large 间距 (24px)</p>
        <Stack spacing="large" className="w-64">
          <ExampleBox>项目 1</ExampleBox>
          <ExampleBox>项目 2</ExampleBox>
          <ExampleBox>项目 3</ExampleBox>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">自定义间距 (48px)</p>
        <Stack spacing={12} className="w-64">
          <ExampleBox>项目 1</ExampleBox>
          <ExampleBox>项目 2</ExampleBox>
          <ExampleBox>项目 3</ExampleBox>
        </Stack>
      </div>
    </div>
  ),
};

export const AlignmentOptions: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600">Start 对齐</p>
        <Stack align="start" className="w-80 bg-gray-50 p-4">
          <ExampleBox>短</ExampleBox>
          <ExampleBox>较长的内容</ExampleBox>
          <ExampleBox>很长很长的内容项目</ExampleBox>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Center 对齐</p>
        <Stack align="center" className="w-80 bg-gray-50 p-4">
          <ExampleBox>短</ExampleBox>
          <ExampleBox>较长的内容</ExampleBox>
          <ExampleBox>很长很长的内容项目</ExampleBox>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Stretch 对齐 (默认)</p>
        <Stack align="stretch" className="w-80 bg-gray-50 p-4">
          <ExampleBox>短</ExampleBox>
          <ExampleBox>较长的内容</ExampleBox>
          <ExampleBox>很长很长的内容项目</ExampleBox>
        </Stack>
      </div>
    </div>
  ),
};

export const JustifyOptions: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600">Center 对齐</p>
        <Stack direction="horizontal" justify="center" className="w-full bg-gray-50 p-4">
          <ExampleBox>项目 1</ExampleBox>
          <ExampleBox>项目 2</ExampleBox>
          <ExampleBox>项目 3</ExampleBox>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Between 对齐</p>
        <Stack direction="horizontal" justify="between" className="w-full bg-gray-50 p-4">
          <ExampleBox>项目 1</ExampleBox>
          <ExampleBox>项目 2</ExampleBox>
          <ExampleBox>项目 3</ExampleBox>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Around 对齐</p>
        <Stack direction="horizontal" justify="around" className="w-full bg-gray-50 p-4">
          <ExampleBox>项目 1</ExampleBox>
          <ExampleBox>项目 2</ExampleBox>
          <ExampleBox>项目 3</ExampleBox>
        </Stack>
      </div>
    </div>
  ),
};

export const WithDivider: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600">垂直分隔符</p>
        <Stack divider={<hr className="w-full border-gray-300" />} className="w-64">
          <ExampleBox>带分隔符 1</ExampleBox>
          <ExampleBox>带分隔符 2</ExampleBox>
          <ExampleBox>带分隔符 3</ExampleBox>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">水平分隔符</p>
        <Stack
          direction="horizontal"
          divider={<div className="h-full w-px bg-gray-300" />}
          spacing="medium"
        >
          <ExampleBox>项目 1</ExampleBox>
          <ExampleBox>项目 2</ExampleBox>
          <ExampleBox>项目 3</ExampleBox>
        </Stack>
      </div>
    </div>
  ),
};

export const WithWrap: Story = {
  render: () => (
    <div>
      <p className="mb-2 text-sm text-gray-600">自动换行</p>
      <Stack direction="horizontal" wrap spacing="medium" className="w-80">
        <ExampleBox>项目 1</ExampleBox>
        <ExampleBox>项目 2</ExampleBox>
        <ExampleBox>项目 3</ExampleBox>
        <ExampleBox>项目 4</ExampleBox>
        <ExampleBox>项目 5</ExampleBox>
        <ExampleBox>项目 6</ExampleBox>
      </Stack>
    </div>
  ),
};

export const HStackExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600">HStack 基本用法</p>
        <HStack spacing="medium">
          <ExampleBox className="bg-red-50">红色</ExampleBox>
          <ExampleBox className="bg-green-50">绿色</ExampleBox>
          <ExampleBox className="bg-blue-50">蓝色</ExampleBox>
        </HStack>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Stack.H 用法</p>
        <Stack.H spacing="large" align="center">
          <ExampleBox className="bg-purple-50">紫色</ExampleBox>
          <ExampleBox className="bg-yellow-50">黄色</ExampleBox>
          <ExampleBox className="bg-pink-50">粉色</ExampleBox>
        </Stack.H>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Stack.Horizontal 用法</p>
        <Stack.Horizontal spacing="small" justify="center">
          <ExampleBox className="bg-indigo-50">靛色</ExampleBox>
          <ExampleBox className="bg-cyan-50">青色</ExampleBox>
          <ExampleBox className="bg-teal-50">蓝绿色</ExampleBox>
        </Stack.Horizontal>
      </div>
    </div>
  ),
};

export const VStackExamples: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <p className="mb-2 text-sm text-gray-600">VStack 基本用法</p>
        <VStack spacing="medium" className="w-48">
          <ExampleBox className="bg-red-50">项目 1</ExampleBox>
          <ExampleBox className="bg-green-50">项目 2</ExampleBox>
          <ExampleBox className="bg-blue-50">项目 3</ExampleBox>
        </VStack>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Stack.V 用法</p>
        <Stack.V spacing="large" align="center" className="w-48">
          <ExampleBox className="bg-purple-50">项目 A</ExampleBox>
          <ExampleBox className="bg-yellow-50">项目 B</ExampleBox>
          <ExampleBox className="bg-pink-50">项目 C</ExampleBox>
        </Stack.V>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Stack.Vertical 用法</p>
        <Stack.Vertical spacing="small" className="w-48">
          <ExampleBox className="bg-indigo-50">第一个</ExampleBox>
          <ExampleBox className="bg-cyan-50">第二个</ExampleBox>
          <ExampleBox className="bg-teal-50">第三个</ExampleBox>
        </Stack.Vertical>
      </div>
    </div>
  ),
};

export const NestedStacks: Story = {
  render: () => (
    <div>
      <p className="mb-2 text-sm text-gray-600">嵌套堆叠示例</p>
      <VStack spacing="large" className="w-96">
        <ExampleBox>顶部项目</ExampleBox>
        <HStack spacing="medium" justify="center">
          <ExampleBox className="bg-red-50">左</ExampleBox>
          <ExampleBox className="bg-green-50">中</ExampleBox>
          <ExampleBox className="bg-blue-50">右</ExampleBox>
        </HStack>
        <ExampleBox>底部项目</ExampleBox>
      </VStack>
    </div>
  ),
};

export const CustomElement: Story = {
  render: () => (
    <Stack as="section" spacing="medium" className="w-64 p-4 bg-gray-50">
      <ExampleBox>项目 1</ExampleBox>
      <ExampleBox>项目 2</ExampleBox>
      <ExampleBox>项目 3</ExampleBox>
    </Stack>
  ),
};

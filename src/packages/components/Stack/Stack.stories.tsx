import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Stack, { HStack, VStack } from "./index";

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

// 示例组件
const Box = ({
  children,
  color = "bg-blue-100",
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <div
    className={`${color} border border-blue-200 px-4 py-2 rounded text-sm text-blue-800 w-full h-full`}
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
      <Box>项目 1</Box>
      <Box>项目 2</Box>
      <Box>项目 3</Box>
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
      <Box>垂直堆叠 1</Box>
      <Box>垂直堆叠 2</Box>
      <Box>垂直堆叠 3</Box>
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
      <Box>水平 1</Box>
      <Box>水平 2</Box>
      <Box>水平 3</Box>
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
      <Box>带分隔符 1</Box>
      <Box>带分隔符 2</Box>
      <Box>带分隔符 3</Box>
    </Stack>
  ),
};

export const DifferentSpacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-medium">Small 间距</h3>
        <Stack spacing="small" className="w-64">
          <Box>项目 1</Box>
          <Box>项目 2</Box>
          <Box>项目 3</Box>
        </Stack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Medium 间距</h3>
        <Stack spacing="medium" className="w-64">
          <Box>项目 1</Box>
          <Box>项目 2</Box>
          <Box>项目 3</Box>
        </Stack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Large 间距</h3>
        <Stack spacing="large" className="w-64">
          <Box>项目 1</Box>
          <Box>项目 2</Box>
          <Box>项目 3</Box>
        </Stack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">自定义间距 (数值)</h3>
        <Stack spacing={8} className="w-64">
          <Box>项目 1</Box>
          <Box>项目 2</Box>
          <Box>项目 3</Box>
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
          <Box>短</Box>
          <Box>较长的内容</Box>
          <Box>很长很长的内容项目</Box>
        </Stack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Center 对齐</h3>
        <Stack align="center" className="w-64 bg-gray-50 p-4">
          <Box>短</Box>
          <Box>较长的内容</Box>
          <Box>很长很长的内容项目</Box>
        </Stack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Stretch 对齐 (默认)</h3>
        <Stack align="stretch" className="w-64 bg-gray-50 p-4">
          <Box>短</Box>
          <Box>较长的内容</Box>
          <Box>很长很长的内容项目</Box>
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
          <Box color="bg-red-100">红色</Box>
          <Box color="bg-green-100">绿色</Box>
          <Box color="bg-blue-100">蓝色</Box>
        </HStack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Stack.H 用法</h3>
        <Stack.H spacing="large" align="center">
          <Box color="bg-purple-100">紫色</Box>
          <Box color="bg-yellow-100">黄色</Box>
          <Box color="bg-pink-100">粉色</Box>
        </Stack.H>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Stack.Horizontal 用法</h3>
        <Stack.Horizontal spacing="small" justify="center">
          <Box color="bg-indigo-100">靛色</Box>
          <Box color="bg-cyan-100">青色</Box>
          <Box color="bg-teal-100">蓝绿色</Box>
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
          <Box color="bg-red-100">项目 1</Box>
          <Box color="bg-green-100">项目 2</Box>
          <Box color="bg-blue-100">项目 3</Box>
        </VStack>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Stack.V 用法</h3>
        <Stack.V spacing="large" align="center" className="w-48">
          <Box color="bg-purple-100">项目 A</Box>
          <Box color="bg-yellow-100">项目 B</Box>
          <Box color="bg-pink-100">项目 C</Box>
        </Stack.V>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Stack.Vertical 用法</h3>
        <Stack.Vertical spacing="small" className="w-48">
          <Box color="bg-indigo-100">第一个</Box>
          <Box color="bg-cyan-100">第二个</Box>
          <Box color="bg-teal-100">第三个</Box>
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
        <Box>在小屏幕垂直排列</Box>
        <Box>在大屏幕水平排列</Box>
        <Box>自动适应</Box>
      </Stack>
    </div>
  ),
};

export const NestedStacks: Story = {
  render: () => (
    <div>
      <h3 className="mb-4 text-lg font-medium">嵌套堆叠示例</h3>
      <VStack spacing="large" className="w-80">
        <Box>顶部项目</Box>
        <HStack spacing="medium" justify="center">
          <Box color="bg-red-100">左</Box>
          <Box color="bg-green-100">中</Box>
          <Box color="bg-blue-100">右</Box>
        </HStack>
        <Box>底部项目</Box>
      </VStack>
    </div>
  ),
};

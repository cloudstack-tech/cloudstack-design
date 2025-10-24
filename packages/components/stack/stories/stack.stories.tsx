import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Stack, HStack, VStack} from "../src";
import {Box} from "../../stories/Box";
import {Divider} from "../../divider/src";

const meta = {
  title: "Components/Layout 布局/Stack 堆叠",
  component: Stack,
  parameters: {
    layout: "centered",
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

export const Vertical: Story = {
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

export const Horizontal: Story = {
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

export const DifferentSpacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-default-600">Small 间距 (8px)</p>
        <Stack spacing="small" className="w-64">
          <Box>项目 1</Box>
          <Box>项目 2</Box>
          <Box>项目 3</Box>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-default-600">Medium 间距 (16px)</p>
        <Stack spacing="medium" className="w-64">
          <Box>项目 1</Box>
          <Box>项目 2</Box>
          <Box>项目 3</Box>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-default-600">Large 间距 (24px)</p>
        <Stack spacing="large" className="w-64">
          <Box>项目 1</Box>
          <Box>项目 2</Box>
          <Box>项目 3</Box>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-default-600">自定义间距 (48px)</p>
        <Stack spacing={12} className="w-64">
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
        <p className="mb-2 text-sm text-default-600">Start 对齐</p>
        <Stack align="start" className="w-80 bg-default-50 p-4 rounded-md">
          <Box>短</Box>
          <Box>较长的内容</Box>
          <Box>很长很长的内容项目</Box>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-default-600">Center 对齐</p>
        <Stack align="center" className="w-80 bg-default-50 p-4 rounded-md">
          <Box>短</Box>
          <Box>较长的内容</Box>
          <Box>很长很长的内容项目</Box>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-default-600">Stretch 对齐 (默认)</p>
        <Stack align="stretch" className="w-80 bg-default-50 p-4 rounded-md">
          <Box>短</Box>
          <Box>较长的内容</Box>
          <Box>很长很长的内容项目</Box>
        </Stack>
      </div>
    </div>
  ),
};

export const JustifyOptions: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-default-600">Center 对齐</p>
        <Stack
          direction="horizontal"
          justify="center"
          className="w-full bg-default-50 p-4 rounded-md"
        >
          <Box>项目 1</Box>
          <Box>项目 2</Box>
          <Box>项目 3</Box>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-default-600">Between 对齐</p>
        <Stack
          direction="horizontal"
          justify="between"
          className="w-full bg-default-50 p-4 rounded-md"
        >
          <Box>项目 1</Box>
          <Box>项目 2</Box>
          <Box>项目 3</Box>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-default-600">Around 对齐</p>
        <Stack
          direction="horizontal"
          justify="around"
          className="w-full bg-default-50 p-4 rounded-md"
        >
          <Box>项目 1</Box>
          <Box>项目 2</Box>
          <Box>项目 3</Box>
        </Stack>
      </div>
    </div>
  ),
};

export const WithDivider: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-default-600">垂直分隔符</p>
        <Stack divider={<Divider color="default" thickness={1} />}>
          <Box>带分隔符 1</Box>
          <Box>带分隔符 2</Box>
          <Box>带分隔符 3</Box>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm text-default-600">水平分隔符</p>
        <Stack
          direction="horizontal"
          divider={<Divider color="default" orientation="vertical" thickness={1} className="h-4" />}
          spacing="medium"
          align="center"
        >
          <Box>项目 1</Box>
          <Box>项目 2</Box>
          <Box>项目 3</Box>
        </Stack>
      </div>
    </div>
  ),
};

export const WithWrap: Story = {
  render: () => (
    <div>
      <p className="mb-2 text-sm text-default-600">自动换行</p>
      <Stack direction="horizontal" wrap spacing="medium" className="w-80">
        <Box>项目 1</Box>
        <Box>项目 2</Box>
        <Box>项目 3</Box>
        <Box>项目 4</Box>
        <Box>项目 5</Box>
        <Box>项目 6</Box>
      </Stack>
    </div>
  ),
};

export const HStackExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-default-600">HStack 基本用法</p>
        <HStack spacing="medium">
          <Box>项目 1</Box>
          <Box>项目 2</Box>
          <Box>项目 3</Box>
        </HStack>
      </div>
      <div>
        <p className="mb-2 text-sm text-default-600">Stack.H 用法</p>
        <Stack.H spacing="large" align="center">
          <Box>项目 A</Box>
          <Box>项目 B</Box>
          <Box>项目 C</Box>
        </Stack.H>
      </div>
      <div>
        <p className="mb-2 text-sm text-default-600">Stack.Horizontal 用法</p>
        <Stack.Horizontal spacing="small" justify="center">
          <Box>第一</Box>
          <Box>第二</Box>
          <Box>第三</Box>
        </Stack.Horizontal>
      </div>
    </div>
  ),
};

export const VStackExamples: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <p className="mb-2 text-sm text-default-600">VStack 基本用法</p>
        <VStack spacing="medium" className="w-48">
          <Box>项目 1</Box>
          <Box>项目 2</Box>
          <Box>项目 3</Box>
        </VStack>
      </div>
      <div>
        <p className="mb-2 text-sm text-default-600">Stack.V 用法</p>
        <Stack.V spacing="large" align="center" className="w-48">
          <Box>项目 A</Box>
          <Box>项目 B</Box>
          <Box>项目 C</Box>
        </Stack.V>
      </div>
      <div>
        <p className="mb-2 text-sm text-default-600">Stack.Vertical 用法</p>
        <Stack.Vertical spacing="small" className="w-48">
          <Box>第一个</Box>
          <Box>第二个</Box>
          <Box>第三个</Box>
        </Stack.Vertical>
      </div>
    </div>
  ),
};

export const NestedStacks: Story = {
  render: () => (
    <div>
      <p className="mb-2 text-sm text-default-600">嵌套堆叠示例</p>
      <VStack spacing="large" className="w-96">
        <Box>顶部项目</Box>
        <HStack spacing="medium" justify="center">
          <Box>左</Box>
          <Box>中</Box>
          <Box>右</Box>
        </HStack>
        <Box>底部项目</Box>
      </VStack>
    </div>
  ),
};

export const CustomElement: Story = {
  render: () => (
    <Stack as="section" spacing="medium" className="w-64 p-4 bg-default-50 rounded-md">
      <Box>项目 1</Box>
      <Box>项目 2</Box>
      <Box>项目 3</Box>
    </Stack>
  ),
};

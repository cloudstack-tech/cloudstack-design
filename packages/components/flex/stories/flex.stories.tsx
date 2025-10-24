import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Flex} from "../src";
import {Box} from "../../stories/Box";

const meta = {
  title: "Components/Layout 布局/Flex 弹性布局",
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
      description: "间距（实际像素值会乘以4）",
    },
    inline: {
      control: "boolean",
      description: "是否为 inline-flex",
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gap: 4,
  },
  render: (args) => (
    <Flex {...args}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
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
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
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
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
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
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
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
      <Box className="h-10">短</Box>
      <Box className="h-20">中</Box>
      <Box className="h-16">高</Box>
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
      <Box>固定</Box>
      <Box style={{flex: 1}}>弹性</Box>
      <Box>固定</Box>
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
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
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
      <Box>使用 section 元素</Box>
      <Box>而不是 div</Box>
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
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Flex>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">gap: 2 (8px)</p>
        <Flex gap={2}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Flex>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">gap: 4 (16px)</p>
        <Flex gap={4}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Flex>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">gap: 8 (32px)</p>
        <Flex gap={8}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
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
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
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
            <Box className={align === "stretch" ? "" : "h-10"}>短</Box>
            <Box className={align === "stretch" ? "" : "h-20"}>中</Box>
            <Box className={align === "stretch" ? "" : "h-16"}>高</Box>
          </Flex>
        </div>
      ))}
    </div>
  ),
};

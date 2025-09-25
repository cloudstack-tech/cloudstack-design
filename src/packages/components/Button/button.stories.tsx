import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import { Button, Flex } from "@/packages/components";
import { NumView } from "./Examples";

const meta = {
  title: "Basic 基础/Button 按钮",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "flat", "light", "text"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "default", "danger", "success", "warning"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "base", "lg"],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础变体
export const Primary: Story = {
  args: {
    children: "创建实例",
    variant: "solid",
    color: "primary",
  },
};

// 展示所有 Primary 变体和尺寸组合（横向：variant，纵向：size）
export const PrimaryVariantsAndSizes: Story = {
  args: {
    loading: false,
    disabled: false,
  },
  argTypes: {
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  render: (args) => (
    <div className="space-y-4">
      {/* 表头 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">尺寸 \ 变体</div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Solid
        </div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Outline
        </div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Flat
        </div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Light
        </div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Text
        </div>
      </div>

      {/* Small 尺寸行 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">Small</div>
        <Button variant="solid" color="primary" size="sm" {...args}>
          按钮
        </Button>
        <Button variant="outline" color="primary" size="sm" {...args}>
          按钮
        </Button>
        <Button variant="flat" color="primary" size="sm" {...args}>
          按钮
        </Button>
        <Button variant="light" color="primary" size="sm" {...args}>
          按钮
        </Button>
        <Button variant="text" color="primary" size="sm" {...args}>
          按钮
        </Button>
      </div>

      {/* Base 尺寸行 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">Base</div>
        <Button variant="solid" color="primary" size="base" {...args}>
          按钮
        </Button>
        <Button variant="outline" color="primary" size="base" {...args}>
          按钮
        </Button>
        <Button variant="flat" color="primary" size="base" {...args}>
          按钮
        </Button>
        <Button variant="light" color="primary" size="base" {...args}>
          按钮
        </Button>
        <Button variant="text" color="primary" size="base" {...args}>
          按钮
        </Button>
      </div>

      {/* Large 尺寸行 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">Large</div>
        <Button variant="solid" color="primary" size="lg" {...args}>
          按钮
        </Button>
        <Button variant="outline" color="primary" size="lg" {...args}>
          按钮
        </Button>
        <Button variant="flat" color="primary" size="lg" {...args}>
          按钮
        </Button>
        <Button variant="light" color="primary" size="lg" {...args}>
          按钮
        </Button>
        <Button variant="text" color="primary" size="lg" {...args}>
          按钮
        </Button>
      </div>
    </div>
  ),
};

export const DefaultVariantsAndSizes: Story = {
  args: {
    loading: false,
    disabled: false,
  },
  argTypes: {
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  render: (args) => (
    <div className="space-y-4">
      {/* 表头 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">尺寸 \ 变体</div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Solid
        </div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Outline
        </div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Flat
        </div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Light
        </div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Text
        </div>
      </div>

      {/* Small 尺寸行 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">Small</div>
        <Button variant="solid" color="default" size="sm" {...args}>
          按钮
        </Button>
        <Button variant="outline" color="default" size="sm" {...args}>
          按钮
        </Button>
        <Button variant="flat" color="default" size="sm" {...args}>
          按钮
        </Button>
        <Button variant="light" color="default" size="sm" {...args}>
          按钮
        </Button>
        <Button variant="text" color="default" size="sm" {...args}>
          按钮
        </Button>
      </div>

      {/* Base 尺寸行 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">Base</div>
        <Button variant="solid" color="default" size="base" {...args}>
          按钮
        </Button>
        <Button variant="outline" color="default" size="base" {...args}>
          按钮
        </Button>
        <Button variant="flat" color="default" size="base" {...args}>
          按钮
        </Button>
        <Button variant="light" color="default" size="base" {...args}>
          按钮
        </Button>
        <Button variant="text" color="default" size="base" {...args}>
          按钮
        </Button>
      </div>

      {/* Large 尺寸行 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">Large</div>
        <Button variant="solid" color="default" size="lg" {...args}>
          按钮
        </Button>
        <Button variant="outline" color="default" size="lg" {...args}>
          按钮
        </Button>
        <Button variant="flat" color="default" size="lg" {...args}>
          按钮
        </Button>
        <Button variant="light" color="default" size="lg" {...args}>
          按钮
        </Button>
        <Button variant="text" color="default" size="lg" {...args}>
          按钮
        </Button>
      </div>
    </div>
  ),
};

export const DangerVariantsAndSizes: Story = {
  args: {
    loading: false,
    disabled: false,
  },
  argTypes: {
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  render: (args) => (
    <div className="space-y-4">
      {/* 表头 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">尺寸 \ 变体</div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Solid
        </div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Outline
        </div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Flat
        </div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Light
        </div>
        <div className="text-sm font-medium text-gray-600 text-center">
          Text
        </div>
      </div>

      {/* Small 尺寸行 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">Small</div>
        <Button variant="solid" color="danger" size="sm" {...args}>
          按钮
        </Button>
        <Button variant="outline" color="danger" size="sm" {...args}>
          按钮
        </Button>
        <Button variant="flat" color="danger" size="sm" {...args}>
          按钮
        </Button>
        <Button variant="light" color="danger" size="sm" {...args}>
          按钮
        </Button>
        <Button variant="text" color="danger" size="sm" {...args}>
          按钮
        </Button>
      </div>

      {/* Base 尺寸行 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">Base</div>
        <Button variant="solid" color="danger" size="base" {...args}>
          按钮
        </Button>
        <Button variant="outline" color="danger" size="base" {...args}>
          按钮
        </Button>
        <Button variant="flat" color="danger" size="base" {...args}>
          按钮
        </Button>
        <Button variant="light" color="danger" size="base" {...args}>
          按钮
        </Button>
        <Button variant="text" color="danger" size="base" {...args}>
          按钮
        </Button>
      </div>

      {/* Large 尺寸行 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">Large</div>
        <Button variant="solid" color="danger" size="lg" {...args}>
          按钮
        </Button>
        <Button variant="outline" color="danger" size="lg" {...args}>
          按钮
        </Button>
        <Button variant="flat" color="danger" size="lg" {...args}>
          按钮
        </Button>
        <Button variant="light" color="danger" size="lg" {...args}>
          按钮
        </Button>
        <Button variant="text" color="danger" size="lg" {...args}>
          按钮
        </Button>
      </div>
    </div>
  ),
};

export const StatButton = {
  render: (args: any) => {
    return (
      <Flex vertical>
        <Flex gap={2} className="w-64">
          <NumView value={2} className="flex-1 justify-between">
            节省计划
          </NumView>
          <NumView value={0} className="flex-1 justify-between">
            资源包
          </NumView>
        </Flex>
      </Flex>
    );
  },
};

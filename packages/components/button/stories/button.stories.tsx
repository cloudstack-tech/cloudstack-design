import {Button} from "../src";
import type {Meta, StoryFn, StoryObj} from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
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
    disabled: false,
  },
  argTypes: {
    disabled: {control: "boolean"},
  },
  render: (args) => (
    <div className="space-y-4">
      {/* 表头 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">尺寸 \ 变体</div>
        <div className="text-sm font-medium text-gray-600 text-center">Solid</div>
        <div className="text-sm font-medium text-gray-600 text-center">Outline</div>
        <div className="text-sm font-medium text-gray-600 text-center">Flat</div>
        <div className="text-sm font-medium text-gray-600 text-center">Light</div>
        <div className="text-sm font-medium text-gray-600 text-center">Text</div>
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

      {/* Small 尺寸行 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">Medium</div>
        <Button variant="solid" color="primary" size="md" {...args}>
          按钮
        </Button>
        <Button variant="outline" color="primary" size="md" {...args}>
          按钮
        </Button>
        <Button variant="flat" color="primary" size="md" {...args}>
          按钮
        </Button>
        <Button variant="light" color="primary" size="md" {...args}>
          按钮
        </Button>
        <Button variant="text" color="primary" size="md" {...args}>
          按钮
        </Button>
      </div>

      {/* Small 尺寸行 */}
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
    disabled: false,
  },
  argTypes: {
    disabled: {control: "boolean"},
  },
  render: (args) => (
    <div className="space-y-4">
      {/* 表头 */}
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-600">尺寸 \ 变体</div>
        <div className="text-sm font-medium text-gray-600 text-center">Solid</div>
        <div className="text-sm font-medium text-gray-600 text-center">Outline</div>
        <div className="text-sm font-medium text-gray-600 text-center">Flat</div>
        <div className="text-sm font-medium text-gray-600 text-center">Light</div>
        <div className="text-sm font-medium text-gray-600 text-center">Text</div>
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
        <Button variant="solid" color="default" size="md" {...args}>
          按钮
        </Button>
        <Button variant="outline" color="default" size="md" {...args}>
          按钮
        </Button>
        <Button variant="flat" color="default" size="md" {...args}>
          按钮
        </Button>
        <Button variant="light" color="default" size="md" {...args}>
          按钮
        </Button>
        <Button variant="text" color="default" size="md" {...args}>
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

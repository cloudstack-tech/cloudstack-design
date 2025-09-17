import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import { Button } from "@/packages/components";

const meta = {
  title: "Basic/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "text", "light", "flat"],
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

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "solid",
    color: "default",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "solid",
    color: "danger",
  },
};

// 不同变体展示
export const PrimaryOutline: Story = {
  args: {
    children: "Primary Outline",
    variant: "outline",
    color: "primary",
  },
};

export const PrimaryText: Story = {
  args: {
    children: "Primary Text",
    variant: "text",
    color: "primary",
  },
};

export const PrimaryFlat: Story = {
  args: {
    children: "Primary Flat",
    variant: "flat",
    color: "primary",
  },
};

// 危险按钮的不同变体
export const DangerOutline: Story = {
  args: {
    children: "Danger Outline",
    variant: "outline",
    color: "danger",
  },
};

export const DangerText: Story = {
  args: {
    children: "Danger Text",
    variant: "text",
    color: "danger",
  },
};

// 尺寸变体
export const SmallButton: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const LargeButton: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

// 状态
export const LoadingButton: Story = {
  args: {
    children: "Loading Button",
    loading: true,
  },
};

export const DisabledButton: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

// 图标按钮
export const IconOnlyButton: Story = {
  args: {
    icon: "🔍",
    iconOnly: true,
  },
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Typography } from "@/packages/components";

const meta = {
  title: "Basic/Typography",
  component: Typography.Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "base", "md", "lg", "xl"],
    },
    onClick: {
      action: "onClick",
    },
  },
} satisfies Meta<typeof Typography.Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础文本
export const Basic: Story = {
  args: {
    children: "这是一段基础文本",
    color: "default",
    ellipsis: false,
    onClick: () => {},
  },
};

export const Ellipsis: Story = {
  render: (args) => (
    <div style={{ width: "800px", padding: "16px" }}>
      <Typography.Text {...args} />
    </div>
  ),
  argTypes: {
    ellipsis: {
      type: "boolean",
    },
  },
  args: {
    children:
      "这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本，应该会被省略显示",
    color: "primary",
    ellipsis: true,
    onClick: () => {},
  },
};

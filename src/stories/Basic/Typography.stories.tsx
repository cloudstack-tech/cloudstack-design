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
    underline: {
      control: { type: "boolean" },
    },
    strikethrough: {
      control: { type: "boolean" },
    },
    italic: {
      control: { type: "boolean" },
    },
    weight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold", "bold"],
    },
  },
} satisfies Meta<typeof Typography.Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextBasic: Story = {
  args: {
    size: "base",
    weight: "normal",
    italic: false,
    underline: false,
    strikethrough: false,
  },
  render: (args) => (
    <div className="max-w-4xl flex flex-col gap-4">
      <Typography.Text {...args}>CloudStack Design (default)</Typography.Text>
      <Typography.Text {...args} color="primary">
        CloudStack Design (primary)
      </Typography.Text>
      <Typography.Text {...args} color="secondary">
        CloudStack Design (secondary)
      </Typography.Text>
      <Typography.Text {...args} color="success">
        CloudStack Design (success)
      </Typography.Text>
      <Typography.Text {...args} color="warning">
        CloudStack Design (warning)
      </Typography.Text>
      <Typography.Text {...args} color="danger">
        CloudStack Design (danger)
      </Typography.Text>
    </div>
  ),
};

export const Ellipsis: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-4xl">
        <Story />
      </div>
    ),
  ],
  args: {
    ellipsis: {
      rows: 3,
      expandable: true,
      suffix: "...",
      symbol: "展开",
      onExpand: () => {},
    },
    children: "CloudStack Design".repeat(100),
  },
};

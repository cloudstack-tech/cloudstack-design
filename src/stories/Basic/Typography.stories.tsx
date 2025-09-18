import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Typography } from "@/packages/components";

const meta = {
  title: "Basic/Typography",
  component: Typography.Base,
  subcomponents: {
    Text: Typography.Text,
    Title: Typography.Title,
  },
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
} satisfies Meta<typeof Typography.Base>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: "base",
    weight: "normal",
    italic: false,
    underline: false,
    strikethrough: false,
  },
  render: (args) => (
    <div className="max-w-4xl flex flex-col gap-4">
      <Typography.Text {...args} color="default">
        CloudStack Design (default)
      </Typography.Text>
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

export const Title: Story = {
  render: () => (
    <div className="max-w-4xl flex flex-col gap-4">
      <Typography.Title>H1. CloudStack Design</Typography.Title>
      <Typography.Title level={2}>H2. CloudStack Design</Typography.Title>
      <Typography.Title level={3}>H3. CloudStack Design</Typography.Title>
      <Typography.Title level={4}>H4. CloudStack Design</Typography.Title>
      <Typography.Title level={5}>H5. CloudStack Design</Typography.Title>
    </div>
  ),
};

export const TextEllipsis: Story = {
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="w-full p-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    ellipsis: {
      control: { type: "boolean" },
    },
  },
  args: {
    ellipsis: true,
    children:
      "CloudStack Design 是一个现代化的设计系统，提供了丰富的组件库和设计规范。它采用了最新的前端技术栈，包括 React、TypeScript、Tailwind CSS 等，为开发者提供了高效、灵活的开发体验。组件库包含了按钮、输入框、表格、弹窗等常用组件，每个组件都经过精心设计和优化，确保在各种场景下都能正常工作。设计系统还提供了完整的主题定制功能，开发者可以根据自己的需求调整颜色、字体、间距等样式属性。",
  },
};

export const Ellipsis: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
    },
    ellipsis: {
      control: { type: "object" },
    },
  },
  args: {
    ellipsis: {
      rows: 3,
      expandable: true,
    },
    children:
      "CloudStack Design 是一个现代化的设计系统，提供了丰富的组件库和设计规范。它采用了最新的前端技术栈，包括 React、TypeScript、Tailwind CSS 等，为开发者提供了高效、灵活的开发体验。组件库包含了按钮、输入框、表格、弹窗等常用组件，每个组件都经过精心设计和优化，确保在各种场景下都能正常工作。设计系统还提供了完整的主题定制功能，开发者可以根据自己的需求调整颜色、字体、间距等样式属性。",
  },
};

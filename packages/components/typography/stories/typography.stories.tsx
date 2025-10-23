import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Typography, Text, Title} from "../src";

const meta: Meta<typeof Typography> = {
  title: "Components/Basic 基础/Typography 排版",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: () => <Typography>这是一段默认的文本</Typography>,
};

export const TextComponent: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Text size="xs">超小文本 (xs)</Text>
      <Text size="sm">小文本 (sm)</Text>
      <Text size="base">基础文本 (base)</Text>
      <Text size="lg">大文本 (lg)</Text>
      <Text size="xl">超大文本 (xl)</Text>
    </div>
  ),
};

export const TitleComponent: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Title level={1}>一级标题</Title>
      <Title level={2}>二级标题</Title>
      <Title level={3}>三级标题</Title>
      <Title level={4}>四级标题</Title>
      <Title level={5}>五级标题</Title>
      <Title level={6}>六级标题</Title>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Text color="default">默认颜色</Text>
      <Text color="primary">主要颜色</Text>
      <Text color="secondary">次要颜色</Text>
      <Text color="success">成功颜色</Text>
      <Text color="warning">警告颜色</Text>
      <Text color="danger">危险颜色</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Text weight="normal">普通字重</Text>
      <Text weight="medium">中等字重</Text>
      <Text weight="semibold">半粗字重</Text>
      <Text weight="bold">粗体字重</Text>
    </div>
  ),
};

export const Styles: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Text italic>斜体文本</Text>
      <Text underline>下划线文本</Text>
      <Text strikethrough>删除线文本</Text>
    </div>
  ),
};

export const Ellipsis: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <Text ellipsis="true">
        这是一段很长的文本，会在超出容器宽度时自动省略显示。这是一段很长的文本，会在超出容器宽度时自动省略显示。
      </Text>
    </div>
  ),
};

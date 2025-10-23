import React from "react";
import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Typography, Text, Title} from "../src";

const meta: Meta<typeof Typography> = {
  title: "Components/Basic 基础/Typography 排版",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基础用法
export const Default: Story = {
  render: () => <Typography>这是一段默认的文本</Typography>,
};

// Text组件 - 不同尺寸
export const TextSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text size="xs">超小文本 (xs)</Text>
      <Text size="sm">小文本 (sm)</Text>
      <Text size="base">基础文本 (base)</Text>
      <Text size="md">中等文本 (md)</Text>
      <Text size="lg">大文本 (lg)</Text>
      <Text size="xl">超大文本 (xl)</Text>
      <Text size="2xl">2xl 文本</Text>
      <Text size="3xl">3xl 文本</Text>
    </div>
  ),
};

// Title组件 - 标题等级
export const TitleLevels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Title level={1}>一级标题 (h1)</Title>
      <Title level={2}>二级标题 (h2)</Title>
      <Title level={3}>三级标题 (h3)</Title>
      <Title level={4}>四级标题 (h4)</Title>
      <Title level={5}>五级标题 (h5)</Title>
      <Title level={6}>六级标题 (h6)</Title>
    </div>
  ),
};

// 不同颜色
export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text color="default">默认颜色 (default)</Text>
      <Text color="primary">主要颜色 (primary)</Text>
      <Text color="secondary">次要颜色 (secondary)</Text>
      <Text color="success">成功颜色 (success)</Text>
      <Text color="warning">警告颜色 (warning)</Text>
      <Text color="danger">危险颜色 (danger)</Text>
      <Text color="muted">弱化颜色 (muted)</Text>
    </div>
  ),
};

// 不同字重
export const Weights: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text weight="light">轻字重 (light)</Text>
      <Text weight="normal">普通字重 (normal)</Text>
      <Text weight="medium">中等字重 (medium)</Text>
      <Text weight="semibold">半粗字重 (semibold)</Text>
      <Text weight="bold">粗体字重 (bold)</Text>
    </div>
  ),
};

// 文本样式
export const Styles: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text>普通文本</Text>
      <Text italic>斜体文本 (italic)</Text>
      <Text underline>下划线文本 (underline)</Text>
      <Text strikethrough>删除线文本 (strikethrough)</Text>
      <Text italic underline>
        斜体+下划线
      </Text>
    </div>
  ),
};

// 文本对齐
export const Alignment: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96 border p-4">
      <Text align="left">左对齐文本 (left)</Text>
      <Text align="center">居中对齐文本 (center)</Text>
      <Text align="right">右对齐文本 (right)</Text>
      <Text align="justify">
        两端对齐文本 (justify)。这是一段较长的文本用于演示两端对齐的效果。
      </Text>
    </div>
  ),
};

// 文本转换
export const Transform: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text transform="uppercase">uppercase text</Text>
      <Text transform="lowercase">LOWERCASE TEXT</Text>
      <Text transform="capitalize">capitalize text</Text>
      <Text transform="normal">Normal Case Text</Text>
    </div>
  ),
};

// 行高
export const LineHeight: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <Text lineHeight="tight" className="block">
          tight 行高
          <br />
          这是第二行文本
        </Text>
      </div>
      <div>
        <Text lineHeight="normal" className="block">
          normal 行高
          <br />
          这是第二行文本
        </Text>
      </div>
      <div>
        <Text lineHeight="relaxed" className="block">
          relaxed 行高
          <br />
          这是第二行文本
        </Text>
      </div>
    </div>
  ),
};

// 文本截断
export const Truncate: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <div className="border p-4">
        <Text truncate>
          这是一段很长的文本会被截断。这是一段很长的文本会被截断。这是一段很长的文本会被截断。这是一段很长的文本会被截断。
        </Text>
      </div>
      <div className="border p-4">
        <Text>
          这是一段很长的文本不会被截断。这是一段很长的文本不会被截断。这是一段很长的文本不会被截断。这是一段很长的文本不会被截断。
        </Text>
      </div>
    </div>
  ),
};

// 组合使用
export const Combined: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-2xl">
      <Title level={1} color="primary">
        产品介绍页面
      </Title>

      <Text size="lg" color="muted" className="mb-4">
        这是一个产品介绍的副标题
      </Text>

      <Title level={2} weight="semibold">
        主要特性
      </Title>

      <div className="space-y-2">
        <Text>
          <Text weight="bold" color="primary">
            高性能：
          </Text>
          <Text>采用最新技术栈，确保应用的高性能运行。</Text>
        </Text>

        <Text>
          <Text weight="bold" color="success">
            易用性：
          </Text>
          <Text>直观的界面设计，降低学习成本。</Text>
        </Text>

        <Text>
          <Text weight="bold" color="secondary">
            可扩展：
          </Text>
          <Text>灵活的架构设计，支持各种定制需求。</Text>
        </Text>
      </div>

      <Title level={3} className="mt-6">
        价格说明
      </Title>

      <Text>
        <Text strikethrough color="muted">
          原价：¥999
        </Text>
        <Text size="xl" color="danger" weight="bold" className="ml-4">
          现价：¥699
        </Text>
      </Text>

      <Text size="sm" color="muted" italic>
        * 价格仅供参考，以实际购买时为准
      </Text>
    </div>
  ),
};

// 链接文本
export const LinkText: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text color="primary" underline className="cursor-pointer hover:text-blue-700">
        这是一个链接文本
      </Text>
      <Text>
        普通文本{" "}
        <Text as="a" color="primary" underline className="cursor-pointer">
          内联链接
        </Text>{" "}
        更多文本
      </Text>
    </div>
  ),
};

// 段落文本
export const Paragraph: Story = {
  render: () => (
    <div className="max-w-2xl space-y-4">
      <Title level={2}>关于我们</Title>

      <Text className="block" lineHeight="relaxed">
        我们是一家致力于提供优质产品和服务的公司。自成立以来，我们始终坚持以客户为中心的理念，不断创新和改进我们的产品。
      </Text>

      <Text className="block" lineHeight="relaxed">
        我们的团队由经验丰富的专业人士组成，他们在各自的领域都有深厚的专业知识和丰富的实践经验。我们相信，通过不懈的努力和持续的创新，我们能够为客户创造更大的价值。
      </Text>

      <Text className="block" lineHeight="relaxed" color="muted">
        如果您对我们的产品或服务有任何疑问，欢迎随时联系我们。我们将竭诚为您服务。
      </Text>
    </div>
  ),
};

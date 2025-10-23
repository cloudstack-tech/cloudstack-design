import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Empty} from "../src";
import {InboxIcon, FileQuestionIcon, SearchXIcon} from "lucide-react";
import {Button} from "../../button/src";

const meta: Meta<typeof Empty> = {
  title: "Components/Feedback 反馈/Empty 空状态",
  component: Empty,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {type: "select"},
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  args: {},
};

export const CustomDescription: Story = {
  args: {
    description: "没有找到相关内容",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Empty size="sm" description="小尺寸" />
      <Empty size="md" description="中等尺寸" />
      <Empty size="lg" description="大尺寸" />
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Empty icon={InboxIcon} description="空收件箱" />
      <Empty icon={FileQuestionIcon} description="未找到文件" />
      <Empty icon={SearchXIcon} description="搜索无结果" />
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Empty description="还没有任何数据">
      <Button color="primary" size="sm" className="mt-4">
        创建新数据
      </Button>
    </Empty>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="rounded-lg border border-default-200 bg-default-50 p-8">
      <Empty description="暂无数据" />
    </div>
  ),
};

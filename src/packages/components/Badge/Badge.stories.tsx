import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "@/packages/components";
import { Button } from "@/packages/components";
import Flex from "../Flex";
import Text from "../Typography/text";

const meta = {
  title: "Display 展示/Badge 徽标",
  component: Badge,
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "light", "flat"],
    },
    size: {
      control: "select",
      options: ["sm", "base", "lg"],
    },
    dot: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

export const Sizes: StoryObj<typeof meta> = {
  render: () => (
    <Flex gap={1} vertical>
      <Badge size="sm" color="primary" count={1}>
        <Text size="sm">Small</Text>
      </Badge>
      <Badge size="base" color="primary" count={1}>
        <Text>Base</Text>
      </Badge>
      <Badge size="lg" color="primary" count={1}>
        <Text size="lg">Large</Text>
      </Badge>
    </Flex>
  ),
};

export const WithCount: StoryObj<typeof meta> = {
  render: () => (
    <div className="flex gap-4 items-center flex-wrap">
      <Badge count={5} color="primary" />
      <Badge count={12} color="success" />
      <Badge count={99} color="warning" />
      <Badge count={100} color="danger" />
      <Badge count={1000} color="danger" overflowCount={999} />
      <Badge count={0} color="primary" />
      <Badge count={0} color="primary" showZero />
    </div>
  ),
};

export const DotBadge: StoryObj<typeof meta> = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Badge dot color="primary" />
      <Badge dot color="success" />
      <Badge dot color="warning" />
      <Badge dot color="danger" />
    </div>
  ),
};

export const WithWrapper: StoryObj<typeof meta> = {
  render: () => (
    <Flex gap={8}>
      <Badge count={5} color="danger">
        <Button>消息</Button>
      </Badge>
      <Badge count={99} color="primary">
        <Button variant="outline">通知</Button>
      </Badge>
      <Badge dot color="success">
        <Button>在线状态</Button>
      </Badge>
      <Badge count={10} color="warning">
        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
          头像
        </div>
      </Badge>
    </Flex>
  ),
};

export const WithOffset: StoryObj<typeof meta> = {
  render: () => (
    <div className="flex gap-8 items-start">
      <Badge count={3} color="danger">
        <Button>默认偏移</Button>
      </Badge>
      <Badge count={8} color="primary" offset={[5, -5]}>
        <Button>自定义偏移</Button>
      </Badge>
    </div>
  ),
};

export const Interactive: StoryObj<typeof meta> = {
  render: () => {
    const [count, setCount] = React.useState(1);

    return (
      <div className="flex gap-4 items-center">
        <Badge count={count} color="primary">
          <Button>消息 ({count})</Button>
        </Badge>
        <Button onClick={() => setCount(count + 1)} variant="outline">
          增加
        </Button>
        <Button
          onClick={() => setCount(Math.max(0, count - 1))}
          variant="outline"
        >
          减少
        </Button>
        <Button onClick={() => setCount(0)} variant="outline">
          清零
        </Button>
      </div>
    );
  },
};

export const AnnoyingRedDot: StoryObj<typeof meta> = {
  name: "讨嫌的小红点",
  render: () => (
    <div className="space-y-6">
      <Flex vertical gap={2}>
        <Text weight="medium">各种场景下的小红点</Text>
        <Flex gap={6} wrap>
          <Badge dot color="danger" size="sm">
            <Button variant="outline">消息</Button>
          </Badge>

          <Badge dot color="danger" size="base">
            <Button variant="light">通知</Button>
          </Badge>

          <Badge dot color="danger" size="sm">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs">
              头像
            </div>
          </Badge>

          <Badge dot color="danger" size="sm">
            <span className="text-sm text-gray-600 cursor-pointer hover:text-gray-800">
              设置
            </span>
          </Badge>
        </Flex>
      </Flex>

      <Flex vertical gap={2}>
        <Text weight="medium">不同位置的小红点</Text>
        <div className="flex gap-6 items-center">
          <Badge dot color="danger" size="sm" position="top-right">
            <Button size="sm" variant="outline">
              右上角
            </Button>
          </Badge>

          <Badge dot color="danger" size="sm" position="top-left">
            <Button size="sm" variant="outline">
              左上角
            </Button>
          </Badge>

          <Badge dot color="danger" size="sm" position="bottom-right">
            <Button size="sm" variant="outline">
              右下角
            </Button>
          </Badge>
        </div>
      </Flex>

      <Flex vertical gap={2}>
        <Text weight="medium">导航场景</Text>
        <div className="flex gap-4 items-center">
          <Badge dot color="danger" size="sm">
            <Text size="sm">首页</Text>
          </Badge>
          <Badge dot color="danger" size="sm">
            <Text size="sm">工作台</Text>
          </Badge>
          <Badge dot color="danger" size="sm">
            <Text size="sm">个人中心</Text>
          </Badge>
        </div>
      </Flex>
    </div>
  ),
};

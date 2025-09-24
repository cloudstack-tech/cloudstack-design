import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import Steps from "./steps";
import {
  UserIcon,
  CreditCardIcon,
  CheckCircleIcon,
  AlertCircleIcon,
} from "lucide-react";

const meta = {
  title: "Navigation 导航/Steps 步骤条",
  component: Steps,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    current: {
      control: { type: "number", min: 0, max: 4 },
      description: "当前步骤",
    },
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "步骤条方向",
    },
    size: {
      control: { type: "select" },
      options: ["small", "default"],
      description: "步骤条大小",
    },
    clickable: {
      control: { type: "boolean" },
      description: "是否允许点击切换步骤",
    },
  },
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  args: {
    current: 1,
    direction: "horizontal",
    size: "default",
    clickable: false,
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Item title="第一步" description="这是第一步的描述" />
      <Steps.Item title="第二步" description="这是第二步的描述" />
      <Steps.Item title="第三步" description="这是第三步的描述" />
      <Steps.Item title="第四步" description="这是第四步的描述" />
    </Steps>
  ),
};

export const WithItemsArray: Story = {
  name: "使用数组数据",
  args: {
    current: 2,
    direction: "horizontal",
  },
  render: (args) => (
    <Steps
      {...args}
      items={[
        { title: "登录", description: "用户登录验证" },
        { title: "验证", description: "身份信息验证" },
        { title: "完成", description: "设置完成" },
      ]}
    />
  ),
};

export const Vertical: Story = {
  name: "垂直方向",
  args: {
    current: 1,
    direction: "vertical",
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Item title="注册账户" description="创建您的账户，填写基本信息" />
      <Steps.Item title="邮箱验证" description="验证您的邮箱地址以激活账户" />
      <Steps.Item title="完善资料" description="添加个人资料和偏好设置" />
      <Steps.Item title="开始使用" description="探索平台功能，开始您的旅程" />
    </Steps>
  ),
};

export const WithCustomIcons: Story = {
  name: "自定义图标",
  args: {
    current: 2,
    direction: "horizontal",
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Item
        title="用户信息"
        description="填写个人基本信息"
        icon={<UserIcon className="w-4 h-4" />}
      />
      <Steps.Item
        title="支付信息"
        description="设置支付方式和账单地址"
        icon={<CreditCardIcon className="w-4 h-4" />}
      />
      <Steps.Item
        title="确认订单"
        description="核对订单信息并确认"
        icon={<CheckCircleIcon className="w-4 h-4" />}
      />
    </Steps>
  ),
};

export const WithErrorStatus: Story = {
  name: "包含错误状态",
  render: () => (
    <Steps current={2}>
      <Steps.Item title="验证邮箱" description="邮箱验证成功" status="finish" />
      <Steps.Item
        title="身份验证"
        description="身份验证失败，请重试"
        status="error"
        icon={<AlertCircleIcon className="w-4 h-4" />}
      />
      <Steps.Item title="完成设置" description="完成账户设置" status="wait" />
    </Steps>
  ),
};

export const Clickable: Story = {
  name: "可点击切换",
  render: () => {
    const [currentStep, setCurrentStep] = React.useState(0);

    return (
      <Steps current={currentStep} clickable onChange={setCurrentStep}>
        <Steps.Item title="选择商品" description="浏览并选择您喜欢的商品" />
        <Steps.Item title="确认订单" description="核对商品信息和数量" />
        <Steps.Item title="付款" description="选择支付方式并完成付款" />
        <Steps.Item title="完成" description="订单提交成功，等待发货" />
      </Steps>
    );
  },
};

export const SmallSize: Story = {
  name: "小尺寸",
  args: {
    current: 1,
    size: "small",
    direction: "horizontal",
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Item title="步骤一" />
      <Steps.Item title="步骤二" />
      <Steps.Item title="步骤三" />
      <Steps.Item title="步骤四" />
    </Steps>
  ),
};

export const OnlyTitle: Story = {
  name: "仅标题",
  args: {
    current: 2,
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Item title="开始" />
      <Steps.Item title="进行中" />
      <Steps.Item title="完成" />
    </Steps>
  ),
};

export const LongDescription: Story = {
  name: "长描述内容",
  args: {
    current: 1,
    direction: "vertical",
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Item
        title="项目规划阶段"
        description="在这个阶段，我们需要确定项目的目标、范围和时间线。团队成员将共同讨论技术方案，确定使用的技术栈，并制定详细的开发计划。这个阶段非常重要，因为它为整个项目奠定了基础。"
      />
      <Steps.Item
        title="设计和原型阶段"
        description="基于项目规划的结果，设计团队将创建用户界面设计稿和交互原型。这个阶段包括用户体验设计、视觉设计、以及可用性测试。我们会与客户密切合作，确保设计方案符合他们的期望。"
      />
      <Steps.Item
        title="开发实施阶段"
        description="开发团队根据设计稿和技术方案开始编码实现。这个阶段包括前端开发、后端开发、数据库设计、API接口开发等各个方面。我们采用敏捷开发方法，确保高质量交付。"
      />
    </Steps>
  ),
};

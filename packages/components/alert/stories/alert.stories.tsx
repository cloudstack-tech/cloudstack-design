import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Alert} from "../src";

const meta = {
  title: "Components/Feedback 反馈/Alert 警告提示",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger"],
    },
    variant: {
      control: "select",
      options: ["flat", "outline"],
    },
    type: {
      control: "select",
      options: ["info", "success", "error", "warning", "question"],
    },
  },
  args: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "primary",
    variant: "flat",
    children: "This is an alert message",
  },
};

export const Primary: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-4 max-w-4xl">
      <div className="flex flex-col gap-2">
        <Alert {...args} color="primary" variant="flat">
          Alert default
        </Alert>
        <Alert {...args} color="primary" type="info" variant="flat">
          Alert info
        </Alert>
        <Alert {...args} color="primary" type="success" variant="flat">
          Alert success
        </Alert>
        <Alert {...args} color="primary" type="error" variant="flat">
          Alert error
        </Alert>
        <Alert {...args} color="primary" type="warning" variant="flat">
          Alert warning
        </Alert>
        <Alert {...args} color="primary" type="question" variant="flat">
          Alert question
        </Alert>
      </div>

      <div className="flex flex-col gap-2">
        <Alert {...args} color="primary" variant="outline">
          Alert default
        </Alert>
        <Alert {...args} color="primary" type="info" variant="outline">
          Alert info
        </Alert>
        <Alert {...args} color="primary" type="success" variant="outline">
          Alert success
        </Alert>
        <Alert {...args} color="primary" type="error" variant="outline">
          Alert error
        </Alert>
        <Alert {...args} color="primary" type="warning" variant="outline">
          Alert warning
        </Alert>
        <Alert {...args} color="primary" type="question" variant="outline">
          Alert question
        </Alert>
      </div>
    </div>
  ),
};

export const Success: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-4 max-w-4xl">
      <div className="flex flex-col gap-2">
        <Alert {...args} color="success" variant="flat">
          Operation completed successfully
        </Alert>
        <Alert {...args} color="success" type="success" variant="flat">
          Alert with success icon
        </Alert>
      </div>

      <div className="flex flex-col gap-2">
        <Alert {...args} color="success" variant="outline">
          Operation completed successfully
        </Alert>
        <Alert {...args} color="success" type="success" variant="outline">
          Alert with success icon
        </Alert>
      </div>
    </div>
  ),
};

export const Warning: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-4 max-w-4xl">
      <div className="flex flex-col gap-2">
        <Alert {...args} color="warning" variant="flat">
          Please be careful with this action
        </Alert>
        <Alert {...args} color="warning" type="warning" variant="flat">
          Alert with warning icon
        </Alert>
      </div>

      <div className="flex flex-col gap-2">
        <Alert {...args} color="warning" variant="outline">
          Please be careful with this action
        </Alert>
        <Alert {...args} color="warning" type="warning" variant="outline">
          Alert with warning icon
        </Alert>
      </div>
    </div>
  ),
};

export const Danger: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-4 max-w-4xl">
      <div className="flex flex-col gap-2">
        <Alert {...args} color="danger" variant="flat">
          An error occurred while processing your request
        </Alert>
        <Alert {...args} color="danger" type="error" variant="flat">
          Alert with error icon
        </Alert>
      </div>

      <div className="flex flex-col gap-2">
        <Alert {...args} color="danger" variant="outline">
          An error occurred while processing your request
        </Alert>
        <Alert {...args} color="danger" type="error" variant="outline">
          Alert with error icon
        </Alert>
      </div>
    </div>
  ),
};

export const WithLongContent: Story = {
  args: {
    color: "primary",
    type: "info",
    children: (
      <div className="space-y-2">
        <p>
          计划内运维事件指的是阿里云因更新维护、探测到系统故障等原因对 ECS
          实例造成影响时，提前告知用户实例受到的影响（比如重启实例，重新部署实例等）以及计划执行时间，方便用户在事件执行之前提前应对，降低业务受损。
        </p>
        <p>
          注意：对于计划重启事件，您需要通过控制台或 OpenAPI
          重启实例才会生效；对于重新部署事件，在执行实例重新部署后，该实例所使用的本地 SSD 盘（用于
          i1/i2/gn5/ga1/f1 实例）或本地 HDD 盘（用于 d1/d1ne
          实例）被初始化，本地盘上的数据会被清空。
        </p>
      </div>
    ),
  },
};

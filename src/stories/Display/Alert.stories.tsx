import { Alert, Button } from "@/packages/components";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Link from "next/link";

const meta = {
  title: "Display/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "success", "error", "warning"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <Alert {...args} color={"primary"} variant={"flat"}>
          Alert none
        </Alert>
        <Alert {...args} color={"primary"} type="info" variant={"flat"}>
          Alert info
        </Alert>
        <Alert {...args} color={"primary"} type="success" variant={"flat"}>
          Alert success
        </Alert>
        <Alert {...args} color={"primary"} type="error" variant={"flat"}>
          Alert error
        </Alert>
        <Alert {...args} color={"primary"} type="warning" variant={"flat"}>
          Alert warning
        </Alert>
        <Alert {...args} color={"primary"} type="question" variant={"flat"}>
          Alert question
        </Alert>
      </div>

      <div className="flex flex-col gap-2">
        <Alert {...args} color={"primary"} variant={"outline"}>
          Alert none
        </Alert>
        <Alert {...args} color={"primary"} type="info" variant={"outline"}>
          Alert info
        </Alert>
        <Alert {...args} color={"primary"} type="success" variant={"outline"}>
          Alert success
        </Alert>
        <Alert {...args} color={"primary"} type="error" variant={"outline"}>
          Alert error
        </Alert>
        <Alert {...args} color={"primary"} type="warning" variant={"outline"}>
          Alert warning
        </Alert>
        <Alert {...args} color={"primary"} type="question" variant={"outline"}>
          Alert question
        </Alert>
      </div>
    </div>
  ),
};

export const Default: StoryObj<typeof meta> = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <Alert {...args} color={"default"} variant={"flat"}>
          Alert none
        </Alert>
        <Alert {...args} color={"default"} type="info" variant={"flat"}>
          Alert info
        </Alert>
        <Alert {...args} color={"default"} type="success" variant={"flat"}>
          Alert success
        </Alert>
        <Alert {...args} color={"default"} type="error" variant={"flat"}>
          Alert error
        </Alert>
        <Alert {...args} color={"default"} type="warning" variant={"flat"}>
          Alert warning
        </Alert>
        <Alert {...args} color={"default"} type="question" variant={"flat"}>
          Alert question
        </Alert>
      </div>

      <div className="flex flex-col gap-2">
        <Alert {...args} color={"default"} variant={"outline"}>
          Alert none
        </Alert>
        <Alert {...args} color={"default"} type="info" variant={"outline"}>
          Alert info
        </Alert>
        <Alert {...args} color={"default"} type="success" variant={"outline"}>
          Alert success
        </Alert>
        <Alert {...args} color={"default"} type="error" variant={"outline"}>
          Alert error
        </Alert>
        <Alert {...args} color={"default"} type="warning" variant={"outline"}>
          Alert warning
        </Alert>
        <Alert {...args} color={"default"} type="question" variant={"outline"}>
          Alert question
        </Alert>
      </div>
    </div>
  ),
};

export const Success: StoryObj<typeof meta> = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <Alert {...args} color={"success"} variant={"flat"}>
          Alert none
        </Alert>
        <Alert {...args} color={"success"} type="info" variant={"flat"}>
          Alert info
        </Alert>
        <Alert {...args} color={"success"} type="success" variant={"flat"}>
          Alert success
        </Alert>
        <Alert {...args} color={"success"} type="error" variant={"flat"}>
          Alert error
        </Alert>
        <Alert {...args} color={"success"} type="warning" variant={"flat"}>
          Alert warning
        </Alert>
        <Alert {...args} color={"success"} type="question" variant={"flat"}>
          Alert question
        </Alert>
      </div>

      <div className="flex flex-col gap-2">
        <Alert {...args} color={"success"} variant={"outline"}>
          Alert none
        </Alert>
        <Alert {...args} color={"success"} type="info" variant={"outline"}>
          Alert info
        </Alert>
        <Alert {...args} color={"success"} type="success" variant={"outline"}>
          Alert success
        </Alert>
        <Alert {...args} color={"success"} type="error" variant={"outline"}>
          Alert error
        </Alert>
        <Alert {...args} color={"success"} type="warning" variant={"outline"}>
          Alert warning
        </Alert>
        <Alert {...args} color={"success"} type="question" variant={"outline"}>
          Alert question
        </Alert>
      </div>
    </div>
  ),
};

export const Error: StoryObj<typeof meta> = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <Alert {...args} color={"error"} variant={"flat"}>
          Alert none
        </Alert>
        <Alert {...args} color={"error"} type="info" variant={"flat"}>
          Alert info
        </Alert>
        <Alert {...args} color={"error"} type="success" variant={"flat"}>
          Alert success
        </Alert>
        <Alert {...args} color={"error"} type="error" variant={"flat"}>
          Alert error
        </Alert>
        <Alert {...args} color={"error"} type="warning" variant={"flat"}>
          Alert warning
        </Alert>
        <Alert {...args} color={"error"} type="question" variant={"flat"}>
          Alert question
        </Alert>
      </div>

      <div className="flex flex-col gap-2">
        <Alert {...args} color={"error"} variant={"outline"}>
          Alert none
        </Alert>
        <Alert {...args} color={"error"} type="info" variant={"outline"}>
          Alert info
        </Alert>
        <Alert {...args} color={"error"} type="success" variant={"outline"}>
          Alert success
        </Alert>
        <Alert {...args} color={"error"} type="error" variant={"outline"}>
          Alert error
        </Alert>
        <Alert {...args} color={"error"} type="warning" variant={"outline"}>
          Alert warning
        </Alert>
        <Alert {...args} color={"error"} type="question" variant={"outline"}>
          Alert question
        </Alert>
      </div>
    </div>
  ),
};

export const Warning: StoryObj<typeof meta> = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <Alert {...args} color={"warning"} variant={"flat"}>
          Alert none
        </Alert>
        <Alert {...args} color={"warning"} type="info" variant={"flat"}>
          Alert info
        </Alert>
        <Alert {...args} color={"warning"} type="success" variant={"flat"}>
          Alert success
        </Alert>
        <Alert {...args} color={"warning"} type="error" variant={"flat"}>
          Alert error
        </Alert>
        <Alert {...args} color={"warning"} type="warning" variant={"flat"}>
          Alert warning
        </Alert>
        <Alert {...args} color={"warning"} type="question" variant={"flat"}>
          Alert question
        </Alert>
      </div>

      <div className="flex flex-col gap-2">
        <Alert {...args} color={"warning"} variant={"outline"}>
          Alert none
        </Alert>
        <Alert {...args} color={"warning"} type="info" variant={"outline"}>
          Alert info
        </Alert>
        <Alert {...args} color={"warning"} type="success" variant={"outline"}>
          Alert success
        </Alert>
        <Alert {...args} color={"warning"} type="error" variant={"outline"}>
          Alert error
        </Alert>
        <Alert {...args} color={"warning"} type="warning" variant={"outline"}>
          Alert warning
        </Alert>
        <Alert {...args} color={"warning"} type="question" variant={"outline"}>
          Alert question
        </Alert>
      </div>
    </div>
  ),
};

export const Annocement: StoryObj<typeof meta> = {
  render: (args) => (
    <Alert
      {...args}
      color={"primary"}
      type="info"
      classNames={{
        icon: "text-primary-color",
        content: "text-default-color space-y-1",
      }}
    >
      <div>
        计划内运维事件指的是阿里云因更新维护、探测到系统故障等原因对 ECS
        实例造成影响时，提前告知用户实例受到的影响（比如重启实例，重新部署实例等）以及计划执行时间，方便用户在事件执行之前提前应对，降低业务受损。
      </div>
      <div>
        注意：对于计划重启事件，您需要通过控制台或 OpenAPI
        重启实例才会生效；对于重新部署事件，在执行实例重新部署后，该实例所使用的本地
        SSD 盘（用于 i1/i2/gn5/ga1/f1 实例）或本地 HDD 盘（用于 d1/d1ne
        实例）被初始化，本地盘上的数据会被清空。为了保障数据安全，建议您在计划内运维事件执行前及时备份数据。
      </div>
      <div>
        关于计划内运维事件相关的内容，您可以参考
        <Button className="mx-1" variant={"text"} as={Link} href="#">
          帮助文档
        </Button>{" "}
        。 您也可以通过云监控或者事件总线订阅该事件，及时获知并处理。
        <Button className="mx-1" variant={"text"} as={Link} href="#">
          通过云监控订阅 ECS 事件 通过事件总线订阅 ECS 事件
        </Button>
      </div>
    </Alert>
  ),
};

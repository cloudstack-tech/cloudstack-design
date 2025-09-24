import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { Radio, RadioGroup } from "./";

const meta = {
  title: "Data 数据/Radio 单选框",
  component: Radio,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "是否选中",
    },
    disabled: {
      control: { type: "boolean" },
      description: "是否禁用",
    },
    label: {
      control: { type: "text" },
      description: "标签文本",
    },
    value: {
      control: { type: "text" },
      description: "单选框的值",
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: "单选框",
    value: "default",
  },
};

export const Checked: Story = {
  name: "选中状态",
  args: {
    label: "已选中的单选框",
    checked: true,
    value: "checked",
  },
};

export const Disabled: Story = {
  name: "禁用状态",
  render: () => (
    <div className="flex flex-col gap-4">
      <Radio label="禁用未选中" disabled value="disabled1" />
      <Radio label="禁用已选中" disabled checked value="disabled2" />
    </div>
  ),
};

export const WithoutLabel: Story = {
  name: "无标签",
  args: {
    value: "no-label",
  },
};

export const WithChildren: Story = {
  name: "使用子元素作为标签",
  render: () => (
    <Radio value="with-children">
      <span className="font-medium">自定义标签内容</span>
    </Radio>
  ),
};

export const BasicRadioGroup: StoryObj<typeof RadioGroup> = {
  name: "基础 RadioGroup",
  render: () => {
    const [value, setValue] = React.useState("apple");

    return (
      <RadioGroup
        value={value}
        onChange={setValue}
        options={[
          { label: "苹果", value: "apple" },
          { label: "香蕉", value: "banana" },
          { label: "橙子", value: "orange" },
        ]}
      />
    );
  },
};

export const VerticalRadioGroup: StoryObj<typeof RadioGroup> = {
  name: "垂直布局 RadioGroup",
  render: () => {
    const [value, setValue] = React.useState("option1");

    return (
      <RadioGroup
        value={value}
        onChange={setValue}
        direction="vertical"
        options={[
          { label: "选项一", value: "option1" },
          { label: "选项二", value: "option2" },
          { label: "选项三", value: "option3" },
          { label: "选项四", value: "option4" },
        ]}
      />
    );
  },
};

export const DisabledRadioGroup: StoryObj<typeof RadioGroup> = {
  name: "禁用的 RadioGroup",
  render: () => (
    <RadioGroup
      defaultValue="option2"
      disabled
      options={[
        { label: "选项一", value: "option1" },
        { label: "选项二", value: "option2" },
        { label: "选项三", value: "option3" },
      ]}
    />
  ),
};

export const PartiallyDisabledRadioGroup: StoryObj<typeof RadioGroup> = {
  name: "部分禁用的 RadioGroup",
  render: () => {
    const [value, setValue] = React.useState("available1");

    return (
      <RadioGroup
        value={value}
        onChange={setValue}
        options={[
          { label: "可用选项一", value: "available1" },
          { label: "可用选项二", value: "available2" },
          { label: "禁用选项", value: "disabled", disabled: true },
          { label: "可用选项三", value: "available3" },
        ]}
      />
    );
  },
};

export const RadioGroupWithChildren: StoryObj<typeof RadioGroup> = {
  name: "使用子元素的 RadioGroup",
  render: () => {
    const [value, setValue] = React.useState("child1");

    return (
      <RadioGroup value={value} onChange={setValue} direction="vertical">
        <Radio value="child1" label="子元素选项一" />
        <Radio value="child2" label="子元素选项二" />
        <Radio value="child3" label="子元素选项三" disabled />
      </RadioGroup>
    );
  },
};

export const ControlledRadio: Story = {
  name: "受控的 Radio",
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <div className="flex flex-col gap-4">
        <Radio
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          label={`单选框 ${checked ? "已选中" : "未选中"}`}
          value="controlled"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setChecked(!checked)}
        >
          切换状态
        </button>
      </div>
    );
  },
};

export const SizeComparison: StoryObj<typeof RadioGroup> = {
  name: "不同场景示例",
  render: () => {
    const [preference, setPreference] = React.useState("email");
    const [plan, setPlan] = React.useState("basic");

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-3">联系方式偏好</h3>
          <RadioGroup
            value={preference}
            onChange={setPreference}
            direction="vertical"
            options={[
              { label: "邮箱通知", value: "email" },
              { label: "短信通知", value: "sms" },
              { label: "电话通知", value: "phone" },
              { label: "不接受通知", value: "none" },
            ]}
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">订阅计划</h3>
          <RadioGroup
            value={plan}
            onChange={setPlan}
            options={[
              { label: "基础版 (¥0/月)", value: "basic" },
              { label: "专业版 (¥99/月)", value: "pro" },
              { label: "企业版 (¥299/月)", value: "enterprise" },
            ]}
          />
        </div>
      </div>
    );
  },
};

export const LongContent: StoryObj<typeof RadioGroup> = {
  name: "长内容选项",
  render: () => {
    const [choice, setChoice] = React.useState("option1");

    return (
      <RadioGroup
        value={choice}
        onChange={setChoice}
        direction="vertical"
        className="max-w-md"
      >
        <Radio
          value="option1"
          label="选项一：这是一个包含很长描述文本的选项，用于测试组件在处理长内容时的显示效果"
        />
        <Radio
          value="option2"
          label="选项二：另一个长文本选项，用来验证多行文本的对齐和布局是否正确"
        />
        <Radio value="option3" label="选项三：简短选项" />
      </RadioGroup>
    );
  },
};

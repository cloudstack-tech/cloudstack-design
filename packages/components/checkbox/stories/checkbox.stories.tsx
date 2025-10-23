import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Checkbox, CheckboxGroup} from "../src";

const meta = {
  title: "Components/Data Entry 数据输入/Checkbox 复选框",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础用法
export const Default: Story = {
  args: {
    children: "Checkbox",
  },
};

// 选中状态
export const Selected: Story = {
  args: {
    isSelected: true,
    children: "Selected Checkbox",
  },
};

// 不确定状态
export const Indeterminate: Story = {
  args: {
    isIndeterminate: true,
    children: "Indeterminate Checkbox",
  },
};

// 禁用状态
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox isDisabled>Disabled</Checkbox>
      <Checkbox isDisabled isSelected>
        Disabled Selected
      </Checkbox>
      <Checkbox isDisabled isIndeterminate>
        Disabled Indeterminate
      </Checkbox>
    </div>
  ),
};

// 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm">Small</Checkbox>
      <Checkbox size="md">Medium (默认)</Checkbox>
      <Checkbox size="lg">Large</Checkbox>
    </div>
  ),
};

// 不同颜色
export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox color="default" isSelected>
        Default
      </Checkbox>
      <Checkbox color="primary" isSelected>
        Primary
      </Checkbox>
      <Checkbox color="secondary" isSelected>
        Secondary
      </Checkbox>
      <Checkbox color="success" isSelected>
        Success
      </Checkbox>
      <Checkbox color="warning" isSelected>
        Warning
      </Checkbox>
      <Checkbox color="danger" isSelected>
        Danger
      </Checkbox>
    </div>
  ),
};

// 受控组件
export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <div className="flex flex-col gap-4">
        <Checkbox isSelected={selected} onChange={setSelected}>
          {selected ? "已选中" : "未选中"}
        </Checkbox>
        <button
          onClick={() => setSelected(!selected)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          切换状态
        </button>
      </div>
    );
  },
};

// 非受控组件
export const Uncontrolled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox defaultSelected>默认选中</Checkbox>
      <Checkbox>默认未选中</Checkbox>
    </div>
  ),
};

// 使用 label 属性
export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="使用 label 属性" />
      <Checkbox>使用 children</Checkbox>
    </div>
  ),
};

// 自定义样式
export const CustomStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox
        classNames={{
          base: "p-2 bg-gray-50 rounded",
          wrapper: "w-6 h-6",
          label: "text-lg font-bold",
        }}
      >
        自定义样式
      </Checkbox>
    </div>
  ),
};

// CheckboxGroup - 基础用法
export const GroupDefault: Story = {
  render: () => (
    <CheckboxGroup
      label="选择水果"
      options={[
        {label: "苹果", value: "apple"},
        {label: "香蕉", value: "banana"},
        {label: "橙子", value: "orange"},
      ]}
    />
  ),
};

// CheckboxGroup - 默认值
export const GroupDefaultValue: Story = {
  render: () => (
    <CheckboxGroup
      label="选择水果"
      defaultValue={["apple", "orange"]}
      options={[
        {label: "苹果", value: "apple"},
        {label: "香蕉", value: "banana"},
        {label: "橙子", value: "orange"},
      ]}
    />
  ),
};

// CheckboxGroup - 水平布局
export const GroupHorizontal: Story = {
  render: () => (
    <CheckboxGroup
      label="选择水果"
      orientation="horizontal"
      options={[
        {label: "苹果", value: "apple"},
        {label: "香蕉", value: "banana"},
        {label: "橙子", value: "orange"},
      ]}
    />
  ),
};

// CheckboxGroup - 带描述
export const GroupWithDescription: Story = {
  render: () => (
    <CheckboxGroup
      label="选择水果"
      description="请选择你喜欢的水果（可多选）"
      options={[
        {label: "苹果", value: "apple"},
        {label: "香蕉", value: "banana"},
        {label: "橙子", value: "orange"},
      ]}
    />
  ),
};

// CheckboxGroup - 禁用
export const GroupDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <CheckboxGroup
        label="全部禁用"
        isDisabled
        options={[
          {label: "苹果", value: "apple"},
          {label: "香蕉", value: "banana"},
          {label: "橙子", value: "orange"},
        ]}
      />
      <CheckboxGroup
        label="部分禁用"
        options={[
          {label: "苹果", value: "apple"},
          {label: "香蕉（禁用）", value: "banana", disabled: true},
          {label: "橙子", value: "orange"},
        ]}
      />
    </div>
  ),
};

// CheckboxGroup - 受控
export const GroupControlled: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(["apple"]);

    return (
      <div className="flex flex-col gap-4">
        <CheckboxGroup
          label="选择水果"
          value={selected}
          onChange={setSelected}
          options={[
            {label: "苹果", value: "apple"},
            {label: "香蕉", value: "banana"},
            {label: "橙子", value: "orange"},
          ]}
        />
        <div className="text-sm text-gray-600">已选择: {selected.join(", ") || "无"}</div>
        <button
          onClick={() => setSelected([])}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          清空选择
        </button>
      </div>
    );
  },
};

// 全选功能
export const SelectAll: Story = {
  render: () => {
    const options = [
      {label: "苹果", value: "apple"},
      {label: "香蕉", value: "banana"},
      {label: "橙子", value: "orange"},
      {label: "西瓜", value: "watermelon"},
    ];

    const [selected, setSelected] = useState<string[]>([]);

    const allSelected = selected.length === options.length;
    const isIndeterminate = selected.length > 0 && selected.length < options.length;

    const handleSelectAll = (isSelected: boolean) => {
      setSelected(isSelected ? options.map((o) => o.value) : []);
    };

    return (
      <div className="flex flex-col gap-4">
        <Checkbox
          isSelected={allSelected}
          isIndeterminate={isIndeterminate}
          onChange={handleSelectAll}
        >
          全选
        </Checkbox>
        <div className="border-t pt-2">
          <CheckboxGroup value={selected} onChange={setSelected} options={options} />
        </div>
      </div>
    );
  },
};

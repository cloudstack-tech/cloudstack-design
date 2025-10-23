import React, {useState} from "react";
import {Select} from "../src";
import type {Meta, StoryObj} from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Data Entry 数据输入/Select 选择器",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  {label: "自动识别", value: "auto"},
  {label: "实例名称", value: "instanceName"},
  {label: "实例ID", value: "instanceId"},
  {label: "实例状态", value: "instanceStatus"},
  {label: "实例类型", value: "instanceType"},
  {label: "实例创建时间", value: "instanceCreateTime"},
  {label: "实例更新时间", value: "instanceUpdateTime"},
  {label: "实例描述", value: "instanceDescription"},
  {label: "实例标签", value: "instanceTags"},
];

// 基础用法
export const Default: Story = {
  args: {
    placeholder: "请选择一个选项",
    className: "w-96",
    options,
  },
};

// 带清除按钮
export const WithClear: Story = {
  args: {
    placeholder: "支持清除的选择框",
    className: "w-96",
    options,
    allowClear: true,
  },
};

// 带搜索功能
export const WithSearch: Story = {
  args: {
    placeholder: "支持搜索的选择框",
    className: "w-96",
    options,
    showSearch: true,
  },
};

// 不显示选中标记
export const WithoutCheck: Story = {
  args: {
    placeholder: "不显示选中标记",
    className: "w-96",
    options,
    showCheck: false,
  },
};

// 多选模式
export const Multiple: Story = {
  args: {
    mode: "multiple",
    placeholder: "多选模式",
    className: "w-96",
    options,
    allowClear: true,
  },
};

// 多选 + 搜索
export const MultipleWithSearch: Story = {
  args: {
    mode: "multiple",
    placeholder: "多选 + 搜索",
    className: "w-96",
    options,
    showSearch: true,
    allowClear: true,
  },
};

// 多选无选中标记
export const MultipleWithoutCheck: Story = {
  args: {
    mode: "multiple",
    placeholder: "多选无选中标记",
    className: "w-96",
    options,
    showCheck: false,
    allowClear: true,
  },
};

// 禁用状态
export const Disabled: Story = {
  args: {
    placeholder: "禁用状态",
    className: "w-96",
    options,
    disabled: true,
    defaultValue: "auto",
  },
};

// 禁用选项
export const DisabledOption: Story = {
  args: {
    placeholder: "部分选项禁用",
    className: "w-96",
    options: options.map((opt, index) => ({
      ...opt,
      disabled: index % 2 === 0,
    })),
  },
};

// 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="w-96">
        <p className="text-xs mb-2">Small</p>
        <Select size="sm" placeholder="Small size" options={options} />
      </div>
      <div className="w-96">
        <p className="text-xs mb-2">Medium (默认)</p>
        <Select size="md" placeholder="Medium size" options={options} />
      </div>
      <div className="w-96">
        <p className="text-xs mb-2">Large</p>
        <Select size="lg" placeholder="Large size" options={options} />
      </div>
    </div>
  ),
};

// 受控组件
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>();

    return (
      <div className="space-y-4">
        <div className="w-96">
          <p className="text-xs mb-2">受控单选</p>
          <Select
            value={value}
            onChange={setValue}
            placeholder="请选择"
            options={options}
            allowClear
          />
          <p className="text-xs mt-2 text-gray-500">当前值: {value || "(未选择)"}</p>
        </div>
      </div>
    );
  },
};

// 受控多选
export const ControlledMultiple: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([]);

    return (
      <div className="space-y-4">
        <div className="w-96">
          <p className="text-xs mb-2">受控多选</p>
          <Select
            mode="multiple"
            value={values}
            onChange={setValues}
            placeholder="请选择"
            options={options}
            allowClear
          />
          <p className="text-xs mt-2 text-gray-500">
            已选择: {values.length} 项{values.length > 0 && ` (${values.join(", ")})`}
          </p>
        </div>
      </div>
    );
  },
};

// 自定义过滤
export const CustomFilter: Story = {
  args: {
    placeholder: "自定义过滤逻辑（拼音首字母）",
    className: "w-96",
    options: [
      {label: "北京", value: "beijing"},
      {label: "上海", value: "shanghai"},
      {label: "广州", value: "guangzhou"},
      {label: "深圳", value: "shenzhen"},
      {label: "杭州", value: "hangzhou"},
    ],
    showSearch: true,
    filterOption: (input, option) => {
      const label = String(option.label).toLowerCase();
      const inputLower = input.toLowerCase();
      // 简单的包含匹配
      return label.includes(inputLower);
    },
  },
};

// 空数据
export const Empty: Story = {
  args: {
    placeholder: "无选项",
    className: "w-96",
    options: [],
    notFoundContent: "暂无数据",
  },
};

// 搜索无结果
export const SearchNoResult: Story = {
  args: {
    placeholder: "搜索无结果时显示",
    className: "w-96",
    options,
    showSearch: true,
    notFoundContent: "未找到匹配的选项",
  },
};

// 完整功能演示
export const FullFeature: Story = {
  render: () => {
    const [singleValue, setSingleValue] = useState<string>();
    const [multipleValues, setMultipleValues] = useState<string[]>([]);

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-3">单选模式</h3>
          <div className="space-y-4">
            <div className="w-96">
              <p className="text-xs mb-2">基础单选</p>
              <Select
                placeholder="请选择"
                options={options}
                value={singleValue}
                onChange={setSingleValue}
              />
            </div>

            <div className="w-96">
              <p className="text-xs mb-2">带清除和搜索</p>
              <Select
                placeholder="请选择"
                options={options}
                value={singleValue}
                onChange={setSingleValue}
                allowClear
                showSearch
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">多选模式</h3>
          <div className="space-y-4">
            <div className="w-96">
              <p className="text-xs mb-2">基础多选</p>
              <Select
                mode="multiple"
                placeholder="请选择（可多选）"
                options={options}
                value={multipleValues}
                onChange={setMultipleValues}
                allowClear
              />
            </div>

            <div className="w-96">
              <p className="text-xs mb-2">多选 + 搜索</p>
              <Select
                mode="multiple"
                placeholder="搜索并多选"
                options={options}
                value={multipleValues}
                onChange={setMultipleValues}
                allowClear
                showSearch
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

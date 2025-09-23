import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Select } from "@/packages/components";
import { useState } from "react";

const meta = {
  title: "Data 数据/Select 下拉选择",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: "自动识别", value: "auto" },
  { label: "实例名称", value: "instanceName" },
  { label: "实例ID", value: "instanceId" },
  { label: "实例状态", value: "instanceStatus" },
  { label: "实例类型", value: "instanceType" },
  { label: "实例创建时间", value: "instanceCreateTime" },
  { label: "实例更新时间", value: "instanceUpdateTime" },
  { label: "实例描述", value: "instanceDescription" },
  { label: "实例标签", value: "instanceTags" },
];

export const Default: Story = {
  args: {
    placeholder: "请选择一个选项",
    className: "w-96",
    options,
  },
};

export const WithClear: Story = {
  args: {
    placeholder: "支持清除的选择框",
    className: "w-96",
    options,
    allowClear: true,
  },
};

export const WithSearch: Story = {
  args: {
    placeholder: "支持搜索的选择框",
    className: "w-96",
    options,
    showSearch: true,
  },
};

export const WithoutCheck: Story = {
  args: {
    placeholder: "不显示选中标记",
    className: "w-96",
    options,
    showCheck: false,
  },
};

export const Multiple: Story = {
  args: {
    mode: "multiple",
    placeholder: "多选模式",
    className: "w-96",
    options,
    allowClear: true,
  },
};

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

export const Disabled: Story = {
  args: {
    placeholder: "禁用状态",
    className: "w-96",
    options,
    disabled: true,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    placeholder: "部分选项禁用",
    className: "w-96",
    options: [
      { label: "可选择项1", value: "option1" },
      { label: "禁用项", value: "option2", disabled: true },
      { label: "可选择项2", value: "option3" },
      { label: "禁用项2", value: "option4", disabled: true },
      { label: "可选择项3", value: "option5" },
    ],
  },
};

export const CustomMaxHeight: Story = {
  args: {
    placeholder: "自定义最大高度",
    className: "w-96",
    options,
    maxHeight: 150,
  },
};

// 受控组件示例
export const Controlled = () => {
  const [singleValue, setSingleValue] = useState<string>();
  const [multipleValue, setMultipleValue] = useState<string[]>([]);

  return (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="mb-2 text-sm font-medium">单选受控组件</h3>
        <Select<string>
          value={singleValue}
          onChange={setSingleValue}
          placeholder="受控单选"
          options={options.slice(0, 5)}
          allowClear
        />
        <p className="mt-1 text-xs text-gray-500">
          当前值: {singleValue || "无"}
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">多选受控组件</h3>
        <Select<string>
          mode="multiple"
          value={multipleValue}
          onChange={setMultipleValue}
          placeholder="受控多选"
          options={options.slice(0, 5)}
          allowClear
        />
        <p className="mt-1 text-xs text-gray-500">
          当前值: {multipleValue.length > 0 ? multipleValue.join(", ") : "无"}
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">多选 + 搜索 + 无选中标记</h3>
        <Select<string>
          mode="multiple"
          value={multipleValue}
          onChange={setMultipleValue}
          placeholder="多选搜索无标记"
          options={options}
          showSearch
          showCheck={false}
          allowClear
        />
      </div>
    </div>
  );
};

// 组件拆分示例
export const ComponentSplit = () => {
  return (
    <div className="space-y-4 w-96">
      <div>
        <h3 className="mb-2 text-sm font-medium">组件已拆分为子组件</h3>
        <p className="text-xs text-gray-600 mb-4">
          Select组件现在由以下子组件组成：
        </p>
        <ul className="text-xs text-gray-600 space-y-1 mb-4">
          <li>
            • <code>Select</code> - 主组件
          </li>
          <li>
            • <code>SelectList</code> - 选项列表容器
          </li>
          <li>
            • <code>SelectItem</code> - 单个选项
          </li>
        </ul>

        <Select
          placeholder="模块化的Select组件"
          options={[
            { label: "更好的可维护性", value: "maintainable" },
            { label: "更强的可复用性", value: "reusable" },
            { label: "更清晰的结构", value: "clear" },
            { label: "更易于测试", value: "testable" },
          ]}
          showSearch
          allowClear
        />
      </div>
    </div>
  );
};

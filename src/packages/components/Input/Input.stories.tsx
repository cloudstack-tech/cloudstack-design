import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input, Textarea } from "@/packages/components";
import { Search, User } from "lucide-react";
import { useState } from "react";

const meta = {
  title: "Data 数据/Input 输入框",
  component: Input,
  subcomponents: { Textarea },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "请输入内容",
    className: "w-96",
  },
};

export const WithClear: Story = {
  args: {
    placeholder: "支持清除的输入框",
    className: "w-96",
    allowClear: true,
  },
};

export const WithPrefix = () => (
  <Input
    placeholder="带前缀的输入框"
    className="w-96"
    prefix={<Search size={16} />}
  />
);

export const WithSuffix = () => (
  <Input
    placeholder="带后缀的输入框"
    className="w-96"
    suffix={<User size={16} />}
  />
);

export const WithPrefixAndSuffix = () => (
  <Input
    placeholder="前缀 + 后缀"
    className="w-96"
    prefix={<Search size={16} />}
    suffix={<User size={16} />}
    allowClear={true}
  />
);

export const Disabled: Story = {
  args: {
    placeholder: "禁用状态",
    className: "w-96",
    disabled: true,
    value: "禁用的输入框",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "请输入密码",
    className: "w-96",
    allowClear: true,
  },
};

// 受控组件示例
export const Controlled = () => {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4 w-96">
      <div>
        <h3 className="mb-2 text-sm font-medium">受控输入框</h3>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="受控输入框"
          allowClear
        />
        <p className="mt-1 text-xs text-gray-500">当前值: {value || "无"}</p>
      </div>
    </div>
  );
};

// Textarea 示例
export const TextareaExample = () => {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4 w-96">
      <div>
        <h3 className="mb-2 text-sm font-medium">多行文本输入</h3>
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="请输入多行文本"
          rows={4}
          allowClear
        />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">自动调整高度</h3>
        <Textarea
          placeholder="自动调整高度的文本框"
          autoSize={{ minRows: 2, maxRows: 6 }}
          allowClear
        />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">可调整大小</h3>
        <Textarea placeholder="可手动调整大小" rows={3} allowResize />
      </div>
    </div>
  );
};

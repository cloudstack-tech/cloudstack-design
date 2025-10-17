import React, {useState} from "react";
import {Input, Textarea} from "../src";
import type {Meta, StoryObj} from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础示例
export const Default: Story = {
  args: {
    placeholder: "请输入内容",
  },
  render: (args) => (
    <div className="w-96">
      <Input {...args} />
    </div>
  ),
};

// 不同变体
export const Variants: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Bordered（默认）</h3>
        <Input placeholder="Bordered 变体" variant="bordered" />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Flat</h3>
        <Input placeholder="Flat 变体" variant="flat" />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Underlined</h3>
        <Input placeholder="Underlined 变体" variant="underlined" />
      </div>
    </div>
  ),
};

// 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Input size="sm" placeholder="Small size" />
      <Input size="md" placeholder="Medium size (默认)" />
      <Input size="lg" placeholder="Large size" />
    </div>
  ),
};

// 带前缀和后缀
export const WithAffixes: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Input
        placeholder="搜索..."
        prefix={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        }
      />

      <Input
        placeholder="用户名"
        suffix={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        }
      />

      <Input
        placeholder="搜索用户"
        prefix={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        }
        suffix={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        }
        allowClear
      />
    </div>
  ),
};

// 带清除按钮
export const WithClear: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Input defaultValue="可清除的内容" allowClear placeholder="带清除按钮的输入框" />
      <Input
        defaultValue="带前缀和清除按钮"
        allowClear
        prefix={<span>🔍</span>}
        placeholder="搜索..."
      />
    </div>
  ),
};

// 禁用和错误状态
export const States: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <p className="text-xs text-gray-500 mb-1">正常状态</p>
        <Input placeholder="正常状态" defaultValue="正常输入" />
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">禁用状态</p>
        <Input placeholder="禁用状态" defaultValue="禁用的输入框" disabled />
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">错误状态</p>
        <Input placeholder="错误状态" defaultValue="无效的邮箱" isInvalid />
        <p className="text-xs text-red-600 mt-1">请输入有效的邮箱地址</p>
      </div>
    </div>
  ),
};

// 不同类型
export const Types: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <label className="block text-xs font-medium mb-1">文本</label>
        <Input type="text" placeholder="文本输入" />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">密码</label>
        <Input type="password" placeholder="密码输入" allowClear />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">邮箱</label>
        <Input type="email" placeholder="邮箱输入" />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">数字</label>
        <Input type="number" placeholder="数字输入" />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">电话</label>
        <Input type="tel" placeholder="电话输入" />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">URL</label>
        <Input type="url" placeholder="URL 输入" />
      </div>
    </div>
  ),
};

// 受控组件
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState("");

    return (
      <div className="w-96 space-y-2">
        <label className="block text-xs font-medium">受控输入框</label>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="输入内容..."
          allowClear
        />
        <p className="text-xs text-gray-500">当前值: {value || "(空)"}</p>
      </div>
    );
  },
};

// Textarea 示例
export const TextareaExample: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <label className="block text-xs font-medium mb-1">评论</label>
        <Textarea placeholder="请输入评论内容" rows={4} />
      </div>

      <div>
        <label className="block text-xs font-medium mb-1">带清除按钮</label>
        <Textarea
          placeholder="可清除的文本区域"
          rows={3}
          allowClear
          defaultValue="这里有一些内容"
        />
      </div>

      <div>
        <label className="block text-xs font-medium mb-1">自动调整高度</label>
        <Textarea placeholder="随内容自动调整高度" autoSize={{minRows: 2, maxRows: 6}} />
        <p className="text-xs text-gray-500 mt-1">最小 2 行，最大 6 行</p>
      </div>

      <div>
        <label className="block text-xs font-medium mb-1">可调整大小</label>
        <Textarea placeholder="可手动调整大小" rows={3} allowResize />
        <p className="text-xs text-gray-500 mt-1">拖动右下角调整大小</p>
      </div>

      <div>
        <label className="block text-xs font-medium mb-1">错误状态</label>
        <Textarea placeholder="错误的文本区域" rows={3} isInvalid />
        <p className="text-xs text-red-600 mt-1">内容不能为空</p>
      </div>
    </div>
  ),
};

// 完整表单示例
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
      bio: "",
    });

    return (
      <div className="w-96 space-y-4">
        <h2 className="text-lg font-semibold mb-4">注册表单</h2>

        <div>
          <label className="block text-xs font-medium mb-1">用户名</label>
          <Input
            placeholder="请输入用户名"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            allowClear
          />
          <p className="text-xs text-gray-500 mt-1">用户名由 3-20 个字符组成</p>
        </div>

        <div>
          <label className="block text-xs font-medium mb-1">邮箱</label>
          <Input
            type="email"
            placeholder="请输入邮箱"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            allowClear
          />
          <p className="text-xs text-gray-500 mt-1">我们会向此邮箱发送验证信息</p>
        </div>

        <div>
          <label className="block text-xs font-medium mb-1">密码</label>
          <Input
            type="password"
            placeholder="请输入密码"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <p className="text-xs text-gray-500 mt-1">密码至少 8 个字符</p>
        </div>

        <div>
          <label className="block text-xs font-medium mb-1">个人简介</label>
          <Textarea
            placeholder="介绍一下自己..."
            value={formData.bio}
            onChange={(e) => setFormData({...formData, bio: e.target.value})}
            autoSize={{minRows: 3, maxRows: 6}}
          />
          <p className="text-xs text-gray-500 mt-1">{formData.bio.length}/200 字符</p>
        </div>
      </div>
    );
  },
};

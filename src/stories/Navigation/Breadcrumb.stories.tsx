import { Breadcrumb } from "@/packages/components";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Navigation/Breadcrumb",
  parameters: {
    layout: "centered",
  },
  component: Breadcrumb,
  subcomponents: {
    BreadcrumbItem: Breadcrumb.Item,
    BreadcrumbSeparator: Breadcrumb.Separator,
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础面包屑
export const Default: Story = {
  args: {
    children: (
      <>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item href="/list">List</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item active>Item</Breadcrumb.Item>
      </>
    ),
  },
};

// 简单的两级面包屑
export const Simple: Story = {
  args: {
    children: (
      <>
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item active>当前页面</Breadcrumb.Item>
      </>
    ),
  },
};

// 多级面包屑
export const MultiLevel: Story = {
  args: {
    children: (
      <>
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item href="/products/electronics">电子产品</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item href="/products/electronics/phones">
          手机
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item active>iPhone 15</Breadcrumb.Item>
      </>
    ),
  },
};

// 自定义分隔符
export const CustomSeparator: Story = {
  args: {
    children: (
      <>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Separator>→</Breadcrumb.Separator>
        <Breadcrumb.Item href="/docs">Documentation</Breadcrumb.Item>
        <Breadcrumb.Separator>→</Breadcrumb.Separator>
        <Breadcrumb.Item active>Components</Breadcrumb.Item>
      </>
    ),
  },
};

// 不同分隔符样式
export const DifferentSeparators = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2 text-gray-600">
          默认分隔符 (/)
        </h3>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item active>Components</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2 text-gray-600">
          箭头分隔符 (→)
        </h3>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Separator>→</Breadcrumb.Separator>
          <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
          <Breadcrumb.Separator>→</Breadcrumb.Separator>
          <Breadcrumb.Item active>Components</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2 text-gray-600">
          大于号分隔符 (&gt;)
        </h3>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Separator>&gt;</Breadcrumb.Separator>
          <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
          <Breadcrumb.Separator>&gt;</Breadcrumb.Separator>
          <Breadcrumb.Item active>Components</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2 text-gray-600">点分隔符 (•)</h3>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Separator>•</Breadcrumb.Separator>
          <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
          <Breadcrumb.Separator>•</Breadcrumb.Separator>
          <Breadcrumb.Item active>Components</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  ),
};

// 只有活动项（无链接）
export const ActiveOnly: Story = {
  args: {
    children: (
      <>
        <Breadcrumb.Item active>当前页面</Breadcrumb.Item>
      </>
    ),
  },
};

// 长路径面包屑
export const LongPath: Story = {
  args: {
    children: (
      <>
        <Breadcrumb.Item href="/">根目录</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item href="/system">系统管理</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item href="/system/user">用户管理</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item href="/system/user/roles">角色权限</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item href="/system/user/roles/admin">
          管理员角色
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item active>编辑权限</Breadcrumb.Item>
      </>
    ),
  },
};

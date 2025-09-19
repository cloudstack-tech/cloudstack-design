import { Menu } from "@/packages/components";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Navigation 导航/Menu 菜单",
  component: Menu,
  subcomponents: {
    MenuItem: Menu.Item,
    MenuDivider: Menu.Divider,
  },
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  //   decorators: [
  //     (Story) => (
  //       <div className="h-screen w-full">
  //         <Story />
  //       </div>
  //     ),
  //   ],
  args: {
    items: [
      {
        key: "overview",
        label: "概览",
        divider: true,
      },
      {
        key: "subject-info",
        label: "主体信息",
        children: [
          {
            key: "cert-info",
            label: "个人实名",
          },
        ],
        divider: true,
      },
      {
        key: "my-account",
        label: "我的账号",
        collapsible: true,
        children: [
          {
            key: "security",
            label: "账号安全",
          },
          {
            key: "login-log",
            label: "登录记录",
          },
          // { key: "address-and-contact", label: "地址和联系人" },
          { key: "account-ownership", label: "账号归属", disabled: true },
        ],
        // divider: true,
      },
    ],
  },
};

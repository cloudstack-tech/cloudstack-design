import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs } from "@/packages/components";
import { Grid, Grid2x2, List } from "lucide-react";

const meta = {
  title: "Navigation 导航/Tabs 标签",
  parameters: {
    layout: "centered",
  },
  component: Tabs,
  subcomponents: {
    "Tabs.Item": Tabs.Item,
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultActiveKey: "1",
    children: (
      <>
        <Tabs.Item key="1">Tab 1</Tabs.Item>
        <Tabs.Item key="2">Tab 2</Tabs.Item>
        <Tabs.Item key="3">Tab 3</Tabs.Item>
      </>
    ),
  },
};

export const Example: Story = {
  args: {
    defaultActiveKey: "产品目录视图",
    children: (
      <>
        <Tabs.Item
          key="产品目录视图"
          icon={<Grid2x2 size={12} />}
          activeClassName="font-bold"
        >
          产品目录视图
        </Tabs.Item>
        <Tabs.Item
          key="资源列表视图"
          icon={<List size={12} />}
          activeClassName="font-bold"
        >
          资源列表视图
        </Tabs.Item>
      </>
    ),
  },
};

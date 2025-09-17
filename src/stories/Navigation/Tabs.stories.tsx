import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs } from "@/packages/components";

const meta = {
  title: "Navigation/Tabs",
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

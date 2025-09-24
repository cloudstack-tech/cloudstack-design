import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Grid from "./grid";
import Card from "../Card";

const meta = {
  title: "Layout 布局/Grid 网格布局",
  component: Grid,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "基于 Tailwind CSS 的现代网格布局系统，支持响应式设计和灵活的网格配置。",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础网格
export const Basic: Story = {
  render: (args) => (
    <Grid className="grid-cols-2">
      <Card>Item 1</Card>
      <Card>Item 2</Card>
      <Card>Item 3</Card>
      <Card>Item 4</Card>
      <Card>Item 5</Card>
      <Card>Item 6</Card>
    </Grid>
  ),
};

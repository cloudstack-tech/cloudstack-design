import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Grid} from "../src";
import {Box} from "../../stories/Box";

const meta = {
  title: "Components/Layout 布局/Grid 网格",
  component: Grid,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    cols: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: "列数",
    },
    rows: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
      description: "行数",
    },
    flow: {
      control: "select",
      options: ["row", "col", "dense", "row-dense", "col-dense"],
      description: "网格流向",
    },
    gap: {
      control: "number",
      description: "间距（实际像素值会乘以4）",
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cols: 3,
    gap: 4,
  },
  render: (args) => (
    <Grid {...args}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
      <Box>Item 4</Box>
      <Box>Item 5</Box>
      <Box>Item 6</Box>
    </Grid>
  ),
};

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: 4,
  },
  render: (args) => (
    <Grid {...args}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
      <Box>Item 4</Box>
    </Grid>
  ),
};

export const FourColumns: Story = {
  args: {
    cols: 4,
    gap: 4,
  },
  render: (args) => (
    <Grid {...args}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
      <Box>Item 4</Box>
      <Box>Item 5</Box>
      <Box>Item 6</Box>
      <Box>Item 7</Box>
      <Box>Item 8</Box>
    </Grid>
  ),
};

export const DifferentGaps: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600">小间距 (8px)</p>
        <Grid cols={3} gap={2}>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">中间距 (16px)</p>
        <Grid cols={3} gap={4}>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">大间距 (32px)</p>
        <Grid cols={3} gap={8}>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
        </Grid>
      </div>
    </div>
  ),
};

export const RowAndColumnGaps: Story = {
  render: () => (
    <div>
      <p className="mb-2 text-sm text-gray-600">行间距 32px，列间距 8px</p>
      <Grid cols={3} gap={[8, 2]}>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
        <Box>Item 4</Box>
        <Box>Item 5</Box>
        <Box>Item 6</Box>
      </Grid>
    </div>
  ),
};

export const WithRows: Story = {
  render: () => (
    <div>
      <p className="mb-2 text-sm text-gray-600">3 列 2 行</p>
      <Grid cols={3} rows={2} gap={4}>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
        <Box>Item 4</Box>
        <Box>Item 5</Box>
        <Box>Item 6</Box>
      </Grid>
    </div>
  ),
};

export const GridFlow: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600">Flow: Row (默认)</p>
        <Grid cols={3} rows={2} gap={4}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
          <Box>4</Box>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Flow: Col</p>
        <Grid cols={3} rows={2} flow="col" gap={4}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
          <Box>4</Box>
        </Grid>
      </div>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div>
      <p className="mb-2 text-sm text-gray-600">响应式: 移动端1列，平板2列，桌面3列，大屏4列</p>
      <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" gap={4}>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
        <Box>Item 4</Box>
        <Box>Item 5</Box>
        <Box>Item 6</Box>
        <Box>Item 7</Box>
        <Box>Item 8</Box>
      </Grid>
    </div>
  ),
};

export const CustomSpan: Story = {
  render: () => (
    <div>
      <p className="mb-2 text-sm text-gray-600">自定义跨度</p>
      <Grid cols={4} gap={4}>
        <Box className="col-span-2">跨 2 列</Box>
        <Box>Item</Box>
        <Box>Item</Box>
        <Box>Item</Box>
        <Box className="col-span-2">跨 2 列</Box>
        <Box>Item</Box>
        <Box className="col-span-4">跨 4 列</Box>
        <Box className="col-span-2 row-span-2">跨 2 列 2 行</Box>
        <Box>Item</Box>
        <Box>Item</Box>
        <Box>Item</Box>
        <Box>Item</Box>
      </Grid>
    </div>
  ),
};

export const ComplexLayout: Story = {
  render: () => (
    <Grid cols={6} gap={4}>
      <Box className="col-span-6">Header (全宽)</Box>
      <Box className="col-span-2 row-span-2">Sidebar</Box>
      <Box className="col-span-4">Content 1</Box>
      <Box className="col-span-2">Content 2</Box>
      <Box className="col-span-2">Content 3</Box>
      <Box className="col-span-6">Footer (全宽)</Box>
    </Grid>
  ),
};

export const CustomElement: Story = {
  render: () => (
    <Grid as="section" cols={3} gap={4} className="p-4 bg-gray-50">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Grid>
  ),
};

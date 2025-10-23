import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Grid} from "../src";

const meta = {
  title: "Components/Layout 布局/Grid 网格",
  component: Grid,
  parameters: {
    layout: "padded",
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
      description: "间距（会乘以4）",
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

// 示例卡片组件
const ExampleCard = ({className = "", children, ...props}: any) => (
  <div
    className={`p-6 bg-primary/10 text-primary rounded-md border border-primary/20 flex items-center justify-center min-h-24 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    cols: 3,
    gap: 4,
  },
  render: (args) => (
    <Grid {...args}>
      <ExampleCard>Item 1</ExampleCard>
      <ExampleCard>Item 2</ExampleCard>
      <ExampleCard>Item 3</ExampleCard>
      <ExampleCard>Item 4</ExampleCard>
      <ExampleCard>Item 5</ExampleCard>
      <ExampleCard>Item 6</ExampleCard>
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
      <ExampleCard>Item 1</ExampleCard>
      <ExampleCard>Item 2</ExampleCard>
      <ExampleCard>Item 3</ExampleCard>
      <ExampleCard>Item 4</ExampleCard>
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
      <ExampleCard>Item 1</ExampleCard>
      <ExampleCard>Item 2</ExampleCard>
      <ExampleCard>Item 3</ExampleCard>
      <ExampleCard>Item 4</ExampleCard>
      <ExampleCard>Item 5</ExampleCard>
      <ExampleCard>Item 6</ExampleCard>
      <ExampleCard>Item 7</ExampleCard>
      <ExampleCard>Item 8</ExampleCard>
    </Grid>
  ),
};

export const DifferentGaps: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600">小间距 (8px)</p>
        <Grid cols={3} gap={2}>
          <ExampleCard>Item 1</ExampleCard>
          <ExampleCard>Item 2</ExampleCard>
          <ExampleCard>Item 3</ExampleCard>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">中间距 (16px)</p>
        <Grid cols={3} gap={4}>
          <ExampleCard>Item 1</ExampleCard>
          <ExampleCard>Item 2</ExampleCard>
          <ExampleCard>Item 3</ExampleCard>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">大间距 (32px)</p>
        <Grid cols={3} gap={8}>
          <ExampleCard>Item 1</ExampleCard>
          <ExampleCard>Item 2</ExampleCard>
          <ExampleCard>Item 3</ExampleCard>
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
        <ExampleCard>Item 1</ExampleCard>
        <ExampleCard>Item 2</ExampleCard>
        <ExampleCard>Item 3</ExampleCard>
        <ExampleCard>Item 4</ExampleCard>
        <ExampleCard>Item 5</ExampleCard>
        <ExampleCard>Item 6</ExampleCard>
      </Grid>
    </div>
  ),
};

export const WithRows: Story = {
  render: () => (
    <div>
      <p className="mb-2 text-sm text-gray-600">3 列 2 行</p>
      <Grid cols={3} rows={2} gap={4}>
        <ExampleCard>Item 1</ExampleCard>
        <ExampleCard>Item 2</ExampleCard>
        <ExampleCard>Item 3</ExampleCard>
        <ExampleCard>Item 4</ExampleCard>
        <ExampleCard>Item 5</ExampleCard>
        <ExampleCard>Item 6</ExampleCard>
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
          <ExampleCard>1</ExampleCard>
          <ExampleCard>2</ExampleCard>
          <ExampleCard>3</ExampleCard>
          <ExampleCard>4</ExampleCard>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">Flow: Col</p>
        <Grid cols={3} rows={2} flow="col" gap={4}>
          <ExampleCard>1</ExampleCard>
          <ExampleCard>2</ExampleCard>
          <ExampleCard>3</ExampleCard>
          <ExampleCard>4</ExampleCard>
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
        <ExampleCard>Item 1</ExampleCard>
        <ExampleCard>Item 2</ExampleCard>
        <ExampleCard>Item 3</ExampleCard>
        <ExampleCard>Item 4</ExampleCard>
        <ExampleCard>Item 5</ExampleCard>
        <ExampleCard>Item 6</ExampleCard>
        <ExampleCard>Item 7</ExampleCard>
        <ExampleCard>Item 8</ExampleCard>
      </Grid>
    </div>
  ),
};

export const CustomSpan: Story = {
  render: () => (
    <div>
      <p className="mb-2 text-sm text-gray-600">自定义跨度</p>
      <Grid cols={4} gap={4}>
        <ExampleCard className="col-span-2">跨 2 列</ExampleCard>
        <ExampleCard>Item</ExampleCard>
        <ExampleCard>Item</ExampleCard>
        <ExampleCard>Item</ExampleCard>
        <ExampleCard className="col-span-2">跨 2 列</ExampleCard>
        <ExampleCard>Item</ExampleCard>
        <ExampleCard className="col-span-4">跨 4 列</ExampleCard>
        <ExampleCard className="col-span-2 row-span-2">跨 2 列 2 行</ExampleCard>
        <ExampleCard>Item</ExampleCard>
        <ExampleCard>Item</ExampleCard>
        <ExampleCard>Item</ExampleCard>
        <ExampleCard>Item</ExampleCard>
      </Grid>
    </div>
  ),
};

export const ComplexLayout: Story = {
  render: () => (
    <Grid cols={6} gap={4}>
      <ExampleCard className="col-span-6">Header (全宽)</ExampleCard>
      <ExampleCard className="col-span-2 row-span-2">Sidebar</ExampleCard>
      <ExampleCard className="col-span-4">Content 1</ExampleCard>
      <ExampleCard className="col-span-2">Content 2</ExampleCard>
      <ExampleCard className="col-span-2">Content 3</ExampleCard>
      <ExampleCard className="col-span-6">Footer (全宽)</ExampleCard>
    </Grid>
  ),
};

export const CustomElement: Story = {
  render: () => (
    <Grid as="section" cols={3} gap={4} className="p-4 bg-gray-50">
      <ExampleCard>Item 1</ExampleCard>
      <ExampleCard>Item 2</ExampleCard>
      <ExampleCard>Item 3</ExampleCard>
    </Grid>
  ),
};

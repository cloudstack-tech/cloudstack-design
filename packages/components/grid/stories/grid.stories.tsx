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
    gapX: {
      control: "number",
      description: "列间距（实际像素值会乘以4，优先级高于gap）",
    },
    gapY: {
      control: "number",
      description: "行间距（实际像素值会乘以4，优先级高于gap）",
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
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600">使用 gap 数组：行间距 32px，列间距 8px</p>
        <Grid cols={3} gap={[8, 2]}>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
          <Box>Item 4</Box>
          <Box>Item 5</Box>
          <Box>Item 6</Box>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">使用 gapX 和 gapY：行间距 32px，列间距 8px</p>
        <Grid cols={3} gapX={2} gapY={8}>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
          <Box>Item 4</Box>
          <Box>Item 5</Box>
          <Box>Item 6</Box>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">
          优先级测试：gap=4，gapX=8（列间距 32px 覆盖 gap）
        </p>
        <Grid cols={3} gap={4} gapX={8}>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
          <Box>Item 4</Box>
          <Box>Item 5</Box>
          <Box>Item 6</Box>
        </Grid>
      </div>
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

export const WithOffset: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600">基础偏移 (offset=1，跳过第一列)</p>
        <Grid cols={6} gap={4}>
          <Grid.Item>
            <Box>普通</Box>
          </Grid.Item>
          <Grid.Item offset={1}>
            <Box>offset=1</Box>
          </Grid.Item>
          <Grid.Item>
            <Box>普通</Box>
          </Grid.Item>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">多个偏移示例</p>
        <Grid cols={12} gap={2}>
          <Grid.Item span={3}>
            <Box>span=3</Box>
          </Grid.Item>
          <Grid.Item span={3} offset={2}>
            <Box>span=3, offset=2</Box>
          </Grid.Item>
          <Grid.Item span={2}>
            <Box>span=2</Box>
          </Grid.Item>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">居中布局 (使用 offset)</p>
        <Grid cols={12} gap={4}>
          <Grid.Item span={8} offset={2}>
            <Box>居中内容 (span=8, offset=2)</Box>
          </Grid.Item>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">负数偏移 (实验性: 从右侧计算)</p>
        <Grid cols={12} gap={2}>
          <Grid.Item span={3}>
            <Box>左侧</Box>
          </Grid.Item>
          <Grid.Item span={3} offset={-4}>
            <Box>offset=-4 (从右数)</Box>
          </Grid.Item>
        </Grid>
      </div>
    </div>
  ),
};

export const WithPushPull: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600 font-semibold">Push: 向右推动元素</p>
        <Grid cols={12} gap={2}>
          <Grid.Item span={4}>
            <Box>普通列 (span=4)</Box>
          </Grid.Item>
          <Grid.Item span={4} push={2}>
            <Box>push=2 向右推</Box>
          </Grid.Item>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600 font-semibold">Pull: 向左拉动元素</p>
        <Grid cols={12} gap={2}>
          <Grid.Item span={4} push={8}>
            <Box>push=8 (先到右侧)</Box>
          </Grid.Item>
          <Grid.Item span={4} pull={4}>
            <Box>pull=4 向左拉</Box>
          </Grid.Item>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600 font-semibold">改变列顺序 (Ant Design 经典用例)</p>
        <Grid cols={12} gap={2}>
          <Grid.Item span={6} push={6}>
            <Box>左侧内容 (push=6 推到右边)</Box>
          </Grid.Item>
          <Grid.Item span={6} pull={6}>
            <Box>右侧内容 (pull=6 拉到左边)</Box>
          </Grid.Item>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600 font-semibold">组合使用</p>
        <Grid cols={24} gap={2}>
          <Grid.Item span={6}>
            <Box>Item 1</Box>
          </Grid.Item>
          <Grid.Item span={6} push={2}>
            <Box>Item 2 (push=2)</Box>
          </Grid.Item>
          <Grid.Item span={6} push={4}>
            <Box>Item 3 (push=4)</Box>
          </Grid.Item>
        </Grid>
      </div>
    </div>
  ),
};

export const WithOrder: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600 font-semibold">
          使用 order 改变元素顺序（源代码顺序 1-2-3-4）
        </p>
        <Grid cols={4} gap={4}>
          <Grid.Item order={4}>
            <Box>源码第1个 (order=4)</Box>
          </Grid.Item>
          <Grid.Item order={1}>
            <Box>源码第2个 (order=1)</Box>
          </Grid.Item>
          <Grid.Item order={3}>
            <Box>源码第3个 (order=3)</Box>
          </Grid.Item>
          <Grid.Item order={2}>
            <Box>源码第4个 (order=2)</Box>
          </Grid.Item>
        </Grid>
        <p className="mt-2 text-xs text-gray-500">显示顺序：order=1, 2, 3, 4（由小到大）</p>
      </div>

      <div>
        <p className="mb-2 text-sm text-gray-600 font-semibold">负数 order 值</p>
        <Grid cols={5} gap={4}>
          <Grid.Item>
            <Box>默认 (order=0)</Box>
          </Grid.Item>
          <Grid.Item order={1}>
            <Box>order=1</Box>
          </Grid.Item>
          <Grid.Item order={-1}>
            <Box>order=-1</Box>
          </Grid.Item>
          <Grid.Item order={2}>
            <Box>order=2</Box>
          </Grid.Item>
          <Grid.Item order={-2}>
            <Box>order=-2</Box>
          </Grid.Item>
        </Grid>
        <p className="mt-2 text-xs text-gray-500">显示顺序：-2, -1, 0(默认), 1, 2</p>
      </div>

      <div>
        <p className="mb-2 text-sm text-gray-600 font-semibold">响应式场景：移动端改变顺序</p>
        <Grid cols={12} gap={4}>
          <Grid.Item span={12} className="md:col-span-8 md:order-2">
            <Box>主要内容 (移动端第一，桌面端第二)</Box>
          </Grid.Item>
          <Grid.Item span={12} className="md:col-span-4 md:order-1">
            <Box>侧边栏 (移动端第二，桌面端第一)</Box>
          </Grid.Item>
        </Grid>
        <p className="mt-2 text-xs text-gray-500">提示：调整浏览器宽度查看效果</p>
      </div>

      <div>
        <p className="mb-2 text-sm text-gray-600 font-semibold">实战场景：商品列表优先级排序</p>
        <Grid cols={12} gap={4}>
          <Grid.Item span={4} order={3}>
            <Box className="opacity-70">普通商品</Box>
          </Grid.Item>
          <Grid.Item span={4} order={1}>
            <Box className="border-2 border-red-500">热门推荐</Box>
          </Grid.Item>
          <Grid.Item span={4} order={5}>
            <Box className="opacity-50">滞销商品</Box>
          </Grid.Item>
          <Grid.Item span={4} order={2}>
            <Box className="border-2 border-yellow-500">新品上架</Box>
          </Grid.Item>
          <Grid.Item span={4} order={4}>
            <Box className="opacity-70">普通商品</Box>
          </Grid.Item>
          <Grid.Item span={4} order={6}>
            <Box className="opacity-50">即将下架</Box>
          </Grid.Item>
        </Grid>
        <p className="mt-2 text-xs text-gray-500">通过 order 控制商品展示优先级</p>
      </div>

      <div>
        <p className="mb-2 text-sm text-gray-600 font-semibold">与 Ant Design 对齐：完整示例</p>
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-xs text-gray-500">默认顺序 (1-2-3-4)</p>
            <Grid cols={4} gap={2}>
              <Grid.Item>
                <Box>1</Box>
              </Grid.Item>
              <Grid.Item>
                <Box>2</Box>
              </Grid.Item>
              <Grid.Item>
                <Box>3</Box>
              </Grid.Item>
              <Grid.Item>
                <Box>4</Box>
              </Grid.Item>
            </Grid>
          </div>
          <div>
            <p className="mb-2 text-xs text-gray-500">使用 order 改变顺序 (4-3-2-1)</p>
            <Grid cols={4} gap={2}>
              <Grid.Item order={4}>
                <Box>1 (order=4)</Box>
              </Grid.Item>
              <Grid.Item order={3}>
                <Box>2 (order=3)</Box>
              </Grid.Item>
              <Grid.Item order={2}>
                <Box>3 (order=2)</Box>
              </Grid.Item>
              <Grid.Item order={1}>
                <Box>4 (order=1)</Box>
              </Grid.Item>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const GridItemSpan: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600">使用 Grid.Item span 属性</p>
        <Grid cols={6} gap={4}>
          <Grid.Item span={2}>
            <Box>span=2</Box>
          </Grid.Item>
          <Grid.Item span={3}>
            <Box>span=3</Box>
          </Grid.Item>
          <Grid.Item span={1}>
            <Box>1</Box>
          </Grid.Item>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">跨行和跨列</p>
        <Grid cols={4} gap={4}>
          <Grid.Item span={2} rowSpan={2}>
            <Box className="h-full flex items-center justify-center">
              span=2
              <br />
              rowSpan=2
            </Box>
          </Grid.Item>
          <Grid.Item>
            <Box>1</Box>
          </Grid.Item>
          <Grid.Item>
            <Box>2</Box>
          </Grid.Item>
          <Grid.Item>
            <Box>3</Box>
          </Grid.Item>
          <Grid.Item>
            <Box>4</Box>
          </Grid.Item>
        </Grid>
      </div>
    </div>
  ),
};

export const AdvancedPositioning: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-600">精确定位 (colStart, colEnd)</p>
        <Grid cols={6} gap={2}>
          <Grid.Item colStart={1} colEnd={3}>
            <Box>colStart=1, colEnd=3</Box>
          </Grid.Item>
          <Grid.Item colStart={4} colEnd={7}>
            <Box>colStart=4, colEnd=7</Box>
          </Grid.Item>
        </Grid>
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-600">使用负数从末尾计算</p>
        <Grid cols={6} gap={2}>
          <Grid.Item colStart={1} colEnd={3}>
            <Box>开始 (1-3)</Box>
          </Grid.Item>
          <Grid.Item colStart={-3} colEnd={-1}>
            <Box>结尾 (倒数3到倒数1)</Box>
          </Grid.Item>
        </Grid>
      </div>
    </div>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div>
      <p className="mb-2 text-sm text-gray-600">响应式布局 + offset</p>
      <Grid cols={12} gap={4}>
        <Grid.Item
          span={12}
          className="sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4"
        >
          <Box>响应式居中内容</Box>
        </Grid.Item>
        <Grid.Item span={12} className="sm:col-span-6 md:col-span-4 lg:col-span-3">
          <Box>Card 1</Box>
        </Grid.Item>
        <Grid.Item span={12} className="sm:col-span-6 md:col-span-4 lg:col-span-3">
          <Box>Card 2</Box>
        </Grid.Item>
        <Grid.Item span={12} className="sm:col-span-6 md:col-span-4 lg:col-span-3">
          <Box>Card 3</Box>
        </Grid.Item>
        <Grid.Item span={12} className="sm:col-span-6 md:col-span-4 lg:col-span-3">
          <Box>Card 4</Box>
        </Grid.Item>
      </Grid>
    </div>
  ),
};

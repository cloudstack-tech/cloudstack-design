import React from "react";
import {Grid} from "../src";

// 示例卡片组件
const ExampleCard = ({children, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="p-6 bg-primary/10 text-primary rounded-md border border-primary/20 flex items-center justify-center min-h-24"
    {...props}
  >
    {children}
  </div>
);

export default function GridExample() {
  return (
    <div className="space-y-12 p-8">
      {/* 基础网格 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">基础网格</h3>
        <Grid cols={3} gap={4}>
          <ExampleCard>Item 1</ExampleCard>
          <ExampleCard>Item 2</ExampleCard>
          <ExampleCard>Item 3</ExampleCard>
          <ExampleCard>Item 4</ExampleCard>
          <ExampleCard>Item 5</ExampleCard>
          <ExampleCard>Item 6</ExampleCard>
        </Grid>
      </section>

      {/* 不同列数 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">不同列数</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">2 列</p>
            <Grid cols={2} gap={4}>
              <ExampleCard>Item 1</ExampleCard>
              <ExampleCard>Item 2</ExampleCard>
              <ExampleCard>Item 3</ExampleCard>
              <ExampleCard>Item 4</ExampleCard>
            </Grid>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">3 列</p>
            <Grid cols={3} gap={4}>
              <ExampleCard>Item 1</ExampleCard>
              <ExampleCard>Item 2</ExampleCard>
              <ExampleCard>Item 3</ExampleCard>
              <ExampleCard>Item 4</ExampleCard>
              <ExampleCard>Item 5</ExampleCard>
              <ExampleCard>Item 6</ExampleCard>
            </Grid>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">4 列</p>
            <Grid cols={4} gap={4}>
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
        </div>
      </section>

      {/* 不同间距 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">不同间距</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">小间距 (8px)</p>
            <Grid cols={3} gap={2}>
              <ExampleCard>Item 1</ExampleCard>
              <ExampleCard>Item 2</ExampleCard>
              <ExampleCard>Item 3</ExampleCard>
            </Grid>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">中间距 (16px)</p>
            <Grid cols={3} gap={4}>
              <ExampleCard>Item 1</ExampleCard>
              <ExampleCard>Item 2</ExampleCard>
              <ExampleCard>Item 3</ExampleCard>
            </Grid>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">大间距 (32px)</p>
            <Grid cols={3} gap={8}>
              <ExampleCard>Item 1</ExampleCard>
              <ExampleCard>Item 2</ExampleCard>
              <ExampleCard>Item 3</ExampleCard>
            </Grid>
          </div>
        </div>
      </section>

      {/* 不同行列间距 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">不同行列间距</h3>
        <p className="text-sm text-gray-600 mb-2">行间距 32px，列间距 8px</p>
        <Grid cols={3} gap={[8, 2]}>
          <ExampleCard>Item 1</ExampleCard>
          <ExampleCard>Item 2</ExampleCard>
          <ExampleCard>Item 3</ExampleCard>
          <ExampleCard>Item 4</ExampleCard>
          <ExampleCard>Item 5</ExampleCard>
          <ExampleCard>Item 6</ExampleCard>
        </Grid>
      </section>

      {/* 行数控制 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">行数控制</h3>
        <p className="text-sm text-gray-600 mb-2">3 列 2 行</p>
        <Grid cols={3} rows={2} gap={4}>
          <ExampleCard>Item 1</ExampleCard>
          <ExampleCard>Item 2</ExampleCard>
          <ExampleCard>Item 3</ExampleCard>
          <ExampleCard>Item 4</ExampleCard>
          <ExampleCard>Item 5</ExampleCard>
          <ExampleCard>Item 6</ExampleCard>
        </Grid>
      </section>

      {/* Grid Flow */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Grid Flow</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Flow: Row (默认)</p>
            <Grid cols={3} rows={2} gap={4}>
              <ExampleCard>1</ExampleCard>
              <ExampleCard>2</ExampleCard>
              <ExampleCard>3</ExampleCard>
              <ExampleCard>4</ExampleCard>
            </Grid>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Flow: Col</p>
            <Grid cols={3} rows={2} flow="col" gap={4}>
              <ExampleCard>1</ExampleCard>
              <ExampleCard>2</ExampleCard>
              <ExampleCard>3</ExampleCard>
              <ExampleCard>4</ExampleCard>
            </Grid>
          </div>
        </div>
      </section>

      {/* 响应式网格 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">响应式网格</h3>
        <p className="text-sm text-gray-600 mb-2">使用 Tailwind 响应式类</p>
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
      </section>

      {/* 自定义跨度 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">自定义跨度</h3>
        <Grid cols={4} gap={4}>
          <ExampleCard className="col-span-2">跨 2 列</ExampleCard>
          <ExampleCard>Item</ExampleCard>
          <ExampleCard>Item</ExampleCard>
          <ExampleCard>Item</ExampleCard>
          <ExampleCard className="col-span-2">跨 2 列</ExampleCard>
          <ExampleCard>Item</ExampleCard>
          <ExampleCard className="col-span-4">跨 4 列</ExampleCard>
        </Grid>
      </section>
    </div>
  );
}

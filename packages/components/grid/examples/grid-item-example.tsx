import React from "react";
import {Grid} from "../src";

export default function GridItemExample() {
  return (
    <div className="space-y-8 p-8">
      {/* 基础 offset 示例 */}
      <section>
        <h2 className="mb-4 text-xl font-bold">基础 offset 示例</h2>
        <Grid cols={12} gap={4}>
          <Grid.Item span={3}>
            <div className="bg-blue-500 p-4 text-white">Item 1 (span=3)</div>
          </Grid.Item>
          <Grid.Item span={3} offset={2}>
            <div className="bg-blue-500 p-4 text-white">Item 2 (span=3, offset=2)</div>
          </Grid.Item>
          <Grid.Item span={3}>
            <div className="bg-blue-500 p-4 text-white">Item 3 (span=3)</div>
          </Grid.Item>
        </Grid>
      </section>

      {/* 居中布局 */}
      <section>
        <h2 className="mb-4 text-xl font-bold">居中布局</h2>
        <Grid cols={12} gap={4}>
          <Grid.Item span={8} offset={2}>
            <div className="bg-green-500 p-4 text-white">居中内容 (span=8, offset=2)</div>
          </Grid.Item>
        </Grid>
      </section>

      {/* Ant Design 风格布局 */}
      <section>
        <h2 className="mb-4 text-xl font-bold">Ant Design 风格布局</h2>
        <Grid cols={24} gap={2}>
          <Grid.Item span={12}>
            <div className="bg-purple-500 p-4 text-white">span=12 (50%)</div>
          </Grid.Item>
          <Grid.Item span={12}>
            <div className="bg-purple-500 p-4 text-white">span=12 (50%)</div>
          </Grid.Item>
          <Grid.Item span={8}>
            <div className="bg-purple-400 p-4 text-white">span=8</div>
          </Grid.Item>
          <Grid.Item span={8}>
            <div className="bg-purple-400 p-4 text-white">span=8</div>
          </Grid.Item>
          <Grid.Item span={8}>
            <div className="bg-purple-400 p-4 text-white">span=8</div>
          </Grid.Item>
          <Grid.Item span={6}>
            <div className="bg-purple-300 p-4 text-white">span=6</div>
          </Grid.Item>
          <Grid.Item span={6} offset={6}>
            <div className="bg-purple-300 p-4 text-white">span=6, offset=6</div>
          </Grid.Item>
          <Grid.Item span={6}>
            <div className="bg-purple-300 p-4 text-white">span=6</div>
          </Grid.Item>
        </Grid>
      </section>

      {/* 负数 offset (实验性) */}
      <section>
        <h2 className="mb-4 text-xl font-bold">负数 offset (从右侧计算)</h2>
        <Grid cols={12} gap={4}>
          <Grid.Item span={3}>
            <div className="bg-red-500 p-4 text-white">左侧 (span=3)</div>
          </Grid.Item>
          <Grid.Item span={3} offset={-4}>
            <div className="bg-red-500 p-4 text-white">右侧 (span=3, offset=-4)</div>
          </Grid.Item>
        </Grid>
      </section>

      {/* 精确定位 */}
      <section>
        <h2 className="mb-4 text-xl font-bold">精确定位 (colStart, colEnd)</h2>
        <Grid cols={12} gap={2}>
          <Grid.Item colStart={1} colEnd={4}>
            <div className="bg-yellow-500 p-4 text-white">colStart=1, colEnd=4</div>
          </Grid.Item>
          <Grid.Item colStart={5} colEnd={9}>
            <div className="bg-yellow-500 p-4 text-white">colStart=5, colEnd=9</div>
          </Grid.Item>
          <Grid.Item colStart={10} colEnd={13}>
            <div className="bg-yellow-500 p-4 text-white">colStart=10, colEnd=13</div>
          </Grid.Item>
        </Grid>
      </section>

      {/* 复杂布局 */}
      <section>
        <h2 className="mb-4 text-xl font-bold">复杂布局</h2>
        <Grid cols={12} rows={3} gap={4}>
          <Grid.Item span={12}>
            <div className="bg-indigo-500 p-4 text-white">Header (全宽)</div>
          </Grid.Item>
          <Grid.Item span={3} rowSpan={2}>
            <div className="flex h-full items-center justify-center bg-indigo-400 p-4 text-white">
              Sidebar (span=3, rowSpan=2)
            </div>
          </Grid.Item>
          <Grid.Item span={6}>
            <div className="bg-indigo-300 p-4 text-white">Main Content (span=6)</div>
          </Grid.Item>
          <Grid.Item span={3} rowSpan={2}>
            <div className="flex h-full items-center justify-center bg-indigo-400 p-4 text-white">
              Sidebar 2 (span=3, rowSpan=2)
            </div>
          </Grid.Item>
          <Grid.Item span={6}>
            <div className="bg-indigo-300 p-4 text-white">Footer (span=6)</div>
          </Grid.Item>
        </Grid>
      </section>
    </div>
  );
}

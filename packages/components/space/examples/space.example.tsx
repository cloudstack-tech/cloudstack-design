import React from "react";
import {Space} from "../src";

// 示例按钮组件
const ExampleButton = ({children, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    {...props}
  >
    {children}
  </button>
);

// 示例标签组件
const ExampleTag = ({children, ...props}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-md bg-blue-100 text-blue-800"
    {...props}
  >
    {children}
  </span>
);

export default function SpaceExample() {
  return (
    <div className="space-y-12 p-8">
      {/* 基础用法 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">基础用法</h3>
        <Space>
          <ExampleButton>按钮1</ExampleButton>
          <ExampleButton>按钮2</ExampleButton>
          <ExampleButton>按钮3</ExampleButton>
        </Space>
      </section>

      {/* 垂直间距 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">垂直间距</h3>
        <Space direction="vertical">
          <ExampleButton>按钮1</ExampleButton>
          <ExampleButton>按钮2</ExampleButton>
          <ExampleButton>按钮3</ExampleButton>
        </Space>
      </section>

      {/* 不同尺寸 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">不同尺寸</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">Small (8px)</p>
            <Space size="small">
              <ExampleButton>按钮1</ExampleButton>
              <ExampleButton>按钮2</ExampleButton>
              <ExampleButton>按钮3</ExampleButton>
            </Space>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Middle (16px)</p>
            <Space size="middle">
              <ExampleButton>按钮1</ExampleButton>
              <ExampleButton>按钮2</ExampleButton>
              <ExampleButton>按钮3</ExampleButton>
            </Space>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Large (24px)</p>
            <Space size="large">
              <ExampleButton>按钮1</ExampleButton>
              <ExampleButton>按钮2</ExampleButton>
              <ExampleButton>按钮3</ExampleButton>
            </Space>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">自定义 (48px)</p>
            <Space size={12}>
              <ExampleButton>按钮1</ExampleButton>
              <ExampleButton>按钮2</ExampleButton>
              <ExampleButton>按钮3</ExampleButton>
            </Space>
          </div>
        </div>
      </section>

      {/* 对齐方式 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">对齐方式</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">Start</p>
            <Space align="start" className="h-24 bg-gray-50 px-4">
              <ExampleButton className="h-8">短</ExampleButton>
              <ExampleButton className="h-16">中</ExampleButton>
              <ExampleButton className="h-12">高</ExampleButton>
            </Space>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Center (默认)</p>
            <Space align="center" className="h-24 bg-gray-50 px-4">
              <ExampleButton className="h-8">短</ExampleButton>
              <ExampleButton className="h-16">中</ExampleButton>
              <ExampleButton className="h-12">高</ExampleButton>
            </Space>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">End</p>
            <Space align="end" className="h-24 bg-gray-50 px-4">
              <ExampleButton className="h-8">短</ExampleButton>
              <ExampleButton className="h-16">中</ExampleButton>
              <ExampleButton className="h-12">高</ExampleButton>
            </Space>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Baseline</p>
            <Space align="baseline" className="h-24 bg-gray-50 px-4">
              <span className="text-sm">小文字</span>
              <span className="text-lg">中文字</span>
              <span className="text-2xl">大文字</span>
            </Space>
          </div>
        </div>
      </section>

      {/* 自动换行 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">自动换行</h3>
        <div className="w-80 border border-dashed border-gray-300 p-4">
          <Space wrap size="small">
            <ExampleTag>标签1</ExampleTag>
            <ExampleTag>标签2</ExampleTag>
            <ExampleTag>标签3</ExampleTag>
            <ExampleTag>很长的标签4</ExampleTag>
            <ExampleTag>标签5</ExampleTag>
            <ExampleTag>标签6</ExampleTag>
            <ExampleTag>标签7</ExampleTag>
            <ExampleTag>标签8</ExampleTag>
          </Space>
        </div>
      </section>

      {/* 分隔符 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">分隔符</h3>
        <Space split={<span className="text-gray-400">|</span>}>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            首页
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            产品
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            关于
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            联系
          </a>
        </Space>
      </section>

      {/* 紧凑模式 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">紧凑模式</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">普通间距</p>
            <Space>
              <ExampleButton>按钮1</ExampleButton>
              <ExampleButton>按钮2</ExampleButton>
              <ExampleButton>按钮3</ExampleButton>
            </Space>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">紧凑模式 - 水平</p>
            <Space.Compact>
              <ExampleButton>按钮1</ExampleButton>
              <ExampleButton>按钮2</ExampleButton>
              <ExampleButton>按钮3</ExampleButton>
            </Space.Compact>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">紧凑模式 - 垂直</p>
            <Space.Compact direction="vertical">
              <ExampleButton>按钮1</ExampleButton>
              <ExampleButton>按钮2</ExampleButton>
              <ExampleButton>按钮3</ExampleButton>
            </Space.Compact>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">紧凑模式 - 块级元素</p>
            <Space.Compact block>
              <ExampleButton>按钮1</ExampleButton>
              <ExampleButton>按钮2</ExampleButton>
              <ExampleButton>按钮3</ExampleButton>
            </Space.Compact>
          </div>
        </div>
      </section>

      {/* 数组尺寸 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">不同的水平和垂直间距</h3>
        <div className="w-80 border border-dashed border-gray-300 p-4">
          <p className="text-sm text-gray-600 mb-2">水平 32px，垂直 64px</p>
          <Space wrap size={[8, 16]}>
            <ExampleTag>标签1</ExampleTag>
            <ExampleTag>标签2</ExampleTag>
            <ExampleTag>标签3</ExampleTag>
            <ExampleTag>标签4</ExampleTag>
            <ExampleTag>标签5</ExampleTag>
            <ExampleTag>标签6</ExampleTag>
          </Space>
        </div>
      </section>
    </div>
  );
}

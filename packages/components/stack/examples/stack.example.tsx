import React from "react";
import {Stack, HStack, VStack} from "../src";

// 示例盒子组件
const ExampleBox = ({children, className = "", ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`px-6 py-3 bg-primary/10 text-primary rounded-md border border-primary/20 flex items-center justify-center ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default function StackExample() {
  return (
    <div className="space-y-12 p-8">
      {/* 基础用法 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">基础用法 - 垂直堆叠</h3>
        <Stack spacing="medium" className="w-64">
          <ExampleBox>项目 1</ExampleBox>
          <ExampleBox>项目 2</ExampleBox>
          <ExampleBox>项目 3</ExampleBox>
        </Stack>
      </section>

      {/* 水平堆叠 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">水平堆叠</h3>
        <Stack direction="horizontal" spacing="medium">
          <ExampleBox>项目 1</ExampleBox>
          <ExampleBox>项目 2</ExampleBox>
          <ExampleBox>项目 3</ExampleBox>
        </Stack>
      </section>

      {/* 不同间距 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">不同间距</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Small 间距 (8px)</p>
            <Stack spacing="small" className="w-64">
              <ExampleBox>项目 1</ExampleBox>
              <ExampleBox>项目 2</ExampleBox>
              <ExampleBox>项目 3</ExampleBox>
            </Stack>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Medium 间距 (16px)</p>
            <Stack spacing="medium" className="w-64">
              <ExampleBox>项目 1</ExampleBox>
              <ExampleBox>项目 2</ExampleBox>
              <ExampleBox>项目 3</ExampleBox>
            </Stack>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Large 间距 (24px)</p>
            <Stack spacing="large" className="w-64">
              <ExampleBox>项目 1</ExampleBox>
              <ExampleBox>项目 2</ExampleBox>
              <ExampleBox>项目 3</ExampleBox>
            </Stack>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">自定义间距 (48px)</p>
            <Stack spacing={12} className="w-64">
              <ExampleBox>项目 1</ExampleBox>
              <ExampleBox>项目 2</ExampleBox>
              <ExampleBox>项目 3</ExampleBox>
            </Stack>
          </div>
        </div>
      </section>

      {/* 对齐方式 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">对齐方式</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Start 对齐</p>
            <Stack align="start" className="w-80 bg-gray-50 p-4">
              <ExampleBox>短</ExampleBox>
              <ExampleBox>较长的内容</ExampleBox>
              <ExampleBox>很长很长的内容项目</ExampleBox>
            </Stack>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Center 对齐</p>
            <Stack align="center" className="w-80 bg-gray-50 p-4">
              <ExampleBox>短</ExampleBox>
              <ExampleBox>较长的内容</ExampleBox>
              <ExampleBox>很长很长的内容项目</ExampleBox>
            </Stack>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Stretch 对齐 (默认)</p>
            <Stack align="stretch" className="w-80 bg-gray-50 p-4">
              <ExampleBox>短</ExampleBox>
              <ExampleBox>较长的内容</ExampleBox>
              <ExampleBox>很长很长的内容项目</ExampleBox>
            </Stack>
          </div>
        </div>
      </section>

      {/* 主轴对齐 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">主轴对齐 (水平方向)</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Center 对齐</p>
            <Stack direction="horizontal" justify="center" className="w-full bg-gray-50 p-4">
              <ExampleBox>项目 1</ExampleBox>
              <ExampleBox>项目 2</ExampleBox>
              <ExampleBox>项目 3</ExampleBox>
            </Stack>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Between 对齐</p>
            <Stack direction="horizontal" justify="between" className="w-full bg-gray-50 p-4">
              <ExampleBox>项目 1</ExampleBox>
              <ExampleBox>项目 2</ExampleBox>
              <ExampleBox>项目 3</ExampleBox>
            </Stack>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Around 对齐</p>
            <Stack direction="horizontal" justify="around" className="w-full bg-gray-50 p-4">
              <ExampleBox>项目 1</ExampleBox>
              <ExampleBox>项目 2</ExampleBox>
              <ExampleBox>项目 3</ExampleBox>
            </Stack>
          </div>
        </div>
      </section>

      {/* 分隔符 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">带分隔符</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">垂直分隔符</p>
            <Stack divider={<hr className="w-full border-gray-300" />} className="w-64">
              <ExampleBox>项目 1</ExampleBox>
              <ExampleBox>项目 2</ExampleBox>
              <ExampleBox>项目 3</ExampleBox>
            </Stack>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">水平分隔符</p>
            <Stack
              direction="horizontal"
              divider={<div className="h-full w-px bg-gray-300" />}
              spacing="medium"
            >
              <ExampleBox>项目 1</ExampleBox>
              <ExampleBox>项目 2</ExampleBox>
              <ExampleBox>项目 3</ExampleBox>
            </Stack>
          </div>
        </div>
      </section>

      {/* HStack 示例 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">HStack (水平堆叠快捷方式)</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">HStack 组件</p>
            <HStack spacing="medium">
              <ExampleBox className="bg-red-50">红色</ExampleBox>
              <ExampleBox className="bg-green-50">绿色</ExampleBox>
              <ExampleBox className="bg-blue-50">蓝色</ExampleBox>
            </HStack>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Stack.H 简写</p>
            <Stack.H spacing="large" align="center">
              <ExampleBox className="bg-purple-50">紫色</ExampleBox>
              <ExampleBox className="bg-yellow-50">黄色</ExampleBox>
              <ExampleBox className="bg-pink-50">粉色</ExampleBox>
            </Stack.H>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Stack.Horizontal 完整名称</p>
            <Stack.Horizontal spacing="small" justify="center">
              <ExampleBox className="bg-indigo-50">靛色</ExampleBox>
              <ExampleBox className="bg-cyan-50">青色</ExampleBox>
              <ExampleBox className="bg-teal-50">蓝绿色</ExampleBox>
            </Stack.Horizontal>
          </div>
        </div>
      </section>

      {/* VStack 示例 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">VStack (垂直堆叠快捷方式)</h3>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <p className="text-sm text-gray-600 mb-2">VStack 组件</p>
            <VStack spacing="medium" className="w-48">
              <ExampleBox className="bg-red-50">项目 1</ExampleBox>
              <ExampleBox className="bg-green-50">项目 2</ExampleBox>
              <ExampleBox className="bg-blue-50">项目 3</ExampleBox>
            </VStack>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Stack.V 简写</p>
            <Stack.V spacing="large" align="center" className="w-48">
              <ExampleBox className="bg-purple-50">项目 A</ExampleBox>
              <ExampleBox className="bg-yellow-50">项目 B</ExampleBox>
              <ExampleBox className="bg-pink-50">项目 C</ExampleBox>
            </Stack.V>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Stack.Vertical 完整名称</p>
            <Stack.Vertical spacing="small" className="w-48">
              <ExampleBox className="bg-indigo-50">第一个</ExampleBox>
              <ExampleBox className="bg-cyan-50">第二个</ExampleBox>
              <ExampleBox className="bg-teal-50">第三个</ExampleBox>
            </Stack.Vertical>
          </div>
        </div>
      </section>

      {/* 嵌套堆叠 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">嵌套堆叠</h3>
        <VStack spacing="large" className="w-96">
          <ExampleBox>顶部项目</ExampleBox>
          <HStack spacing="medium" justify="center">
            <ExampleBox className="bg-red-50">左</ExampleBox>
            <ExampleBox className="bg-green-50">中</ExampleBox>
            <ExampleBox className="bg-blue-50">右</ExampleBox>
          </HStack>
          <ExampleBox>底部项目</ExampleBox>
        </VStack>
      </section>

      {/* 换行 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">自动换行</h3>
        <Stack direction="horizontal" wrap spacing="medium" className="w-80">
          <ExampleBox>项目 1</ExampleBox>
          <ExampleBox>项目 2</ExampleBox>
          <ExampleBox>项目 3</ExampleBox>
          <ExampleBox>项目 4</ExampleBox>
          <ExampleBox>项目 5</ExampleBox>
          <ExampleBox>项目 6</ExampleBox>
        </Stack>
      </section>
    </div>
  );
}

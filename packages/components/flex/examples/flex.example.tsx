import React from "react";
import {Flex} from "../src";

export default function FlexExample() {
  return (
    <div className="space-y-8 p-8">
      {/* 基础用法 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">基础用法</h3>
        <Flex gap={4}>
          <div className="px-4 py-2 bg-blue-500 text-white rounded">Item 1</div>
          <div className="px-4 py-2 bg-blue-500 text-white rounded">Item 2</div>
          <div className="px-4 py-2 bg-blue-500 text-white rounded">Item 3</div>
        </Flex>
      </section>

      {/* 垂直布局 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">垂直布局</h3>
        <Flex direction="col" gap={4}>
          <div className="px-4 py-2 bg-green-500 text-white rounded">Item 1</div>
          <div className="px-4 py-2 bg-green-500 text-white rounded">Item 2</div>
          <div className="px-4 py-2 bg-green-500 text-white rounded">Item 3</div>
        </Flex>
      </section>

      {/* 居中对齐 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">居中对齐</h3>
        <Flex justify="center" align="center" gap={4} className="h-32 border border-gray-300">
          <div className="px-4 py-2 bg-purple-500 text-white rounded">Centered</div>
        </Flex>
      </section>

      {/* Space Between */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Space Between</h3>
        <Flex justify="between" className="border border-gray-300 p-4">
          <div className="px-4 py-2 bg-red-500 text-white rounded">Left</div>
          <div className="px-4 py-2 bg-red-500 text-white rounded">Right</div>
        </Flex>
      </section>

      {/* 弹性布局 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">弹性布局</h3>
        <Flex gap={4}>
          <div className="px-4 py-2 bg-yellow-500 text-white rounded">Fixed</div>
          <div className="px-4 py-2 bg-yellow-500 text-white rounded" style={{flex: 1}}>
            Flexible
          </div>
          <div className="px-4 py-2 bg-yellow-500 text-white rounded">Fixed</div>
        </Flex>
      </section>

      {/* 换行 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">换行</h3>
        <Flex wrap="wrap" gap={4} className="w-64">
          {Array.from({length: 8}).map((_, i) => (
            <div key={i} className="px-4 py-2 bg-indigo-500 text-white rounded">
              {i + 1}
            </div>
          ))}
        </Flex>
      </section>
    </div>
  );
}

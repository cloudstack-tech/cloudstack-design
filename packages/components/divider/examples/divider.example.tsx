import React from "react";
import {Divider} from "../src";

export default function DividerExample() {
  return (
    <div className="space-y-8 p-8">
      {/* 基础水平分割线 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">基础水平分割线</h2>
        <div>
          <p>上方内容</p>
          <Divider className="my-4" />
          <p>下方内容</p>
        </div>
      </section>

      {/* 垂直分割线 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">垂直分割线</h2>
        <div className="flex items-center h-16">
          <span>左侧</span>
          <Divider orientation="vertical" className="mx-4" />
          <span>中间</span>
          <Divider orientation="vertical" className="mx-4" />
          <span>右侧</span>
        </div>
      </section>

      {/* 不同粗细 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">不同粗细</h2>
        <div className="space-y-4">
          <Divider thickness={1} />
          <Divider thickness={2} />
          <Divider thickness={4} />
        </div>
      </section>

      {/* 不同颜色 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">不同颜色</h2>
        <div className="space-y-4">
          <Divider color="default" />
          <Divider color="primary" />
          <Divider color="secondary" />
          <Divider color="success" />
          <Divider color="warning" />
          <Divider color="danger" />
        </div>
      </section>

      {/* 按钮组中的使用 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">按钮组中的使用</h2>
        <div className="flex items-center">
          <button className="px-4 py-2 hover:bg-gray-100 rounded">操作 1</button>
          <Divider orientation="vertical" className="h-6 mx-2" />
          <button className="px-4 py-2 hover:bg-gray-100 rounded">操作 2</button>
          <Divider orientation="vertical" className="h-6 mx-2" />
          <button className="px-4 py-2 hover:bg-gray-100 rounded">操作 3</button>
        </div>
      </section>

      {/* 列表中的使用 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">列表中的使用</h2>
        <div className="border rounded-lg">
          <div className="px-4 py-3">列表项 1</div>
          <Divider />
          <div className="px-4 py-3">列表项 2</div>
          <Divider />
          <div className="px-4 py-3">列表项 3</div>
          <Divider />
          <div className="px-4 py-3">列表项 4</div>
        </div>
      </section>

      {/* 组合使用 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">组合使用</h2>
        <div className="border rounded-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">标题</h3>
              <p className="text-sm text-gray-600">副标题</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">取消</button>
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                确认
              </button>
            </div>
          </div>
          <Divider className="my-4" thickness={2} color="primary" />
          <div className="space-y-2">
            <p>这是一段内容描述...</p>
            <p>可以包含多行文本...</p>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import {Tooltip} from "../src";

export default function TooltipExample() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex gap-4 items-center">
        <Tooltip content="这是一个提示信息">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            悬停查看提示
          </button>
        </Tooltip>
      </div>

      <div className="flex gap-4 items-center">
        <h3 className="w-32">不同位置：</h3>
        <Tooltip content="顶部提示" placement="top">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Top</button>
        </Tooltip>
        <Tooltip content="右侧提示" placement="right">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Right</button>
        </Tooltip>
        <Tooltip content="底部提示" placement="bottom">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Bottom</button>
        </Tooltip>
        <Tooltip content="左侧提示" placement="left">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Left</button>
        </Tooltip>
      </div>

      <div className="flex gap-4 items-center">
        <h3 className="w-32">不同颜色：</h3>
        <Tooltip content="默认颜色" color="default">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Default</button>
        </Tooltip>
        <Tooltip content="主要颜色" color="primary">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Primary</button>
        </Tooltip>
        <Tooltip content="成功颜色" color="success">
          <button className="px-4 py-2 bg-green-500 text-white rounded">Success</button>
        </Tooltip>
        <Tooltip content="警告颜色" color="warning">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded">Warning</button>
        </Tooltip>
        <Tooltip content="危险颜色" color="danger">
          <button className="px-4 py-2 bg-red-500 text-white rounded">Danger</button>
        </Tooltip>
      </div>

      <div className="flex gap-4 items-center">
        <h3 className="w-32">不同大小：</h3>
        <Tooltip content="小号提示" size="sm">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Small</button>
        </Tooltip>
        <Tooltip content="中号提示" size="md">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Medium</button>
        </Tooltip>
        <Tooltip content="大号提示" size="lg">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Large</button>
        </Tooltip>
      </div>

      <div className="flex gap-4 items-center">
        <h3 className="w-32">无箭头：</h3>
        <Tooltip content="没有箭头的提示" showArrow={false}>
          <button className="px-4 py-2 bg-gray-500 text-white rounded">无箭头</button>
        </Tooltip>
      </div>

      <div className="flex gap-4 items-center">
        <h3 className="w-32">延迟显示：</h3>
        <Tooltip content="延迟 500ms 显示" delay={500}>
          <button className="px-4 py-2 bg-gray-500 text-white rounded">延迟显示</button>
        </Tooltip>
      </div>

      <div className="flex gap-4 items-center">
        <h3 className="w-32">禁用状态：</h3>
        <Tooltip content="这个提示不会显示" isDisabled>
          <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed">
            禁用的按钮
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

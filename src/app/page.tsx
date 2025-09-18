"use client";

import { Text } from "@/packages/components/Typography";

export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-8">省略功能测试</h1>

      {/* 测试文本位移修复 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">1. 文本位移修复测试</h2>
        <p className="text-sm text-gray-600">刷新页面观察是否还有位移现象</p>
        <div className="w-80 border p-4 space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">2行省略</h3>
            <Text ellipsis={{ rows: 2, expandable: true }}>
              这是一段很长的文本内容，用来测试文本位移修复效果。刷新页面时应该不会出现明显的位移或跳跃现象。这段文本足够长，可以测试加载完成后的稳定性。
            </Text>
          </div>
        </div>
      </div>

      {/* 测试不必要的展开按钮修复 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">2. 展开按钮显示逻辑测试</h2>
        <p className="text-sm text-gray-600">
          当文本行数小于设置行数时，不应显示展开按钮
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 短文本，不应显示展开按钮 */}
          <div className="border p-4">
            <h3 className="text-sm font-medium mb-2">
              短文本（设置3行，实际1行）
            </h3>
            <Text ellipsis={{ rows: 3, expandable: true }}>这是短文本</Text>
            <p className="text-xs text-gray-500 mt-2">✅ 不应显示展开按钮</p>
          </div>

          {/* 中等文本，不应显示展开按钮 */}
          <div className="border p-4">
            <h3 className="text-sm font-medium mb-2">
              中等文本（设置3行，实际2行）
            </h3>
            <Text ellipsis={{ rows: 3, expandable: true }}>
              这是一段中等长度的文本内容，大约占用两行的空间。
            </Text>
            <p className="text-xs text-gray-500 mt-2">✅ 不应显示展开按钮</p>
          </div>

          {/* 长文本，应显示展开按钮 */}
          <div className="border p-4">
            <h3 className="text-sm font-medium mb-2">
              长文本（设置2行，实际4+行）
            </h3>
            <Text ellipsis={{ rows: 2, expandable: true }}>
              这是一段很长的文本内容，用来测试展开按钮的显示逻辑。当文本实际行数大于设置的行数时，应该显示展开按钮。这段文本足够长，应该会超过2行的限制。
            </Text>
            <p className="text-xs text-gray-500 mt-2">✅ 应显示展开按钮</p>
          </div>

          {/* 边界情况：正好等于设置行数 */}
          <div className="border p-4">
            <h3 className="text-sm font-medium mb-2">
              边界情况（设置2行，实际约2行）
            </h3>
            <Text ellipsis={{ rows: 2, expandable: true }}>
              这段文本长度刚好接近两行的限制，用来测试边界情况的处理。
            </Text>
            <p className="text-xs text-gray-500 mt-2">⚠️ 根据实际情况决定</p>
          </div>
        </div>
      </div>

      {/* 综合测试 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">3. 综合功能测试</h2>

        <div className="space-y-4">
          {/* 单行省略 */}
          <div className="w-64 border p-4">
            <h3 className="text-sm font-medium mb-2">单行省略</h3>
            <Text ellipsis>
              这是一段很长的单行文本，用来测试单行省略功能的稳定性
            </Text>
          </div>

          {/* 多行省略 + 自定义符号 */}
          <div className="w-80 border p-4">
            <h3 className="text-sm font-medium mb-2">自定义展开符号</h3>
            <Text
              ellipsis={{
                rows: 2,
                expandable: true,
                symbol: (expanded) => (expanded ? "收起 ↑" : "查看更多 ↓"),
              }}
            >
              这是一段用来测试自定义展开符号的文本内容。我们可以自定义展开和收起按钮的文本。这段文本足够长，可以测试自定义符号的效果和按钮显示逻辑。
            </Text>
          </div>

          {/* 带后缀 */}
          <div className="w-80 border p-4">
            <h3 className="text-sm font-medium mb-2">带后缀的省略</h3>
            <Text
              ellipsis={{
                rows: 2,
                expandable: true,
                suffix: " (点击展开查看更多)",
              }}
            >
              这是一段带后缀的省略文本测试。后缀会显示在省略号之后，给用户提供额外的提示信息。这段文本足够长，可以测试后缀显示和按钮逻辑。
            </Text>
          </div>

          {/* 响应式测试 */}
          <div className="border p-4">
            <h3 className="text-sm font-medium mb-2">响应式测试</h3>
            <p className="text-xs text-gray-500 mb-2">
              调整浏览器窗口大小观察效果
            </p>
            <div className="resize-x overflow-auto min-w-32 max-w-full border-2 border-dashed border-gray-300 p-2">
              <Text ellipsis={{ rows: 2, expandable: true }}>
                这是一段用来测试响应式省略功能的文本内容。当容器宽度发生变化时，省略功能应该能够自动适应新的尺寸，并且正确判断是否需要显示展开按钮。
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium mb-2">测试说明</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• 刷新页面观察是否还有文本位移现象</li>
          <li>• 检查短文本是否错误显示展开按钮</li>
          <li>• 测试展开/收起功能是否正常工作</li>
          <li>• 调整窗口大小测试响应式效果</li>
        </ul>
      </div>
    </div>
  );
}

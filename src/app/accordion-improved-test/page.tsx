"use client";

import { Accordion } from "@/packages/components";

export default function AccordionImprovedTestPage() {
  const testItems = [
    {
      key: "1",
      label: "🚀 动画测试 - 短内容",
      children: (
        <div>
          <p>这是一段短内容，测试动画是否流畅。</p>
        </div>
      ),
    },
    {
      key: "2",
      label: "📝 动画测试 - 长内容",
      children: (
        <div>
          <p>这是一段很长的内容，用来测试动画效果的流畅性。</p>
          <p>现在使用了精确的高度计算和 ResizeObserver，动画应该更加丝滑。</p>
          <ul>
            <li>✅ 展开动画流畅</li>
            <li>✅ 收缩动画无闪烁</li>
            <li>✅ 使用精确高度计算</li>
            <li>✅ ResizeObserver 自动适应内容变化</li>
            <li>✅ 优化了动画曲线</li>
            <li>✅ 移除了不必要的边框</li>
          </ul>
          <div
            style={{
              height: "120px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              padding: "20px",
              borderRadius: "8px",
              color: "white",
              margin: "16px 0",
            }}
          >
            <h4>🎨 渐变背景区域</h4>
            <p>这个区域增加了内容高度，用来测试大幅度高度变化时的动画表现。</p>
            <p>现在收缩时不会有闪烁现象了！</p>
          </div>
          <p>
            动画持续时间：300ms，使用 cubic-bezier(0.4, 0, 0.2, 1) 缓动函数。
          </p>
        </div>
      ),
    },
    {
      key: "3",
      label: "🎯 边框测试 - 清洁样式",
      children: (
        <div>
          <p>现在默认样式已经移除了不必要的边框。</p>
          <div
            style={{
              padding: "16px",
              background: "#f8f9fa",
              border: "1px dashed #dee2e6",
              borderRadius: "4px",
              margin: "12px 0",
            }}
          >
            <p>
              💡 <strong>改进说明：</strong>
            </p>
            <ul>
              <li>默认变体：无边框，清洁简约</li>
              <li>填充变体：仅背景色，无边框</li>
              <li>边框变体：容器边框 + 分隔线</li>
              <li>阴影变体：阴影效果 + 淡色分隔线</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label: "⚡ 性能测试 - 复杂内容",
      children: (
        <div>
          <p>测试包含复杂内容时的动画性能：</p>
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              style={{
                padding: "12px",
                margin: "8px 0",
                background: `hsl(${i * 60}, 70%, 95%)`,
                borderRadius: "6px",
              }}
            >
              <h5>📦 内容块 {i + 1}</h5>
              <p>这是第 {i + 1} 个内容块，包含一些文本内容。</p>
            </div>
          ))}
          <p>即使内容较多，动画依然保持流畅。</p>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">🎉 手风琴组件改进测试</h1>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold text-green-800 mb-2">
            ✨ 改进内容
          </h2>
          <ul className="text-green-700 space-y-1">
            <li>
              🚀 <strong>动画优化：</strong>使用精确高度计算和 ResizeObserver
              实现更流畅的展开/收缩动画
            </li>
            <li>
              🎨 <strong>边框清理：</strong>移除默认变体的不必要边框，样式更清洁
            </li>
            <li>
              ⏱️ <strong>时间调整：</strong>动画时长调整为 300ms，使用
              cubic-bezier(0.4, 0, 0.2, 1) 缓动曲线
            </li>
            <li>
              🎯 <strong>闪烁修复：</strong>解决收缩时的闪烁问题，动画更加丝滑
            </li>
            <li>
              📏 <strong>自适应高度：</strong>内容变化时自动重新计算高度
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">🎯 默认样式（无边框）</h2>
          <Accordion items={testItems} defaultActiveKey={[]} />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">🎨 填充样式</h2>
          <Accordion items={testItems} variant="filled" defaultActiveKey={[]} />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">🔲 边框样式</h2>
          <Accordion
            items={testItems}
            variant="bordered"
            defaultActiveKey={[]}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">✨ 阴影样式</h2>
          <Accordion items={testItems} variant="shadow" defaultActiveKey={[]} />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            🎵 手风琴模式（只能展开一个）
          </h2>
          <Accordion items={testItems} accordion defaultActiveKey="1" />
        </div>
      </div>

      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          🧪 测试说明
        </h3>
        <p className="text-blue-700">
          请尝试快速点击不同的面板标题，观察动画效果是否流畅，没有卡顿现象。
          特别注意长内容面板的展开和收缩动画。
        </p>
      </div>
    </div>
  );
}

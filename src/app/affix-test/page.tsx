"use client";

import { Affix } from "@/packages/components";
import { useState } from "react";

export default function AffixTestPage() {
  const [affixedCount, setAffixedCount] = useState(0);

  return (
    <div>
      {/* 页面头部 */}
      <div
        style={{
          height: "200px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: 0 }}>🔗 Affix 组件测试</h1>
        <p style={{ margin: 0, opacity: 0.9 }}>向下滚动查看固定效果</p>
      </div>

      {/* 顶部固定导航 */}
      <Affix
        offsetTop={0}
        variant="shadow"
        onChange={(affixed) => {
          console.log("导航栏固定状态:", affixed);
          if (affixed) setAffixedCount((prev) => prev + 1);
        }}
      >
        <nav
          style={{
            padding: "16px 32px",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <div
            style={{ fontWeight: "bold", fontSize: "18px", color: "#1890ff" }}
          >
            🏠 CloudStack Design
          </div>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <a href="#" style={{ color: "#333", textDecoration: "none" }}>
              首页
            </a>
            <a href="#" style={{ color: "#333", textDecoration: "none" }}>
              组件
            </a>
            <a href="#" style={{ color: "#333", textDecoration: "none" }}>
              文档
            </a>
            <div
              style={{
                padding: "4px 8px",
                background: "#f0f0f0",
                borderRadius: "4px",
                fontSize: "12px",
              }}
            >
              固定次数: {affixedCount}
            </div>
          </div>
        </nav>
      </Affix>

      {/* 主要内容区域 */}
      <div
        style={{ padding: "40px 32px", maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* 介绍区域 */}
        <div style={{ marginBottom: "60px" }}>
          <h2>🎯 Affix 组件功能演示</h2>
          <p>
            Affix 固钉组件可以将页面元素钉在可视范围，常用于侧边菜单和按钮组合。
          </p>
        </div>

        {/* 侧边固定按钮 */}
        <Affix offsetTop={100} style={{ position: "absolute", right: "32px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <button
              style={{
                padding: "12px",
                background: "#1890ff",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                cursor: "pointer",
                fontSize: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              ↑
            </button>
            <button
              style={{
                padding: "12px",
                background: "#52c41a",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                cursor: "pointer",
                fontSize: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              💬
            </button>
          </div>
        </Affix>

        {/* 内容区域 */}
        <div style={{ marginRight: "100px" }}>
          <h3>📋 功能特性</h3>
          <div style={{ display: "grid", gap: "24px", marginBottom: "40px" }}>
            {[
              {
                title: "🔝 顶部固定",
                desc: "当滚动到指定位置时，元素固定在页面顶部",
                color: "#1890ff",
              },
              {
                title: "⬇️ 底部固定",
                desc: "支持固定在页面底部，适用于操作按钮等",
                color: "#52c41a",
              },
              {
                title: "🎨 多种样式",
                desc: "提供默认、阴影、边框、高级等多种样式变体",
                color: "#722ed1",
              },
              {
                title: "📱 响应式",
                desc: "自动适应容器尺寸变化，支持窗口大小调整",
                color: "#fa8c16",
              },
              {
                title: "🎯 精确控制",
                desc: "可精确设置触发距离和层级，支持自定义容器",
                color: "#eb2f96",
              },
              {
                title: "🔄 状态回调",
                desc: "提供固定状态变化回调，便于业务逻辑处理",
                color: "#13c2c2",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "24px",
                  background: "white",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  borderLeft: `4px solid ${item.color}`,
                }}
              >
                <h4 style={{ margin: "0 0 12px 0", color: item.color }}>
                  {item.title}
                </h4>
                <p style={{ margin: 0, color: "#666", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 长内容区域 */}
          <h3>📄 长内容区域</h3>
          <p>以下是一些长内容，用来测试滚动效果：</p>

          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              style={{
                padding: "32px",
                margin: "24px 0",
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <h4 style={{ color: "#1890ff", marginBottom: "16px" }}>
                📖 内容区块 {i + 1}
              </h4>
              <p
                style={{ lineHeight: 1.8, color: "#333", marginBottom: "16px" }}
              >
                这是第 {i + 1} 个内容区块。Affix
                组件通过监听滚动事件来判断是否需要固定元素。
                当页面滚动到指定位置时，组件会自动将元素设置为 fixed
                定位，并在原位置插入一个 占位元素来保持页面布局的稳定性。
              </p>
              <p style={{ lineHeight: 1.8, color: "#666" }}>
                组件支持多种配置选项，包括偏移距离、固定位置、样式变体等，可以满足不同场景的需求。
                同时提供了状态变化回调，方便开发者根据固定状态执行相应的业务逻辑。
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 底部固定元素 */}
      <Affix offsetBottom={20} position="bottom" variant="elevated">
        <div
          style={{
            padding: "16px 32px",
            background: "#fa541c",
            color: "white",
            borderRadius: "8px",
            margin: "0 32px",
            textAlign: "center",
            fontWeight: "500",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          🎉 这是固定在底部的内容 - 向上滚动查看效果
        </div>
      </Affix>

      {/* 页面底部 */}
      <div
        style={{
          height: "300px",
          background: "#f0f2f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "16px",
          marginTop: "60px",
        }}
      >
        <h2 style={{ color: "#333" }}>🏁 页面底部</h2>
        <p style={{ color: "#666" }}>测试完成！向上滚动查看各种固定效果。</p>
      </div>
    </div>
  );
}

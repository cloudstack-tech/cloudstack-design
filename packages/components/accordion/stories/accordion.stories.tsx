import type {Meta, StoryObj} from "@storybook/nextjs-vite";
import React from "react";

import {Accordion} from "../src";

const meta: Meta<typeof Accordion> = {
  title: "Components/Data Display 数据展示/Accordion 折叠面板",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {type: "select"},
      options: ["sm", "md", "lg"],
      description: "手风琴尺寸",
    },
    variant: {
      control: {type: "select"},
      options: ["default", "filled", "bordered", "shadow"],
      description: "手风琴变体",
    },
    accordion: {
      control: {type: "boolean"},
      description: "是否为手风琴模式（只能展开一个面板）",
    },
    expandIconPosition: {
      control: {type: "select"},
      options: ["start", "end"],
      description: "展开图标位置",
    },
    collapsible: {
      control: {type: "select"},
      options: ["header", "icon", "disabled"],
      description: "可折叠方式",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  {
    key: "1",
    label: "这是面板标题 1",
    children: (
      <div>
        <p>这是面板 1 的内容。可以包含任何 React 元素。</p>
        <p>支持多行内容，自动适应高度。</p>
      </div>
    ),
  },
  {
    key: "2",
    label: "这是面板标题 2",
    children: (
      <div>
        <p>这是面板 2 的内容。</p>
        <ul className="list-disc list-inside">
          <li>支持列表</li>
          <li>支持各种内容</li>
          <li>动画流畅</li>
        </ul>
      </div>
    ),
  },
  {
    key: "3",
    label: "这是面板标题 3（禁用）",
    disabled: true,
    children: <p>这个面板被禁用了。</p>,
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    defaultActiveKey: ["1"],
  },
};

export const AccordionMode: Story = {
  args: {
    items: sampleItems,
    accordion: true,
    defaultActiveKey: "1",
  },
  name: "手风琴模式",
};

export const Bordered: Story = {
  args: {
    items: sampleItems,
    variant: "bordered",
    defaultActiveKey: ["1"],
  },
  name: "带边框",
};

export const Filled: Story = {
  args: {
    items: sampleItems,
    variant: "filled",
    defaultActiveKey: ["1"],
  },
  name: "填充样式",
};

export const Shadow: Story = {
  args: {
    items: sampleItems,
    variant: "shadow",
    defaultActiveKey: ["1"],
  },
  name: "阴影样式",
};

export const Small: Story = {
  args: {
    items: sampleItems,
    size: "sm",
    defaultActiveKey: ["1"],
  },
  name: "小尺寸",
};

export const Large: Story = {
  args: {
    items: sampleItems,
    size: "lg",
    defaultActiveKey: ["1"],
  },
  name: "大尺寸",
};

export const IconStart: Story = {
  args: {
    items: sampleItems,
    expandIconPosition: "start",
    defaultActiveKey: ["1"],
  },
  name: "图标在左侧",
};

export const CustomIcon: Story = {
  args: {
    items: sampleItems.map((item) => ({
      ...item,
      expandIcon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
    })),
    defaultActiveKey: ["1"],
  },
  name: "自定义图标",
};

export const WithExtra: Story = {
  args: {
    items: sampleItems.map((item, index) => ({
      ...item,
      extra: index === 0 ? <span className="text-xs text-gray-500">新</span> : undefined,
    })),
    defaultActiveKey: ["1"],
  },
  name: "带额外内容",
};

export const IconOnly: Story = {
  args: {
    items: sampleItems,
    collapsible: "icon",
    defaultActiveKey: ["1"],
  },
  name: "仅图标可点击",
};

export const Disabled: Story = {
  args: {
    items: sampleItems,
    collapsible: "disabled",
    defaultActiveKey: ["1"],
  },
  name: "禁用折叠",
};

export const AnimationTest: Story = {
  args: {
    items: [
      {
        key: "1",
        label: "短内容测试",
        children: <p>这是一段短内容。</p>,
      },
      {
        key: "2",
        label: "长内容测试",
        children: (
          <div>
            <p>这是一段很长的内容，用来测试动画效果。</p>
            <p>包含多个段落，用来验证动画的流畅性。</p>
            <ul className="list-disc list-inside">
              <li>列表项 1 - 测试动画是否流畅</li>
              <li>列表项 2 - 没有卡顿现象</li>
              <li>列表项 3 - 收缩和展开都很丝滑</li>
              <li>列表项 4 - 使用了 ResizeObserver 技术</li>
              <li>列表项 5 - 优化了动画曲线</li>
            </ul>
            <p>更多内容来测试高度变化...</p>
            <div
              style={{
                height: "100px",
                background: "#f0f0f0",
                padding: "20px",
              }}
            >
              <p>这是一个固定高度的区域，用来增加内容高度。</p>
            </div>
          </div>
        ),
      },
      {
        key: "3",
        label: "动态内容测试",
        children: (
          <div>
            <p>这个面板包含动态内容：</p>
            <div
              style={{
                padding: "20px",
                background: "#f9f9f9",
                margin: "10px 0",
              }}
            >
              <h4 className="font-semibold">嵌套内容区域</h4>
              <p>测试嵌套元素的动画表现</p>
            </div>
          </div>
        ),
      },
    ],
    defaultActiveKey: [],
  },
  name: "动画效果测试",
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default 默认</h3>
        <Accordion
          variant="default"
          items={[
            {key: "1", label: "面板 1", children: <p>默认样式的面板内容</p>},
            {key: "2", label: "面板 2", children: <p>清洁简约的设计</p>},
          ]}
          defaultActiveKey={["1"]}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Filled 填充</h3>
        <Accordion
          variant="filled"
          items={[
            {key: "1", label: "面板 1", children: <p>填充背景样式</p>},
            {key: "2", label: "面板 2", children: <p>视觉层次更明显</p>},
          ]}
          defaultActiveKey={["1"]}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Bordered 边框</h3>
        <Accordion
          variant="bordered"
          items={[
            {key: "1", label: "面板 1", children: <p>带边框样式</p>},
            {key: "2", label: "面板 2", children: <p>边界清晰</p>},
          ]}
          defaultActiveKey={["1"]}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Shadow 阴影</h3>
        <Accordion
          variant="shadow"
          items={[
            {key: "1", label: "面板 1", children: <p>带阴影样式</p>},
            {key: "2", label: "面板 2", children: <p>更有立体感</p>},
          ]}
          defaultActiveKey={["1"]}
        />
      </div>
    </div>
  ),
  name: "所有变体展示",
};

/**
 * FAQ 常见问题场景
 *
 * 手风琴组件最常见的使用场景之一就是 FAQ（常见问题）页面。
 * 用户可以快速浏览问题列表，点击感兴趣的问题查看详细答案。
 */
export const FAQExample: Story = {
  render: () => (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">常见问题 FAQ</h2>
      <Accordion
        variant="bordered"
        items={[
          {
            key: "q1",
            label: "什么是手风琴组件？",
            children: (
              <div className="text-default-600">
                <p>
                  手风琴组件（Accordion）是一种用于组织和展示大量内容的界面元素。
                  它允许用户通过点击标题来展开或折叠内容区域，节省页面空间，
                  提高信息的组织性和可读性。
                </p>
                <p className="mt-2">它特别适合用于 FAQ、产品特性说明、设置选项等场景。</p>
              </div>
            ),
          },
          {
            key: "q2",
            label: "手风琴和折叠面板有什么区别？",
            children: (
              <div className="text-default-600">
                <p>
                  在大多数设计系统中，手风琴（Accordion）和折叠面板（Collapse）通常指同一种组件。
                  但在某些情况下：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    <strong>手风琴模式</strong>
                    ：同一时间只能展开一个面板，展开新面板时会自动关闭其他面板
                  </li>
                  <li>
                    <strong>折叠面板模式</strong>：允许同时展开多个面板，每个面板独立控制
                  </li>
                </ul>
                <p className="mt-2">
                  我们的组件通过{" "}
                  <code className="text-sm bg-default-100 px-1 py-0.5 rounded">accordion</code>{" "}
                  属性支持这两种模式。
                </p>
              </div>
            ),
          },
          {
            key: "q3",
            label: "如何控制默认展开的面板？",
            children: (
              <div className="text-default-600">
                <p>有两种方式可以控制面板的展开状态：</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    <strong>非受控模式</strong>：使用{" "}
                    <code className="text-sm bg-default-100 px-1 py-0.5 rounded">
                      defaultActiveKey
                    </code>
                    属性设置初始展开的面板
                  </li>
                  <li>
                    <strong>受控模式</strong>：使用{" "}
                    <code className="text-sm bg-default-100 px-1 py-0.5 rounded">activeKey</code> 和{" "}
                    <code className="text-sm bg-default-100 px-1 py-0.5 rounded">onChange</code>
                    属性完全控制展开状态
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: "q4",
            label: "支持哪些自定义选项？",
            children: (
              <div className="text-default-600">
                <p>手风琴组件提供了丰富的自定义选项：</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>4 种视觉变体（default、filled、bordered、shadow）</li>
                  <li>3 种尺寸（sm、md、lg）</li>
                  <li>自定义展开图标</li>
                  <li>图标位置控制（左侧/右侧）</li>
                  <li>额外内容插槽</li>
                  <li>禁用状态</li>
                  <li>可折叠方式控制（标题点击/图标点击/禁用）</li>
                </ul>
              </div>
            ),
          },
        ]}
        defaultActiveKey={["q1"]}
      />
    </div>
  ),
  name: "FAQ 常见问题",
};

/**
 * 产品特性展示场景
 *
 * 用于展示产品的多个特性或功能模块，
 * 用户可以逐个查看详细信息。
 */
export const ProductFeatures: Story = {
  render: () => (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">产品特性</h2>
      <p className="text-default-600 mb-6">了解我们产品的核心功能</p>
      <Accordion
        variant="shadow"
        size="lg"
        items={[
          {
            key: "feature1",
            label: "🎨 现代化设计系统",
            extra: (
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">推荐</span>
            ),
            children: (
              <div className="space-y-3">
                <p className="text-default-700">
                  采用统一的设计语言和组件规范，确保整个应用的视觉一致性。
                </p>
                <div className="bg-default-50 p-4 rounded">
                  <h4 className="font-semibold mb-2">主要优势：</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-default-600">
                    <li>统一的颜色系统和间距规范</li>
                    <li>响应式设计，适配各种屏幕尺寸</li>
                    <li>支持深色模式</li>
                    <li>无障碍访问友好</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            key: "feature2",
            label: "⚡ 高性能优化",
            children: (
              <div className="space-y-3">
                <p className="text-default-700">
                  通过多种技术手段优化组件性能，确保流畅的用户体验。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-default-50 p-3 rounded">
                    <div className="text-2xl font-bold text-primary">50%</div>
                    <div className="text-sm text-default-600">渲染时间减少</div>
                  </div>
                  <div className="bg-default-50 p-3 rounded">
                    <div className="text-2xl font-bold text-primary">30%</div>
                    <div className="text-sm text-default-600">包体积缩小</div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            key: "feature3",
            label: "🔧 高度可定制",
            children: (
              <div className="text-default-700">
                <p>
                  提供丰富的配置选项和灵活的 API，轻松满足各种定制需求。
                  支持主题定制、样式覆盖、行为配置等。
                </p>
                <pre className="mt-3 bg-default-100 p-3 rounded text-sm overflow-x-auto">
                  {`<Accordion
  variant="shadow"
  size="lg"
  expandIconPosition="start"
  accordion={true}
  ...
/>`}
                </pre>
              </div>
            ),
          },
          {
            key: "feature4",
            label: "📱 完美的移动端支持",
            children: (
              <div className="text-default-700">
                <p>
                  专为移动设备优化，支持触摸手势，响应式布局， 确保在各种设备上都有良好的使用体验。
                </p>
              </div>
            ),
          },
        ]}
        defaultActiveKey={["feature1"]}
      />
    </div>
  ),
  name: "产品特性展示",
};

/**
 * 设置面板场景
 *
 * 将复杂的设置选项组织到不同的分类中，
 * 用户可以快速找到需要配置的选项。
 */
export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: true,
      autoSave: true,
      theme: "light",
      language: "zh-CN",
    });

    return (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">系统设置</h2>
        <Accordion
          variant="filled"
          accordion={true}
          items={[
            {
              key: "general",
              label: "通用设置",
              children: (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">语言</div>
                      <div className="text-sm text-default-500">选择界面显示语言</div>
                    </div>
                    <select
                      className="px-3 py-1.5 border border-default-300 rounded"
                      value={settings.language}
                      onChange={(e) => setSettings({...settings, language: e.target.value})}
                    >
                      <option value="zh-CN">简体中文</option>
                      <option value="en-US">English</option>
                      <option value="ja-JP">日本語</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">主题</div>
                      <div className="text-sm text-default-500">选择界面主题</div>
                    </div>
                    <select
                      className="px-3 py-1.5 border border-default-300 rounded"
                      value={settings.theme}
                      onChange={(e) => setSettings({...settings, theme: e.target.value})}
                    >
                      <option value="light">浅色</option>
                      <option value="dark">深色</option>
                      <option value="auto">跟随系统</option>
                    </select>
                  </div>
                </div>
              ),
            },
            {
              key: "notifications",
              label: "通知设置",
              children: (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">启用通知</div>
                      <div className="text-sm text-default-500">接收系统通知消息</div>
                    </div>
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={settings.notifications}
                      onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
                    />
                  </div>
                  <div className="text-sm text-default-600 bg-default-100 p-3 rounded">
                    💡 提示：关闭通知后，你将不会收到任何系统消息推送
                  </div>
                </div>
              ),
            },
            {
              key: "advanced",
              label: "高级设置",
              children: (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">自动保存</div>
                      <div className="text-sm text-default-500">编辑时自动保存内容</div>
                    </div>
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={settings.autoSave}
                      onChange={(e) => setSettings({...settings, autoSave: e.target.checked})}
                    />
                  </div>
                  <div className="text-sm text-warning bg-warning/10 p-3 rounded border border-warning/20">
                    ⚠️ 警告：修改高级设置可能会影响系统性能
                  </div>
                </div>
              ),
            },
          ]}
          defaultActiveKey="general"
        />
      </div>
    );
  },
  name: "设置面板",
};

/**
 * 受控模式示例
 *
 * 展示如何使用受控模式完全控制手风琴的展开状态
 */
export const ControlledExample: Story = {
  render: () => {
    const [activeKeys, setActiveKeys] = React.useState<string[]>(["1"]);

    return (
      <div className="max-w-2xl">
        <div className="mb-4 p-4 bg-default-100 rounded">
          <div className="font-semibold mb-2">当前展开的面板：</div>
          <div className="text-sm text-default-600">
            {activeKeys.length > 0 ? activeKeys.join(", ") : "无"}
          </div>
          <div className="mt-3 flex gap-2">
            <button
              className="px-3 py-1.5 text-sm bg-primary text-white rounded hover:bg-primary-600"
              onClick={() => setActiveKeys(["1", "2", "3"])}
            >
              展开全部
            </button>
            <button
              className="px-3 py-1.5 text-sm bg-default-200 rounded hover:bg-default-300"
              onClick={() => setActiveKeys([])}
            >
              收起全部
            </button>
          </div>
        </div>
        <Accordion
          variant="bordered"
          activeKey={activeKeys}
          onChange={(keys) => setActiveKeys(keys as string[])}
          items={[
            {
              key: "1",
              label: "面板 1",
              children: <p>受控模式的面板内容 1</p>,
            },
            {
              key: "2",
              label: "面板 2",
              children: <p>受控模式的面板内容 2</p>,
            },
            {
              key: "3",
              label: "面板 3",
              children: <p>受控模式的面板内容 3</p>,
            },
          ]}
        />
      </div>
    );
  },
  name: "受控模式",
};

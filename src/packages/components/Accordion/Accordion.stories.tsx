import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Accordion } from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Display 展示/Accordion 手风琴",
  component: Accordion,

  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "base", "lg"],
      description: "手风琴尺寸",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "bordered", "shadow"],
      description: "手风琴变体",
    },
    accordion: {
      control: { type: "boolean" },
      description: "是否为手风琴模式（只能展开一个面板）",
    },
    bordered: {
      control: { type: "boolean" },
      description: "是否显示边框",
    },
    expandIconPosition: {
      control: { type: "select" },
      options: ["start", "end"],
      description: "展开图标位置",
    },
    collapsible: {
      control: { type: "select" },
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
        <ul>
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
    bordered: true,
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
      extra:
        index === 0 ? (
          <span className="text-xs text-gray-500">新</span>
        ) : undefined,
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
            <ul>
              <li>列表项 1 - 测试动画是否流畅</li>
              <li>列表项 2 - 没有卡顿现象</li>
              <li>列表项 3 - 收缩和展开都很丝滑</li>
              <li>列表项 4 - 使用了 CSS Grid 技术</li>
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
              <h4>嵌套内容区域</h4>
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

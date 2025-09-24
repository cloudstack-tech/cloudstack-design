import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Affix } from "./affix";

const meta: Meta<typeof Affix> = {
  title: "Display 展示/Affix 锚点",
  component: Affix,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    offsetTop: {
      control: { type: "number" },
      description: "距离窗口顶部达到指定偏移量后触发",
    },
    offsetBottom: {
      control: { type: "number" },
      description: "距离窗口底部达到指定偏移量后触发",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "shadow", "bordered", "elevated"],
      description: "固定时的样式变体",
    },
    position: {
      control: { type: "select" },
      options: ["top", "bottom"],
      description: "固定位置",
    },
    shadow: {
      control: { type: "boolean" },
      description: "是否显示阴影",
    },
    bordered: {
      control: { type: "boolean" },
      description: "是否显示边框",
    },
    zIndex: {
      control: { type: "number" },
      description: "z-index 层级",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 创建一个长页面来演示滚动效果
const LongPageContent = ({ children }: { children: React.ReactNode }) => (
  <div>
    <div style={{ height: "300px", background: "#f0f2f5", padding: "20px" }}>
      <h2>页面顶部内容</h2>
      <p>向下滚动查看 Affix 组件的固定效果</p>
    </div>

    {children}

    <div style={{ height: "800px", background: "#fafafa", padding: "20px" }}>
      <h3>页面主要内容区域</h3>
      <p>这里是页面的主要内容，高度足够长以便测试滚动效果。</p>

      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          style={{
            padding: "16px",
            margin: "16px 0",
            background: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h4>内容块 {i + 1}</h4>
          <p>
            这是第 {i + 1} 个内容块，用来增加页面高度以便测试 Affix
            组件的滚动固定效果。
          </p>
        </div>
      ))}
    </div>

    <div style={{ height: "300px", background: "#e6f7ff", padding: "20px" }}>
      <h2>页面底部内容</h2>
      <p>页面结束</p>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    offsetTop: 20,
    children: (
      <div
        style={{
          padding: "12px 24px",
          background: "#1890ff",
          color: "white",
          borderRadius: "6px",
          fontWeight: "500",
        }}
      >
        🔝 固定在顶部的内容
      </div>
    ),
  },
  render: (args) => (
    <LongPageContent>
      <Affix {...args} />
    </LongPageContent>
  ),
};

export const WithShadow: Story = {
  args: {
    offsetTop: 20,
    shadow: true,
    children: (
      <div
        style={{
          padding: "16px 32px",
          background: "white",
          borderRadius: "8px",
          fontWeight: "500",
          color: "#333",
        }}
      >
        ✨ 带阴影的固定内容
      </div>
    ),
  },
  render: (args) => (
    <LongPageContent>
      <Affix {...args} />
    </LongPageContent>
  ),
  name: "带阴影",
};

export const WithBorder: Story = {
  args: {
    offsetTop: 20,
    bordered: true,
    children: (
      <div
        style={{
          padding: "16px 32px",
          background: "white",
          fontWeight: "500",
          color: "#333",
        }}
      >
        🔲 带边框的固定内容
      </div>
    ),
  },
  render: (args) => (
    <LongPageContent>
      <Affix {...args} />
    </LongPageContent>
  ),
  name: "带边框",
};

export const Elevated: Story = {
  args: {
    offsetTop: 20,
    variant: "elevated",
    children: (
      <div
        style={{
          padding: "20px 40px",
          fontWeight: "500",
          color: "#333",
        }}
      >
        🚀 高级样式的固定内容
      </div>
    ),
  },
  render: (args) => (
    <LongPageContent>
      <Affix {...args} />
    </LongPageContent>
  ),
  name: "高级样式",
};

export const Navigation: Story = {
  args: {
    offsetTop: 0,
    variant: "shadow",
    children: (
      <nav
        style={{
          padding: "16px 32px",
          background: "white",
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "18px", color: "#1890ff" }}>
          Logo
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="#" style={{ color: "#333", textDecoration: "none" }}>
            首页
          </a>
          <a href="#" style={{ color: "#333", textDecoration: "none" }}>
            产品
          </a>
          <a href="#" style={{ color: "#333", textDecoration: "none" }}>
            关于
          </a>
          <a href="#" style={{ color: "#333", textDecoration: "none" }}>
            联系
          </a>
        </div>
      </nav>
    ),
  },
  render: (args) => (
    <LongPageContent>
      <Affix {...args} />
    </LongPageContent>
  ),
  name: "导航栏",
};

export const BottomAffix: Story = {
  args: {
    offsetBottom: 20,
    position: "bottom",
    variant: "elevated",
    children: (
      <div
        style={{
          padding: "16px 32px",
          background: "#52c41a",
          color: "white",
          borderRadius: "8px",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        ⬇️ 固定在底部的内容
      </div>
    ),
  },
  render: (args) => (
    <LongPageContent>
      <Affix {...args} />
    </LongPageContent>
  ),
  name: "底部固定",
};

export const CustomZIndex: Story = {
  args: {
    offsetTop: 20,
    zIndex: 999,
    variant: "elevated",
    children: (
      <div
        style={{
          padding: "16px 32px",
          background: "#722ed1",
          color: "white",
          borderRadius: "8px",
          fontWeight: "500",
        }}
      >
        🔢 自定义 z-index (999)
      </div>
    ),
  },
  render: (args) => (
    <LongPageContent>
      <Affix {...args} />
    </LongPageContent>
  ),
  name: "自定义层级",
};

export const WithCallback: Story = {
  args: {
    offsetTop: 50,
    variant: "shadow",
    onChange: (affixed: boolean) => {
      console.log("Affix 状态变化:", affixed ? "已固定" : "未固定");
    },
    children: (
      <div
        style={{
          padding: "16px 32px",
          background: "#fa8c16",
          color: "white",
          borderRadius: "8px",
          fontWeight: "500",
        }}
      >
        📢 带回调的固定内容 (查看控制台)
      </div>
    ),
  },
  render: (args) => (
    <LongPageContent>
      <Affix {...args} />
    </LongPageContent>
  ),
  name: "状态回调",
};

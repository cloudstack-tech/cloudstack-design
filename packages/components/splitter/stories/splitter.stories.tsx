import type {Meta, StoryObj} from "@storybook/nextjs-vite";
import React from "react";

import {Splitter, SplitterPanel} from "../src";
import {Box} from "../../stories/Box";

const meta = {
  title: "Components/Layout 布局/Splitter 分割面板",
  component: Splitter,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "分割方向",
    },
    gutterSize: {
      control: "number",
      description: "分割条大小（像素）",
    },
  },
} satisfies Meta<typeof Splitter>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 水平分割（左右布局）
 */
export const Horizontal: Story = {
  args: {
    direction: "horizontal",
  },
  render: (args) => (
    <div style={{width: "100%", height: "400px"}}>
      <Splitter {...args}>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">左侧面板</h3>
              <p>这是左侧面板的内容</p>
              <p className="mt-2 text-sm text-default-600">拖动中间的分割条可以调整面板大小</p>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">右侧面板</h3>
              <p>这是右侧面板的内容</p>
            </div>
          </Box>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

/**
 * 垂直分割（上下布局）
 */
export const Vertical: Story = {
  args: {
    direction: "vertical",
  },
  render: (args) => (
    <div style={{width: "100%", height: "500px"}}>
      <Splitter {...args}>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">顶部面板</h3>
              <p>这是顶部面板的内容</p>
              <p className="mt-2 text-sm text-default-600">拖动中间的分割条可以调整面板大小</p>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">底部面板</h3>
              <p>这是底部面板的内容</p>
            </div>
          </Box>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

/**
 * 三个面板
 */
export const ThreePanels: Story = {
  args: {
    direction: "horizontal",
  },
  render: (args) => (
    <div style={{width: "100%", height: "400px"}}>
      <Splitter {...args}>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">左侧</h3>
              <p>左侧面板</p>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">中间</h3>
              <p>中间面板</p>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">右侧</h3>
              <p>右侧面板</p>
            </div>
          </Box>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

/**
 * 嵌套分割（复杂布局）
 */
export const Nested: Story = {
  render: () => (
    <div style={{width: "100%", height: "600px"}}>
      <Splitter direction="vertical">
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">顶部区域</h3>
              <p>这是顶部区域的内容</p>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Splitter direction="horizontal">
            <SplitterPanel>
              <Box className="h-full">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">左侧边栏</h3>
                  <p>侧边栏内容</p>
                </div>
              </Box>
            </SplitterPanel>
            <SplitterPanel>
              <Box className="h-full">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">主要内容区</h3>
                  <p>主要内容显示在这里</p>
                  <p className="mt-2 text-sm text-default-600">
                    这是一个嵌套的分割面板示例，顶部是标题区，下方分为左侧边栏和主内容区
                  </p>
                </div>
              </Box>
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

/**
 * IDE 布局示例
 */
export const IDELayout: Story = {
  render: () => (
    <div style={{width: "100%", height: "600px"}}>
      <Splitter direction="vertical">
        <SplitterPanel defaultSize={10}>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold">菜单栏</h3>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Splitter direction="horizontal">
            <SplitterPanel defaultSize={20}>
              <Box className="h-full">
                <div className="p-4">
                  <h3 className="text-base font-semibold mb-4">文件浏览器</h3>
                  <div className="space-y-1 text-sm">
                    <div>📁 src</div>
                    <div className="ml-4">📄 index.ts</div>
                    <div className="ml-4">📄 App.tsx</div>
                    <div>📁 components</div>
                    <div className="ml-4">📄 Button.tsx</div>
                  </div>
                </div>
              </Box>
            </SplitterPanel>
            <SplitterPanel>
              <Splitter direction="vertical">
                <SplitterPanel defaultSize={70}>
                  <Box className="h-full">
                    <div className="p-4">
                      <h3 className="text-base font-semibold mb-2">编辑器</h3>
                      <pre className="text-sm text-default-600">
                        <code>{`import React from 'react';

function App() {
  return (
    <div>Hello World</div>
  );
}`}</code>
                      </pre>
                    </div>
                  </Box>
                </SplitterPanel>
                <SplitterPanel>
                  <Box className="h-full">
                    <div className="p-4">
                      <h3 className="text-base font-semibold mb-2">终端</h3>
                      <p className="text-sm text-default-600">$ npm run dev</p>
                    </div>
                  </Box>
                </SplitterPanel>
              </Splitter>
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

/**
 * 自定义分割条样式
 */
export const CustomGutter: Story = {
  args: {
    direction: "horizontal",
    gutterSize: 8,
  },
  render: (args) => (
    <div style={{width: "100%", height: "400px"}}>
      <Splitter
        {...args}
        gutterRender={(index, direction) => (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "var(--cloudstack-colors-primary-100)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: direction === "horizontal" ? "col-resize" : "row-resize",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--cloudstack-colors-primary-200)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--cloudstack-colors-primary-100)";
            }}
          >
            <div
              style={{
                width: "4px",
                height: "40px",
                backgroundColor: "var(--cloudstack-colors-primary)",
                borderRadius: "2px",
              }}
            />
          </div>
        )}
      >
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">左侧面板</h3>
              <p>自定义分割条样式</p>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">右侧面板</h3>
              <p>拖动中间的自定义分割条</p>
            </div>
          </Box>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

/**
 * 固定尺寸的分割条
 */
export const LargeGutter: Story = {
  args: {
    direction: "horizontal",
    gutterSize: 12,
  },
  render: (args) => (
    <div style={{width: "100%", height: "400px"}}>
      <Splitter {...args}>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">左侧面板</h3>
              <p>更宽的分割条（12px）</p>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">右侧面板</h3>
              <p>更容易点击和拖动</p>
            </div>
          </Box>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

/**
 * 响应式布局
 */
export const Responsive: Story = {
  render: () => (
    <div style={{width: "100%", height: "400px"}}>
      <Splitter direction="horizontal">
        <SplitterPanel minSize={150}>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">侧边栏</h3>
              <p className="text-sm text-default-600">最小宽度 150px</p>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">主内容区</h3>
              <p>这个面板会自动填充剩余空间</p>
            </div>
          </Box>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

/**
 * 延迟渲染模式
 *
 * 拖拽时会显示一条预览线，松手时才真正更新面板大小。
 * 这种模式适合内容较重的面板，可以提供更流畅的拖拽体验。
 */
export const DelayedResize: Story = {
  render: () => (
    <div style={{width: "100%", height: "400px"}}>
      <Splitter direction="horizontal" resizeMode="delayed">
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">左侧面板</h3>
              <p className="text-sm text-default-600">延迟渲染模式</p>
              <p className="mt-2 text-sm">拖拽时会看到一条蓝色预览线，松手后才更新面板大小</p>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">右侧面板</h3>
              <p>内容不会在拖拽时重排，性能更好</p>
            </div>
          </Box>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

/**
 * 可折叠面板
 *
 * 面板可以通过分割条上的按钮快速折叠和展开。
 * 折叠后面板会缩小到指定的最小尺寸。
 */
export const Collapsible: Story = {
  render: () => (
    <div style={{width: "100%", height: "400px"}}>
      <Splitter direction="horizontal">
        <SplitterPanel collapsible defaultSize={25}>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">可折叠侧边栏</h3>
              <p className="text-sm text-default-600">点击分割条上的按钮可以折叠此面板</p>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">主内容区</h3>
              <p>当左侧面板折叠时，这个面板会自动扩展</p>
            </div>
          </Box>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

/**
 * 双向可折叠
 *
 * 左右两个面板都可以折叠。
 */
export const DualCollapsible: Story = {
  render: () => (
    <div style={{width: "100%", height: "400px"}}>
      <Splitter direction="horizontal">
        <SplitterPanel collapsible defaultSize={20}>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-base font-semibold mb-2">左侧栏</h3>
              <p className="text-sm">可折叠</p>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">主内容区</h3>
              <p>中间内容</p>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel collapsible defaultSize={20}>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-base font-semibold mb-2">右侧栏</h3>
              <p className="text-sm">可折叠</p>
            </div>
          </Box>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

/**
 * 面板大小限制
 *
 * 可以设置面板的最小和最大尺寸，以及初始尺寸。
 */
export const PanelSizeConstraints: Story = {
  render: () => (
    <div style={{width: "100%", height: "400px"}}>
      <Splitter direction="horizontal">
        <SplitterPanel minSize={200} maxSize={400} defaultSize={25}>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">受限面板</h3>
              <ul className="text-sm space-y-1 text-default-600">
                <li>• 最小宽度：200px</li>
                <li>• 最大宽度：400px</li>
                <li>• 初始大小：25%</li>
              </ul>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">自适应面板</h3>
              <p>无尺寸限制，自动填充剩余空间</p>
            </div>
          </Box>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

/**
 * 禁用调整大小
 *
 * 可以通过 resizable 属性禁用某个面板的调整大小功能。
 * 当相邻的两个面板中有任何一个禁用调整大小时，它们之间的分割条将无法拖拽。
 */
export const DisabledResize: Story = {
  render: () => (
    <div style={{width: "100%", height: "400px"}}>
      <Splitter direction="horizontal">
        <SplitterPanel resizable={false} defaultSize={30}>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">固定宽度面板</h3>
              <p className="text-sm text-default-600">此面板禁用了调整大小</p>
              <p className="mt-2 text-sm">右侧的分割条无法拖拽</p>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">可调整面板</h3>
              <p>但由于左侧面板禁用了调整，所以左边的分割条无法使用</p>
            </div>
          </Box>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

/**
 * 受控模式
 *
 * 通过 sizes 和 onResize 属性可以完全控制面板的尺寸。
 */
export const Controlled: Story = {
  render: function ControlledExample() {
    const [sizes, setSizes] = React.useState([30, 70]);

    return (
      <div style={{width: "100%", height: "450px"}}>
        <div className="mb-4 p-4 bg-default-100 rounded">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold">面板尺寸：</span>
            <span className="text-sm">
              左侧: {sizes[0].toFixed(1)}% | 右侧: {sizes[1].toFixed(1)}%
            </span>
            <button
              className="ml-auto px-3 py-1 text-sm bg-primary text-white rounded hover:bg-primary-600"
              onClick={() => setSizes([50, 50])}
            >
              重置为 50/50
            </button>
          </div>
        </div>
        <div style={{height: "370px"}}>
          <Splitter direction="horizontal" sizes={sizes} onResize={setSizes}>
            <SplitterPanel>
              <Box className="h-full">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">受控左侧面板</h3>
                  <p className="text-sm text-default-600">当前宽度：{sizes[0].toFixed(1)}%</p>
                </div>
              </Box>
            </SplitterPanel>
            <SplitterPanel>
              <Box className="h-full">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">受控右侧面板</h3>
                  <p className="text-sm text-default-600">当前宽度：{sizes[1].toFixed(1)}%</p>
                </div>
              </Box>
            </SplitterPanel>
          </Splitter>
        </div>
      </div>
    );
  },
};

/**
 * 综合示例
 *
 * 结合多个功能的综合示例：延迟渲染、可折叠、大小限制等。
 */
export const Advanced: Story = {
  render: () => (
    <div style={{width: "100%", height: "500px"}}>
      <Splitter direction="vertical" resizeMode="delayed">
        <SplitterPanel defaultSize={15} minSize={50} resizable={false}>
          <Box className="h-full">
            <div className="p-4">
              <h3 className="text-base font-semibold">顶部工具栏（固定高度）</h3>
            </div>
          </Box>
        </SplitterPanel>
        <SplitterPanel>
          <Splitter direction="horizontal" resizeMode="delayed">
            <SplitterPanel collapsible defaultSize={20} minSize={150} maxSize={300}>
              <Box className="h-full">
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-2">侧边栏</h3>
                  <ul className="text-xs space-y-1 text-default-600">
                    <li>• 可折叠</li>
                    <li>• 最小 150px</li>
                    <li>• 最大 300px</li>
                  </ul>
                </div>
              </Box>
            </SplitterPanel>
            <SplitterPanel>
              <Splitter direction="vertical">
                <SplitterPanel defaultSize={65}>
                  <Box className="h-full">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">主编辑区</h3>
                      <p className="text-sm">延迟渲染模式，拖拽更流畅</p>
                    </div>
                  </Box>
                </SplitterPanel>
                <SplitterPanel collapsible>
                  <Box className="h-full">
                    <div className="p-4">
                      <h3 className="text-base font-semibold mb-2">底部面板（可折叠）</h3>
                      <p className="text-sm">控制台、终端等</p>
                    </div>
                  </Box>
                </SplitterPanel>
              </Splitter>
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

# @cloudstack-design/resizable

可拖拽调整的分割面板组件，支持水平和垂直方向，适用于构建复杂的可调整布局。

## 组件

### Splitter（分割面板）

用于创建可拖拽调整的分割布局，面板之间可以通过拖拽分割条来调整大小。

### Resizable（已废弃）

保留以向后兼容，建议使用新的 `Splitter` 组件。

## 为什么需要 Splitter？

在现代 Web 应用中，用户经常需要自定义界面布局以适应不同的工作流程。Splitter 组件提供了一个强大而灵活的解决方案：

### Splitter vs 其他布局组件

| 特性         | Splitter        | Stack      | Flex       | Grid       |
| ------------ | --------------- | ---------- | ---------- | ---------- |
| **可拖拽**   | ✅ 支持拖拽调整 | ❌         | ❌         | ❌         |
| **方向**     | 水平/垂直       | 水平/垂直  | 多种方向   | 二维网格   |
| **面板大小** | 用户可调整      | 固定或自动 | 固定或自动 | 固定或自动 |
| **嵌套支持** | ✅ 完美支持     | ✅         | ✅         | ✅         |
| **状态保存** | ✅ 支持回调     | ❌         | ❌         | ❌         |
| **适用场景** | IDE、文件管理器 | 简单堆叠   | 灵活布局   | 卡片网格   |

## 核心特性

- **🎯 拖拽调整**：支持鼠标拖拽调整面板大小，提供直观的用户体验
- **📐 双向布局**：支持水平（左右）和垂直（上下）方向
- **🔄 嵌套布局**：支持任意深度的嵌套，构建复杂布局
- **🎨 自定义分割条**：可自定义分割条样式、大小和渲染方式
- **📏 尺寸限制**：支持设置面板的最小/最大尺寸
- **💾 状态保存**：提供回调函数，方便保存用户的布局偏好
- **🖱️ 良好体验**：平滑的拖拽动画和清晰的视觉反馈
- **♿ 无障碍**：支持键盘操作和屏幕阅读器

## 安装

```sh
pnpm add @cloudstack-design/resizable
# or
yarn add @cloudstack-design/resizable
# or
npm i @cloudstack-design/resizable
```

## 使用

### 基础用法

```tsx
import {Splitter, SplitterPanel} from "@cloudstack-design/resizable";

// 水平分割（左右布局）
<div style={{height: "500px"}}>
  <Splitter direction="horizontal">
    <SplitterPanel>
      <div>左侧面板</div>
    </SplitterPanel>
    <SplitterPanel>
      <div>右侧面板</div>
    </SplitterPanel>
  </Splitter>
</div>

// 垂直分割（上下布局）
<div style={{height: "500px"}}>
  <Splitter direction="vertical">
    <SplitterPanel>
      <div>顶部面板</div>
    </SplitterPanel>
    <SplitterPanel>
      <div>底部面板</div>
    </SplitterPanel>
  </Splitter>
</div>
```

### 三个面板

```tsx
<Splitter direction="horizontal">
  <SplitterPanel>左侧</SplitterPanel>
  <SplitterPanel>中间</SplitterPanel>
  <SplitterPanel>右侧</SplitterPanel>
</Splitter>
```

### 嵌套布局

```tsx
// 实现类似 IDE 的布局
<Splitter direction="vertical">
  <SplitterPanel defaultSize={10}>
    <Header />
  </SplitterPanel>
  <SplitterPanel>
    <Splitter direction="horizontal">
      <SplitterPanel defaultSize={20}>
        <Sidebar />
      </SplitterPanel>
      <SplitterPanel>
        <MainContent />
      </SplitterPanel>
    </Splitter>
  </SplitterPanel>
</Splitter>
```

### 设置面板尺寸

```tsx
<Splitter direction="horizontal">
  <SplitterPanel
    defaultSize={30} // 初始占 30%
    minSize={200} // 最小 200px
    maxSize={500} // 最大 500px
  >
    <Sidebar />
  </SplitterPanel>
  <SplitterPanel>
    <MainContent />
  </SplitterPanel>
</Splitter>
```

### 自定义分割条

```tsx
<Splitter
  direction="horizontal"
  gutterSize={10} // 分割条宽度 10px
  gutterRender={(index, direction) => (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#e0e0e0",
        cursor: direction === "horizontal" ? "col-resize" : "row-resize",
      }}
    >
      <span>⋮</span>
    </div>
  )}
>
  <SplitterPanel>左侧</SplitterPanel>
  <SplitterPanel>右侧</SplitterPanel>
</Splitter>
```

### 保存布局状态

```tsx
import {useState, useEffect} from "react";

function App() {
  const [sizes, setSizes] = useState(() => {
    // 从 localStorage 加载保存的尺寸
    const saved = localStorage.getItem("panelSizes");
    return saved ? JSON.parse(saved) : [30, 70];
  });

  return (
    <Splitter
      direction="horizontal"
      onResizeEnd={(newSizes) => {
        setSizes(newSizes);
        // 保存到 localStorage
        localStorage.setItem("panelSizes", JSON.stringify(newSizes));
      }}
    >
      <SplitterPanel>左侧</SplitterPanel>
      <SplitterPanel>右侧</SplitterPanel>
    </Splitter>
  );
}
```

## 常见应用场景

### IDE 编辑器布局

```tsx
<Splitter direction="vertical" style={{height: "100vh"}}>
  {/* 顶部菜单栏 */}
  <SplitterPanel defaultSize={8}>
    <MenuBar />
  </SplitterPanel>

  {/* 主要工作区 */}
  <SplitterPanel>
    <Splitter direction="horizontal">
      <SplitterPanel defaultSize={20} minSize={150}>
        <FileExplorer />
      </SplitterPanel>
      <SplitterPanel>
        <Splitter direction="vertical">
          <SplitterPanel defaultSize={70}>
            <Editor />
          </SplitterPanel>
          <SplitterPanel>
            <Terminal />
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  </SplitterPanel>
</Splitter>
```

### 邮件客户端布局

```tsx
<Splitter direction="horizontal" style={{height: "100vh"}}>
  <SplitterPanel defaultSize={20} minSize={150}>
    <FolderList />
  </SplitterPanel>
  <SplitterPanel>
    <Splitter direction="vertical">
      <SplitterPanel defaultSize={40}>
        <MailList />
      </SplitterPanel>
      <SplitterPanel>
        <MailContent />
      </SplitterPanel>
    </Splitter>
  </SplitterPanel>
</Splitter>
```

### 数据分析面板

```tsx
<Splitter direction="horizontal">
  <SplitterPanel defaultSize={25}>
    <FilterPanel />
  </SplitterPanel>
  <SplitterPanel>
    <Splitter direction="vertical">
      <SplitterPanel defaultSize={60}>
        <Chart />
      </SplitterPanel>
      <SplitterPanel>
        <DataTable />
      </SplitterPanel>
    </Splitter>
  </SplitterPanel>
</Splitter>
```

## API

### Splitter Props

| 属性         | 类型                                                   | 默认值         | 描述                 |
| ------------ | ------------------------------------------------------ | -------------- | -------------------- |
| direction    | `"horizontal"` \| `"vertical"`                         | `"horizontal"` | 分割方向             |
| gutterSize   | `number`                                               | `4`            | 分割条大小（像素）   |
| gutterRender | `(index: number, direction: SplitterDirection) => JSX` | -              | 自定义分割条渲染函数 |
| onResizeEnd  | `(sizes: number[]) => void`                            | -              | 面板尺寸变化时的回调 |
| className    | `string`                                               | -              | 自定义类名           |
| style        | `React.CSSProperties`                                  | -              | 自定义样式           |

### SplitterPanel Props

| 属性        | 类型                  | 默认值  | 描述                     |
| ----------- | --------------------- | ------- | ------------------------ |
| minSize     | `number` \| `string`  | -       | 最小尺寸（像素或百分比） |
| maxSize     | `number` \| `string`  | -       | 最大尺寸（像素或百分比） |
| defaultSize | `number`              | -       | 初始尺寸（百分比）       |
| collapsible | `boolean`             | `false` | 是否可折叠               |
| className   | `string`              | -       | 自定义类名               |
| style       | `React.CSSProperties` | -       | 自定义样式               |

## 最佳实践

### 1. 设置容器高度

Splitter 需要一个明确的高度才能正常工作：

```tsx
// ✅ 正确
<div style={{height: "500px"}}>
  <Splitter>...</Splitter>
</div>

// ❌ 错误（没有高度）
<Splitter>...</Splitter>
```

### 2. 合理的最小尺寸

为面板设置合理的最小尺寸，避免内容被压缩得太小：

```tsx
<SplitterPanel minSize={200}>{/* 内容至少需要 200px */}</SplitterPanel>
```

### 3. 控制嵌套深度

虽然支持任意深度的嵌套，但建议不要超过 3 层：

```tsx
// ✅ 推荐：2-3 层嵌套
<Splitter>
  <SplitterPanel>...</SplitterPanel>
  <SplitterPanel>
    <Splitter>
      <SplitterPanel>...</SplitterPanel>
      <SplitterPanel>...</SplitterPanel>
    </Splitter>
  </SplitterPanel>
</Splitter>

// ⚠️ 不推荐：过深的嵌套
<Splitter>
  <SplitterPanel>
    <Splitter>
      <SplitterPanel>
        <Splitter>
          <SplitterPanel>...</SplitterPanel>
          <SplitterPanel>...</SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  </SplitterPanel>
</Splitter>
```

### 4. 响应式设计

根据屏幕大小动态调整布局方向：

```tsx
const isMobile = useMediaQuery("(max-width: 768px)");

<Splitter direction={isMobile ? "vertical" : "horizontal"}>
  {/* 手机上垂直排列，桌面上水平排列 */}
</Splitter>;
```

### 5. 性能优化

对于复杂的面板内容，使用 React.memo 优化渲染：

```tsx
const HeavyPanel = React.memo(() => {
  // 复杂的面板内容
});

<Splitter>
  <SplitterPanel>
    <HeavyPanel />
  </SplitterPanel>
</Splitter>;
```

## 注意事项

1. **容器高度**：Splitter 必须有明确的高度（通过父容器或 style 设置）
2. **面板数量**：至少需要 2 个 SplitterPanel 子元素
3. **拖拽范围**：每个面板最小保留 10% 的空间，防止完全隐藏
4. **浏览器兼容**：支持所有现代浏览器（Chrome、Firefox、Safari、Edge）
5. **触摸设备**：目前主要针对鼠标操作优化，触摸设备支持有限

## 未来计划

- [ ] 支持触摸设备拖拽
- [ ] 添加面板折叠功能
- [ ] 支持键盘快捷键
- [ ] 添加动画效果选项
- [ ] 支持固定尺寸面板（不参与拖拽）

## License

MIT

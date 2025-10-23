# @cloudstack-design/tooltip

一个基于 Floating UI 的强大、灵活的 Tooltip（文字提示）组件，支持多种位置、颜色、大小和交互方式。

## 特性

- ✨ 基于 [@floating-ui/react](https://floating-ui.com/) 构建，提供智能定位
- 🎨 支持多种颜色主题（default, primary, success, warning, danger）
- 📏 三种尺寸可选（sm, md, lg）
- 🧭 12 种位置选项（top, bottom, left, right 及其变体）
- ⚡ 支持延迟显示
- 🎯 支持受控和非受控模式
- ♿ 完善的可访问性支持
- 🎭 支持自定义样式和复杂内容
- 🎪 可选箭头指示器

## 安装

```sh
yarn add @cloudstack-design/tooltip
# or
npm i @cloudstack-design/tooltip
# or
pnpm add @cloudstack-design/tooltip
```

## 基础使用

```tsx
import {Tooltip} from "@cloudstack-design/tooltip";

function App() {
  return (
    <Tooltip content="这是一个提示信息">
      <button>悬停查看提示</button>
    </Tooltip>
  );
}
```

## API

### Tooltip Props

| 属性           | 类型                                                           | 默认值      | 描述                              |
| -------------- | -------------------------------------------------------------- | ----------- | --------------------------------- |
| `children`     | `ReactElement`                                                 | -           | 触发 tooltip 的元素               |
| `content`      | `ReactNode`                                                    | -           | Tooltip 的内容                    |
| `placement`    | `Placement`                                                    | `"top"`     | Tooltip 的位置                    |
| `color`        | `"default" \| "primary" \| "success" \| "warning" \| "danger"` | `"default"` | Tooltip 的颜色主题                |
| `size`         | `"sm" \| "md" \| "lg"`                                         | `"md"`      | Tooltip 的大小                    |
| `showArrow`    | `boolean`                                                      | `true`      | 是否显示箭头                      |
| `delay`        | `number \| {open?: number; close?: number}`                    | `0`         | 延迟显示时间（毫秒）              |
| `isDisabled`   | `boolean`                                                      | `false`     | 是否禁用 tooltip                  |
| `offset`       | `number`                                                       | `8`         | 偏移距离                          |
| `defaultOpen`  | `boolean`                                                      | `false`     | 是否默认显示                      |
| `isOpen`       | `boolean`                                                      | -           | 受控模式：是否显示                |
| `onOpenChange` | `(isOpen: boolean) => void`                                    | -           | 受控模式：显示状态改变时的回调    |
| `className`    | `string`                                                       | -           | 自定义类名（应用到 tooltip 内容） |

### Placement 选项

- `top`, `top-start`, `top-end`
- `bottom`, `bottom-start`, `bottom-end`
- `left`, `left-start`, `left-end`
- `right`, `right-start`, `right-end`

## 示例

### 不同位置

```tsx
<Tooltip content="顶部提示" placement="top">
  <button>Top</button>
</Tooltip>

<Tooltip content="右侧提示" placement="right">
  <button>Right</button>
</Tooltip>

<Tooltip content="底部提示" placement="bottom">
  <button>Bottom</button>
</Tooltip>

<Tooltip content="左侧提示" placement="left">
  <button>Left</button>
</Tooltip>
```

### 不同颜色

```tsx
<Tooltip content="默认颜色" color="default">
  <button>Default</button>
</Tooltip>

<Tooltip content="主要颜色" color="primary">
  <button>Primary</button>
</Tooltip>

<Tooltip content="成功颜色" color="success">
  <button>Success</button>
</Tooltip>

<Tooltip content="警告颜色" color="warning">
  <button>Warning</button>
</Tooltip>

<Tooltip content="危险颜色" color="danger">
  <button>Danger</button>
</Tooltip>
```

### 不同大小

```tsx
<Tooltip content="小号提示" size="sm">
  <button>Small</button>
</Tooltip>

<Tooltip content="中号提示" size="md">
  <button>Medium</button>
</Tooltip>

<Tooltip content="大号提示" size="lg">
  <button>Large</button>
</Tooltip>
```

### 无箭头

```tsx
<Tooltip content="没有箭头的提示" showArrow={false}>
  <button>无箭头</button>
</Tooltip>
```

### 延迟显示

```tsx
<Tooltip content="延迟 500ms 显示" delay={500}>
  <button>延迟显示</button>
</Tooltip>

<Tooltip content="自定义开关延迟" delay={{open: 500, close: 200}}>
  <button>自定义延迟</button>
</Tooltip>
```

### 禁用状态

```tsx
<Tooltip content="这个提示不会显示" isDisabled>
  <button disabled>禁用的按钮</button>
</Tooltip>
```

### 受控模式

```tsx
function ControlledTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Tooltip content="受控的 Tooltip" isOpen={isOpen} onOpenChange={setIsOpen}>
        <button>受控 Tooltip</button>
      </Tooltip>

      <button onClick={() => setIsOpen(!isOpen)}>切换显示</button>
    </div>
  );
}
```

### 复杂内容

```tsx
<Tooltip
  content={
    <div>
      <div className="font-bold">提示标题</div>
      <div className="text-xs">这里是详细的描述信息</div>
    </div>
  }
>
  <button>复杂内容</button>
</Tooltip>
```

### 自定义样式

```tsx
<Tooltip content="自定义样式的提示" className="!bg-purple-600 !text-yellow-300 font-bold">
  <button>自定义样式</button>
</Tooltip>
```

## 技术细节

本组件使用 [Floating UI](https://floating-ui.com/) 实现：

- **自动定位**：智能调整位置以避免溢出视口
- **碰撞检测**：使用 `flip` 中间件自动翻转到合适的位置
- **边界保护**：使用 `shift` 中间件确保 tooltip 始终可见
- **箭头定位**：自动计算并定位箭头指示器
- **自动更新**：当触发元素移动或滚动时自动更新位置

## Contribution

Yes please! See the
[contributing guidelines](https://github.com/cloudstack-tech/cloudstack-design/blob/master/CONTRIBUTING.md)
for details.

## License

This project is licensed under the terms of the
[MIT license](https://github.com/cloudstack-tech/cloudstack-design/blob/master/LICENSE).

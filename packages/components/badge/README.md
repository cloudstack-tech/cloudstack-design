# @cloudstack-design/badge

用于展示状态、标签或数字的徽章组件。

> This is an internal utility, not intended for public usage.

## 特性

- 🎨 **多种颜色** - 支持 7 种颜色主题（default, primary, secondary, success, warning, danger, info）
- 🎯 **多种变体** - 支持 solid、outline、flat 和 dot 四种样式
- 📐 **灵活尺寸** - 提供 small、medium、large 三种尺寸
- 🔘 **圆角控制** - 支持 none、sm、md、lg、full 五种圆角样式
- ♿ **无障碍** - 完整的键盘导航和屏幕阅读器支持
- 🎭 **自定义样式** - 支持通过 className 自定义样式

## 安装

```sh
yarn add @cloudstack-design/badge
# or
npm i @cloudstack-design/badge
# or
pnpm add @cloudstack-design/badge
```

## 使用

### 基础用法

```tsx
import {Badge} from "@cloudstack-design/badge";

export default function App() {
  return (
    <div>
      <Badge>Default</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="success">Success</Badge>
    </div>
  );
}
```

### 不同变体

```tsx
<Badge variant="solid" color="primary">Solid</Badge>
<Badge variant="outline" color="primary">Outline</Badge>
<Badge variant="flat" color="primary">Flat</Badge>
<Badge variant="dot" color="primary" />
```

### 不同尺寸

```tsx
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

### 数字徽章

```tsx
<div className="relative inline-flex">
  <button>消息</button>
  <Badge className="absolute -top-2 -right-2" color="danger" size="sm" radius="full">
    99+
  </Badge>
</div>
```

### 状态指示器

```tsx
<div className="flex items-center gap-2">
  <Badge variant="dot" color="success" />
  <span>在线</span>
</div>
```

### 圆角样式

```tsx
<Badge radius="none">None</Badge>
<Badge radius="sm">Small</Badge>
<Badge radius="md">Medium</Badge>
<Badge radius="lg">Large</Badge>
<Badge radius="full">Full</Badge>
```

### 禁用状态

```tsx
<Badge isDisabled color="primary">
  Disabled
</Badge>
```

### 自定义样式

```tsx
<Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
  渐变徽章
</Badge>
```

## API

### Badge Props

| 属性         | 类型                                                                                    | 默认值      | 描述             |
| ------------ | --------------------------------------------------------------------------------------- | ----------- | ---------------- |
| `variant`    | `"solid" \| "outline" \| "flat" \| "dot"`                                               | `"solid"`   | 徽章变体         |
| `color`      | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "danger" \| "info"` | `"default"` | 徽章颜色         |
| `size`       | `"sm" \| "md" \| "lg"`                                                                  | `"md"`      | 徽章尺寸         |
| `radius`     | `"none" \| "sm" \| "md" \| "lg" \| "full"`                                              | `"md"`      | 圆角大小         |
| `isDisabled` | `boolean`                                                                               | `false`     | 是否禁用         |
| `className`  | `string`                                                                                | -           | 自定义类名       |
| `children`   | `ReactNode`                                                                             | -           | 徽章内容         |
| `as`         | `ElementType`                                                                           | `"span"`    | 渲染的 HTML 元素 |

## Contribution

Yes please! See the
[contributing guidelines](https://github.com/cloudstack-tech/cloudstack-design/blob/master/CONTRIBUTING.md)
for details.

## License

This project is licensed under the terms of the
[MIT license](https://github.com/cloudstack-tech/cloudstack-design/blob/master/LICENSE).

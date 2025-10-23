# @cloudstack-design/card

通用卡片容器组件，用于展示内容和信息。

> This is an internal utility, not intended for public usage.

## 特性

- 🎨 **多种变体** - 支持 cube、flat、bordered、shadow 四种样式
- 📝 **可选标题** - 支持带标题或无标题两种模式
- 🔄 **可折叠** - 支持折叠/展开功能，节省页面空间
- 🎯 **悬停效果** - 可配置悬停时的阴影效果
- 🎭 **自定义样式** - 支持通过 classNames 自定义各个部分的样式
- ♿ **无障碍** - 完整的键盘导航和屏幕阅读器支持
- 🔧 **灵活组合** - 支持嵌套使用和复杂布局

## 安装

```sh
yarn add @cloudstack-design/card
# or
npm i @cloudstack-design/card
# or
pnpm add @cloudstack-design/card
```

## 使用

### 基础用法

```tsx
import {Card} from "@cloudstack-design/card";

export default function App() {
  return (
    <div>
      {/* 简单卡片 */}
      <Card>卡片内容</Card>

      {/* 带标题的卡片 */}
      <Card title="卡片标题">卡片内容</Card>
    </div>
  );
}
```

### 不同变体

```tsx
{
  /* Cube 变体（默认） - 带边框和阴影 */
}
<Card variant="cube" title="Cube Card">
  标准卡片样式
</Card>;

{
  /* Flat 变体 - 扁平化背景色 */
}
<Card variant="flat" title="Flat Card">
  扁平化卡片
</Card>;

{
  /* Bordered 变体 - 仅边框无阴影 */
}
<Card variant="bordered" title="Bordered Card">
  边框卡片
</Card>;

{
  /* Shadow 变体 - 无边框带阴影 */
}
<Card variant="shadow" title="Shadow Card">
  阴影卡片
</Card>;
```

### 可折叠卡片

```tsx
{
  /* 基础可折叠 */
}
<Card title="可折叠卡片" collapsible>
  点击标题区域可以折叠/展开内容
</Card>;

{
  /* 默认折叠状态 */
}
<Card title="默认折叠" collapsible defaultCollapsed>
  默认处于折叠状态
</Card>;

{
  /* 监听折叠状态变化 */
}
<Card
  title="监听状态"
  collapsible
  onCollapseChange={(collapsed) => console.log("折叠状态:", collapsed)}
>
  内容
</Card>;
```

### 悬停效果

```tsx
{
  /* 启用悬停效果（默认） */
}
<Card title="可悬停" hoverable={true}>
  鼠标悬停时显示阴影
</Card>;

{
  /* 禁用悬停效果 */
}
<Card title="不可悬停" hoverable={false}>
  无悬停效果
</Card>;
```

### 自定义样式

```tsx
{
  /* 自定义根元素样式 */
}
<Card
  title="自定义边框"
  classNames={{
    base: "border-2 border-blue-500",
  }}
>
  自定义边框颜色
</Card>;

{
  /* 自定义标题样式 */
}
<Card
  title="自定义标题"
  classNames={{
    title: "text-lg font-bold text-purple-600",
  }}
>
  自定义标题样式
</Card>;

{
  /* 自定义多个部分 */
}
<Card
  title="完全自定义"
  classNames={{
    base: "shadow-xl",
    header: "bg-gradient-to-r from-blue-500 to-purple-500",
    title: "text-white",
    body: "bg-gray-50",
  }}
>
  完全自定义的卡片
</Card>;
```

### 复杂内容示例

```tsx
{
  /* 用户信息卡片 */
}
<Card title="用户详情" variant="shadow">
  <div className="space-y-4">
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-blue-500" />
      <div>
        <h3 className="font-semibold">张三</h3>
        <p className="text-sm text-gray-600">前端工程师</p>
      </div>
    </div>
    {/* 更多内容... */}
  </div>
</Card>;

{
  /* 统计卡片 */
}
<Card variant="flat" hoverable>
  <div className="text-center">
    <div className="text-3xl font-bold text-blue-600">1,234</div>
    <div className="text-sm text-gray-600">总用户数</div>
  </div>
</Card>;
```

### 嵌套卡片

```tsx
<Card title="外层卡片" variant="shadow">
  <div className="space-y-4">
    <p>外层内容</p>
    <Card title="内层卡片 1" variant="bordered">
      嵌套卡片内容 1
    </Card>
    <Card title="内层卡片 2" variant="flat">
      嵌套卡片内容 2
    </Card>
  </div>
</Card>
```

## API

### Card Props

| 属性               | 类型                                         | 默认值   | 描述             |
| ------------------ | -------------------------------------------- | -------- | ---------------- |
| `variant`          | `"cube" \| "flat" \| "bordered" \| "shadow"` | `"cube"` | 卡片变体         |
| `title`            | `ReactNode`                                  | -        | 卡片标题         |
| `hoverable`        | `boolean`                                    | `true`   | 是否启用悬停效果 |
| `collapsible`      | `boolean`                                    | `false`  | 是否可折叠       |
| `defaultCollapsed` | `boolean`                                    | `false`  | 默认折叠状态     |
| `onCollapseChange` | `(collapsed: boolean) => void`               | -        | 折叠状态变化回调 |
| `classNames`       | `CardSlots`                                  | -        | 自定义各部分类名 |
| `className`        | `string`                                     | -        | 根元素自定义类名 |
| `children`         | `ReactNode`                                  | -        | 卡片内容         |
| `fullWidth`        | `boolean`                                    | `false`  | 是否占满容器宽度 |
| `isDisabled`       | `boolean`                                    | `false`  | 是否禁用         |
| `as`               | `ElementType`                                | `"div"`  | 渲染的 HTML 元素 |

### CardSlots

卡片组件支持以下插槽的自定义样式：

- `base` - 根容器
- `header` - 头部区域（包含标题和折叠图标）
- `title` - 标题文本
- `body` - 内容区域
- `collapseIcon` - 折叠图标

## 最佳实践

### 1. 使用合适的变体

- **Cube**: 适合大多数场景，有明确的边界感
- **Flat**: 适合信息密集型布局，视觉层次较弱
- **Bordered**: 适合需要轻量边界的场景
- **Shadow**: 适合强调重点内容

### 2. 合理使用折叠功能

```tsx
{
  /* 适合长内容 */
}
<Card title="详细信息" collapsible defaultCollapsed>
  {/* 大量内容 */}
</Card>;

{
  /* 适合可选信息 */
}
<Card title="高级选项" collapsible>
  {/* 高级配置项 */}
</Card>;
```

### 3. 响应式布局

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card title="卡片 1">内容 1</Card>
  <Card title="卡片 2">内容 2</Card>
  <Card title="卡片 3">内容 3</Card>
</div>
```

## Contribution

Yes please! See the
[contributing guidelines](https://github.com/cloudstack-tech/cloudstack-design/blob/master/CONTRIBUTING.md)
for details.

## License

This project is licensed under the terms of the
[MIT license](https://github.com/cloudstack-tech/cloudstack-design/blob/master/LICENSE).

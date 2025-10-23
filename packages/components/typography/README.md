# @cloudstack-design/typography

文本排版组件，用于展示和格式化文本内容。

> This is an internal utility, not intended for public usage.

## 特性

- 📝 **多种组件** - 提供 Typography、Text、Title 三种组件
- 🎨 **丰富样式** - 支持多种颜色、字重、尺寸
- 📏 **灵活尺寸** - 从 xs 到 3xl 多种尺寸选择
- 🎯 **语义化** - Title 组件自动映射到 h1-h6 标签
- ✂️ **文本截断** - 支持单行文本截断
- 🎭 **文本装饰** - 支持斜体、下划线、删除线
- ♿ **无障碍** - 使用语义化的 HTML 标签

## 安装

```sh
yarn add @cloudstack-design/typography
# or
npm i @cloudstack-design/typography
# or
pnpm add @cloudstack-design/typography
```

## 使用

### 基础用法

```tsx
import {Typography, Text, Title} from "@cloudstack-design/typography";

export default function App() {
  return (
    <div>
      <Typography>基础文本</Typography>
      <Text>Text 组件</Text>
      <Title level={1}>标题组件</Title>
    </div>
  );
}
```

### Text 组件 - 不同尺寸

```tsx
<Text size="xs">超小文本</Text>
<Text size="sm">小文本</Text>
<Text size="base">基础文本</Text>
<Text size="md">中等文本</Text>
<Text size="lg">大文本</Text>
<Text size="xl">超大文本</Text>
```

### Title 组件 - 标题等级

```tsx
<Title level={1}>一级标题</Title>
<Title level={2}>二级标题</Title>
<Title level={3}>三级标题</Title>
<Title level={4}>四级标题</Title>
<Title level={5}>五级标题</Title>
<Title level={6}>六级标题</Title>
```

### 不同颜色

```tsx
<Text color="default">默认颜色</Text>
<Text color="primary">主要颜色</Text>
<Text color="secondary">次要颜色</Text>
<Text color="success">成功颜色</Text>
<Text color="warning">警告颜色</Text>
<Text color="danger">危险颜色</Text>
<Text color="muted">弱化颜色</Text>
```

### 不同字重

```tsx
<Text weight="light">轻字重</Text>
<Text weight="normal">普通字重</Text>
<Text weight="medium">中等字重</Text>
<Text weight="semibold">半粗字重</Text>
<Text weight="bold">粗体字重</Text>
```

### 文本样式

```tsx
<Text italic>斜体文本</Text>
<Text underline>下划线文本</Text>
<Text strikethrough>删除线文本</Text>
<Text italic underline>斜体+下划线</Text>
```

### 文本对齐

```tsx
<Text align="left">左对齐</Text>
<Text align="center">居中对齐</Text>
<Text align="right">右对齐</Text>
<Text align="justify">两端对齐</Text>
```

### 文本转换

```tsx
<Text transform="uppercase">uppercase text</Text>
<Text transform="lowercase">LOWERCASE TEXT</Text>
<Text transform="capitalize">capitalize text</Text>
```

### 文本截断

```tsx
<Text truncate>这是一段很长的文本会被截断...</Text>
```

### 行高

```tsx
<Text lineHeight="tight">紧密行高</Text>
<Text lineHeight="normal">正常行高</Text>
<Text lineHeight="relaxed">宽松行高</Text>
```

### 组合使用

```tsx
<Title level={1} color="primary">产品介绍</Title>

<Text size="lg" color="muted">
  这是副标题
</Text>

<Text>
  <Text weight="bold" color="primary">重点：</Text>
  这是重要内容
</Text>

<Text strikethrough color="muted">原价：¥999</Text>
<Text size="xl" color="danger" weight="bold">现价：¥699</Text>
```

## API

### Typography Props

| 属性            | 类型                                                                                     | 默认值      | 描述       |
| --------------- | ---------------------------------------------------------------------------------------- | ----------- | ---------- |
| `as`            | `ElementType`                                                                            | `"div"`     | 渲染的标签 |
| `size`          | `"xs" \| "sm" \| "base" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl"`                       | `"base"`    | 文本尺寸   |
| `weight`        | `"light" \| "normal" \| "medium" \| "semibold" \| "bold"`                                | `"normal"`  | 字体字重   |
| `color`         | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "danger" \| "muted"` | `"default"` | 文本颜色   |
| `align`         | `"left" \| "center" \| "right" \| "justify"`                                             | -           | 文本对齐   |
| `italic`        | `boolean`                                                                                | `false`     | 是否斜体   |
| `underline`     | `boolean`                                                                                | `false`     | 是否下划线 |
| `strikethrough` | `boolean`                                                                                | `false`     | 是否删除线 |
| `truncate`      | `boolean`                                                                                | `false`     | 是否截断   |
| `transform`     | `"uppercase" \| "lowercase" \| "capitalize" \| "normal"`                                 | -           | 文本转换   |
| `lineHeight`    | `"none" \| "tight" \| "snug" \| "normal" \| "relaxed" \| "loose"`                        | -           | 行高       |
| `className`     | `string`                                                                                 | -           | 自定义类名 |

### Text Props

继承 `Typography` 的所有属性，但 `as` 固定为 `"span"`。

### Title Props

| 属性     | 类型                         | 默认值   | 描述                       |
| -------- | ---------------------------- | -------- | -------------------------- |
| `level`  | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1`      | 标题等级，自动映射到 h1-h6 |
| `weight` | `string`                     | `"bold"` | 字体字重，默认为粗体       |

其他属性继承自 `Typography`（除了 `as` 和 `size`，由 `level` 决定）。

## 最佳实践

### 1. 使用语义化标签

```tsx
{/* 好的做法 */}
<Title level={1}>页面标题</Title>
<Title level={2}>章节标题</Title>
<Text as="p">段落文本</Text>

{/* 避免这样 */}
<Text size="3xl" weight="bold">页面标题</Text>
```

### 2. 合理使用颜色

```tsx
{
  /* 强调重点 */
}
<Text color="primary">重要信息</Text>;

{
  /* 警告提示 */
}
<Text color="warning">警告内容</Text>;

{
  /* 次要信息 */
}
<Text color="muted">辅助说明</Text>;
```

### 3. 保持一致性

```tsx
{/* 在整个应用中保持统一的标题层级 */}
<Title level={1}>页面主标题</Title>
<Title level={2}>区块标题</Title>
<Title level={3}>小节标题</Title>
```

## Contribution

Yes please! See the
[contributing guidelines](https://github.com/cloudstack-tech/cloudstack-design/blob/master/CONTRIBUTING.md)
for details.

## License

This project is licensed under the terms of the
[MIT license](https://github.com/cloudstack-tech/cloudstack-design/blob/master/LICENSE).

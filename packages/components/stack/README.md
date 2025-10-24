# @cloudstack-design/stack

用于快速创建单方向堆叠布局的组件。Stack 基于 Flex 组件实现，但提供了更简洁的 API 和额外的功能。

## 为什么需要 Stack？

虽然我们已经有了强大的 Flex 组件，但在日常开发中，大多数情况下我们只需要简单的单方向堆叠布局。Stack 组件针对这个常见场景进行了优化：

### Stack vs Flex

| 特性           | Stack                                      | Flex                                          |
| -------------- | ------------------------------------------ | --------------------------------------------- |
| **API 复杂度** | 简单，专注堆叠                             | 灵活，更多控制选项                            |
| **方向**       | `vertical` / `horizontal`                  | `row` / `col` / `row-reverse` / `col-reverse` |
| **间距**       | 预设值 `small` / `medium` / `large` 或数字 | 仅数字                                        |
| **分隔符**     | ✅ 内置支持                                | ❌ 需要手动实现                               |
| **语义化**     | HStack / VStack 让代码意图更清晰           | 需要通过 direction 属性判断                   |
| **适用场景**   | 简单的单方向堆叠                           | 复杂的 flexbox 布局                           |

### Stack vs Space

| 特性         | Stack                        | Space                    |
| ------------ | ---------------------------- | ------------------------ |
| **元素类型** | 块级元素                     | 内联元素                 |
| **包裹元素** | 不添加额外包裹               | 为每个子元素添加包裹元素 |
| **对齐控制** | 支持 align 和 justify        | 仅支持 align             |
| **分隔符**   | ✅ 支持                      | ✅ 支持                  |
| **适用场景** | 卡片列表、表单布局、页面区块 | 按钮组、标签组、内联文本 |

### Stack vs Grid

| 特性         | Stack              | Grid                   |
| ------------ | ------------------ | ---------------------- |
| **维度**     | 一维（单方向）     | 二维（行和列）         |
| **复杂度**   | 简单               | 复杂                   |
| **适用场景** | 列表、表单、导航栏 | 卡片网格、画廊、仪表板 |

## 核心优势

1. **🎯 简洁的 API**：专注于堆叠场景，去除不必要的选项
2. **📐 预设间距**：small/medium/large 符合设计规范，无需每次计算
3. **🔧 分隔符支持**：内置分隔符功能，无需手动在元素间插入
4. **💬 语义化**：HStack 和 VStack 让代码意图一目了然
5. **♻️ 复用 Flex**：基于 Flex 实现，无需维护独立的布局系统

## 安装

```sh
pnpm add @cloudstack-design/stack
# or
yarn add @cloudstack-design/stack
# or
npm i @cloudstack-design/stack
```

## 使用

### 基础用法

```tsx
import {Stack, HStack, VStack} from "@cloudstack-design/stack";

// 垂直堆叠（默认）
<Stack spacing="medium">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</Stack>

// 水平堆叠 - 使用 HStack
<HStack spacing="small">
  <Button>Cancel</Button>
  <Button>Confirm</Button>
</HStack>

// 垂直堆叠 - 使用 VStack
<VStack spacing="large">
  <Header />
  <Content />
  <Footer />
</VStack>
```

### 多种使用方式

Stack 提供了多种使用方式，可以根据你的偏好选择：

```tsx
// 方式 1: 使用独立组件
<HStack spacing="medium">...</HStack>
<VStack spacing="medium">...</VStack>

// 方式 2: 使用 Stack.H / Stack.V 简写
<Stack.H spacing="medium">...</Stack.H>
<Stack.V spacing="medium">...</Stack.V>

// 方式 3: 使用 Stack.Horizontal / Stack.Vertical 完整名称
<Stack.Horizontal spacing="medium">...</Stack.Horizontal>
<Stack.Vertical spacing="medium">...</Stack.Vertical>

// 方式 4: 使用 Stack + direction 属性
<Stack direction="horizontal" spacing="medium">...</Stack>
```

### 预设间距

```tsx
// small: 8px
<Stack spacing="small">...</Stack>

// medium: 16px (默认)
<Stack spacing="medium">...</Stack>

// large: 24px
<Stack spacing="large">...</Stack>

// 自定义数值（会乘以 4）
<Stack spacing={8}>...</Stack> // 32px
```

### 分隔符

```tsx
// 垂直分隔线
<Stack divider={<hr className="border-gray-200" />}>
  <div>Section 1</div>
  <div>Section 2</div>
</Stack>

// 水平分隔线
<HStack divider={<div className="w-px h-full bg-gray-200" />}>
  <div>Item 1</div>
  <div>Item 2</div>
</HStack>
```

### 对齐方式

```tsx
// 交叉轴对齐
<HStack align="center">...</HStack>
<VStack align="start">...</VStack>

// 主轴对齐
<HStack justify="between">...</HStack>
<VStack justify="center">...</VStack>
```

## API

### Props

| 属性      | 类型                                                                          | 默认值       | 描述           |
| --------- | ----------------------------------------------------------------------------- | ------------ | -------------- |
| direction | `"vertical"` \| `"horizontal"`                                                | `"vertical"` | 堆叠方向       |
| spacing   | `"small"` \| `"medium"` \| `"large"` \| `number`                              | `"medium"`   | 间距大小       |
| align     | `"start"` \| `"end"` \| `"center"` \| `"baseline"` \| `"stretch"`             | `"stretch"`  | 交叉轴对齐     |
| justify   | `"start"` \| `"end"` \| `"center"` \| `"between"` \| `"around"` \| `"evenly"` | `"start"`    | 主轴对齐       |
| wrap      | `boolean`                                                                     | `false`      | 是否换行       |
| divider   | `ReactNode`                                                                   | -            | 分隔符元素     |
| as        | `ElementType`                                                                 | `"div"`      | 自定义元素类型 |

## 实现细节

Stack 基于 Flex 组件实现，通过以下映射关系：

```tsx
// 方向映射
Stack direction="vertical"   -> Flex direction="col"
Stack direction="horizontal" -> Flex direction="row"

// 间距映射
Stack spacing="small"   -> Flex gap={2}  (8px)
Stack spacing="medium"  -> Flex gap={4}  (16px)
Stack spacing="large"   -> Flex gap={6}  (24px)
Stack spacing={n}       -> Flex gap={n}

// 其他属性直接传递给 Flex
align, justify, wrap, className, style 等
```

这种设计的好处：

- **代码复用**：不需要维护两套独立的 flexbox 系统
- **一致性**：Stack 和 Flex 的渲染结果完全一致
- **可维护性**：Flex 的改进会自动应用到 Stack

## License

MIT

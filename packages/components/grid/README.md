# @cloudstack-design/grid

强大且灵活的 CSS Grid 布局组件，支持响应式设计、列偏移、精确定位等高级功能。

> This is an internal utility, not intended for public usage.

## 特性

- ✅ 支持 1-24 列网格布局（对齐 Ant Design）
- ✅ 灵活的间距控制 (gap, gapX, gapY)
- ✅ Grid.Item 子组件支持 span 和 offset
- ✅ 支持 push 和 pull（改变列顺序）
- ✅ 支持正数和负数偏移（实验性）
- ✅ 精确的行列定位 (colStart, colEnd, rowStart, rowEnd)
- ✅ 响应式设计友好
- ✅ 完全类型安全

## 安装

```sh
yarn add @cloudstack-design/grid
# or
npm i @cloudstack-design/grid
# or
pnpm add @cloudstack-design/grid
```

## 基础用法

```tsx
import {Grid} from "@cloudstack-design/grid";

function App() {
  return (
    <Grid cols={3} gap={4}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Grid>
  );
}
```

## 使用 Grid.Item 实现列偏移

```tsx
// 类似 Ant Design 的 offset 功能
<Grid cols={12} gap={4}>
  <Grid.Item span={6} offset={3}>
    居中内容 (50% 宽度，左侧偏移 3 列)
  </Grid.Item>
</Grid>
```

## 高级功能

### 1. 列偏移 (offset)

```tsx
<Grid cols={12} gap={2}>
  <Grid.Item span={3}>正常列</Grid.Item>
  <Grid.Item span={3} offset={2}>
    跳过 2 列
  </Grid.Item>
  <Grid.Item span={3}>正常列</Grid.Item>
</Grid>
```

### 2. 负数偏移（实验性）

```tsx
// 从右侧计算偏移
<Grid cols={12} gap={2}>
  <Grid.Item span={3}>左侧</Grid.Item>
  <Grid.Item span={3} offset={-4}>
    从右侧数第 4 列开始
  </Grid.Item>
</Grid>
```

### 3. 精确定位

```tsx
<Grid cols={12} gap={2}>
  <Grid.Item colStart={1} colEnd={5}>
    占据 1-5 列
  </Grid.Item>
  <Grid.Item colStart={7} colEnd={13}>
    占据 7-13 列
  </Grid.Item>
</Grid>
```

### 4. 跨行跨列

```tsx
<Grid cols={4} rows={3} gap={4}>
  <Grid.Item span={2} rowSpan={2}>
    跨 2 列 2 行
  </Grid.Item>
  <Grid.Item>普通单元格</Grid.Item>
</Grid>
```

### 5. Push 和 Pull（改变列顺序）

```tsx
// Push: 向右推动元素
<Grid cols={12} gap={2}>
  <Grid.Item span={6} push={6}>
    左侧内容（向右推6列）
  </Grid.Item>
  <Grid.Item span={6} pull={6}>
    右侧内容（向左拉6列）
  </Grid.Item>
</Grid>

// 结果：视觉上两列位置互换，类似 Ant Design 的 push/pull 功能
```

### 6. 灵活的间距控制

```tsx
// 统一间距
<Grid cols={3} gap={4}>...</Grid>

// 不同的行列间距
<Grid cols={3} gap={[8, 2]}>...</Grid> // [行间距, 列间距]

// 使用 gapX 和 gapY (优先级更高)
<Grid cols={3} gap={4} gapX={8}>...</Grid>
```

### 7. Ant Design 24 列布局

```tsx
// 完全兼容 Ant Design 的 24 列布局系统
<Grid cols={24} gap={2}>
  <Grid.Item span={12}>50% 宽度</Grid.Item>
  <Grid.Item span={12}>50% 宽度</Grid.Item>
  <Grid.Item span={8}>33.33% 宽度</Grid.Item>
  <Grid.Item span={8}>33.33% 宽度</Grid.Item>
  <Grid.Item span={8}>33.33% 宽度</Grid.Item>
  <Grid.Item span={6} offset={6}>
    25% 宽度，居中（左侧偏移6列）
  </Grid.Item>
</Grid>
```

## Contribution

Yes please! See the
[contributing guidelines](https://github.com/cloudstack-tech/cloudstack-design/blob/master/CONTRIBUTING.md)
for details.

## License

This project is licensed under the terms of the
[MIT license](https://github.com/cloudstack-tech/cloudstack-design/blob/master/LICENSE).

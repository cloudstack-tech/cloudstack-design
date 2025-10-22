# @cloudstack-design/flex

弹性布局容器，用于快速实现各种对齐和布局需求。

## 特性

- 🎯 灵活的对齐方式：支持主轴和交叉轴的各种对齐选项
- 📐 多种布局方向：支持行、列及其反向布局
- 🔄 换行控制：支持换行、不换行及反向换行
- 📏 间距控制：内置间距系统
- 🎨 自定义元素：支持渲染为任意 HTML 元素
- 💪 TypeScript 支持：完整的类型定义

## 安装

```sh
pnpm add @cloudstack-design/flex
# or
yarn add @cloudstack-design/flex
# or
npm i @cloudstack-design/flex
```

## 使用

```tsx
import {Flex} from "@cloudstack-design/flex";

export default function App() {
  return (
    <Flex justify="center" align="center" gap={4}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Flex>
  );
}
```

## API

### Props

| 属性      | 类型                                                                          | 默认值     | 描述               |
| --------- | ----------------------------------------------------------------------------- | ---------- | ------------------ |
| direction | `"row"` \| `"row-reverse"` \| `"col"` \| `"col-reverse"`                      | `"row"`    | flex 方向          |
| justify   | `"start"` \| `"end"` \| `"center"` \| `"between"` \| `"around"` \| `"evenly"` | `"start"`  | 主轴对齐方式       |
| align     | `"start"` \| `"end"` \| `"center"` \| `"baseline"` \| `"stretch"`             | `"start"`  | 交叉轴对齐方式     |
| wrap      | `"nowrap"` \| `"wrap"` \| `"wrap-reverse"`                                    | `"nowrap"` | 是否换行           |
| gap       | `number`                                                                      | `0`        | 间距（会乘以 4）   |
| inline    | `boolean`                                                                     | `false`    | 是否为 inline-flex |
| as        | `React.ElementType`                                                           | `"div"`    | 自定义元素类型     |
| className | `string`                                                                      | -          | 自定义类名         |
| style     | `React.CSSProperties`                                                         | -          | 自定义样式         |

## 与 Space 组件的区别

- **Space**：为内联元素提供间距，会为每个子元素添加包裹元素
- **Flex**：为块级元素提供间距和布局能力，不添加额外包裹元素，提供更多的布局控制

## License

MIT

# @cloudstack-design/affix

将页面元素钉在可视范围，可用于导航栏等场景。

## 特性

- 🎯 支持顶部和底部固定
- 🎨 多种样式变体（默认、阴影、边框、高级）
- 📦 支持自定义偏移量
- 🔄 支持状态变化回调
- 🎭 支持自定义滚动容器
- 💫 平滑的过渡动画

## 安装

```sh
yarn add @cloudstack-design/affix
# or
npm i @cloudstack-design/affix
# or
pnpm add @cloudstack-design/affix
```

## 使用示例

### 基础用法

```tsx
import {Affix} from "@cloudstack-design/affix";

export default function App() {
  return (
    <Affix offsetTop={20}>
      <div>固定在顶部的内容</div>
    </Affix>
  );
}
```

### 带阴影效果

```tsx
<Affix offsetTop={20} variant="shadow">
  <nav>导航栏</nav>
</Affix>
```

### 固定在底部

```tsx
<Affix offsetBottom={20} position="bottom" variant="elevated">
  <div>固定在底部的内容</div>
</Affix>
```

### 状态回调

```tsx
<Affix
  offsetTop={50}
  onChange={(affixed) => {
    console.log("固定状态:", affixed);
  }}
>
  <div>内容</div>
</Affix>
```

### 自定义滚动容器

```tsx
<Affix offsetTop={20} target={() => document.getElementById("container")}>
  <div>内容</div>
</Affix>
```

## API

### Affix Props

| 属性         | 类型                                                | 默认值         | 描述                             |
| ------------ | --------------------------------------------------- | -------------- | -------------------------------- |
| offsetTop    | `number`                                            | -              | 距离窗口顶部达到指定偏移量后触发 |
| offsetBottom | `number`                                            | -              | 距离窗口底部达到指定偏移量后触发 |
| target       | `() => Window \| HTMLElement \| null`               | `() => window` | 设置需要监听其滚动事件的元素     |
| onChange     | `(affixed: boolean) => void`                        | -              | 固定状态改变时触发的回调函数     |
| variant      | `"default" \| "shadow" \| "bordered" \| "elevated"` | `"default"`    | 固定时的样式变体                 |
| position     | `"top" \| "bottom"`                                 | `"top"`        | 固定位置                         |
| zIndex       | `number`                                            | `100`          | z-index 层级                     |

## 注意事项

- `offsetTop` 和 `offsetBottom` 只能同时设置一个
- 使用自定义容器时，需要确保容器具有滚动能力

## Contribution

Yes please! See the
[contributing guidelines](https://github.com/cloudstack-tech/cloudstack-design/blob/master/CONTRIBUTING.md)
for details.

## License

This project is licensed under the terms of the
[MIT license](https://github.com/cloudstack-tech/cloudstack-design/blob/master/LICENSE).

# @cloudstack-design/divider

一个用于在内容之间创建视觉分隔的 Divider（分割线）组件。

## 安装

```bash
pnpm add @cloudstack-design/divider
```

## 导入

```tsx
import {Divider} from "@cloudstack-design/divider";
```

## 使用

### 基础用法

```tsx
<div>
  <p>上方内容</p>
  <Divider />
  <p>下方内容</p>
</div>
```

### 垂直分割线

```tsx
<div className="flex items-center">
  <span>左侧</span>
  <Divider orientation="vertical" className="mx-4 h-6" />
  <span>右侧</span>
</div>
```

### 自定义粗细

```tsx
<Divider thickness={2} />
<Divider thickness={4} />
```

### 不同颜色

```tsx
<Divider color="primary" />
<Divider color="success" />
<Divider color="danger" />
```

### 在按钮组中使用

```tsx
<div className="flex items-center">
  <button>按钮 1</button>
  <Divider orientation="vertical" className="mx-2 h-6" />
  <button>按钮 2</button>
  <Divider orientation="vertical" className="mx-2 h-6" />
  <button>按钮 3</button>
</div>
```

## API

### Divider Props

| 属性        | 类型                                                                          | 默认值         | 描述                 |
| ----------- | ----------------------------------------------------------------------------- | -------------- | -------------------- |
| orientation | `"horizontal" \| "vertical"`                                                  | `"horizontal"` | 分割线的方向         |
| color       | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "danger"` | `"default"`    | 分割线的颜色         |
| thickness   | `number`                                                                      | `1`            | 分割线的粗细（像素） |
| className   | `string`                                                                      | -              | 自定义类名           |
| style       | `CSSProperties`                                                               | -              | 自定义样式           |
| as          | `ElementType`                                                                 | `"div"`        | 渲染为的元素类型     |

## 示例

查看更多示例，请参考 `examples/divider.example.tsx` 文件。

## 测试

```bash
pnpm test
```

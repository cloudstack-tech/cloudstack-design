# @cloudstack-design/tabs

CloudStack Design 的 Tabs（标签页）组件。

## 安装

```bash
pnpm add @cloudstack-design/tabs
```

## 使用

```tsx
import {Tabs, Tab} from "@cloudstack-design/tabs";

function App() {
  return (
    <Tabs defaultActiveKey="1">
      <Tab key="1" tabKey="1">
        首页
      </Tab>
      <Tab key="2" tabKey="2">
        产品
      </Tab>
      <Tab key="3" tabKey="3">
        关于
      </Tab>
    </Tabs>
  );
}
```

## API

### Tabs Props

| 属性               | 类型                                 | 默认值         | 描述                         |
| ------------------ | ------------------------------------ | -------------- | ---------------------------- |
| `defaultActiveKey` | `string \| number`                   | -              | 默认激活的标签 key           |
| `value`            | `string \| number`                   | -              | 受控模式下当前激活的标签 key |
| `onTabChange`      | `(key: string \| number) => void`    | -              | 标签切换时的回调函数         |
| `variant`          | `"underlined" \| "solid" \| "light"` | `"underlined"` | 标签的变体样式               |
| `color`            | `"default" \| "primary"`             | `"primary"`    | 标签的颜色主题               |
| `animation`        | `"slide" \| "flash" \| "none"`       | `"slide"`      | 标签切换时的动画效果         |
| `size`             | `"sm" \| "md" \| "lg"`               | `"md"`         | 标签的尺寸                   |
| `fullWidth`        | `boolean`                            | `false`        | 是否占据全宽                 |
| `isDisabled`       | `boolean`                            | `false`        | 是否禁用所有标签             |
| `classNames`       | `object`                             | -              | 自定义各部分的类名           |

### Tab Props

| 属性         | 类型                              | 默认值  | 描述                                   |
| ------------ | --------------------------------- | ------- | -------------------------------------- |
| `tabKey`     | `string \| number`                | -       | 标签的唯一标识（必填）                 |
| `children`   | `ReactNode`                       | -       | 标签内容                               |
| `icon`       | `ReactNode`                       | -       | 标签前的图标                           |
| `isActive`   | `boolean`                         | `false` | 是否为激活状态（由 Tabs 组件自动控制） |
| `isDisabled` | `boolean`                         | `false` | 是否禁用该标签                         |
| `onClick`    | `(key: string \| number) => void` | -       | 点击事件                               |
| `className`  | `string`                          | -       | 自定义类名                             |

## 示例

### 基础用法

```tsx
<Tabs defaultActiveKey="1">
  <Tab key="1" tabKey="1">
    首页
  </Tab>
  <Tab key="2" tabKey="2">
    产品
  </Tab>
  <Tab key="3" tabKey="3">
    关于
  </Tab>
</Tabs>
```

### 带图标

```tsx
<Tabs defaultActiveKey="home">
  <Tab key="home" tabKey="home" icon={<HomeIcon />}>
    首页
  </Tab>
  <Tab key="products" tabKey="products" icon={<ProductIcon />}>
    产品
  </Tab>
  <Tab key="about" tabKey="about" icon={<InfoIcon />}>
    关于
  </Tab>
</Tabs>
```

### 不同变体

```tsx
<Tabs defaultActiveKey="1" variant="solid">
  <Tab key="1" tabKey="1">Tab 1</Tab>
  <Tab key="2" tabKey="2">Tab 2</Tab>
</Tabs>

<Tabs defaultActiveKey="1" variant="light">
  <Tab key="1" tabKey="1">Tab 1</Tab>
  <Tab key="2" tabKey="2">Tab 2</Tab>
</Tabs>

<Tabs defaultActiveKey="1" variant="underlined">
  <Tab key="1" tabKey="1">Tab 1</Tab>
  <Tab key="2" tabKey="2">Tab 2</Tab>
</Tabs>
```

### 不同动画效果

```tsx
<Tabs defaultActiveKey="1" animation="slide">
  <Tab key="1" tabKey="1">Tab 1</Tab>
  <Tab key="2" tabKey="2">Tab 2</Tab>
</Tabs>

<Tabs defaultActiveKey="1" animation="flash">
  <Tab key="1" tabKey="1">Tab 1</Tab>
  <Tab key="2" tabKey="2">Tab 2</Tab>
</Tabs>

<Tabs defaultActiveKey="1" animation="none">
  <Tab key="1" tabKey="1">Tab 1</Tab>
  <Tab key="2" tabKey="2">Tab 2</Tab>
</Tabs>
```

### 受控模式

```tsx
function ControlledTabs() {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <div>
      <Tabs value={activeKey} onTabChange={setActiveKey}>
        <Tab key="1" tabKey="1">
          Tab 1
        </Tab>
        <Tab key="2" tabKey="2">
          Tab 2
        </Tab>
        <Tab key="3" tabKey="3">
          Tab 3
        </Tab>
      </Tabs>
      <p>当前激活: {activeKey}</p>
    </div>
  );
}
```

### 全宽标签

```tsx
<Tabs defaultActiveKey="1" fullWidth>
  <Tab key="1" tabKey="1">
    Tab 1
  </Tab>
  <Tab key="2" tabKey="2">
    Tab 2
  </Tab>
  <Tab key="3" tabKey="3">
    Tab 3
  </Tab>
</Tabs>
```

### 禁用标签

```tsx
<Tabs defaultActiveKey="1">
  <Tab key="1" tabKey="1">
    Tab 1
  </Tab>
  <Tab key="2" tabKey="2" isDisabled>
    Tab 2 (禁用)
  </Tab>
  <Tab key="3" tabKey="3">
    Tab 3
  </Tab>
</Tabs>
```

## License

MIT

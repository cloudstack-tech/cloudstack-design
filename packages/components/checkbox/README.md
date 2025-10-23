# @cloudstack-design/checkbox

复选框组件，用于在一组选项中选择一个或多个值。

> This is an internal utility, not intended for public usage.

## 特性

- 🎨 **多种颜色** - 支持 6 种颜色主题
- 📏 **灵活尺寸** - 提供 sm、md、lg 三种尺寸
- ✅ **三态支持** - 支持选中、未选中和不确定状态
- 🎭 **自定义样式** - 支持通过 classNames 自定义各个部分的样式
- ♿ **无障碍** - 完整的键盘导航和屏幕阅读器支持
- 🔄 **受控/非受控** - 支持受控和非受控两种模式
- 👥 **CheckboxGroup** - 内置分组组件，支持批量操作

## 安装

```sh
yarn add @cloudstack-design/checkbox
# or
npm i @cloudstack-design/checkbox
# or
pnpm add @cloudstack-design/checkbox
```

## 使用

### 基础用法

```tsx
import {Checkbox} from "@cloudstack-design/checkbox";

export default function App() {
  return (
    <div>
      <Checkbox>未选中</Checkbox>
      <Checkbox isSelected>选中</Checkbox>
      <Checkbox isIndeterminate>不确定</Checkbox>
    </div>
  );
}
```

### 不同尺寸

```tsx
<Checkbox size="sm">Small</Checkbox>
<Checkbox size="md">Medium</Checkbox>
<Checkbox size="lg">Large</Checkbox>
```

### 不同颜色

```tsx
<Checkbox color="primary" isSelected>Primary</Checkbox>
<Checkbox color="secondary" isSelected>Secondary</Checkbox>
<Checkbox color="success" isSelected>Success</Checkbox>
<Checkbox color="warning" isSelected>Warning</Checkbox>
<Checkbox color="danger" isSelected>Danger</Checkbox>
```

### 禁用状态

```tsx
<Checkbox isDisabled>禁用未选中</Checkbox>
<Checkbox isDisabled isSelected>禁用已选中</Checkbox>
```

### 受控组件

```tsx
const [selected, setSelected] = useState(false);

<Checkbox isSelected={selected} onChange={setSelected}>
  {selected ? "已选中" : "未选中"}
</Checkbox>;
```

### 非受控组件

```tsx
<Checkbox defaultSelected>默认选中</Checkbox>
```

### CheckboxGroup

```tsx
import {CheckboxGroup} from "@cloudstack-design/checkbox";

<CheckboxGroup
  label="选择水果"
  options={[
    {label: "苹果", value: "apple"},
    {label: "香蕉", value: "banana"},
    {label: "橙子", value: "orange"},
  ]}
/>;
```

### CheckboxGroup - 受控

```tsx
const [value, setValue] = useState<string[]>(["apple"]);

<CheckboxGroup
  label="选择水果"
  value={value}
  onChange={setValue}
  options={[
    {label: "苹果", value: "apple"},
    {label: "香蕉", value: "banana"},
    {label: "橙子", value: "orange"},
  ]}
/>;
```

### CheckboxGroup - 水平布局

```tsx
<CheckboxGroup
  label="选择水果"
  orientation="horizontal"
  options={[...]}
/>
```

### 全选功能

```tsx
const options = [{label: "苹果", value: "apple"}, ...];
const [selected, setSelected] = useState<string[]>([]);

const allSelected = selected.length === options.length;
const isIndeterminate = selected.length > 0 && selected.length < options.length;

const handleSelectAll = (isSelected: boolean) => {
  setSelected(isSelected ? options.map((o) => o.value) : []);
};

<>
  <Checkbox
    isSelected={allSelected}
    isIndeterminate={isIndeterminate}
    onChange={handleSelectAll}
  >
    全选
  </Checkbox>
  <CheckboxGroup
    value={selected}
    onChange={setSelected}
    options={options}
  />
</>
```

## API

### Checkbox Props

| 属性               | 类型                                                                          | 默认值      | 描述                   |
| ------------------ | ----------------------------------------------------------------------------- | ----------- | ---------------------- |
| `isSelected`       | `boolean`                                                                     | -           | 是否选中（受控）       |
| `defaultSelected`  | `boolean`                                                                     | `false`     | 默认是否选中（非受控） |
| `isIndeterminate`  | `boolean`                                                                     | `false`     | 是否为不确定状态       |
| `isDisabled`       | `boolean`                                                                     | `false`     | 是否禁用               |
| `isRequired`       | `boolean`                                                                     | `false`     | 是否必填               |
| `isInvalid`        | `boolean`                                                                     | `false`     | 是否无效               |
| `isReadOnly`       | `boolean`                                                                     | `false`     | 是否只读               |
| `size`             | `"sm" \| "md" \| "lg"`                                                        | `"md"`      | 尺寸                   |
| `color`            | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "danger"` | `"primary"` | 颜色                   |
| `value`            | `string`                                                                      | -           | 值                     |
| `name`             | `string`                                                                      | -           | 名称                   |
| `label`            | `ReactNode`                                                                   | -           | 标签                   |
| `onChange`         | `(isSelected: boolean) => void`                                               | -           | 状态变化回调           |
| `classNames`       | `CheckboxSlots`                                                               | -           | 自定义各部分类名       |
| `disableAnimation` | `boolean`                                                                     | `false`     | 是否禁用动画           |

### CheckboxGroup Props

| 属性            | 类型                               | 默认值       | 描述                       |
| --------------- | ---------------------------------- | ------------ | -------------------------- |
| `label`         | `ReactNode`                        | -            | 组标签                     |
| `description`   | `ReactNode`                        | -            | 描述文字                   |
| `options`       | `Array<{label, value, disabled?}>` | `[]`         | 选项列表                   |
| `value`         | `T[]`                              | -            | 选中的值（受控）           |
| `defaultValue`  | `T[]`                              | `[]`         | 默认选中的值（非受控）     |
| `orientation`   | `"horizontal" \| "vertical"`       | `"vertical"` | 布局方向                   |
| `isDisabled`    | `boolean`                          | `false`      | 是否禁用整个组             |
| `isRequired`    | `boolean`                          | `false`      | 是否必填                   |
| `isInvalid`     | `boolean`                          | `false`      | 是否无效                   |
| `name`          | `string`                           | -            | 名称                       |
| `onChange`      | `(value: T[]) => void`             | -            | 值变化回调                 |
| `checkboxProps` | `Partial<CheckboxProps>`           | -            | 传递给每个 Checkbox 的属性 |
| `classNames`    | `object`                           | -            | 自定义类名                 |

### CheckboxSlots

Checkbox 组件支持以下插槽的自定义样式：

- `base` - 根容器
- `wrapper` - 复选框包装器
- `input` - 原生 input 元素
- `icon` - 图标（勾选或横线）
- `label` - 文本标签

## 最佳实践

### 1. 使用合适的状态

```tsx
{
  /* 二选一场景 */
}
<Checkbox>同意服务条款</Checkbox>;

{
  /* 全选场景 */
}
<Checkbox isSelected={allSelected} isIndeterminate={someSelected} onChange={handleSelectAll}>
  全选
</Checkbox>;
```

### 2. 表单集成

```tsx
<form>
  <CheckboxGroup
    label="选择兴趣"
    isRequired
    isInvalid={errors.interests}
    options={interestOptions}
  />
</form>
```

### 3. 动态选项

```tsx
<CheckboxGroup
  options={items.map((item) => ({
    label: item.name,
    value: item.id,
    disabled: !item.available,
  }))}
/>
```

## Contribution

Yes please! See the
[contributing guidelines](https://github.com/cloudstack-tech/cloudstack-design/blob/master/CONTRIBUTING.md)
for details.

## License

This project is licensed under the terms of the
[MIT license](https://github.com/cloudstack-tech/cloudstack-design/blob/master/LICENSE).

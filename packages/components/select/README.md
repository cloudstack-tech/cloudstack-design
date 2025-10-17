# @cloudstack-design/select

CloudStack Design 的 Select（下拉选择）组件。

## 安装

```bash
pnpm add @cloudstack-design/select
```

## 使用

### 基础用法

```tsx
import {Select} from "@cloudstack-design/select";

const options = [
  {label: "选项1", value: "1"},
  {label: "选项2", value: "2"},
  {label: "选项3", value: "3"},
];

function App() {
  return <Select placeholder="请选择" options={options} />;
}
```

## API

### SelectProps

| 属性              | 类型                                               | 默认值     | 描述                 |
| ----------------- | -------------------------------------------------- | ---------- | -------------------- |
| `options`         | `SelectOption[]`                                   | `[]`       | 选项列表             |
| `placeholder`     | `string`                                           | `"请选择"` | 占位符文本           |
| `mode`            | `"single" \| "multiple"`                           | `"single"` | 选择模式             |
| `value`           | `T \| T[]`                                         | -          | 当前选中的值         |
| `defaultValue`    | `T \| T[]`                                         | -          | 默认选中的值         |
| `onChange`        | `(value: T \| T[] \| undefined) => void`           | -          | 值变化时的回调       |
| `disabled`        | `boolean`                                          | `false`    | 是否禁用             |
| `allowClear`      | `boolean`                                          | `false`    | 是否显示清除按钮     |
| `showSearch`      | `boolean`                                          | `false`    | 是否显示搜索框       |
| `showCheck`       | `boolean`                                          | `true`     | 是否显示选中标记     |
| `size`            | `"sm" \| "md" \| "lg"`                             | `"md"`     | 选择器尺寸           |
| `maxHeight`       | `number`                                           | `256`      | 下拉框最大高度（px） |
| `notFoundContent` | `ReactNode`                                        | `"无数据"` | 无数据时显示的内容   |
| `filterOption`    | `(input: string, option: SelectOption) => boolean` | -          | 自定义搜索过滤函数   |
| `fullWidth`       | `boolean`                                          | `true`     | 是否占据全部宽度     |
| `isInvalid`       | `boolean`                                          | `false`    | 是否为错误状态       |
| `className`       | `string`                                           | -          | 自定义类名           |

### SelectOption

```tsx
interface SelectOption<T = any> {
  label: ReactNode; // 选项显示的标签
  value: T; // 选项的值
  disabled?: boolean; // 是否禁用该选项
}
```

## 示例

### 单选模式

```tsx
<Select placeholder="请选择一个选项" options={options} />
```

### 多选模式

```tsx
<Select mode="multiple" placeholder="可以选择多个选项" options={options} />
```

### 带清除按钮

```tsx
<Select placeholder="支持清除" options={options} allowClear />
```

### 带搜索功能

```tsx
<Select placeholder="搜索选项" options={options} showSearch />
```

### 不同尺寸

```tsx
<Select size="sm" placeholder="Small" options={options} />
<Select size="md" placeholder="Medium" options={options} />
<Select size="lg" placeholder="Large" options={options} />
```

### 禁用状态

```tsx
{
  /* 禁用整个选择器 */
}
<Select disabled placeholder="禁用状态" options={options} />;

{
  /* 禁用部分选项 */
}
<Select
  options={[
    {label: "可选项", value: "1"},
    {label: "禁用项", value: "2", disabled: true},
  ]}
/>;
```

### 受控模式

```tsx
function ControlledSelect() {
  const [value, setValue] = useState<string>();

  return <Select value={value} onChange={setValue} placeholder="请选择" options={options} />;
}
```

### 受控多选

```tsx
function ControlledMultipleSelect() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Select
      mode="multiple"
      value={values}
      onChange={setValues}
      placeholder="请选择（可多选）"
      options={options}
    />
  );
}
```

### 自定义过滤

```tsx
<Select
  showSearch
  options={options}
  filterOption={(input, option) => {
    const label = String(option.label).toLowerCase();
    return label.includes(input.toLowerCase());
  }}
/>
```

### 自定义空状态

```tsx
<Select options={[]} notFoundContent="暂无可选项" />
```

### 组合使用

```tsx
function App() {
  const [value, setValue] = useState<string>();

  return (
    <Select
      value={value}
      onChange={setValue}
      placeholder="功能齐全的选择器"
      options={options}
      allowClear
      showSearch
      size="md"
    />
  );
}
```

## 功能特性

- ✅ 单选/多选模式
- ✅ 搜索过滤
- ✅ 清除按钮
- ✅ 受控/非受控模式
- ✅ 禁用状态
- ✅ 自定义选项禁用
- ✅ 多种尺寸
- ✅ 自定义过滤逻辑
- ✅ 自定义空状态提示
- ✅ 键盘导航支持
- ✅ 完整的 TypeScript 类型

## License

MIT

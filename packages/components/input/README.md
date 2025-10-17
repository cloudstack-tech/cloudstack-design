# @cloudstack-design/input

CloudStack Design 的 Input（输入框）和 Textarea（多行输入）组件。

## 安装

```bash
pnpm add @cloudstack-design/input
```

## 使用

### Input 基础用法

```tsx
import {Input} from "@cloudstack-design/input";

function App() {
  return <Input placeholder="请输入内容" />;
}
```

### Textarea 基础用法

```tsx
import {Textarea} from "@cloudstack-design/input";

function App() {
  return <Textarea placeholder="请输入多行文本" rows={4} />;
}
```

## API

### Input Props

| 属性          | 类型                                   | 默认值       | 描述               |
| ------------- | -------------------------------------- | ------------ | ------------------ |
| `variant`     | `"bordered" \| "flat" \| "underlined"` | `"bordered"` | 输入框变体         |
| `size`        | `"sm" \| "md" \| "lg"`                 | `"md"`       | 输入框尺寸         |
| `placeholder` | `string`                               | -            | 占位符文本         |
| `disabled`    | `boolean`                              | `false`      | 是否禁用           |
| `isInvalid`   | `boolean`                              | `false`      | 是否为错误状态     |
| `allowClear`  | `boolean`                              | `false`      | 是否显示清除按钮   |
| `prefix`      | `ReactNode`                            | -            | 前缀内容           |
| `suffix`      | `ReactNode`                            | -            | 后缀内容           |
| `fullWidth`   | `boolean`                              | `true`       | 是否占据全部宽度   |
| `classNames`  | `object`                               | -            | 自定义各部分的类名 |

### Textarea Props

| 属性          | 类型                                   | 默认值       | 描述                         |
| ------------- | -------------------------------------- | ------------ | ---------------------------- |
| `variant`     | `"bordered" \| "flat" \| "underlined"` | `"bordered"` | 文本框变体                   |
| `placeholder` | `string`                               | -            | 占位符文本                   |
| `disabled`    | `boolean`                              | `false`      | 是否禁用                     |
| `isInvalid`   | `boolean`                              | `false`      | 是否为错误状态               |
| `allowClear`  | `boolean`                              | `false`      | 是否显示清除按钮             |
| `allowResize` | `boolean`                              | `false`      | 是否允许手动调整大小         |
| `autoSize`    | `boolean \| {minRows, maxRows}`        | `false`      | 是否自动调整高度             |
| `rows`        | `number`                               | `3`          | 文本框行数（非 autoSize 时） |
| `fullWidth`   | `boolean`                              | `true`       | 是否占据全部宽度             |
| `classNames`  | `object`                               | -            | 自定义各部分的类名           |

### InputRef / TextareaRef 方法

```tsx
interface InputRef {
  focus: () => void; // 聚焦输入框
  blur: () => void; // 失焦输入框
  select: () => void; // 选中输入框内容
  input: HTMLInputElement | null; // 原生 input 元素
}

interface TextareaRef {
  focus: () => void; // 聚焦文本框
  blur: () => void; // 失焦文本框
  select: () => void; // 选中文本框内容
  textarea: HTMLTextAreaElement | null; // 原生 textarea 元素
}
```

## 示例

### 带标签

```tsx
<div>
  <label className="block text-xs font-medium mb-1">用户名</label>
  <Input placeholder="请输入用户名" />
  <p className="text-xs text-gray-500 mt-1">用户名由 3-20 个字符组成</p>
</div>
```

### 带前缀和后缀

```tsx
<Input prefix={<SearchIcon />} suffix={<UserIcon />} placeholder="搜索用户" allowClear />
```

### 不同变体

```tsx
<Input placeholder="Bordered 变体" variant="bordered" />
<Input placeholder="Flat 变体" variant="flat" />
<Input placeholder="Underlined 变体" variant="underlined" />
```

### 不同尺寸

```tsx
<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />
```

### 带清除按钮

```tsx
<Input defaultValue="可清除的内容" allowClear placeholder="带清除按钮" />
```

### 错误状态

```tsx
<div>
  <Input placeholder="错误状态" defaultValue="无效的输入" isInvalid />
  <p className="text-xs text-red-600 mt-1">此字段为必填项</p>
</div>
```

### 受控模式

```tsx
function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="受控输入框" />
  );
}
```

### Textarea 自动调整高度

```tsx
<div>
  <Textarea placeholder="自动调整高度" autoSize={{minRows: 2, maxRows: 6}} />
  <p className="text-xs text-gray-500 mt-1">最小 2 行，最大 6 行</p>
</div>
```

### Textarea 可调整大小

```tsx
<div>
  <Textarea placeholder="可手动调整大小" rows={3} allowResize />
  <p className="text-xs text-gray-500 mt-1">拖动右下角调整大小</p>
</div>
```

### 使用 Ref

```tsx
function InputWithRef() {
  const inputRef = useRef<InputRef>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <Input ref={inputRef} placeholder="输入内容" />
      <button onClick={handleFocus}>聚焦输入框</button>
    </>
  );
}
```

## License

MIT

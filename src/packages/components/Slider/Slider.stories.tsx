import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { Slider } from "./";

const meta = {
  title: "Data 数据/Slider 滑块",
  component: Slider,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    min: {
      control: { type: "number" },
      description: "滑块的最小值",
    },
    max: {
      control: { type: "number" },
      description: "滑块的最大值",
    },
    step: {
      control: { type: "number" },
      description: "滑块的步长",
    },
    value: {
      control: { type: "number" },
      description: "滑块的值（受控模式）",
    },
    defaultValue: {
      control: { type: "number" },
      description: "滑块的默认值（非受控模式）",
    },
    disabled: {
      control: { type: "boolean" },
      description: "是否禁用滑块",
    },
    vertical: {
      control: { type: "boolean" },
      description: "是否为垂直方向",
    },
    range: {
      control: { type: "boolean" },
      description: "是否为范围滑块",
    },
    marks: {
      control: { type: "boolean" },
      description: "是否显示标记点",
    },
    tooltip: {
      control: { type: "select" },
      options: [true, false, "always", "never"],
      description: "是否显示 tooltip",
    },
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"],
      description: "滑块的尺寸",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: 30,
    min: 0,
    max: 100,
    step: 1,
  },
};

export const WithRange: Story = {
  name: "范围滑块",
  args: {
    range: true,
    defaultValue: [20, 60],
    min: 0,
    max: 100,
  },
};

export const WithStep: Story = {
  name: "带步长",
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 10,
    marks: true,
  },
};

export const Vertical: Story = {
  name: "垂直方向",
  render: () => (
    <div className="flex gap-8 h-64">
      <Slider vertical defaultValue={30} min={0} max={100} />
      <Slider vertical range defaultValue={[20, 80]} min={0} max={100} />
    </div>
  ),
};

export const WithMarks: Story = {
  name: "带标记点",
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    marks: {
      0: "0°C",
      20: "20°C",
      37: "37°C",
      100: "100°C",
    },
  },
};

export const CustomMarks: Story = {
  name: "自定义标记点",
  render: () => (
    <Slider
      defaultValue={50}
      min={0}
      max={100}
      marks={[
        { value: 0, label: "最小" },
        { value: 25, label: "25%" },
        { value: 50, label: "中间" },
        { value: 75, label: "75%" },
        { value: 100, label: "最大" },
      ]}
    />
  ),
};

export const Disabled: Story = {
  name: "禁用状态",
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-2">禁用的单值滑块</h3>
        <Slider disabled defaultValue={40} min={0} max={100} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">禁用的范围滑块</h3>
        <Slider disabled range defaultValue={[20, 60]} min={0} max={100} />
      </div>
    </div>
  ),
};

export const DifferentSizes: Story = {
  name: "不同尺寸",
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-2">小尺寸</h3>
        <Slider size="small" defaultValue={30} min={0} max={100} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">默认尺寸</h3>
        <Slider size="default" defaultValue={50} min={0} max={100} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">大尺寸</h3>
        <Slider size="large" defaultValue={70} min={0} max={100} />
      </div>
    </div>
  ),
};

export const TooltipVariants: Story = {
  name: "Tooltip 变体",
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-2">默认 (hover 显示)</h3>
        <Slider defaultValue={30} min={0} max={100} tooltip={true} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">总是显示</h3>
        <Slider defaultValue={50} min={0} max={100} tooltip="always" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">不显示</h3>
        <Slider defaultValue={70} min={0} max={100} tooltip="never" />
      </div>
    </div>
  ),
};

export const CustomTooltip: Story = {
  name: "自定义 Tooltip",
  render: () => (
    <Slider
      defaultValue={25}
      min={0}
      max={100}
      tooltip="always"
      formatTooltip={(value) => `${value}%`}
    />
  ),
};

export const ControlledSlider: Story = {
  name: "受控模式",
  render: () => {
    const [value, setValue] = React.useState(40);

    return (
      <div className="space-y-4">
        <div className="text-sm">当前值: {value}</div>
        <Slider
          value={value}
          onChange={(val) => setValue(val as number)}
          min={0}
          max={100}
        />
        <div className="flex gap-2">
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            onClick={() => setValue(0)}
          >
            设为 0
          </button>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            onClick={() => setValue(50)}
          >
            设为 50
          </button>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            onClick={() => setValue(100)}
          >
            设为 100
          </button>
        </div>
      </div>
    );
  },
};

export const RangeControlled: Story = {
  name: "受控范围滑块",
  render: () => {
    const [range, setRange] = React.useState<[number, number]>([20, 60]);

    return (
      <div className="space-y-4">
        <div className="text-sm">
          当前范围: {range[0]} - {range[1]}
        </div>
        <Slider
          range
          value={range}
          onChange={(val) => setRange(val as [number, number])}
          min={0}
          max={100}
          marks={true}
        />
        <div className="flex gap-2">
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            onClick={() => setRange([10, 30])}
          >
            设为 10-30
          </button>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            onClick={() => setRange([40, 80])}
          >
            设为 40-80
          </button>
        </div>
      </div>
    );
  },
};

export const ComplexExample: Story = {
  name: "复杂示例",
  render: () => {
    const [price, setPrice] = React.useState<[number, number]>([200, 800]);
    const [rating, setRating] = React.useState(4.5);

    return (
      <div className="max-w-md space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            价格区间: ¥{price[0]} - ¥{price[1]}
          </label>
          <Slider
            range
            value={price}
            onChange={(val) => setPrice(val as [number, number])}
            min={0}
            max={1000}
            step={50}
            marks={{
              0: "¥0",
              250: "¥250",
              500: "¥500",
              750: "¥750",
              1000: "¥1000",
            }}
            formatTooltip={(value) => `¥${value}`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            最低评分: {rating}
          </label>
          <Slider
            value={rating}
            onChange={(val) => setRating(val as number)}
            min={0}
            max={5}
            step={0.1}
            marks={{
              0: "0⭐",
              1: "1⭐",
              2: "2⭐",
              3: "3⭐",
              4: "4⭐",
              5: "5⭐",
            }}
            formatTooltip={(value) => `${value}⭐`}
            tooltip="always"
          />
        </div>
      </div>
    );
  },
};

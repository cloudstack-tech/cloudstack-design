import React from "react";

/**
 * 滑块标记点
 */
export interface SliderMark {
  /**
   * 标记点的值
   */
  value: number;
  /**
   * 标记点的标签
   */
  label?: React.ReactNode;
}

/**
 * Slider 滑块组件属性
 */
export interface SliderProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onChange" | "defaultValue"
  > {
  /**
   * 滑块的最小值
   * @default 0
   */
  min?: number;

  /**
   * 滑块的最大值
   * @default 100
   */
  max?: number;

  /**
   * 步长，取值必须大于 0，并且可被 (max - min) 整除
   * @default 1
   */
  step?: number;

  /**
   * 滑块的值（受控模式）
   */
  value?: number | [number, number];

  /**
   * 滑块的默认值（非受控模式）
   */
  defaultValue?: number | [number, number];

  /**
   * 当滑块的值发生改变时的回调
   */
  onChange?: (value: number | [number, number]) => void;

  /**
   * 当用户拖拽滑块时触发的回调
   */
  onChangeComplete?: (value: number | [number, number]) => void;

  /**
   * 是否禁用滑块
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否为垂直方向的滑块
   * @default false
   */
  vertical?: boolean;

  /**
   * 是否显示标记点
   * @default false
   */
  marks?: boolean | SliderMark[] | Record<number, React.ReactNode>;

  /**
   * 是否显示 tooltip
   * @default true
   */
  tooltip?: boolean | "always" | "never";

  /**
   * 自定义 tooltip 格式化函数
   */
  formatTooltip?: (value: number) => React.ReactNode;

  /**
   * 是否为范围滑块
   * @default false
   */
  range?: boolean;

  /**
   * 滑块轨道的样式类名
   */
  trackClassName?: string;

  /**
   * 滑块填充轨道的样式类名
   */
  railClassName?: string;

  /**
   * 滑块手柄的样式类名
   */
  handleClassName?: string;

  /**
   * 自定义样式类名
   */
  className?: string;

  /**
   * 滑块的尺寸
   * @default "default"
   */
  size?: "small" | "default" | "large";
}

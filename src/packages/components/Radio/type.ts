import React from "react";

/**
 * Radio 单选框组件属性
 */
export interface RadioProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "onChange"
  > {
  /**
   * 是否选中
   */
  checked?: boolean;

  /**
   * 默认是否选中
   */
  defaultChecked?: boolean;

  /**
   * 单选框的值
   */
  value?: string | number;

  /**
   * 单选框标签
   */
  label?: React.ReactNode;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 变化回调
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * 自定义样式类名
   */
  className?: string;

  /**
   * 子元素
   */
  children?: React.ReactNode;
}

/**
 * RadioGroup 单选框组属性
 */
export interface RadioGroupProps<T = string | number>
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onChange" | "defaultValue"
  > {
  /**
   * 单选框选项数组
   */
  options?: Array<{
    label: React.ReactNode;
    value: T;
    disabled?: boolean;
  }>;

  /**
   * 当前选中的值
   */
  value?: T;

  /**
   * 默认选中的值
   */
  defaultValue?: T;

  /**
   * 选项变化回调
   */
  onChange?: (value: T) => void;

  /**
   * RadioGroup 的名称
   */
  name?: string;

  /**
   * 是否禁用整个组
   * @default false
   */
  disabled?: boolean;

  /**
   * 布局方向
   * @default "horizontal"
   */
  direction?: "horizontal" | "vertical";

  /**
   * 自定义样式类名
   */
  className?: string;

  /**
   * 自定义样式类名映射
   */
  classNames?: {
    root?: string;
    radio?: string;
    label?: string;
  };

  /**
   * 子元素
   */
  children?: React.ReactNode;
}

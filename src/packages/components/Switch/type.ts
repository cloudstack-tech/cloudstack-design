import React from "react";

/**
 * Switch 开关组件属性
 */
export interface SwitchProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "onChange" | "size"
  > {
  /**
   * 是否选中
   */
  checked?: boolean;

  /**
   * 默认是否选中
   * @default false
   */
  defaultChecked?: boolean;

  /**
   * 变化回调
   */
  onChange?: (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 开关尺寸
   * @default "default"
   */
  size?: "small" | "default" | "large";

  /**
   * 是否加载中
   * @default false
   */
  loading?: boolean;

  /**
   * 开关的标签文本
   */
  label?: React.ReactNode;

  /**
   * 选中时的内容
   */
  checkedChildren?: React.ReactNode;

  /**
   * 未选中时的内容
   */
  unCheckedChildren?: React.ReactNode;

  /**
   * 自定义样式类名
   */
  className?: string;

  /**
   * 自定义样式类名映射
   */
  classNames?: {
    root?: string;
    track?: string;
    thumb?: string;
    label?: string;
  };

  /**
   * 子元素
   */
  children?: React.ReactNode;
}

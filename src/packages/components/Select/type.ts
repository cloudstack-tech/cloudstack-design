import { ReactNode } from "react";

export interface SelectOption<T = any> {
  label: ReactNode;
  value: T;
  disabled?: boolean;
}

export interface BaseSelectProps<T = any> {
  /**
   * 选项列表
   */
  options?: SelectOption<T>[];
  /**
   * 占位符文本
   */
  placeholder?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否显示清除按钮
   */
  allowClear?: boolean;
  /**
   * 下拉框最大高度
   */
  maxHeight?: number;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 是否显示搜索框
   */
  showSearch?: boolean;
  /**
   * 是否显示选中状态
   */
  showCheck?: boolean;
  /**
   * 搜索过滤函数
   */
  filterOption?: (input: string, option: SelectOption<T>) => boolean;
  /**
   * 下拉框为空时显示的内容
   */
  notFoundContent?: ReactNode;
}

// 单选模式
export interface SingleSelectProps<T = any> extends BaseSelectProps<T> {
  /**
   * 选择模式
   */
  mode?: "single";
  /**
   * 当前选中的值
   */
  value?: T;
  /**
   * 默认选中的值
   */
  defaultValue?: T;
  /**
   * 值变化时的回调
   */
  onChange?: (value: T | undefined) => void;
}

// 多选模式
export interface MultipleSelectProps<T = any> extends BaseSelectProps<T> {
  /**
   * 选择模式
   */
  mode: "multiple";
  /**
   * 当前选中的值数组
   */
  value?: T[];
  /**
   * 默认选中的值数组
   */
  defaultValue?: T[];
  /**
   * 值变化时的回调
   */
  onChange?: (value: T[]) => void;
  /**
   * 最多选择数量
   */
  maxTagCount?: number;
}

export type SelectProps<T = any> =
  | SingleSelectProps<T>
  | MultipleSelectProps<T>;

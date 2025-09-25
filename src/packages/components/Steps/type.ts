import React from "react";

/**
 * Step 步骤状态
 */
export type StepStatus = "wait" | "process" | "finish" | "error";

/**
 * Steps 方向
 */
export type StepsDirection = "horizontal" | "vertical";

/**
 * Steps 尺寸
 */
export type StepsSize = "small" | "default";

/**
 * Step 单个步骤的属性
 */
export interface StepProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "onClick"> {
  /**
   * 步骤的状态
   * @default "wait"
   */
  status?: StepStatus;

  /**
   * 步骤标题
   */
  title?: React.ReactNode;

  /**
   * 步骤的详情描述
   */
  description?: React.ReactNode;

  /**
   * 步骤图标
   */
  icon?: React.ReactNode;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否为最后一步
   * @default false
   */
  isLast?: boolean;

  /**
   * 步骤序号（从0开始）
   */
  stepNumber?: number;

  /**
   * 点击回调
   */
  onClick?: (stepNumber: number) => void;

  /**
   * 自定义样式类名
   */
  className?: string;

  /**
   * 步骤条方向（从父组件传递）
   * @default "horizontal"
   */
  direction?: StepsDirection;

  /**
   * 步骤条尺寸（从父组件传递）
   * @default "default"
   */
  size?: StepsSize;
}

/**
 * Steps 主组件属性
 */
export interface StepsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * 当前步骤，从0开始计数
   * @default 0
   */
  current?: number;

  /**
   * 指定步骤条方向
   * @default "horizontal"
   */
  direction?: StepsDirection;

  /**
   * 指定大小
   * @default "default"
   */
  size?: StepsSize;

  /**
   * 是否允许点击切换步骤
   * @default false
   */
  clickable?: boolean;

  /**
   * 点击步骤时的回调
   */
  onChange?: (current: number) => void;

  /**
   * 步骤条子元素
   */
  children?: React.ReactNode;

  /**
   * 自定义样式类名
   */
  className?: string;

  /**
   * 步骤数据（可选，如果不使用children的话）
   */
  items?: Array<{
    title?: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
  }>;
}

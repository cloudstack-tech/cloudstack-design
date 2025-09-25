import React from "react";

/**
 * Timeline 项目状态
 */
export type TimelineItemStatus =
  | "pending"
  | "process"
  | "finish"
  | "error"
  | "success";

/**
 * Timeline 模式
 */
export type TimelineMode = "left" | "alternate" | "right";

/**
 * Timeline 项目属性
 */
export interface TimelineItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, "title"> {
  /**
   * 时间线项目的状态
   * @default "finish"
   */
  status?: TimelineItemStatus;

  /**
   * 时间线项目的标题
   */
  title?: React.ReactNode;

  /**
   * 时间线项目的描述内容
   */
  description?: React.ReactNode;

  /**
   * 时间线项目的时间标签
   */
  label?: React.ReactNode;

  /**
   * 自定义时间轴点
   */
  dot?: React.ReactNode;

  /**
   * 自定义时间轴点的颜色
   */
  color?: string;

  /**
   * 是否为最后一个节点
   * @default false
   */
  isLast?: boolean;

  /**
   * 在左侧还是右侧显示内容（仅在 alternate 模式下生效）
   */
  position?: "left" | "right";

  /**
   * Timeline 模式（从父组件传递）
   */
  mode?: TimelineMode;

  /**
   * 是否反向显示（从父组件传递）
   */
  reverse?: boolean;
}

/**
 * Timeline 组件属性
 */
export interface TimelineProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * 时间线模式
   * @default "left"
   */
  mode?: TimelineMode;

  /**
   * 是否反向显示
   * @default false
   */
  reverse?: boolean;

  /**
   * 是否显示时间标签
   * @default false
   */
  showLabel?: boolean;

  /**
   * Timeline 子项
   */
  children?: React.ReactNode;

  /**
   * 自定义样式类名
   */
  className?: string;
}

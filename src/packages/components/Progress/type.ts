import React from "react";

/**
 * Progress 进度条状态
 */
export type ProgressStatus = "normal" | "success" | "error" | "warning";

/**
 * Progress 进度条尺寸
 */
export type ProgressSize = "small" | "default" | "large";

/**
 * Progress 步骤信息
 */
export interface ProgressStep {
  /**
   * 步骤标题
   */
  title?: React.ReactNode;
  /**
   * 步骤描述
   */
  description?: React.ReactNode;
  /**
   * 步骤状态
   */
  status?: ProgressStatus;
}

/**
 * Progress 进度条组件属性
 */
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 进度百分比 (0-100)
   */
  percent?: number;

  /**
   * 进度条状态
   * @default "normal"
   */
  status?: ProgressStatus;

  /**
   * 进度条尺寸
   * @default "default"
   */
  size?: ProgressSize;

  /**
   * 是否显示进度数值或状态图标
   * @default true
   */
  showInfo?: boolean;

  /**
   * 自定义进度条颜色
   */
  strokeColor?: string | { from: string; to: string; direction?: string };

  /**
   * 自定义未完成部分颜色
   */
  trailColor?: string;

  /**
   * 进度条线的宽度（像素）
   */
  strokeWidth?: number;

  /**
   * 进度条线的端点样式
   * @default "round"
   */
  strokeLinecap?: "round" | "butt" | "square";

  /**
   * 内容的模板函数
   */
  format?: (percent?: number, successPercent?: number) => React.ReactNode;

  /**
   * 已完成的分段百分比
   */
  success?: {
    percent?: number;
    strokeColor?: string;
  };

  /**
   * 是否为分段进度条
   */
  steps?: number;

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
 * Circle Progress 圆形进度条属性
 */
export interface CircleProgressProps extends Omit<ProgressProps, "steps"> {
  /**
   * 圆形进度条画布宽度
   * @default 132
   */
  width?: number;

  /**
   * 圆形进度条类型
   * @default "circle"
   */
  type?: "circle" | "dashboard";

  /**
   * 仪表盘进度条缺口角度，可取 0 ~ 295
   * @default 75
   */
  gapDegree?: number;

  /**
   * 仪表盘进度条缺口位置
   * @default "bottom"
   */
  gapPosition?: "top" | "bottom" | "left" | "right";
}

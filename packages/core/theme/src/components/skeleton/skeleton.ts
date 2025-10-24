import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Skeleton 骨架屏组件 **Tailwind Variants** 配置
 *
 * @description
 * Skeleton（骨架屏）组件用于在内容加载时显示占位符。
 * 提供多种动画效果和形状变体，提升用户体验。
 *
 * 主要特点：
 * - 支持多种动画效果（脉冲、波浪、无动画）
 * - 支持多种形状（文本行、圆形、矩形）
 * - 支持 isLoaded 状态控制显示/隐藏
 * - 使用设计系统的统一颜色变量
 * - 流畅的过渡动画
 *
 * @param {Object} props - 组件属性
 * @param {string} props.variant - 动画变体（pulse/wave/none）
 * @param {string} props.shape - 形状变体（text/circle/rect）
 * @param {boolean} props.isLoaded - 是否已加载完成
 * @param {boolean} props.disableAnimation - 是否禁用动画
 * @returns {Object} 组件样式对象
 *
 * @example
 * <div className={skeleton()}>
 *   // skeleton content
 * </div>
 */
const skeleton = tv({
  base: [
    // 基础样式
    "relative",
    "overflow-hidden",
    "bg-default-200",
    // 默认为块级元素
    "block",
    // 圆角
    "rounded-lg",
    // 过渡效果
    "transition-opacity",
    "duration-300",
    // 防止内容闪烁
    "before:absolute",
    "before:inset-0",
    "before:-translate-x-full",
    "before:bg-gradient-to-r",
    "before:from-transparent",
    "before:via-default-50/50",
    "before:to-transparent",
  ],
  variants: {
    /**
     * 动画变体
     * - pulse: 脉冲动画（不断变化透明度）
     * - wave: 波浪动画（从左到右的扫光效果）
     * - none: 无动画
     */
    variant: {
      pulse: ["animate-pulse"],
      wave: ["before:animate-shimmer"],
      none: "",
    },
    /**
     * 形状变体
     * - text: 文本行样式（默认高度，圆角较小）
     * - circle: 圆形样式（宽高相等，完全圆角）
     * - rect: 矩形样式（默认方形）
     */
    shape: {
      text: ["h-4", "w-full", "rounded"],
      circle: [
        "rounded-full",
        // 需要用户自己设置宽高，或使用 size 变体
      ],
      rect: [
        "rounded-lg",
        // 需要用户自己设置宽高
      ],
    },
    /**
     * 尺寸变体（主要用于 circle 和 rect）
     */
    size: {
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    /**
     * 是否已加载完成
     * - true: 隐藏骨架屏，显示实际内容
     * - false: 显示骨架屏
     */
    isLoaded: {
      true: ["opacity-0", "pointer-events-none"],
      false: ["opacity-100"],
    },
    /**
     * 是否禁用动画
     */
    disableAnimation: {
      true: ["animate-none", "before:animate-none"],
      false: "",
    },
  },
  defaultVariants: {
    variant: "pulse",
    shape: "rect",
    size: "md",
    isLoaded: false,
    disableAnimation: false,
  },
  compoundVariants: [
    // circle + size 组合变体
    {
      shape: "circle",
      size: "sm",
      class: "w-8 h-8",
    },
    {
      shape: "circle",
      size: "md",
      class: "w-12 h-12",
    },
    {
      shape: "circle",
      size: "lg",
      class: "w-16 h-16",
    },
    {
      shape: "circle",
      size: "xl",
      class: "w-20 h-20",
    },
    // rect + size 组合变体
    {
      shape: "rect",
      size: "sm",
      class: "h-20 w-full",
    },
    {
      shape: "rect",
      size: "md",
      class: "h-32 w-full",
    },
    {
      shape: "rect",
      size: "lg",
      class: "h-48 w-full",
    },
    {
      shape: "rect",
      size: "xl",
      class: "h-64 w-full",
    },
    // text + size 组合变体
    {
      shape: "text",
      size: "sm",
      class: "h-3",
    },
    {
      shape: "text",
      size: "md",
      class: "h-4",
    },
    {
      shape: "text",
      size: "lg",
      class: "h-5",
    },
    {
      shape: "text",
      size: "xl",
      class: "h-6",
    },
  ],
});

export type SkeletonVariantProps = VariantProps<typeof skeleton>;

export {skeleton};

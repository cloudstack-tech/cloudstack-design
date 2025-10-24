import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Switch 开关组件 **Tailwind Variants** 配置
 *
 * @description
 * Switch（开关）组件用于切换单个设置的开/关状态。
 * 采用统一的设计系统颜色和流畅的动画效果。
 *
 * 主要特点：
 * - 使用设计系统的统一颜色变量
 * - 支持受控和非受控模式
 * - 支持 loading 和 disabled 状态
 * - 支持轨道内内容显示
 * - 流畅的动画过渡效果
 * - 完整的无障碍支持
 */
const switchComponent = tv({
  slots: {
    // 最外层容器
    base: [
      "inline-flex",
      "items-center",
      "cursor-pointer",
      "select-none",
      "group",
      "focus-within:outline-none",
    ],
    // 原生 input 元素（隐藏）
    input: ["absolute", "h-0", "w-0", "opacity-0", "cursor-pointer"],
    // 轨道（背景）
    track: [
      "relative",
      "inline-flex",
      "items-center",
      "rounded-full",
      "transition-all",
      "duration-200",
      "ease-in-out",
      "flex-shrink-0",
    ],
    // 滑块（圆形按钮）
    thumb: [
      "absolute",
      "bg-white",
      "rounded-full",
      "shadow-sm",
      "transition-all",
      "duration-200",
      "ease-in-out",
      "transform",
    ],
    // 轨道内的文本内容
    content: [
      "absolute",
      "inset-0",
      "flex",
      "items-center",
      "justify-center",
      "text-white",
      "font-medium",
      "pointer-events-none",
    ],
    // Loading 图标容器
    loadingWrapper: ["absolute", "inset-0", "flex", "items-center", "justify-center"],
    // Loading 图标
    loadingIcon: [
      "animate-spin",
      "rounded-full",
      "border-2",
      "border-white",
      "border-t-transparent",
    ],
    // 标签文本
    label: ["ml-2", "text-sm", "leading-none", "cursor-pointer", "select-none"],
  },
  variants: {
    // 尺寸变体
    size: {
      sm: {
        track: "h-4 w-7 px-0.5",
        thumb: "w-3 h-3",
        content: "text-[0.5rem]",
        loadingIcon: "w-2 h-2",
      },
      md: {
        track: "h-6 w-11 px-0.5",
        thumb: "w-5 h-5",
        content: "text-[0.625rem]",
        loadingIcon: "w-3 h-3",
      },
      lg: {
        track: "h-8 w-14 px-1",
        thumb: "w-6 h-6",
        content: "text-xs",
        loadingIcon: "w-4 h-4",
      },
    },
    // 选中状态
    isSelected: {
      true: {
        thumb: "translate-x-full",
      },
      false: {},
    },
    // 禁用状态
    isDisabled: {
      true: {
        base: "cursor-not-allowed opacity-50",
        track: "cursor-not-allowed",
      },
      false: {
        track: "hover:shadow-md",
        thumb: "group-hover:shadow-lg group-active:scale-110",
      },
    },
    // Loading 状态
    isLoading: {
      true: {
        base: "cursor-wait",
        track: "cursor-wait",
      },
      false: {},
    },
  },
  defaultVariants: {
    size: "md",
    isSelected: false,
    isDisabled: false,
    isLoading: false,
  },
});

export type SwitchVariantProps = VariantProps<typeof switchComponent>;
export type SwitchSlots = keyof ReturnType<typeof switchComponent>;

export {switchComponent};

import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Accordion wrapper **Tailwind Variants** component
 *
 * @description
 * 手风琴（折叠面板）组件，用于展示和隐藏大量内容。
 * 采用了统一的设计系统颜色和样式，提供流畅的交互体验。
 *
 * 主要特点：
 * - 使用设计系统的统一颜色变量（default-xxx）
 * - 去除了 focus ring 效果，避免视觉干扰
 * - 支持多种变体和尺寸
 * - 平滑的展开/收起动画
 *
 * @param {Object} props - 组件属性
 * @param {string} props.variant - 组件变体
 * @param {string} props.size - 组件尺寸
 * @param {boolean} props.isActive - 是否激活
 * @param {boolean} props.isDisabled - 是否禁用
 * @param {string} props.indicatorPosition - 指示器位置
 * @returns {Object} 组件样式对象
 *
 * const styles = accordion({...})
 *
 * @example
 * <div role="group" className={styles())}>
 *   // accordion elements
 * </div>
 */
const accordion = tv({
  slots: {
    base: ["w-full"],
    item: ["group", "transition-all", "duration-200"],
    header: [
      "flex",
      "items-center",
      "justify-between",
      "w-full",
      "text-left",
      "transition-all",
      "duration-150",
      // 去除 ring 效果，使用更简洁的 focus 样式
      "focus:outline-none",
      // 使用设计系统颜色
      "hover:bg-default-100",
      "group-data-[disabled=true]:cursor-not-allowed",
      "group-data-[disabled=true]:hover:bg-transparent",
    ],
    trigger: ["flex", "items-center", "flex-1", "min-w-0"],
    content: ["overflow-hidden", "transition-all", "duration-200", "ease-in-out"],
    indicator: [
      "transition-transform",
      "duration-200",
      // 使用设计系统颜色
      "text-default-500",
      "group-data-[disabled=true]:opacity-50",
    ],
  },
  variants: {
    variant: {
      // 默认变体：透明背景，简洁清爽
      default: {
        base: "bg-transparent",
        item: "",
        header: "",
      },
      // 填充变体：浅色背景，层次分明
      filled: {
        base: "bg-default-50",
        item: "bg-content1",
        header: "",
      },
      // 边框变体：带边框，对齐 Card 组件样式
      bordered: {
        base: "border border-default/20 overflow-hidden",
        item: "border-b border-default/20 last:border-b-0",
        header: "",
      },
      // 阴影变体：带阴影和边框，参考 Card 组件
      shadow: {
        base: "shadow-sm border border-default/20 bg-content1 overflow-hidden",
        item: "border-b border-default/20 last:border-b-0",
        header: "",
      },
    },
    size: {
      sm: {
        header: "px-3 py-2 text-sm",
        content: "px-3 pb-2",
      },
      md: {
        header: "px-4 py-3 text-base",
        content: "px-4 pb-3",
      },
      lg: {
        header: "px-5 py-4 text-lg",
        content: "px-5 pb-4",
      },
    },
    isActive: {
      true: {
        // 激活状态：使用淡淡的主题色背景
        header: "bg-default-100",
        content: "opacity-100",
      },
      false: {
        header: "",
        content: "opacity-0 max-h-0",
      },
    },
    isDisabled: {
      true: {
        item: "opacity-50 cursor-not-allowed",
      },
    },
    indicatorPosition: {
      start: {
        indicator: "mr-2",
      },
      end: {
        indicator: "ml-2",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    isActive: false,
    isDisabled: false,
    indicatorPosition: "end",
  },
});

export type AccordionVariantProps = VariantProps<typeof accordion>;
export type AccordionSlots = keyof ReturnType<typeof accordion>;

export {accordion};

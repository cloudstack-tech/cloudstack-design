import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Card wrapper **Tailwind Variants** component
 *
 * const slots = card({...})
 *
 * @example
 * ```tsx
 * <div className={slots.base()}>
 *   <div className={slots.header()}>
 *     <h3 className={slots.title()}>Title</h3>
 *     <ChevronDown className={slots.collapseIcon()} />
 *   </div>
 *   <div className={slots.body()}>
 *     Card Body
 *   </div>
 * </div>
 * ```
 */
const card = tv({
  slots: {
    base: [
      "relative",
      "bg-white",
      "transition-all",
      "duration-150",
      "rounded-lg",
      "overflow-hidden",
    ],
    header: [
      "flex",
      "w-full",
      "items-center",
      "justify-between",
      "p-4",
      "border-b",
      "border-transparent",
    ],
    title: ["text-sm", "font-medium", "text-gray-900", "flex-1", "min-w-0"],
    body: ["h-fit", "overflow-hidden", "transition-all", "duration-300", "ease-in-out"],
    collapseIcon: ["text-gray-500", "transition-transform", "duration-200", "flex-shrink-0"],
  },
  variants: {
    variant: {
      cube: {
        base: "border border-gray-200 shadow-sm",
      },
      flat: {
        base: ["border-0", "bg-gray-50", "hover:bg-gray-100"],
      },
      bordered: {
        base: "border border-gray-200",
      },
      shadow: {
        base: "border-0 shadow-md",
      },
    },
    hoverable: {
      true: {},
      false: {},
    },
    isCollapsible: {
      true: {
        header: "cursor-pointer select-none hover:bg-gray-50",
      },
      false: {},
    },
    isCollapsed: {
      true: {
        body: "max-h-0",
        collapseIcon: "rotate-0",
      },
      false: {
        body: "max-h-[2000px]",
        collapseIcon: "rotate-180",
      },
    },
    hasTitle: {
      true: {
        body: "px-4",
        header: "border-b-gray-200",
      },
      false: {
        body: "p-4",
      },
    },
    fullWidth: {
      true: {
        base: "w-full",
      },
      false: {},
    },
    isDisabled: {
      true: {
        base: "opacity-50 cursor-not-allowed pointer-events-none",
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: "cube",
    hoverable: true,
    isCollapsible: false,
    isCollapsed: false,
    hasTitle: false,
    fullWidth: false,
    isDisabled: false,
  },
  compoundVariants: [
    // hoverable + variant
    {
      hoverable: true,
      variant: "cube",
      class: {
        base: "hover:shadow-lg",
      },
    },
    {
      hoverable: true,
      variant: "shadow",
      class: {
        base: "hover:shadow-xl",
      },
    },
    // hasTitle + isCollapsed
    {
      hasTitle: true,
      isCollapsed: false,
      class: {
        body: "pb-4",
      },
    },
    // variant flat with hoverable false
    {
      variant: "flat",
      hoverable: false,
      class: {
        base: "hover:bg-gray-50",
      },
    },
  ],
});

export type CardVariantProps = VariantProps<typeof card>;
export type CardSlots = keyof ReturnType<typeof card>;

export {card};

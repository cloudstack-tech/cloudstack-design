import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Card wrapper **Tailwind Variants** component
 *
 * const slots = card({...})
 *
 * @example
 * <div className={slots.base()}>
 *   <div className={slots.header()}>
 *     <h3 className={slots.title()}>Title</h3>
 *   </div>
 *   <div className={slots.body()}>
 *     Card Body
 *   </div>
 * </div>
 */
const card = tv({
  slots: {
    base: ["border", "bg-white", "transition-all", "duration-150"],
    header: ["flex", "w-full", "items-center", "justify-between", "p-4"],
    title: ["text-sm", "font-medium", "text-default-900", "flex-1"],
    body: ["h-fit", "overflow-hidden", "transition-all", "duration-150", "ease-in-out"],
    collapseIcon: ["text-default-500", "transition-transform", "duration-200"],
  },
  variants: {
    variant: {
      cube: {
        base: "border-default-200",
      },
      flat: {
        base: ["border-0", "bg-default-100", "hover:bg-default-200"],
      },
    },
    hoverable: {
      true: {
        base: "hover:shadow-md",
      },
      false: {},
    },
    isCollapsible: {
      true: {
        header: "cursor-pointer select-none",
      },
      false: {},
    },
    isCollapsed: {
      true: {
        body: "max-h-0",
        collapseIcon: "rotate-0",
      },
      false: {
        body: "max-h-[1000px]",
        collapseIcon: "rotate-180",
      },
    },
    hasTitle: {
      true: {
        body: "px-4",
      },
      false: {
        body: "p-4",
      },
    },
  },
  defaultVariants: {
    variant: "cube",
    hoverable: true,
    isCollapsible: false,
    isCollapsed: false,
    hasTitle: false,
  },
  compoundVariants: [
    {
      hasTitle: true,
      isCollapsed: false,
      class: {
        body: "pb-4",
      },
    },
  ],
});

export type CardVariantProps = VariantProps<typeof card>;
export type CardSlots = keyof ReturnType<typeof card>;

export {card};

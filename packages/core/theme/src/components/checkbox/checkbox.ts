import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Checkbox wrapper **Tailwind Variants** component
 *
 * @example
 * ```tsx
 * const slots = checkbox({...})
 *
 * <label className={slots.base()}>
 *   <input type="checkbox" className={slots.input()} />
 *   <span className={slots.wrapper()}>
 *     <svg className={slots.icon()} />
 *   </span>
 *   <span className={slots.label()}>Label</span>
 * </label>
 * ```
 */
const checkbox = tv({
  slots: {
    base: [
      "group",
      "relative",
      "inline-flex",
      "items-center",
      "tap-highlight-transparent",
      "cursor-pointer",
      "select-none",
    ],
    wrapper: [
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "flex-shrink-0",
      "overflow-hidden",
      "border-2",
      "rounded",
      "transition-all",
      "duration-200",
      "ease-in-out",
    ],
    input: ["absolute", "opacity-0", "w-0", "h-0", "pointer-events-none"],
    icon: [
      "absolute",
      "top-1/2",
      "left-1/2",
      "-translate-x-1/2",
      "-translate-y-1/2",
      "text-white",
      "opacity-0",
      "scale-50",
      "transition-all",
      "duration-200",
    ],
    label: ["ml-2", "text-sm", "select-none", "transition-colors"],
  },
  variants: {
    size: {
      sm: {
        wrapper: "w-3.5 h-3.5",
        icon: "w-2.5 h-2.5",
        label: "text-xs",
      },
      md: {
        wrapper: "w-4 h-4",
        icon: "w-3 h-3",
        label: "text-sm",
      },
      lg: {
        wrapper: "w-5 h-5",
        icon: "w-3.5 h-3.5",
        label: "text-base",
      },
    },
    color: {
      default: {
        wrapper: "border-gray-300",
      },
      primary: {
        wrapper: "border-gray-300",
      },
      secondary: {
        wrapper: "border-gray-300",
      },
      success: {
        wrapper: "border-gray-300",
      },
      warning: {
        wrapper: "border-gray-300",
      },
      danger: {
        wrapper: "border-gray-300",
      },
    },
    isSelected: {
      true: {
        icon: "opacity-100 scale-100",
      },
      false: {},
    },
    isIndeterminate: {
      true: {
        icon: "opacity-100 scale-100",
      },
      false: {},
    },
    isDisabled: {
      true: {
        base: "opacity-50 cursor-not-allowed pointer-events-none",
      },
      false: {},
    },
    disableAnimation: {
      true: {
        wrapper: "transition-none",
        icon: "transition-none",
      },
      false: {},
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    isSelected: false,
    isIndeterminate: false,
    isDisabled: false,
    disableAnimation: false,
  },
  compoundVariants: [
    // Selected states for each color
    {
      isSelected: true,
      color: "default",
      class: {
        wrapper: "bg-gray-600 border-gray-600",
      },
    },
    {
      isSelected: true,
      color: "primary",
      class: {
        wrapper: "bg-blue-600 border-blue-600",
      },
    },
    {
      isSelected: true,
      color: "secondary",
      class: {
        wrapper: "bg-purple-600 border-purple-600",
      },
    },
    {
      isSelected: true,
      color: "success",
      class: {
        wrapper: "bg-green-600 border-green-600",
      },
    },
    {
      isSelected: true,
      color: "warning",
      class: {
        wrapper: "bg-yellow-600 border-yellow-600",
      },
    },
    {
      isSelected: true,
      color: "danger",
      class: {
        wrapper: "bg-red-600 border-red-600",
      },
    },
    // Indeterminate states for each color
    {
      isIndeterminate: true,
      color: "default",
      class: {
        wrapper: "bg-gray-600 border-gray-600",
      },
    },
    {
      isIndeterminate: true,
      color: "primary",
      class: {
        wrapper: "bg-blue-600 border-blue-600",
      },
    },
    {
      isIndeterminate: true,
      color: "secondary",
      class: {
        wrapper: "bg-purple-600 border-purple-600",
      },
    },
    {
      isIndeterminate: true,
      color: "success",
      class: {
        wrapper: "bg-green-600 border-green-600",
      },
    },
    {
      isIndeterminate: true,
      color: "warning",
      class: {
        wrapper: "bg-yellow-600 border-yellow-600",
      },
    },
    {
      isIndeterminate: true,
      color: "danger",
      class: {
        wrapper: "bg-red-600 border-red-600",
      },
    },
  ],
});

export type CheckboxVariantProps = VariantProps<typeof checkbox>;
export type CheckboxSlots = keyof ReturnType<typeof checkbox>;

export {checkbox};

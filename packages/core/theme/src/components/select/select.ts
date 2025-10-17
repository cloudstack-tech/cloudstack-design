import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Select wrapper **Tailwind Variants** component
 *
 * @example
 * const {base, trigger, value, dropdown, option} = select({...})
 */
const select = tv({
  slots: {
    base: ["relative", "inline-flex", "w-full"],
    trigger: [
      "relative",
      "flex",
      "items-center",
      "justify-between",
      "w-full",
      "min-h-8",
      "px-3",
      "gap-2",
      "bg-select-bg",
      "border",
      "border-select-border",
      "rounded-md",
      "cursor-pointer",
      "transition-all",
      "duration-150",
      "outline-none",
    ],
    valueWrapper: ["flex-1", "flex", "items-center", "gap-2", "overflow-hidden"],
    value: ["block", "truncate", "text-xs", "text-select-text", "select-none"],
    placeholder: ["block", "truncate", "text-xs", "text-select-placeholder", "select-none"],
    iconWrapper: ["flex", "items-center", "gap-1", "shrink-0"],
    clearIcon: [
      "text-select-icon",
      "hover:text-select-icon-hover",
      "cursor-pointer",
      "transition-colors",
    ],
    arrow: ["text-select-icon", "transition-transform", "duration-150"],
    dropdown: [
      "absolute",
      "top-full",
      "left-0",
      "z-50",
      "w-full",
      "mt-1",
      "bg-select-dropdown-bg",
      "border",
      "border-select-dropdown-border",
      "rounded-md",
      "shadow-select-dropdown",
      "overflow-hidden",
    ],
    listbox: ["max-h-64", "overflow-y-auto", "py-1"],
    option: [
      "relative",
      "flex",
      "items-center",
      "justify-between",
      "w-full",
      "px-3",
      "py-2",
      "text-xs",
      "text-select-option-text",
      "bg-select-option-bg",
      "cursor-pointer",
      "transition-colors",
      "duration-150",
      "select-none",
    ],
    optionLabel: ["flex-1", "truncate"],
    optionCheck: ["shrink-0", "ml-2"],
    noData: [
      "flex",
      "items-center",
      "justify-center",
      "py-4",
      "text-xs",
      "text-select-placeholder",
      "select-none",
    ],
    tag: [
      "inline-flex",
      "items-center",
      "gap-1",
      "px-2",
      "py-0.5",
      "text-xs",
      "bg-select-tag-bg",
      "text-select-tag-text",
      "border",
      "border-select-tag-border",
      "rounded",
    ],
    tagClose: ["cursor-pointer", "hover:text-red-500", "transition-colors"],
  },
  variants: {
    size: {
      sm: {
        trigger: "min-h-6 px-2",
        value: "text-xs",
        placeholder: "text-xs",
      },
      md: {
        trigger: "min-h-8 px-3",
        value: "text-xs",
        placeholder: "text-xs",
      },
      lg: {
        trigger: "min-h-10 px-4",
        value: "text-sm",
        placeholder: "text-sm",
      },
    },
    isDisabled: {
      true: {
        trigger: [
          "bg-select-disabled-bg",
          "border-select-disabled-border",
          "cursor-not-allowed",
          "opacity-50",
        ],
        value: "text-select-disabled-text",
        placeholder: "text-select-disabled-text",
      },
      false: {
        trigger: ["hover:border-select-hover-border", "hover:shadow-select-hover"],
      },
    },
    isOpen: {
      true: {
        trigger: ["border-select-focus-border", "ring-2", "ring-select-focus-ring"],
        arrow: "rotate-180",
      },
      false: {},
    },
    isInvalid: {
      true: {
        trigger: "border-input-error-border",
      },
      false: {},
    },
    isSelected: {
      true: {
        option: ["bg-select-option-selected-bg", "text-select-option-selected-text"],
      },
      false: {},
    },
    isOptionDisabled: {
      true: {
        option: [
          "bg-select-option-disabled-bg",
          "text-select-option-disabled-text",
          "cursor-not-allowed",
          "opacity-50",
        ],
      },
      false: {
        option: ["hover:bg-select-option-hover-bg", "hover:text-select-option-hover-text"],
      },
    },
    fullWidth: {
      true: {
        base: "w-full",
      },
      false: {
        base: "inline-flex",
      },
    },
  },
  defaultVariants: {
    size: "md",
    isDisabled: false,
    isOpen: false,
    isInvalid: false,
    isSelected: false,
    isOptionDisabled: false,
    fullWidth: true,
  },
  compoundVariants: [
    // Disabled + Open
    {
      isDisabled: true,
      isOpen: true,
      class: {
        trigger: "ring-0",
      },
    },
    // Open + Invalid
    {
      isOpen: true,
      isInvalid: true,
      class: {
        trigger: "border-input-error-border ring-red-500/20",
      },
    },
  ],
});

export type SelectVariantProps = VariantProps<typeof select>;
export type SelectSlots = keyof ReturnType<typeof select>;

export {select};

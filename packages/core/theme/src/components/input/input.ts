import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Input wrapper **Tailwind Variants** component
 *
 * const {base, input, clearButton, inputWrapper} = input({...})
 *
 * @example
 * <div className={base()}>
 *   <div className={inputWrapper()}>
 *     <input className={input()} />
 *     <button className={clearButton()}>×</button>
 *   </div>
 * </div>
 */
const input = tv({
  slots: {
    base: ["group", "relative", "inline-flex", "w-full"],
    inputWrapper: [
      "relative",
      "flex",
      "items-center",
      "w-full",
      "min-h-8",
      "px-3",
      "gap-2",
      "bg-input-bg",
      "border",
      "border-input-border",
      "transition-all",
      "duration-150",
    ],
    input: [
      "w-full",
      "h-full",
      "text-xs",
      "text-input-text",
      "bg-transparent",
      "outline-none",
      "placeholder:text-input-placeholder",
      "placeholder:select-none",
    ],
    clearButton: [
      "flex",
      "items-center",
      "justify-center",
      "w-4",
      "h-4",
      "text-input-clear-icon",
      "hover:text-input-clear-icon-hover",
      "cursor-pointer",
      "transition-colors",
      "duration-150",
    ],
    prefix: ["flex", "items-center", "text-input-affix", "select-none"],
    suffix: ["flex", "items-center", "text-input-affix", "select-none"],
  },
  variants: {
    variant: {
      flat: {
        inputWrapper: [""],
      },
      bordered: {
        inputWrapper: [""],
      },
      underlined: {
        inputWrapper: ["px-0", "border-0", "border-b", "rounded-none"],
      },
    },
    size: {
      sm: {
        inputWrapper: "min-h-6 px-2",
        input: "text-xs",
      },
      md: {
        inputWrapper: "min-h-8 px-3",
        input: "text-xs",
      },
      lg: {
        inputWrapper: "min-h-10 px-4",
        input: "text-sm",
      },
    },
    isDisabled: {
      true: {
        inputWrapper: [
          "bg-input-disabled-bg",
          "border-input-disabled-border",
          "cursor-not-allowed",
          "opacity-50",
        ],
        input: ["text-input-disabled-text", "cursor-not-allowed"],
      },
      false: {
        inputWrapper: ["hover:border-input-hover-border", "hover:shadow-input-hover"],
      },
    },
    isInvalid: {
      true: {
        inputWrapper: "border-input-error-border",
      },
      false: {},
    },
    isFocused: {
      true: {
        inputWrapper: ["border-input-focus-border", "ring-2", "ring-input-focus-ring"],
      },
      false: {},
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
    variant: "bordered",
    size: "md",
    isDisabled: false,
    isInvalid: false,
    isFocused: false,
    fullWidth: true,
  },
  compoundVariants: [
    // Disabled state overrides
    {
      isDisabled: true,
      isFocused: true,
      class: {
        inputWrapper: "ring-0",
      },
    },
    // Focused + Invalid state - error border takes priority
    {
      isFocused: true,
      isInvalid: true,
      class: {
        inputWrapper: "border-input-error-border ring-red-500/20",
      },
    },
    // Focused state - keep focus border on hover
    {
      isDisabled: false,
      isFocused: true,
      class: {
        inputWrapper: "hover:border-input-focus-border hover:shadow-input-hover",
      },
    },
    // Invalid state - keep error border on hover
    {
      isDisabled: false,
      isInvalid: true,
      class: {
        inputWrapper: "hover:border-input-error-border hover:shadow-input-hover",
      },
    },
  ],
});

export type InputVariantProps = VariantProps<typeof input>;
export type InputSlots = keyof ReturnType<typeof input>;

export {input};

import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";
import {colorVariants} from "./variants";

/**
 * Button wrapper **Tailwind Variants** component
 *
 * const classNames = button({...})
 *
 * @example
 * <button
 *  className={classNames())}
 * >
 *   Button
 * </button>
 */
const button = tv({
  base: [
    "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-solid outline-transparent",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    "transform-gpu data-[pressed=true]:scale-[0.97]",
    "cursor-pointer",
    "text-xs",
    "font-medium",
  ],
  variants: {
    variant: {
      solid: "",
      text: "",
      light: "bg-transparent",
      flat: "",
      outline: "",
    },
    size: {
      sm: "min-h-6 px-3",
      md: "min-h-8 px-4",
      lg: "min-h-9 px-4.5",
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    isIconOnly: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "default",
    fullWidth: false,
    isDisabled: false,
    isInGroup: false,
    isIconOnly: false,
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: [
        // base
        "bg-btn-solid-default-bg text-btn-solid-default-text",
        // hover
        "hover:bg-btn-solid-default-hover-bg",
        // active
        "active:bg-btn-solid-default-active-bg text-btn-solid-default-text",
        // disabled
        "disabled:bg-btn-solid-default-disabled-bg",
      ],
    },

    // primary / color
    {
      variant: "solid",
      color: "primary",
      class: [
        // base
        "bg-btn-solid-primary-bg text-btn-solid-primary-text",
        // hover
        "hover:bg-btn-solid-primary-hover-bg",
        // active
        "active:bg-btn-solid-primary-active-bg",
        // disabled
        "disabled:bg-btn-solid-primary-disabled-bg",
      ],
    },
  ],
});

export type ButtonVariantProps = VariantProps<typeof button>;

export {button};

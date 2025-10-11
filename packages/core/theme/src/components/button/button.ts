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
    "transform-gpu",
    "cursor-pointer",
    "text-xs",
    "font-medium",
    "transition-all duration-75",
  ],
  variants: {
    variant: {
      solid: "hover:shadow-md active:shadow-sm",
      text: "min-h-0 px-0",
      light: "bg-transparent",
      flat: "",
      outline: "",
    },
    size: {
      sm: "min-h-6 px-3",
      md: "min-h-8 px-4",
      lg: "min-h-8.5 px-4.5",
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
        "bg-btn-solid-default-hover-bg text-btn-solid-default-text",
        "border border-btn-solid-default-border",
        // hover
        "hover:bg-btn-solid-default-hover-bg hover:border-btn-solid-default-hover-border",
        // active
        "active:bg-btn-solid-default-active-bg active:border-btn-solid-default-active-border",
        // disabled
        "disabled:bg-btn-solid-default-disabled-bg disabled:border-btn-solid-default-disabled-border",
      ],
    },
    {
      variant: "solid",
      color: "primary",
      class: [
        // base
        "bg-btn-solid-primary-bg text-btn-solid-primary-text",
        "border border-btn-solid-primary-border",
        // hover
        "hover:bg-btn-solid-primary-hover-bg hover:border-btn-solid-primary-hover-border",
        // active
        "active:bg-btn-solid-primary-active-bg active:border-btn-solid-primary-active-border",
        // disabled
        "disabled:bg-btn-solid-primary-disabled-bg disabled:border-btn-solid-primary-disabled-border",
      ],
    },
    // text / color
    {
      variant: "text",
      color: "default",
      class: [
        // base
        "text-btn-solid-default-text",
        // hover
        "hover:text-btn-solid-default-hover-text/80",
        // active
        "active:text-btn-solid-default-active-text",
      ],
    },
    {
      variant: "text",
      color: "primary",
      class: [
        // base
        "text-btn-solid-default-text",
        // hover
        "hover:text-btn-solid-primary-hover-bg",
        // active
        "active:text-btn-solid-primary-active-bg",
      ],
    },
    // light / color
    {
      variant: "light",
      color: "default",
      class: [
        // base
        "text-btn-solid-default-text",
        // hover
        "hover:text-btn-solid-default-hover-text hover:bg-btn-solid-default-hover-bg",
        // active
        "active:text-btn-solid-default-active-text active:bg-btn-solid-default-active-bg",
      ],
    },
    {
      variant: "light",
      color: "primary",
      class: [
        // base
        "text-btn-solid-default-text",
        // hover
        "hover:text-btn-solid-primary-hover-text hover:bg-btn-solid-primary-hover-bg",
        // active
        "active:text-btn-solid-primary-active-text active:bg-btn-solid-primary-active-bg",
      ],
    },

    // flat / color
    {
      variant: "flat",
      color: "default",
      class: [
        // base
        "text-btn-solid-default-text bg-btn-solid-default-hover-bg",
        "hover:text-btn-solid-default-hover-text hover:bg-btn-solid-default-hover-bg",
        "active:text-btn-solid-default-active-text active:bg-btn-solid-default-active-bg",
      ],
    },
    {
      variant: "flat",
      color: "primary",
      class: [
        // base
        "text-btn-solid-primary-text bg-btn-solid-primary-hover-bg",
        // hover
        "hover:text-btn-solid-primary-hover-text hover:bg-btn-solid-primary-hover-bg",
        // active
        "active:text-btn-solid-primary-active-text active:bg-btn-solid-primary-active-bg",
      ],
    },

    // outline / color
    {
      variant: "outline",
      color: "default",
      class: [
        // base
        "text-btn-solid-default-text",
        // hover
        "hover:text-btn-solid-default-hover-text hover:bg-btn-solid-default-hover-bg",
        "border border-btn-solid-default-border hover:border-btn-solid-default-hover-border",
        // active
        "active:text-btn-solid-default-active-text active:bg-btn-solid-default-active-bg",
        "active:border-btn-solid-default-active-border",
      ],
    },
    {
      variant: "outline",
      color: "primary",
      class: [
        "text-btn-solid-default-text",
        // hover
        "hover:text-btn-solid-primary-hover-text hover:bg-btn-solid-primary-hover-bg",
        "border border-btn-solid-primary-border hover:border-btn-solid-primary-hover-border",
        // active
        "active:text-btn-solid-primary-active-text active:bg-btn-solid-primary-active-bg",
        "active:border-btn-solid-primary-active-border",
      ],
    },
  ],
});

export type ButtonVariantProps = VariantProps<typeof button>;

export {button};

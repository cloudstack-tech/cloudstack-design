import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Alert wrapper **Tailwind Variants** component
 *
 * const classNames = alert({...})
 *
 * @example
 * <div
 *  className={classNames())}
 * >
 *   Alert Content
 * </div>
 */
const alert = tv({
  base: ["flex", "items-start", "gap-2", "px-4", "py-2", "text-xs", "transition-colors"],
  variants: {
    variant: {
      flat: "",
      outline: "border",
    },
    color: {
      default: "",
      primary: "",
      success: "",
      warning: "",
      danger: "",
    },
    inline: {
      true: "inline-flex",
      false: "flex",
    },
  },
  defaultVariants: {
    variant: "flat",
    color: "primary",
    inline: false,
  },
  compoundVariants: [
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: ["bg-[rgb(246,246,246)]", "text-default-900"],
    },
    {
      variant: "flat",
      color: "primary",
      class: ["bg-[rgb(232,244,255)]", "text-primary-700"],
    },
    {
      variant: "flat",
      color: "success",
      class: ["bg-[rgb(233,255,234)]", "text-success-700"],
    },
    {
      variant: "flat",
      color: "warning",
      class: ["bg-[rgb(255,247,232)]", "text-warning-700"],
    },
    {
      variant: "flat",
      color: "danger",
      class: ["bg-[rgb(255,232,232)]", "text-danger-700"],
    },

    // outline / color
    {
      variant: "outline",
      color: "default",
      class: ["bg-transparent", "border-default-300", "text-default-900"],
    },
    {
      variant: "outline",
      color: "primary",
      class: ["bg-transparent", "border-primary-300", "text-primary-700"],
    },
    {
      variant: "outline",
      color: "success",
      class: ["bg-transparent", "border-success-300", "text-success-700"],
    },
    {
      variant: "outline",
      color: "warning",
      class: ["bg-transparent", "border-warning-300", "text-warning-700"],
    },
    {
      variant: "outline",
      color: "danger",
      class: ["bg-transparent", "border-danger-300", "text-danger-700"],
    },
  ],
});

export type AlertVariantProps = VariantProps<typeof alert>;

export {alert};

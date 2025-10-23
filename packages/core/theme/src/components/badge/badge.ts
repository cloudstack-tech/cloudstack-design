import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Badge wrapper **Tailwind Variants** component
 *
 * const classNames = badge({...})
 *
 * @example
 * <span className={classNames()}>
 *   Badge
 * </span>
 */
const badge = tv({
  base: [
    "inline-flex",
    "items-center",
    "justify-center",
    "font-medium",
    "whitespace-nowrap",
    "transition-colors",
    "border",
  ],
  variants: {
    variant: {
      solid: "",
      outline: "bg-transparent",
      flat: "border-transparent",
      dot: "w-2 h-2 min-w-0 min-h-0 p-0 border-0 rounded-full",
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
      info: "",
    },
    size: {
      sm: "text-xs px-1.5 py-0.5 min-h-[18px]",
      md: "text-xs px-2 py-1 min-h-[22px]",
      lg: "text-sm px-2.5 py-1 min-h-[26px]",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    isDisabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "md",
    isDisabled: false,
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: "bg-gray-100 text-gray-700 border-gray-200",
    },
    {
      variant: "solid",
      color: "primary",
      class: "bg-blue-500 text-white border-blue-500",
    },
    {
      variant: "solid",
      color: "secondary",
      class: "bg-purple-500 text-white border-purple-500",
    },
    {
      variant: "solid",
      color: "success",
      class: "bg-green-500 text-white border-green-500",
    },
    {
      variant: "solid",
      color: "warning",
      class: "bg-yellow-500 text-white border-yellow-500",
    },
    {
      variant: "solid",
      color: "danger",
      class: "bg-red-500 text-white border-red-500",
    },
    {
      variant: "solid",
      color: "info",
      class: "bg-cyan-500 text-white border-cyan-500",
    },
    // outline / color
    {
      variant: "outline",
      color: "default",
      class: "text-gray-700 border-gray-300",
    },
    {
      variant: "outline",
      color: "primary",
      class: "text-blue-600 border-blue-500",
    },
    {
      variant: "outline",
      color: "secondary",
      class: "text-purple-600 border-purple-500",
    },
    {
      variant: "outline",
      color: "success",
      class: "text-green-600 border-green-500",
    },
    {
      variant: "outline",
      color: "warning",
      class: "text-yellow-600 border-yellow-500",
    },
    {
      variant: "outline",
      color: "danger",
      class: "text-red-600 border-red-500",
    },
    {
      variant: "outline",
      color: "info",
      class: "text-cyan-600 border-cyan-500",
    },
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: "bg-gray-100 text-gray-700",
    },
    {
      variant: "flat",
      color: "primary",
      class: "bg-blue-100 text-blue-700",
    },
    {
      variant: "flat",
      color: "secondary",
      class: "bg-purple-100 text-purple-700",
    },
    {
      variant: "flat",
      color: "success",
      class: "bg-green-100 text-green-700",
    },
    {
      variant: "flat",
      color: "warning",
      class: "bg-yellow-100 text-yellow-700",
    },
    {
      variant: "flat",
      color: "danger",
      class: "bg-red-100 text-red-700",
    },
    {
      variant: "flat",
      color: "info",
      class: "bg-cyan-100 text-cyan-700",
    },
    // dot / color
    {
      variant: "dot",
      color: "default",
      class: "bg-gray-500",
    },
    {
      variant: "dot",
      color: "primary",
      class: "bg-blue-500",
    },
    {
      variant: "dot",
      color: "secondary",
      class: "bg-purple-500",
    },
    {
      variant: "dot",
      color: "success",
      class: "bg-green-500",
    },
    {
      variant: "dot",
      color: "warning",
      class: "bg-yellow-500",
    },
    {
      variant: "dot",
      color: "danger",
      class: "bg-red-500",
    },
    {
      variant: "dot",
      color: "info",
      class: "bg-cyan-500",
    },
  ],
});

export type BadgeVariantProps = VariantProps<typeof badge>;

export {badge};

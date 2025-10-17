import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Tabs wrapper **Tailwind Variants** component
 *
 * const {base, tabList, tab, slider} = tabs({...})
 *
 * @example
 * <div className={base())}>
 *   <div className={tabList())}>
 *     <button className={tab()}> Tab 1 </button>
 *     <button className={tab()}> Tab 2 </button>
 *   </div>
 *   <div className={slider()}></div>
 * </div>
 */
const tabs = tv({
  slots: {
    base: ["relative", "inline-flex", "flex-col", "items-start"],
    tabList: ["relative", "flex", "items-center", "gap-2", "w-full"],
    tab: [
      "z-0",
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "appearance-none",
      "select-none",
      "whitespace-nowrap",
      "subpixel-antialiased",
      "tap-highlight-transparent",
      "cursor-pointer",
      "transition-all",
      "duration-200",
      "px-4",
      "min-h-8",
      "text-xs",
      "font-medium",
      "bg-transparent",
      "outline-none",
      "border-none",
    ],
    tabContent: ["w-full", "mt-4"],
    slider: ["absolute", "bottom-0", "h-0.5", "transition-all", "duration-300", "ease-in-out"],
  },
  variants: {
    variant: {
      solid: {
        tab: ["rounded-md"],
      },
      light: {
        tab: ["rounded-md"],
      },
      underlined: {
        tab: ["border-b-2", "border-b-transparent", "rounded-none"],
      },
    },
    color: {
      default: {},
      primary: {},
    },
    animation: {
      slide: {},
      flash: {
        tab: [
          "after:content-['']",
          "after:absolute",
          "after:bottom-[-2px]",
          "after:left-1/2",
          "after:h-0.5",
          "after:w-0",
          "after:transition-[width,left]",
          "after:duration-300",
          "after:ease-in-out",
        ],
      },
      none: {},
    },
    size: {
      sm: {
        tab: "min-h-6 px-3 text-xs",
      },
      md: {
        tab: "min-h-8 px-4 text-xs",
      },
      lg: {
        tab: "min-h-10 px-5 text-sm",
      },
    },
    fullWidth: {
      true: {
        base: "w-full",
        tabList: "w-full",
        tab: "flex-1",
      },
      false: {},
    },
    isDisabled: {
      true: {
        tab: "opacity-50 cursor-not-allowed",
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: "underlined",
    color: "primary",
    animation: "slide",
    size: "md",
    fullWidth: false,
    isDisabled: false,
  },
  compoundVariants: [
    // variant: solid
    {
      variant: "solid",
      color: "default",
      class: {
        tab: [
          "text-btn-solid-default-text",
          "hover:bg-btn-solid-default-hover-bg",
          "data-[active=true]:bg-btn-solid-default-hover-bg",
          "data-[active=true]:text-btn-solid-default-text",
        ],
        slider: "hidden",
      },
    },
    {
      variant: "solid",
      color: "primary",
      class: {
        tab: [
          "text-btn-solid-default-text",
          "hover:bg-btn-solid-primary-hover-bg/10",
          "hover:text-btn-solid-primary-bg",
          "data-[active=true]:bg-btn-solid-primary-bg",
          "data-[active=true]:text-btn-solid-primary-text",
        ],
        slider: "hidden",
      },
    },
    // variant: light
    {
      variant: "light",
      color: "default",
      class: {
        tab: [
          "text-btn-solid-default-text",
          "hover:bg-btn-solid-default-hover-bg",
          "data-[active=true]:bg-btn-solid-default-hover-bg",
          "data-[active=true]:text-btn-solid-default-text",
        ],
        slider: "hidden",
      },
    },
    {
      variant: "light",
      color: "primary",
      class: {
        tab: [
          "text-btn-solid-default-text",
          "hover:bg-btn-solid-primary-hover-bg/10",
          "hover:text-btn-solid-primary-bg",
          "data-[active=true]:bg-btn-solid-primary-hover-bg/20",
          "data-[active=true]:text-btn-solid-primary-bg",
        ],
        slider: "hidden",
      },
    },
    // variant: underlined
    {
      variant: "underlined",
      color: "default",
      class: {
        tab: [
          "text-btn-solid-default-text",
          "hover:text-btn-solid-default-hover-text",
          "data-[active=true]:text-btn-solid-default-text",
        ],
        slider: "bg-btn-solid-default-border",
      },
    },
    {
      variant: "underlined",
      color: "primary",
      class: {
        tab: [
          "text-btn-solid-default-text",
          "hover:text-btn-solid-primary-bg",
          "data-[active=true]:text-btn-solid-primary-bg",
        ],
        slider: "bg-btn-solid-primary-bg",
      },
    },
    // animation: flash - active state
    {
      animation: "flash",
      class: {
        tab: ["data-[active=true]:after:left-0", "data-[active=true]:after:w-full"],
      },
    },
    {
      animation: "flash",
      color: "default",
      class: {
        tab: ["after:bg-btn-solid-default-border"],
        slider: "hidden",
      },
    },
    {
      animation: "flash",
      color: "primary",
      class: {
        tab: ["after:bg-btn-solid-primary-bg"],
        slider: "hidden",
      },
    },
    // animation: none
    {
      animation: "none",
      class: {
        slider: "hidden",
      },
    },
    {
      animation: "none",
      variant: "underlined",
      color: "default",
      class: {
        tab: ["data-[active=true]:border-b-btn-solid-default-border"],
      },
    },
    {
      animation: "none",
      variant: "underlined",
      color: "primary",
      class: {
        tab: ["data-[active=true]:border-b-btn-solid-primary-bg"],
      },
    },
  ],
});

export type TabsVariantProps = VariantProps<typeof tabs>;
export type TabsSlots = keyof ReturnType<typeof tabs>;

export {tabs};

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
    // ==================== variant: solid ====================
    {
      variant: "solid",
      color: "default",
      class: {
        tab: [
          // base
          "bg-tab-default-bg",
          "text-tab-default-text",
          // hover
          "hover:bg-tab-default-hover-bg",
          "hover:text-tab-default-hover-text",
          // active
          "data-[active=true]:bg-tab-default-active-bg",
          "data-[active=true]:text-tab-default-active-text",
          "data-[active=true]:font-semibold",
          // disabled
          "data-[disabled=true]:bg-tab-default-disabled-bg",
          "data-[disabled=true]:text-tab-default-disabled-text",
        ],
        slider: "hidden",
      },
    },
    {
      variant: "solid",
      color: "primary",
      class: {
        tab: [
          // base
          "bg-tab-primary-bg",
          "text-tab-primary-text",
          // hover
          "hover:bg-tab-primary-hover-bg",
          "hover:text-tab-primary-hover-text",
          // active
          "data-[active=true]:bg-tab-primary-active-bg",
          "data-[active=true]:text-tab-primary-active-text",
          "data-[active=true]:font-semibold",
          // disabled
          "data-[disabled=true]:bg-tab-primary-disabled-bg",
          "data-[disabled=true]:text-tab-primary-disabled-text",
        ],
        slider: "hidden",
      },
    },

    // ==================== variant: light ====================
    {
      variant: "light",
      color: "default",
      class: {
        tab: [
          // base
          "bg-tab-default-bg",
          "text-tab-default-text",
          // hover
          "hover:bg-tab-default-hover-bg",
          "hover:text-tab-default-hover-text",
          // active
          "data-[active=true]:bg-tab-default-active-bg",
          "data-[active=true]:text-tab-default-active-text",
          "data-[active=true]:font-semibold",
          // disabled
          "data-[disabled=true]:bg-tab-default-disabled-bg",
          "data-[disabled=true]:text-tab-default-disabled-text",
        ],
        slider: "hidden",
      },
    },
    {
      variant: "light",
      color: "primary",
      class: {
        tab: [
          // base
          "bg-tab-primary-bg",
          "text-tab-primary-text",
          // hover
          "hover:bg-tab-primary-hover-bg",
          "hover:text-tab-primary-hover-text",
          // active
          "data-[active=true]:bg-tab-primary-hover-bg",
          "data-[active=true]:text-tab-primary-hover-text",
          "data-[active=true]:font-semibold",
          // disabled
          "data-[disabled=true]:bg-tab-primary-disabled-bg",
          "data-[disabled=true]:text-tab-primary-disabled-text",
        ],
        slider: "hidden",
      },
    },

    // ==================== variant: underlined ====================
    {
      variant: "underlined",
      color: "default",
      class: {
        tab: [
          // base
          "bg-transparent",
          "text-tab-default-text",
          // hover - 添加背景色
          "hover:bg-tab-default-hover-bg",
          "hover:text-tab-default-hover-text",
          // active
          "data-[active=true]:text-tab-underlined-default-active-text",
          "data-[active=true]:font-semibold",
          // disabled
          "data-[disabled=true]:text-tab-default-disabled-text",
        ],
        slider: "bg-tab-underlined-default-indicator",
      },
    },
    {
      variant: "underlined",
      color: "primary",
      class: {
        tab: [
          // base
          "bg-transparent",
          "text-tab-primary-text",
          // hover - 添加背景色
          "hover:bg-tab-primary-hover-bg",
          "hover:text-tab-primary-hover-text",
          // active
          "data-[active=true]:text-tab-underlined-primary-active-text",
          "data-[active=true]:font-semibold",
          // disabled
          "data-[disabled=true]:text-tab-primary-disabled-text",
        ],
        slider: "bg-tab-underlined-primary-indicator",
      },
    },

    // ==================== animation: flash ====================
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
        tab: ["after:bg-tab-underlined-default-indicator"],
        slider: "hidden",
      },
    },
    {
      animation: "flash",
      color: "primary",
      class: {
        tab: ["after:bg-tab-underlined-primary-indicator"],
        slider: "hidden",
      },
    },

    // ==================== animation: none ====================
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
        tab: ["data-[active=true]:border-b-tab-underlined-default-indicator"],
      },
    },
    {
      animation: "none",
      variant: "underlined",
      color: "primary",
      class: {
        tab: ["data-[active=true]:border-b-tab-underlined-primary-indicator"],
      },
    },
  ],
});

export type TabsVariantProps = VariantProps<typeof tabs>;
export type TabsSlots = keyof ReturnType<typeof tabs>;

export {tabs};

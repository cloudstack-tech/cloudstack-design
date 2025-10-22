import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Stack wrapper **Tailwind Variants** component
 *
 * const classNames = stack({...})
 *
 * @example
 * <div className={classNames()}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </div>
 */
const stack = tv({
  base: ["flex"],
  variants: {
    /**
     * The direction of the stack
     */
    direction: {
      vertical: "flex-col",
      horizontal: "flex-row",
    },
    /**
     * The align items of the stack container (cross axis)
     */
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    /**
     * The justify content of the stack container (main axis)
     */
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    /**
     * Whether the stack container should wrap
     */
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
  },
  defaultVariants: {
    direction: "vertical",
    align: "stretch",
    justify: "start",
    wrap: false,
  },
});

export type StackVariantProps = VariantProps<typeof stack>;

export {stack};

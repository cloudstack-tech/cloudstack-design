import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Flex wrapper **Tailwind Variants** component
 *
 * const classNames = flex({...})
 *
 * @example
 * <div className={classNames()}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </div>
 */
const flex = tv({
  base: ["flex"],
  variants: {
    /**
     * The direction of the flex container
     */
    direction: {
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
      col: "flex-col",
      "col-reverse": "flex-col-reverse",
    },
    /**
     * The justify content of the flex container
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
     * The align items of the flex container
     */
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    /**
     * Whether the flex container should wrap
     */
    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse",
    },
    /**
     * The inline flex
     */
    inline: {
      true: "inline-flex",
      false: "flex",
    },
  },
  defaultVariants: {
    direction: "row",
    justify: "start",
    align: "start",
    wrap: "nowrap",
    inline: false,
  },
});

export type FlexVariantProps = VariantProps<typeof flex>;

export {flex};

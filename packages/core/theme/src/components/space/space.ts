import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Space wrapper **Tailwind Variants** component
 *
 * const classNames = space({...})
 *
 * @example
 * <div className={classNames()}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </div>
 */
const space = tv({
  base: ["inline-flex"],
  variants: {
    /**
     * The direction of the space container
     */
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    /**
     * The align items of the space container
     */
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
    },
    /**
     * Whether the space container should wrap
     */
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
  },
  defaultVariants: {
    direction: "horizontal",
    align: "center",
    wrap: false,
  },
});

export type SpaceVariantProps = VariantProps<typeof space>;

export {space};

import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Grid wrapper **Tailwind Variants** component
 *
 * const classNames = grid({...})
 *
 * @example
 * <div className={classNames()}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </div>
 */
const grid = tv({
  base: ["grid"],
  variants: {
    /**
     * The number of columns
     */
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      7: "grid-cols-7",
      8: "grid-cols-8",
      9: "grid-cols-9",
      10: "grid-cols-10",
      11: "grid-cols-11",
      12: "grid-cols-12",
    },
    /**
     * The number of rows
     */
    rows: {
      1: "grid-rows-1",
      2: "grid-rows-2",
      3: "grid-rows-3",
      4: "grid-rows-4",
      5: "grid-rows-5",
      6: "grid-rows-6",
    },
    /**
     * Grid auto flow
     */
    flow: {
      row: "grid-flow-row",
      col: "grid-flow-col",
      dense: "grid-flow-dense",
      "row-dense": "grid-flow-row-dense",
      "col-dense": "grid-flow-col-dense",
    },
  },
  defaultVariants: {},
});

export type GridVariantProps = VariantProps<typeof grid>;

export {grid};

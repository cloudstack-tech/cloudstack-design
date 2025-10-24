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
      13: "grid-cols-[repeat(13,minmax(0,1fr))]",
      14: "grid-cols-[repeat(14,minmax(0,1fr))]",
      15: "grid-cols-[repeat(15,minmax(0,1fr))]",
      16: "grid-cols-[repeat(16,minmax(0,1fr))]",
      17: "grid-cols-[repeat(17,minmax(0,1fr))]",
      18: "grid-cols-[repeat(18,minmax(0,1fr))]",
      19: "grid-cols-[repeat(19,minmax(0,1fr))]",
      20: "grid-cols-[repeat(20,minmax(0,1fr))]",
      21: "grid-cols-[repeat(21,minmax(0,1fr))]",
      22: "grid-cols-[repeat(22,minmax(0,1fr))]",
      23: "grid-cols-[repeat(23,minmax(0,1fr))]",
      24: "grid-cols-[repeat(24,minmax(0,1fr))]",
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

/**
 * Grid Item **Tailwind Variants** component
 *
 * @example
 * <Grid.Item span={2} offset={1}>Content</Grid.Item>
 */
const gridItem = tv({
  base: [],
  variants: {
    /**
     * Number of columns to span
     */
    span: {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
      5: "col-span-5",
      6: "col-span-6",
      7: "col-span-7",
      8: "col-span-8",
      9: "col-span-9",
      10: "col-span-10",
      11: "col-span-11",
      12: "col-span-12",
      full: "col-span-full",
    },
    /**
     * Number of rows to span
     */
    rowSpan: {
      1: "row-span-1",
      2: "row-span-2",
      3: "row-span-3",
      4: "row-span-4",
      5: "row-span-5",
      6: "row-span-6",
      full: "row-span-full",
    },
  },
  defaultVariants: {},
});

export type GridVariantProps = VariantProps<typeof grid>;
export type GridItemVariantProps = VariantProps<typeof gridItem>;

export {grid, gridItem};

import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Table wrapper **Tailwind Variants** component
 */
const table = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type TableVariantProps = VariantProps<typeof table>;

export {table};

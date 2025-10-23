import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Pagination wrapper **Tailwind Variants** component
 */
const pagination = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type PaginationVariantProps = VariantProps<typeof pagination>;

export {pagination};

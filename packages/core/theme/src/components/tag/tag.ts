import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Tag wrapper **Tailwind Variants** component
 */
const tag = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type TagVariantProps = VariantProps<typeof tag>;

export {tag};

import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Radio wrapper **Tailwind Variants** component
 */
const radio = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type RadioVariantProps = VariantProps<typeof radio>;

export {radio};

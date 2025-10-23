import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Menu wrapper **Tailwind Variants** component
 */
const menu = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type MenuVariantProps = VariantProps<typeof menu>;

export {menu};

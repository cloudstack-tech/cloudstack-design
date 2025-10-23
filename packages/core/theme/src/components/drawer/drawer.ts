import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Drawer wrapper **Tailwind Variants** component
 */
const drawer = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type DrawerVariantProps = VariantProps<typeof drawer>;

export {drawer};

import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * NavigationMenu wrapper **Tailwind Variants** component
 */
const navigationMenu = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type NavigationMenuVariantProps = VariantProps<typeof navigationMenu>;

export {navigationMenu};

import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Dropdown wrapper **Tailwind Variants** component
 */
const dropdown = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type DropdownVariantProps = VariantProps<typeof dropdown>;

export {dropdown};

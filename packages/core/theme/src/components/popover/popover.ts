import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Popover wrapper **Tailwind Variants** component
 */
const popover = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type PopoverVariantProps = VariantProps<typeof popover>;

export {popover};

import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Autocomplete wrapper **Tailwind Variants** component
 */
const autocomplete = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type AutocompleteVariantProps = VariantProps<typeof autocomplete>;

export {autocomplete};

import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Breadcrumb wrapper **Tailwind Variants** component
 */
const breadcrumb = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type BreadcrumbVariantProps = VariantProps<typeof breadcrumb>;

export {breadcrumb};

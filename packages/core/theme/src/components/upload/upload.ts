import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Upload wrapper **Tailwind Variants** component
 */
const upload = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type UploadVariantProps = VariantProps<typeof upload>;

export {upload};

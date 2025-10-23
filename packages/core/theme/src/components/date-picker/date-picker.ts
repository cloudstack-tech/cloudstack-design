import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * DatePicker wrapper **Tailwind Variants** component
 */
const datePicker = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type DatePickerVariantProps = VariantProps<typeof datePicker>;

export {datePicker};

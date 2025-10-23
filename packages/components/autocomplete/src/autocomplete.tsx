import {forwardRef} from "@cloudstack-design/system";

import { UseAutocompleteProps, useAutocomplete } from "./use-autocomplete";

export interface AutocompleteProps extends UseAutocompleteProps {}

const Autocomplete = forwardRef<"div", AutocompleteProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useAutocomplete({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Autocomplete.displayName = "CloudStackDesign.Autocomplete";

export default Autocomplete;
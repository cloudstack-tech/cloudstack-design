import {forwardRef} from "@cloudstack-design/system";

import { UseCheckboxProps, useCheckbox } from "./use-checkbox";

export interface CheckboxProps extends UseCheckboxProps {}

const Checkbox = forwardRef<"div", CheckboxProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useCheckbox({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Checkbox.displayName = "CloudStackDesign.Checkbox";

export default Checkbox;
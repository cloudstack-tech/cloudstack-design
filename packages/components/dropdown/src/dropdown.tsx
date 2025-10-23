import {forwardRef} from "@cloudstack-design/system";

import { UseDropdownProps, useDropdown } from "./use-dropdown";

export interface DropdownProps extends UseDropdownProps {}

const Dropdown = forwardRef<"div", DropdownProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useDropdown({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Dropdown.displayName = "CloudStackDesign.Dropdown";

export default Dropdown;
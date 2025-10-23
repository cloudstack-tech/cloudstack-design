import {forwardRef} from "@cloudstack-design/system";

import { UseInputGroupProps, useInputGroup } from "./use-input-group";

export interface InputGroupProps extends UseInputGroupProps {}

const InputGroup = forwardRef<"div", InputGroupProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useInputGroup({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

InputGroup.displayName = "CloudStackDesign.InputGroup";

export default InputGroup;
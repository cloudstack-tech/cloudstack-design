import {forwardRef} from "@cloudstack-design/system";

import { UseSwitchProps, useSwitch } from "./use-switch";

export interface SwitchProps extends UseSwitchProps {}

const Switch = forwardRef<"div", SwitchProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useSwitch({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Switch.displayName = "CloudStackDesign.Switch";

export default Switch;
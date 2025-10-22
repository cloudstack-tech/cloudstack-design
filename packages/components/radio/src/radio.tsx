import {forwardRef} from "@cloudstack-design/system";

import { UseRadioProps, useRadio } from "./use-radio";

export interface RadioProps extends UseRadioProps {}

const Radio = forwardRef<"div", RadioProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useRadio({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Radio.displayName = "CloudStackDesign.Radio";

export default Radio;
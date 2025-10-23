import {forwardRef} from "@cloudstack-design/system";

import { UseLabelProps, useLabel } from "./use-label";

export interface LabelProps extends UseLabelProps {}

const Label = forwardRef<"div", LabelProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useLabel({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Label.displayName = "CloudStackDesign.Label";

export default Label;
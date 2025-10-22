import {forwardRef} from "@cloudstack-design/system";

import {UseDividerProps, useDivider} from "./use-divider";

export interface DividerProps extends UseDividerProps {}

const Divider = forwardRef<"div", DividerProps>((props, ref) => {
  const {Component, domRef, children, styles, style, ...otherProps} = useDivider({...props, ref});

  return (
    <Component ref={domRef} className={styles} style={style} {...otherProps}>
      {children}
    </Component>
  );
});

Divider.displayName = "CloudStackDesign.Divider";

export default Divider;

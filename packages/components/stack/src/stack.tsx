import {forwardRef} from "@cloudstack-design/system";

import {UseStackProps, useStack} from "./use-stack";

export interface StackProps extends UseStackProps {}

const Stack = forwardRef<"div", StackProps>((props, ref) => {
  const {Component, domRef, children, styles, style, ...otherProps} = useStack({...props, ref});

  return (
    <Component ref={domRef} className={styles} style={style} {...otherProps}>
      {children}
    </Component>
  );
});

Stack.displayName = "CloudStackDesign.Stack";

export default Stack;

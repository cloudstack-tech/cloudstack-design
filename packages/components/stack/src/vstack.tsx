import {forwardRef} from "@cloudstack-design/system";

import {StackProps} from "./stack";
import {useStack} from "./use-stack";

export interface VStackProps extends Omit<StackProps, "direction"> {}

const VStack = forwardRef<"div", VStackProps>((props, ref) => {
  const {Component, domRef, children, styles, style, ...otherProps} = useStack({
    ...props,
    direction: "vertical",
    ref,
  });

  return (
    <Component ref={domRef} className={styles} style={style} {...otherProps}>
      {children}
    </Component>
  );
});

VStack.displayName = "CloudStackDesign.VStack";

export default VStack;

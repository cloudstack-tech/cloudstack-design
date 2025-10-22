import {forwardRef} from "@cloudstack-design/system";

import {StackProps} from "./stack";
import {useStack} from "./use-stack";

export interface HStackProps extends Omit<StackProps, "direction"> {}

const HStack = forwardRef<"div", HStackProps>((props, ref) => {
  const {Component, domRef, children, styles, style, ...otherProps} = useStack({
    ...props,
    direction: "horizontal",
    ref,
  });

  return (
    <Component ref={domRef} className={styles} style={style} {...otherProps}>
      {children}
    </Component>
  );
});

HStack.displayName = "CloudStackDesign.HStack";

export default HStack;

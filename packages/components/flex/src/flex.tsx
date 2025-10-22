import {forwardRef} from "@cloudstack-design/system";

import {UseFlexProps, useFlex} from "./use-flex";

export interface FlexProps extends UseFlexProps {}

const Flex = forwardRef<"div", FlexProps>((props, ref) => {
  const {Component, domRef, children, styles, style, ...otherProps} = useFlex({...props, ref});

  return (
    <Component ref={domRef} className={styles} style={style} {...otherProps}>
      {children}
    </Component>
  );
});

Flex.displayName = "CloudStackDesign.Flex";

export default Flex;

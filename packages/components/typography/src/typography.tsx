import {forwardRef} from "@cloudstack-design/system";

import { UseTypographyProps, useTypography } from "./use-typography";

export interface TypographyProps extends UseTypographyProps {}

const Typography = forwardRef<"div", TypographyProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useTypography({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Typography.displayName = "CloudStackDesign.Typography";

export default Typography;
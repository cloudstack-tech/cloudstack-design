import {forwardRef} from "@cloudstack-design/system";

import { UseTagProps, useTag } from "./use-tag";

export interface TagProps extends UseTagProps {}

const Tag = forwardRef<"div", TagProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useTag({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Tag.displayName = "CloudStackDesign.Tag";

export default Tag;
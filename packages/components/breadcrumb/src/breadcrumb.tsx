import {forwardRef} from "@cloudstack-design/system";

import { UseBreadcrumbProps, useBreadcrumb } from "./use-breadcrumb";

export interface BreadcrumbProps extends UseBreadcrumbProps {}

const Breadcrumb = forwardRef<"div", BreadcrumbProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useBreadcrumb({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Breadcrumb.displayName = "CloudStackDesign.Breadcrumb";

export default Breadcrumb;
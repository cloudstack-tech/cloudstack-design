import {forwardRef} from "@cloudstack-design/system";

import { UsePaginationProps, usePagination } from "./use-pagination";

export interface PaginationProps extends UsePaginationProps {}

const Pagination = forwardRef<"div", PaginationProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  usePagination({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Pagination.displayName = "CloudStackDesign.Pagination";

export default Pagination;
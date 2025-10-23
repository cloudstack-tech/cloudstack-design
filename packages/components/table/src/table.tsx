import {forwardRef} from "@cloudstack-design/system";

import { UseTableProps, useTable } from "./use-table";

export interface TableProps extends UseTableProps {}

const Table = forwardRef<"div", TableProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useTable({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Table.displayName = "CloudStackDesign.Table";

export default Table;
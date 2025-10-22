import {forwardRef} from "@cloudstack-design/system";

import {UseGridProps, useGrid} from "./use-grid";

export interface GridProps extends UseGridProps {}

const Grid = forwardRef<"div", GridProps>((props, ref) => {
  const {Component, domRef, children, styles, style, ...otherProps} = useGrid({...props, ref});

  return (
    <Component ref={domRef} className={styles} style={style} {...otherProps}>
      {children}
    </Component>
  );
});

Grid.displayName = "CloudStackDesign.Grid";

export default Grid;

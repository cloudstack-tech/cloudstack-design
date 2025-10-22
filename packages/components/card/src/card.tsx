import {forwardRef} from "@cloudstack-design/system";
import {ChevronDown} from "lucide-react";

import {UseCardProps, useCard} from "./use-card";

export interface CardProps extends UseCardProps {}

const Card = forwardRef<"div", CardProps>((props, ref) => {
  const {
    Component,
    title,
    collapsible,
    shouldShowHeader,
    children,
    getBaseProps,
    getHeaderProps,
    getTitleProps,
    getBodyProps,
    getCollapseIconProps,
  } = useCard({...props, ref});

  return (
    <Component {...getBaseProps()}>
      {shouldShowHeader && (
        <div {...getHeaderProps()}>
          <div {...getTitleProps()}>{title}</div>
          {collapsible && <ChevronDown {...getCollapseIconProps()} size={16} />}
        </div>
      )}
      <div {...getBodyProps()}>{children}</div>
    </Component>
  );
});

Card.displayName = "CloudStackDesign.Card";

export default Card;

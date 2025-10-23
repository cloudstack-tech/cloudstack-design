import {forwardRef} from "@cloudstack-design/system";
import {InboxIcon} from "lucide-react";

import {UseEmptyProps, useEmpty} from "./use-empty";

export interface EmptyProps extends UseEmptyProps {
  /**
   * Custom icon component to use instead of the default icon
   */
  icon?: React.ComponentType<{className?: string}>;
}

const Empty = forwardRef<"div", EmptyProps>((props, ref) => {
  const {
    Component,
    domRef,
    description = "暂无数据",
    children,
    baseStyles,
    iconStyles,
    descriptionStyles,
    icon: IconComponent,
    ...otherProps
  } = useEmpty({...props, ref});

  const Icon = IconComponent || InboxIcon;

  return (
    <Component ref={domRef} className={baseStyles} {...otherProps}>
      <Icon className={iconStyles} />
      {description && <span className={descriptionStyles}>{description}</span>}
      {children}
    </Component>
  );
});

Empty.displayName = "CloudStackDesign.Empty";

export default Empty;

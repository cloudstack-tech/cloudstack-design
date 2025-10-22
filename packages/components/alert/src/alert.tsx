import {forwardRef} from "@cloudstack-design/system";
import {useMemo} from "react";
import {CircleCheck, CircleX, CircleAlert, Info, HelpCircle} from "lucide-react";

import {UseAlertProps, useAlert} from "./use-alert";

export interface AlertProps extends UseAlertProps {}

const Alert = forwardRef<"div", AlertProps>((props, ref) => {
  const {Component, domRef, children, styles, icon, type, classNames, ...otherProps} = useAlert({
    ...props,
    ref,
  });

  const iconElement = useMemo(() => {
    if (icon) return icon;

    const iconClassName = classNames?.icon || "";
    const size = 16;

    switch (type) {
      case "success":
        return <CircleCheck className={iconClassName} size={size} />;
      case "error":
        return <CircleX className={iconClassName} size={size} />;
      case "warning":
        return <CircleAlert className={iconClassName} size={size} />;
      case "info":
        return <Info className={iconClassName} size={size} />;
      case "question":
        return <HelpCircle className={iconClassName} size={size} />;
      default:
        return null;
    }
  }, [icon, type, classNames?.icon]);

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {iconElement}
      <div className={classNames?.content || "flex-1"}>{children}</div>
    </Component>
  );
});

Alert.displayName = "CloudStackDesign.Alert";

export default Alert;

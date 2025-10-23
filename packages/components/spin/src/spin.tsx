import {forwardRef} from "@cloudstack-design/system";
import {LoaderCircle} from "lucide-react";

import {UseSpinProps, useSpin} from "./use-spin";

export interface SpinProps extends UseSpinProps {
  /**
   * Custom icon component to use instead of the default spinner
   */
  icon?: React.ComponentType<{className?: string}>;
}

const Spin = forwardRef<"div", SpinProps>((props, ref) => {
  const {
    Component,
    domRef,
    label,
    children,
    baseStyles,
    spinnerStyles,
    labelStyles,
    icon: IconComponent,
    ...otherProps
  } = useSpin({...props, ref});

  const Icon = IconComponent || LoaderCircle;

  return (
    <Component ref={domRef} className={baseStyles} {...otherProps}>
      <Icon className={spinnerStyles} />
      {label && <span className={labelStyles}>{label}</span>}
      {children}
    </Component>
  );
});

Spin.displayName = "CloudStackDesign.Spin";

export default Spin;

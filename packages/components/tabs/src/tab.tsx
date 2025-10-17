import {forwardRef} from "react";
import {useTab, UseTabProps} from "./use-tab";

export interface TabProps extends UseTabProps {}

export const Tab = forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  const {Component, domRef, children, icon, getTabProps} = useTab({...props, ref});

  return (
    <Component ref={domRef} {...getTabProps()}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Component>
  );
});

Tab.displayName = "CloudStackDesign.Tab";

export default Tab;

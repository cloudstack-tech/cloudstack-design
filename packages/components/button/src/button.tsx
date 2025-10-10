import {forwardRef} from "react";
import {useButton, UseButtonProps} from "./use-button";

export interface ButtonProps extends UseButtonProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {Component, domRef, getButtonProps, ...rest} = useButton({...props, ref});

  return (
    <Component ref={domRef} {...getButtonProps()}>
      {props.children}
    </Component>
  );
});

export default Button;

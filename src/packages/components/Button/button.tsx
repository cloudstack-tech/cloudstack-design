"use client";

import React from "react";
import { ButtonProps } from "./type";
import { cn } from "@/packages/utilities";
import { Spin } from "../Spin";
import { buttonVariants } from "./variants";

type InternalButtonProps = ButtonProps;
const InternalButton = React.forwardRef<HTMLButtonElement, InternalButtonProps>(
  (props, ref) => {
    const {
      disabled,
      loading,
      onClick,
      children,
      className,
      iconOnly,
      color = "primary",
      variant = "solid",
      as: Component = "button",
      icon,
      size = "base",
      ...rest
    } = props;

    const handleClick = (e: React.MouseEvent) => {
      if (disabled || loading) return;
      onClick?.(e);
    };

    const buttonClassName = cn(
      buttonVariants({ variant, color, size }),
      className
    );

    return (
      <Component
        ref={ref}
        {...rest}
        data-disabled={disabled}
        data-loading={loading}
        data-icon-only={iconOnly}
        tabIndex={0}
        className={buttonClassName}
        onClick={handleClick}
        disabled={disabled || loading}
      >
        {loading && <Spin />}
        {icon}
        {children}
      </Component>
    );
  }
);

InternalButton.displayName = "Button";

export { InternalButton as Button };

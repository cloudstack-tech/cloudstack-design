"use client";

import React from "react";
import { ButtonProps } from "./type";
import { cn } from "@/packages/utils";
import { Loader2 } from "lucide-react";

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
      ...rest
    } = props;

    // switch (variant) {
    //   case "text":
    //     return <TextButton {...props} ref={ref} />;
    //   case "outline":
    //     return <OutlineButton {...props} ref={ref} />;
    //   case "flat":
    //     return <FlatButton {...props} ref={ref} />;
    // }

    const handleClick = (e: React.MouseEvent) => {
      if (disabled || loading) return;
      onClick?.(e);
    };

    const colors: Record<string, string> = {
      primary: cn(
        "bg-primary text-btn-text hover:bg-btn-bg-hover hover:shadow-btn-shadow active:bg-btn-bg-active border-btn-border border-0",
        "disabled:bg-btn-bg-disabled disabled:text-disable disabled:border-btn-border-disabled",
        "[&[data-loading=true]]:bg-btn-bg-loading [&[data-loading=true]]:border-btn-border-loading"
      ),
      default: cn(
        "bg-btn-default-bg text-btn-default-text hover:bg-btn-default-bg-hover hover:shadow-btn-default-shadow active:bg-btn-default-bg-active border-btn-default-border",
        "disabled:bg-btn-default-bg-disabled disabled:text-disable disabled:border-btn-default-border-disabled disabled:shadow-none",
        "[&[data-loading=true]]:bg-btn-default-bg-loading [&[data-loading=true]]:border-btn-default-border-loading"
      ),
    };

    const buttonClassName = cn(
      "outline-none whitespace-nowrap inline-flex cursor-pointer items-center justify-center gap-1 text-xs font-medium transition-all duration-150 border",
      !iconOnly && "min-h-8 px-4",
      iconOnly && "min-h-8 min-w-8 p-0 aspect-square",
      colors[color],
      disabled && "cursor-not-allowed hover:shadow-none",
      className
    );

    return (
      <Component
        ref={ref}
        {...rest}
        data-disabled={disabled}
        data-loading={loading}
        tabIndex={0}
        className={buttonClassName}
        onClick={handleClick}
        disabled={disabled || loading}
      >
        {loading && <Loader2 className="animate-spin" size={12} />}
        {icon}
        {children}
      </Component>
    );
  }
);

InternalButton.displayName = "Button";

export { InternalButton as Button };

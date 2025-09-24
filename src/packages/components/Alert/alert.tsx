import { cn } from "@/packages/utilities";
import React, { useMemo } from "react";
import { AlertProps } from "./type";
import { alertVariants } from "./variants";
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleQuestion,
  FaCircleXmark,
} from "react-icons/fa6";

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => {
    const {
      icon,
      className,
      inline,
      type,
      children,
      color = "primary",
      variant = "flat",
      classNames,
      ...rest
    } = props;

    const iconElement = useMemo(() => {
      if (type === "info") {
        return (
          <FaCircleExclamation
            className={cn("alert-icon rotate-180", classNames?.icon)}
            size={16}
          />
        );
      }
      if (type === "success") {
        return (
          <FaCircleCheck
            className={cn("alert-icon", classNames?.icon)}
            size={16}
          />
        );
      }
      if (type === "error") {
        return (
          <FaCircleXmark
            className={cn("alert-icon", classNames?.icon)}
            size={16}
          />
        );
      }
      if (type === "warning") {
        return (
          <FaCircleExclamation
            className={cn("alert-icon", classNames?.icon)}
            size={16}
          />
        );
      }
      if (type === "question") {
        return (
          <FaCircleQuestion
            className={cn("alert-icon", classNames?.icon)}
            size={16}
          />
        );
      }
      return null;
    }, [type]);

    const alertClassName = cn(
      alertVariants({ color, variant }),
      {
        "inline-flex": inline,
      },
      className
    );

    return (
      <div ref={ref} {...rest} className={alertClassName}>
        {icon ?? iconElement}
        <div className={cn("flex-1", classNames?.content)}>{children}</div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

import { cn } from "@/packages/utilities";
import type { SpinProps } from "./type";
import { LoaderCircle } from "lucide-react";
import React, { useMemo } from "react";

export const Spin = ({
  icon: Icon = LoaderCircle,
  iconSize = 16,
  label,
  className,
}: SpinProps) => {
  return useMemo(() => {
    return (
      <div className={cn("flex flex-col items-center", className)}>
        <div className="animate-spin border-current border-t-transparent">
          <Icon size={iconSize} />
        </div>
        {label && <div className="mt-2">{label}</div>}
      </div>
    );
  }, [Icon, iconSize, label, className]);
};

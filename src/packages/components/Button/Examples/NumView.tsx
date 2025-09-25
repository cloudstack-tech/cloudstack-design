import { cn } from "@/packages/utilities";
import { Button, type ButtonProps } from "../";

export const NumView = ({
  value,
  children,
  className,
  ...props
}: { value: number } & ButtonProps) => {
  return (
    <Button
      variant="flat"
      color="default"
      className={cn("justify-between rounded-sm", className)}
      {...props}
    >
      <div className="font-normal flex-1 text-left">{children}</div>
      <div className="font-medium text-sm">{value}</div>
    </Button>
  );
};

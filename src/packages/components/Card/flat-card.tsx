import { cn } from "@/packages/utils";
import { Card } from ".";
import { CubeCardProps } from "./cube-card";

export default function FlatCard({ children, ...props }: CubeCardProps) {
  const {
    className,
    classNames: { root: rootClassName, ...classNames } = {},
    ...rest
  } = props;

  return (
    <Card
      classNames={{
        ...classNames,
        root: cn(
          "bg-card-bg-secondary hover:bg-card-bg-secondary-hover border-0 text-xs hover:shadow-none",
          rootClassName
        ),
        content: cn(
          "flex flex-col justify-between h-full",
          className,
          classNames?.content
        ),
      }}
      {...rest}
    >
      {children}
    </Card>
  );
}

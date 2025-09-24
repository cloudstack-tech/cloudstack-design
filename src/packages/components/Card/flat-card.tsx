import { cn } from "@/packages/utilities";
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
          "bg-btn-default-solid-hover-bg hover:bg-btn-default-solid-active-bg border-0",
          rootClassName
        ),
        content: cn(
          "flex flex-col justify-between h-full",
          className,
          classNames?.content
        ),
      }}
      hoverable={false}
      {...rest}
    >
      {children}
    </Card>
  );
}

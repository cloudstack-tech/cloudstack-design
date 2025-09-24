import { cn } from "@/packages/utilities";

export interface BreadcrumbSeparatorProps {
  /**
   * 自定义样式
   */
  className?: string;
  /**
   * 分隔符内容
   */
  children?: React.ReactNode;
}

export default function BreadcrumbSeparator({
  className,
  children = "/",
}: BreadcrumbSeparatorProps) {
  return (
    <div className={cn("text-breadcrumb-separator", className)}>{children}</div>
  );
}

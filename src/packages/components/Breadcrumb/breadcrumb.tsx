import { cn } from "@/packages/utils";

export interface BreadcrumbProps {
  /**
   * 面包屑内容
   */
  children: React.ReactNode;
  /**
   * 自定义样式
   */
  className?: string;
}

export default function Breadcrumb({ children, className }: BreadcrumbProps) {
  return (
    <div className={cn("flex items-center gap-2 text-xs", className)}>
      {children}
    </div>
  );
}

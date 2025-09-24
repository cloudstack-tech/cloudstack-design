import { cn } from "@/packages/utilities";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export interface BreadcrumbItemProps {
  children: React.ReactNode;
  /**
   * 自定义样式
   */
  className?: string;
  /**
   * 是否为活动状态
   */
  active?: boolean;
  /**
   * 链接地址
   */
  href?: string;
}

export default function BreadcrumbItem({
  children,
  className,
  active = false,
  href,
}: BreadcrumbItemProps) {
  if (href && !active) {
    return (
      <Link href={href} className={cn("text-breadcrumb-text", className)}>
        {children}
      </Link>
    );
  }

  return (
    <div
      className={twMerge(
        "text-breadcrumb-text",
        active && "text-breadcrumb-text-active",
        className
      )}
    >
      {children}
    </div>
  );
}

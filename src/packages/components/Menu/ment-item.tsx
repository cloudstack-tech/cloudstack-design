import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuItemProps } from "./types";
import { cn } from "@/packages/utilities";

export default function MenuItem({
  label,
  href,
  tooltip,
  icon,
  active,
  disabled,
  onClick,
  className,
  style,
  rightIcon,
  match = "prefix",
  prefix,
  suffix,
}: Omit<MenuItemProps, "children">) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    if (href && !onClick) {
      e.preventDefault();
    } else {
      onClick?.(e);
    }
  };

  const isActive =
    active ||
    (href &&
      (Array.isArray(href)
        ? href.some((h) => {
            if (match === "exact") {
              return pathname === h;
            }
            return pathname.startsWith(h);
          })
        : pathname.startsWith(href)));

  const content = (
    <div
      data-active={isActive}
      data-disabled={disabled}
      data-link={typeof href === "string" ? href : href?.[0]}
      className={cn(
        "flex w-full items-center gap-2 text-xs font-medium transition-colors",
        "text-menu-item-text hover:text-menu-item-hover-text hover:bg-menu-item-hover-bg",
        disabled &&
          "text-menu-item-disabled-text hover:text-menu-item-disabled-text hover:bg-menu-item-disabled-bg cursor-not-allowed hover:cursor-not-allowed",
        !disabled && "cursor-pointer",
        isActive &&
          "bg-menu-item-active-bg text-menu-item-active-text hover:text-menu-item-active-text border-r-2 font-bold",
        className
      )}
      style={style}
      onClick={handleClick}
      title={
        tooltip
          ? typeof tooltip === "string"
            ? tooltip
            : undefined
          : undefined
      }
    >
      {icon && (
        <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
          {icon}
        </span>
      )}
      <span className="flex flex-1 items-center gap-1 truncate">
        {prefix && (
          <span className="flex flex-shrink-0 items-center justify-center">
            {prefix}
          </span>
        )}
        {label}
        {suffix && (
          <span className="flex flex-shrink-0 items-center justify-center">
            {suffix}
          </span>
        )}
      </span>

      {rightIcon && (
        <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
          {rightIcon}
        </span>
      )}
    </div>
  );

  if (href && !disabled) {
    return (
      <Link href={typeof href === "string" ? href : href[0]} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

"use client";

import React, { useState } from "react";
import { type MenuItemProps, type MenuProps } from "./types";
import MenuItem from "./ment-item";
import { ChevronDownIcon, ChevronLeftIcon } from "lucide-react";
import MenuDivider from "./menu-divider";
import { cn } from "../../utils";

export default function Menu({
  title,
  titleExtra,
  titleDescription,
  items,
  className,
  style,
  collapsible = true,
  defaultCollapsed = false,
  collapsed,
  onCollapseChange,
  selectedKeys: selectedKeysProps,
  onSelectedKeysChange: onSelectedKeysChangeProps,
  defaultSelectedKeys,
  defaultOpenKeys = "all",
}: MenuProps) {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(
    defaultSelectedKeys || []
  );

  const controlledSelectedKeys = selectedKeysProps !== undefined;
  const onSelectedKeysChange = (selectedKeys: string[]) => {
    onSelectedKeysChangeProps?.(selectedKeys);
    setSelectedKeys(selectedKeys);
  };

  // 管理每个可折叠项的展开状态
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(
      typeof defaultOpenKeys === "string"
        ? defaultOpenKeys === "all"
          ? items.map((item) => item.key)
          : [defaultOpenKeys]
        : defaultOpenKeys
    )
  );

  // 内部折叠状态管理
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);

  // 判断是否为受控模式
  const isControlled = collapsed !== undefined;
  const currentCollapsed = isControlled ? collapsed : internalCollapsed;

  // 处理折叠状态变化
  const handleCollapseChange = (newCollapsed: boolean) => {
    if (!isControlled) {
      setInternalCollapsed(newCollapsed);
    }
    onCollapseChange?.(newCollapsed);
  };

  const handleItemClick = (item: MenuItemProps) => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      // 如果是可折叠项且有子项，处理展开/收起
      if (item.collapsible && item.children && item.children.length > 0) {
        e.preventDefault();
        e.stopPropagation();

        setExpandedItems((prev) => {
          const newSet = new Set(prev);
          if (newSet.has(item.key)) {
            newSet.delete(item.key);
          } else {
            newSet.add(item.key);
          }
          return newSet;
        });
      } else {
        // 普通点击处理
        item.onClick?.(e);
        onSelectedKeysChange?.([item.key]);
      }
    };
  };

  const renderMenuItem = (item: MenuItemProps, level = 0): React.ReactNode => {
    const isExpanded = expandedItems.has(item.key);
    const hasChildren = item.children && item.children.length > 0;
    const isCollapsible = item.collapsible && hasChildren;

    const isActive = !item.children && selectedKeys.includes(item.key);

    return (
      <React.Fragment key={item.key}>
        <div className="relative">
          <MenuItem
            {...item}
            key={item.key}
            onClick={handleItemClick(item)}
            active={isActive}
            className={cn(
              "w-full cursor-pointer py-2 transition-colors duration-100",
              item.className
            )}
            style={{
              paddingLeft: `${24 + level * 16}px`,
              ...item.style,
            }}
          />

          {/* 可折叠按钮 */}
          {isCollapsible && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setExpandedItems((prev) => {
                  const newSet = new Set(prev);
                  if (newSet.has(item.key)) {
                    newSet.delete(item.key);
                  } else {
                    newSet.add(item.key);
                  }
                  return newSet;
                });
              }}
              className="hover:bg-opacity-20 absolute top-1/2 right-3 flex h-5 w-5 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded transition-colors"
            >
              <ChevronDownIcon
                className={cn(
                  "h-3 w-3 transform transition-transform duration-200",
                  isExpanded ? "rotate-180" : "rotate-0"
                )}
              />
            </button>
          )}
        </div>

        {/* 子菜单项 - 带动画的展开/收起 */}
        {hasChildren && (
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              isCollapsible
                ? isExpanded
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                : "max-h-96 opacity-100"
            )}
          >
            <div className="space-y-0">
              {item.children?.map((child) => renderMenuItem(child, level + 1))}
            </div>
          </div>
        )}

        {/* 分割线 */}
        {item.divider && <MenuDivider level={level} />}
      </React.Fragment>
    );
  };

  return (
    <div className={cn("relative flex h-full", className)}>
      <div
        className={cn(
          "bg-menu-bg border-menu-border flex flex-col overflow-hidden border-r transition-all duration-300 ease-in-out",
          currentCollapsed ? "w-0" : "w-56"
        )}
        style={style}
      >
        {title && (
          <div className="flex items-center justify-between px-6 py-6">
            <h3 className="text-menu-title-text text-[14px] font-semibold whitespace-nowrap">
              {title}
            </h3>
            {titleExtra && (
              <div className="text-menu-title-text text-[14px] font-semibold whitespace-nowrap">
                {titleExtra}
              </div>
            )}
          </div>
        )}
        {titleDescription && (
          <div className="text-menu-title-text text-[14px] font-semibold whitespace-nowrap">
            {titleDescription}
          </div>
        )}
        {/* <div className="flex flex-col"> */}
        <div className="overflow-y-auto">
          {items.map((item) => renderMenuItem(item))}
        </div>
      </div>

      {collapsible && (
        <button
          className="border-menu-border hover:bg-opacity-20 absolute top-1/2 flex h-8 w-4 -translate-y-1/2 transform cursor-pointer items-center justify-center border bg-white transition-all duration-300 hover:bg-gray-100"
          style={{
            left: currentCollapsed ? "0px" : "224px", // 56 * 4 = 224px (w-56)
          }}
          onClick={() => {
            handleCollapseChange(!currentCollapsed);
          }}
        >
          <ChevronLeftIcon
            className={cn(
              "h-3 w-3 transform transition-transform duration-200",
              currentCollapsed ? "rotate-180" : "rotate-0"
            )}
          />
        </button>
      )}
    </div>
  );
}

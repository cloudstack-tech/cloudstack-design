import React from "react";

type MenuDividerProps = {
  level?: number;
};

export default function MenuDivider({ level = 0 }: MenuDividerProps) {
  return (
    <div
      className="border-menu-border my-2 border-t"
      style={{
        marginLeft: `${12 + level * 16}px`,
        marginRight: "12px",
      }}
    />
  );
}

import { cn } from "@/packages/utils";

export type DividerProps = {
  vertical?: boolean;
  width?: number;
  className?: string;
};

export default function Divider({
  vertical,
  width = 1,
  className,
}: DividerProps) {
  return (
    <div
      className={cn(
        "border-border-default select-none",
        vertical ? "border-r" : "w-full border-b",
        className
      )}
      style={{
        // 根据 vertical 判断设置 borderRightWidth 或 borderBottomWidth
        ...(vertical
          ? { borderRightWidth: width }
          : { borderBottomWidth: width }),
      }}
    />
  );
}

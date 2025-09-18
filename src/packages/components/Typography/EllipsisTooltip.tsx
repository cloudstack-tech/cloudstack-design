import React from "react";

interface TooltipProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

// 简单的 Tooltip 实现
const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
  if (!title) {
    return <>{children}</>;
  }

  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
        {title}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

interface EllipsisTooltipProps {
  tooltipProps?: {
    title?: React.ReactNode;
  };
  enableEllipsis: boolean;
  isEllipsis: boolean;
  children: React.ReactNode;
}

const EllipsisTooltip: React.FC<EllipsisTooltipProps> = ({
  tooltipProps,
  enableEllipsis,
  isEllipsis,
  children,
}) => {
  // 只有在启用省略且实际发生省略时才显示 tooltip
  const shouldShowTooltip = enableEllipsis && isEllipsis && tooltipProps?.title;

  if (shouldShowTooltip) {
    return <Tooltip title={tooltipProps?.title}>{children}</Tooltip>;
  }

  return <>{children}</>;
};

export default EllipsisTooltip;

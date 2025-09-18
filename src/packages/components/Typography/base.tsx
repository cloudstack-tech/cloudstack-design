import { cn } from "@/packages/utils";
import React, { useState, useLayoutEffect, useRef } from "react";
import ResizeObserver from "rc-resize-observer";
import { Button } from "../Button";
import EllipsisMeasure from "./EllipsisMeasure";
import EllipsisTooltip from "./EllipsisTooltip";
import { isStyleSupport, isEleEllipsis } from "./util";

export type EllipsisProps =
  | boolean
  | {
      rows?: number;
      expandable?: boolean | "collapsible";
      suffix?: string;
      symbol?: React.ReactNode | ((expanded: boolean) => React.ReactNode);
      onEllipsis?: (ellipsis: boolean) => void;
      tooltip?: React.ReactNode;
    };

export type BaseTypographyProps = {
  /**
   * 组件类型
   */
  as?: React.ElementType;
  /**
   * 子元素
   */
  children?: React.ReactNode;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 颜色
   */
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "default";
  /**
   * 文本大小
   */
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
  /**
   * 是否省略
   */
  ellipsis?: EllipsisProps;
  /**
   * 点击事件
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * 字体粗细
   */
  weight?: "normal" | "medium" | "semibold" | "bold";
  /**
   * 是否斜体
   */
  italic?: boolean;
  /**
   * 是否下划线
   */
  underline?: boolean;
  /**
   * 是否删除线
   */
  strikethrough?: boolean;
};

const Base: React.ForwardRefRenderFunction<HTMLElement, BaseTypographyProps> = (
  props,
  ref
) => {
  const {
    as: Component = "span",
    children,
    className,
    color,
    ellipsis,
    onClick,
    size = "base",
    weight = "normal",
    italic = false,
    underline = false,
    strikethrough = false,
  } = props;

  // 内部引用
  const typographyRef = useRef<HTMLElement>(null);

  // 展开/收起状态管理
  const [isExpanded, setIsExpanded] = useState(false);

  // 省略相关状态
  const [isLineClampSupport, setIsLineClampSupport] = useState(false);
  const [isTextOverflowSupport, setIsTextOverflowSupport] = useState(false);
  const [isJsEllipsis, setIsJsEllipsis] = useState(false);
  const [isNativeEllipsis, setIsNativeEllipsis] = useState(false);
  const [isNativeVisible, setIsNativeVisible] = useState(true);
  const [ellipsisWidth, setEllipsisWidth] = useState(0);

  // 测量状态 - 用于防止闪烁
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // 解析省略配置
  const enableEllipsis = !!ellipsis;
  const ellipsisConfig =
    typeof ellipsis === "object" ? ellipsis : { rows: 1, expandable: false };
  const {
    rows = 1,
    expandable = false,
    suffix,
    symbol,
    onEllipsis,
    tooltip,
  } = ellipsisConfig;

  // 检查是否需要展开功能
  const isExpandable = enableEllipsis && expandable;

  // 合并的省略启用状态
  const mergedEnableEllipsis =
    enableEllipsis && (!isExpanded || expandable === "collapsible");

  // 是否需要 JS 测量
  const needMeasureEllipsis = React.useMemo(
    () =>
      mergedEnableEllipsis &&
      (suffix !== undefined || onEllipsis || expandable || tooltip),
    [mergedEnableEllipsis, suffix, onEllipsis, expandable, tooltip]
  );

  // 检查浏览器支持
  useLayoutEffect(() => {
    if (enableEllipsis && !needMeasureEllipsis) {
      setIsLineClampSupport(isStyleSupport("webkitLineClamp"));
      setIsTextOverflowSupport(isStyleSupport("textOverflow"));
    }
  }, [needMeasureEllipsis, enableEllipsis]);

  // CSS 省略状态
  const [cssEllipsis, setCssEllipsis] = useState(mergedEnableEllipsis);

  const canUseCssEllipsis = React.useMemo(() => {
    if (needMeasureEllipsis) {
      return false;
    }

    if (rows === 1) {
      return isTextOverflowSupport;
    }

    return isLineClampSupport;
  }, [needMeasureEllipsis, isTextOverflowSupport, isLineClampSupport, rows]);

  // 切换到 CSS 省略
  useLayoutEffect(() => {
    setCssEllipsis(canUseCssEllipsis && mergedEnableEllipsis);
  }, [canUseCssEllipsis, mergedEnableEllipsis]);

  // 监听测量开始
  useLayoutEffect(() => {
    if (needMeasureEllipsis && ellipsisWidth > 0 && !isInitialized) {
      setIsMeasuring(true);
    }
  }, [needMeasureEllipsis, ellipsisWidth, isInitialized]);

  // 合并的省略状态
  const isMergedEllipsis =
    mergedEnableEllipsis && (cssEllipsis ? isNativeEllipsis : isJsEllipsis);

  const cssTextOverflow = mergedEnableEllipsis && rows === 1 && cssEllipsis;
  const cssLineClamp = mergedEnableEllipsis && rows > 1 && cssEllipsis;

  // 处理展开/收起切换
  const handleToggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  // 处理容器尺寸变化
  const onResize = ({ offsetWidth }: { offsetWidth: number }) => {
    if (offsetWidth > 0 && !isInitialized) {
      setIsInitialized(true);
    }
    setEllipsisWidth(offsetWidth);
  };

  // JS 省略回调
  const onJsEllipsis = (jsEllipsis: boolean) => {
    setIsJsEllipsis(jsEllipsis);
    setIsMeasuring(false); // 测量完成

    if (isJsEllipsis !== jsEllipsis) {
      onEllipsis?.(jsEllipsis);
    }
  };

  // 检测原生省略
  React.useEffect(() => {
    const textEle = typographyRef.current;

    if (enableEllipsis && cssEllipsis && textEle) {
      const currentEllipsis = isEleEllipsis(textEle);

      if (isNativeEllipsis !== currentEllipsis) {
        setIsNativeEllipsis(currentEllipsis);
      }
    }
  }, [
    enableEllipsis,
    cssEllipsis,
    children,
    cssLineClamp,
    isNativeVisible,
    ellipsisWidth,
  ]);

  // 可见性检测
  React.useEffect(() => {
    const textEle = typographyRef.current;
    if (
      typeof IntersectionObserver === "undefined" ||
      !textEle ||
      !cssEllipsis ||
      !mergedEnableEllipsis
    ) {
      return;
    }

    const observer = new IntersectionObserver(() => {
      setIsNativeVisible(!!textEle.offsetParent);
    });
    observer.observe(textEle);

    return () => {
      observer.disconnect();
    };
  }, [cssEllipsis, mergedEnableEllipsis]);

  // 样式类名
  const fontSize = cn({
    "text-xxs": size === "xs",
    "text-xs": size === "sm",
    "text-sm": size === "base",
    "text-base": size === "md",
    "text-md": size === "lg",
  });

  const textColor = cn({
    "text-primary-color": color === "primary",
    "text-secondary-color": color === "secondary",
    "text-success-color": color === "success",
    "text-warning-color": color === "warning",
    "text-danger-color": color === "danger",
    "text-default-color": color === "default",
  });

  const fontWeight = cn({
    "font-normal": weight === "normal",
    "font-medium": weight === "medium",
    "font-semibold": weight === "semibold",
    "font-bold": weight === "bold",
  });

  const fontStyle = cn({
    italic: italic,
    underline,
    "line-through": strikethrough,
  });

  const mergedClassName = cn(
    fontSize,
    fontWeight,
    fontStyle,
    {
      "overflow-hidden": cssTextOverflow,
      "whitespace-nowrap": cssTextOverflow,
      "text-ellipsis": cssTextOverflow,
    },
    className
  );

  const baseClassName = `${mergedClassName} ${textColor}`.trim();

  // 渲染展开按钮
  const renderExpand = () => {
    if (!expandable) return null;

    const symbolNode =
      typeof symbol === "function" ? symbol(isExpanded) : symbol;
    const defaultSymbol = isExpanded ? "收起" : "展开";

    return (
      <Button
        key="expand"
        variant="text"
        color="primary"
        size="sm"
        className={`ml-1 ${fontSize} p-0 h-auto leading-none`}
        onClick={handleToggleExpand}
      >
        {symbolNode || defaultSymbol}
      </Button>
    );
  };

  // 渲染省略内容
  const renderEllipsis = (canEllipsis: boolean, actualLines?: number) => {
    // 只有当实际行数大于设置行数时才显示展开按钮
    const shouldShowExpand = expandable && (!actualLines || actualLines > rows);

    return [
      canEllipsis && !isExpanded && (
        <span aria-hidden key="ellipsis" className="select-none">
          ...
        </span>
      ),
      suffix,
      // 根据实际行数决定是否显示展开按钮
      shouldShowExpand && renderExpand(),
    ];
  };

  // 内联样式
  const inlineStyle: React.CSSProperties = {
    // 统一的省略样式，避免样式切换导致的位移
    ...(mergedEnableEllipsis &&
      (cssLineClamp || isMeasuring || !isInitialized) && {
        display: "-webkit-box",
        WebkitBoxOrient: "vertical" as const,
        WebkitLineClamp: rows,
        overflow: "hidden",
        // 确保行高一致性
        lineHeight: "1.5",
      }),
  };

  return (
    <ResizeObserver onResize={onResize} disabled={!mergedEnableEllipsis}>
      {(resizeRef: React.RefObject<HTMLElement>) => (
        <EllipsisTooltip
          tooltipProps={{ title: tooltip }}
          enableEllipsis={mergedEnableEllipsis}
          isEllipsis={isMergedEllipsis}
        >
          <Component
            className={baseClassName}
            style={inlineStyle}
            onClick={onClick}
            ref={(node: HTMLElement) => {
              // 合并多个 ref
              if (typeof ref === "function") {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
              if (resizeRef && typeof resizeRef === "object") {
                resizeRef.current = node;
              }
              typographyRef.current = node;
            }}
          >
            <EllipsisMeasure
              enableMeasure={mergedEnableEllipsis && !cssEllipsis}
              text={children}
              rows={rows}
              width={ellipsisWidth}
              onEllipsis={onJsEllipsis}
              expanded={isExpanded}
              miscDeps={[isExpanded, fontSize]}
            >
              {(node, canEllipsis, actualLines) => (
                <>
                  {node.length > 0 && canEllipsis && !isExpanded ? (
                    <span key="show-content" aria-hidden>
                      {node}
                    </span>
                  ) : (
                    node
                  )}
                  {renderEllipsis(canEllipsis || isExpanded, actualLines)}
                </>
              )}
            </EllipsisMeasure>
          </Component>
        </EllipsisTooltip>
      )}
    </ResizeObserver>
  );
};

export default React.forwardRef(Base);

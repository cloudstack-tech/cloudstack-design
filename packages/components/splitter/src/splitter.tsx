import {forwardRef} from "@cloudstack-design/system";
import React from "react";

import {UseSplitterProps, useSplitter} from "./use-splitter";

export interface SplitterProps extends UseSplitterProps {}

/**
 * Splitter 组件（分割面板）
 *
 * 用于创建可拖拽调整的分割布局。
 * 支持水平和垂直方向，面板之间可以通过拖拽调整大小。
 *
 * @example
 * ```tsx
 * <Splitter direction="horizontal">
 *   <SplitterPanel>Left Panel</SplitterPanel>
 *   <SplitterPanel>Right Panel</SplitterPanel>
 * </Splitter>
 * ```
 */
const Splitter = forwardRef<"div", SplitterProps>((props, ref) => {
  const {
    Component,
    domRef,
    containerRef,
    containerStyle,
    styles,
    direction,
    gutterSize,
    gutterRender,
    panelSizes,
    tempPanelSizes,
    resizeMode,
    isDragging,
    dragIndex,
    handleDragStart,
    childrenArray,
    panelConfigs,
    collapsedPanels,
    togglePanelCollapse,
    ...otherProps
  } = useSplitter({...props, ref});

  // 渲染折叠/展开按钮
  const renderCollapseButton = (panelIndex: number, position: "left" | "right") => {
    const config = panelConfigs[panelIndex];
    const isCollapsed = collapsedPanels[panelIndex];

    if (!config?.collapsible) return null;

    return (
      <div
        style={{
          position: "absolute",
          [position]: "4px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "16px",
          height: "16px",
          backgroundColor: "var(--cloudstack-colors-default-100)",
          border: "1px solid var(--cloudstack-colors-default-300)",
          borderRadius: "2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10,
          transition: "all 0.2s",
        }}
        onClick={(e) => {
          e.stopPropagation();
          togglePanelCollapse(panelIndex);
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--cloudstack-colors-primary-100)";
          e.currentTarget.style.borderColor = "var(--cloudstack-colors-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--cloudstack-colors-default-100)";
          e.currentTarget.style.borderColor = "var(--cloudstack-colors-default-300)";
        }}
      >
        <span
          style={{
            fontSize: "10px",
            lineHeight: "1",
            color: "var(--cloudstack-colors-default-600)",
          }}
        >
          {direction === "horizontal" ? (isCollapsed ? "▶" : "◀") : isCollapsed ? "▼" : "▲"}
        </span>
      </div>
    );
  };

  // 渲染默认分割条
  const renderDefaultGutter = (index: number) => {
    const currentPanelCollapsible = panelConfigs[index]?.collapsible;
    const nextPanelCollapsible = panelConfigs[index + 1]?.collapsible;

    // 检查相邻的两个面板是否都允许调整大小
    const currentPanelResizable = panelConfigs[index]?.resizable ?? true;
    const nextPanelResizable = panelConfigs[index + 1]?.resizable ?? true;
    const canResize = currentPanelResizable && nextPanelResizable;

    return (
      <div
        key={`gutter-${index}`}
        className={`splitter-gutter ${
          direction === "horizontal" ? "splitter-gutter-horizontal" : "splitter-gutter-vertical"
        }`}
        style={{
          flexShrink: 0,
          [direction === "horizontal" ? "width" : "height"]: `${gutterSize}px`,
          cursor: canResize
            ? direction === "horizontal"
              ? "col-resize"
              : "row-resize"
            : "default",
          backgroundColor: "var(--cloudstack-colors-default-200)",
          position: "relative",
          transition: "background-color 0.2s",
        }}
        onMouseDown={canResize ? handleDragStart(index) : undefined}
        onMouseEnter={(e) => {
          if (canResize) {
            e.currentTarget.style.backgroundColor = "var(--cloudstack-colors-primary)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--cloudstack-colors-default-200)";
        }}
      >
        {/* 分割条中间的抓手 */}
        {canResize && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: direction === "horizontal" ? "2px" : "20px",
              height: direction === "horizontal" ? "20px" : "2px",
              backgroundColor: "currentColor",
              borderRadius: "2px",
              opacity: 0.5,
            }}
          />
        )}

        {/* 当前面板的折叠按钮（左侧/上侧） */}
        {currentPanelCollapsible &&
          direction === "horizontal" &&
          renderCollapseButton(index, "left")}
        {currentPanelCollapsible && direction === "vertical" && renderCollapseButton(index, "left")}

        {/* 下一个面板的折叠按钮（右侧/下侧） */}
        {nextPanelCollapsible &&
          direction === "horizontal" &&
          renderCollapseButton(index + 1, "right")}
        {nextPanelCollapsible &&
          direction === "vertical" &&
          renderCollapseButton(index + 1, "right")}
      </div>
    );
  };

  // 构建面板和分割条
  const elements: React.ReactNode[] = [];

  childrenArray.forEach((child, index) => {
    // 添加面板
    const panelStyle = {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: `${panelSizes[index] || 0}%`,
      overflow: "auto",
    };

    elements.push(
      <div key={`panel-${index}`} style={panelStyle}>
        {child}
      </div>,
    );

    // 添加分割条（最后一个面板后面不需要）
    if (index < childrenArray.length - 1) {
      if (gutterRender) {
        elements.push(
          <div
            key={`gutter-${index}`}
            style={{
              flexShrink: 0,
              [direction === "horizontal" ? "width" : "height"]: `${gutterSize}px`,
            }}
            onMouseDown={handleDragStart(index)}
          >
            {gutterRender(index, direction)}
          </div>,
        );
      } else {
        elements.push(renderDefaultGutter(index));
      }
    }
  });

  // 计算预览线位置（延迟模式下）
  const previewLinePosition = React.useMemo(() => {
    if (resizeMode !== "delayed" || !isDragging || !tempPanelSizes || dragIndex === -1) {
      return null;
    }

    // 计算预览线的位置（累加前面所有面板的尺寸）
    const position = tempPanelSizes.slice(0, dragIndex + 1).reduce((sum, size) => sum + size, 0);

    return position;
  }, [resizeMode, isDragging, tempPanelSizes, dragIndex]);

  return (
    <Component
      ref={(node) => {
        // 设置两个 ref
        if (domRef && typeof domRef === "object" && "current" in domRef) {
          (domRef as any).current = node;
        }
        if (containerRef) {
          (containerRef as any).current = node;
        }
      }}
      className={styles}
      style={{...containerStyle, position: "relative"}}
      {...otherProps}
    >
      {elements}
      {/* 延迟模式下的预览线 */}
      {previewLinePosition !== null && (
        <div
          style={{
            position: "absolute",
            [direction === "horizontal" ? "left" : "top"]: `${previewLinePosition}%`,
            [direction === "horizontal" ? "width" : "height"]: "2px",
            [direction === "horizontal" ? "height" : "width"]: "100%",
            backgroundColor: "var(--cloudstack-colors-primary)",
            opacity: 0.6,
            zIndex: 1000,
            pointerEvents: "none",
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
          }}
        />
      )}
    </Component>
  );
});

Splitter.displayName = "CloudStackDesign.Splitter";

export default Splitter;

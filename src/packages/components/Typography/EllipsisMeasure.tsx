import React from "react";
import MeasureText, { type MeasureTextRef } from "./MeasureText";
import { getNodesLen, sliceNodes } from "./util";

export interface EllipsisProps {
  enableMeasure?: boolean;
  text?: React.ReactNode;
  width: number;
  rows: number;
  children: (
    cutChildren: React.ReactNode[],
    /** 告诉当前文本是否超出了行数限制，可以进行省略 */
    canEllipsis: boolean
  ) => React.ReactNode;
  onEllipsis: (isEllipsis: boolean) => void;
  expanded: boolean;
  /**
   * 用于其他更新的标记，不会影响省略内容长度
   * 例如 tooltip 内容更新
   */
  miscDeps: any[];
}

// 测量状态常量
const STATUS_MEASURE_NONE = 0;
const STATUS_MEASURE_PREPARE = 1;
const STATUS_MEASURE_START = 2;
const STATUS_MEASURE_NEED_ELLIPSIS = 3;
const STATUS_MEASURE_NO_NEED_ELLIPSIS = 4;

const lineClipStyle: React.CSSProperties = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
};

export default function EllipsisMeasure(props: EllipsisProps) {
  const {
    enableMeasure,
    width,
    text,
    children,
    rows,
    expanded,
    miscDeps,
    onEllipsis,
  } = props;

  // 将文本转换为节点数组
  const nodeList = React.useMemo(() => {
    if (React.isValidElement(text)) {
      return [text];
    }
    if (Array.isArray(text)) {
      return text;
    }
    return text ? [text] : [];
  }, [text]);

  const nodeLen = React.useMemo(() => getNodesLen(nodeList), [nodeList]);

  // ========================= 完整内容 =========================
  // 用于测量，始终渲染为不需要省略的状态
  const fullContent = React.useMemo(
    () => children(nodeList, false),
    [nodeList, children]
  );

  // ========================= 截断内容 ==========================
  const [ellipsisCutIndex, setEllipsisCutIndex] = React.useState<
    [number, number] | null
  >(null);
  const cutMidRef = React.useRef<MeasureTextRef>(null);

  // ========================= 需要省略 =========================
  const measureWhiteSpaceRef = React.useRef<HTMLElement>(null);
  const needEllipsisRef = React.useRef<MeasureTextRef>(null);
  // 测量 `rows-1` 高度，避免操作超出行高
  const descRowsEllipsisRef = React.useRef<MeasureTextRef>(null);
  const symbolRowEllipsisRef = React.useRef<MeasureTextRef>(null);

  const [canEllipsis, setCanEllipsis] = React.useState(false);
  const [needEllipsis, setNeedEllipsis] = React.useState(STATUS_MEASURE_NONE);
  const [ellipsisHeight, setEllipsisHeight] = React.useState(0);
  const [parentWhiteSpace, setParentWhiteSpace] = React.useState<
    React.CSSProperties["whiteSpace"] | null
  >(null);

  // 触发开始测量
  React.useLayoutEffect(() => {
    if (enableMeasure && width && nodeLen) {
      setNeedEllipsis(STATUS_MEASURE_PREPARE);
    } else {
      setNeedEllipsis(STATUS_MEASURE_NONE);
    }
  }, [width, text, rows, enableMeasure, nodeList, nodeLen]);

  // 测量过程
  React.useLayoutEffect(() => {
    if (needEllipsis === STATUS_MEASURE_PREPARE) {
      setNeedEllipsis(STATUS_MEASURE_START);

      // 获取父元素的 white-space 样式
      const nextWhiteSpace =
        measureWhiteSpaceRef.current &&
        getComputedStyle(measureWhiteSpaceRef.current).whiteSpace;
      setParentWhiteSpace(nextWhiteSpace);
    } else if (needEllipsis === STATUS_MEASURE_START) {
      const isOverflow = !!needEllipsisRef.current?.isExceed();

      setNeedEllipsis(
        isOverflow
          ? STATUS_MEASURE_NEED_ELLIPSIS
          : STATUS_MEASURE_NO_NEED_ELLIPSIS
      );
      setEllipsisCutIndex(isOverflow ? [0, nodeLen] : null);
      setCanEllipsis(isOverflow);

      // 获取省略行的基础高度
      const baseRowsEllipsisHeight = needEllipsisRef.current?.getHeight() || 0;

      // 获取 `rows - 1` + 符号高度
      const descRowsEllipsisHeight =
        rows === 1 ? 0 : descRowsEllipsisRef.current?.getHeight() || 0;
      const symbolRowEllipsisHeight =
        symbolRowEllipsisRef.current?.getHeight() || 0;
      const maxRowsHeight = Math.max(
        baseRowsEllipsisHeight,
        // 带省略号的行高
        descRowsEllipsisHeight + symbolRowEllipsisHeight
      );

      setEllipsisHeight(maxRowsHeight + 1);

      onEllipsis(isOverflow);
    }
  }, [needEllipsis, rows, nodeLen, onEllipsis]);

  // ========================= 截断测量 ==========================
  const cutMidIndex = ellipsisCutIndex
    ? Math.ceil((ellipsisCutIndex[0] + ellipsisCutIndex[1]) / 2)
    : 0;

  React.useLayoutEffect(() => {
    const [minIndex, maxIndex] = ellipsisCutIndex || [0, 0];
    if (minIndex !== maxIndex) {
      const midHeight = cutMidRef.current?.getHeight() || 0;

      const isOverflow = midHeight > ellipsisHeight;
      let targetMidIndex = cutMidIndex;
      if (maxIndex - minIndex === 1) {
        targetMidIndex = isOverflow ? minIndex : maxIndex;
      }
      setEllipsisCutIndex(
        isOverflow ? [minIndex, targetMidIndex] : [targetMidIndex, maxIndex]
      );
    }
  }, [ellipsisCutIndex, cutMidIndex, ellipsisHeight]);

  // ========================= 文本内容 =========================
  const finalContent = React.useMemo(() => {
    // 如果禁用测量，跳过所有处理
    if (!enableMeasure) {
      return children(nodeList, false);
    }

    if (
      needEllipsis !== STATUS_MEASURE_NEED_ELLIPSIS ||
      !ellipsisCutIndex ||
      ellipsisCutIndex[0] !== ellipsisCutIndex[1]
    ) {
      const content = children(nodeList, false);
      // 限制最大行数以避免滚动条闪烁，除非不需要省略
      if (
        [STATUS_MEASURE_NO_NEED_ELLIPSIS, STATUS_MEASURE_NONE].includes(
          needEllipsis
        )
      ) {
        return content;
      }
      return (
        <span
          style={{
            ...lineClipStyle,
            WebkitLineClamp: rows,
          }}
        >
          {content}
        </span>
      );
    }

    return children(
      expanded ? nodeList : sliceNodes(nodeList, ellipsisCutIndex[0]),
      canEllipsis
    );
  }, [
    expanded,
    needEllipsis,
    ellipsisCutIndex,
    nodeList,
    children,
    enableMeasure,
    rows,
    canEllipsis,
    ...miscDeps,
  ]);

  // ============================ 渲染 ============================
  const measureStyle: React.CSSProperties = {
    width,
    margin: 0,
    padding: 0,
    whiteSpace: parentWhiteSpace === "nowrap" ? "normal" : "inherit",
  };

  return (
    <>
      {/* 最终显示内容 */}
      {finalContent}

      {/* 测量当前内容是否超出行数 */}
      {needEllipsis === STATUS_MEASURE_START && (
        <>
          {/** 带 `rows` 行 */}
          <MeasureText
            style={{
              ...measureStyle,
              ...lineClipStyle,
              WebkitLineClamp: rows,
            }}
            ref={needEllipsisRef}
          >
            {fullContent}
          </MeasureText>

          {/** 带 `rows - 1` 行 */}
          <MeasureText
            style={{
              ...measureStyle,
              ...lineClipStyle,
              WebkitLineClamp: rows - 1,
            }}
            ref={descRowsEllipsisRef}
          >
            {fullContent}
          </MeasureText>

          {/** 符号行 */}
          <MeasureText
            style={{
              ...measureStyle,
              ...lineClipStyle,
              WebkitLineClamp: 1,
            }}
            ref={symbolRowEllipsisRef}
          >
            {children([], true)}
          </MeasureText>
        </>
      )}

      {/* 真实尺寸溢出测量 */}
      {needEllipsis === STATUS_MEASURE_NEED_ELLIPSIS &&
        ellipsisCutIndex &&
        ellipsisCutIndex[0] !== ellipsisCutIndex[1] && (
          <MeasureText
            style={{
              ...measureStyle,
              top: 400,
            }}
            ref={cutMidRef}
          >
            {children(sliceNodes(nodeList, cutMidIndex), true)}
          </MeasureText>
        )}

      {/* 测量 white-space */}
      {needEllipsis === STATUS_MEASURE_PREPARE && (
        <span style={{ whiteSpace: "inherit" }} ref={measureWhiteSpaceRef} />
      )}
    </>
  );
}

import React from "react";

interface MeasureTextProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

interface MeasureTextRef {
  isExceed: () => boolean;
  getHeight: () => number;
}

const MeasureText = React.forwardRef<MeasureTextRef, MeasureTextProps>(
  ({ style, children }, ref) => {
    const spanRef = React.useRef<HTMLSpanElement>(null);

    React.useImperativeHandle(ref, () => ({
      isExceed: () => {
        const span = spanRef.current;
        if (!span) return false;
        return span.scrollHeight > span.clientHeight;
      },
      getHeight: () => spanRef.current?.clientHeight || 0,
    }));

    return (
      <span
        aria-hidden
        ref={spanRef}
        style={{
          position: "fixed",
          display: "block",
          left: 0,
          top: 0,
          pointerEvents: "none",
          visibility: "hidden",
          zIndex: -1000,
          ...style,
        }}
      >
        {children}
      </span>
    );
  }
);

MeasureText.displayName = "MeasureText";

export default MeasureText;
export type { MeasureTextRef, MeasureTextProps };

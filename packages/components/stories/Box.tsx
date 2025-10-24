// 示例子元素样式
export const Box = ({className = "", children, ...props}: any) => (
  <div
    className={`px-6 py-1 bg-primary even:bg-primary/50 text-white rounded-xs ${className}`}
    style={{textAlign: "center"}}
    {...props}
  >
    {children}
  </div>
);

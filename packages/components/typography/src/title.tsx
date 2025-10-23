import {forwardRef} from "@cloudstack-design/system";
import {useMemo} from "react";
import {TypographyProps} from "./typography";
import {useTypography} from "./use-typography";

export interface TitleProps extends Omit<TypographyProps, "as" | "size"> {
  /**
   * 标题等级
   * @default 1
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title = forwardRef<"h1", TitleProps>((props, ref) => {
  const {level = 1, weight = "bold", ...rest} = props;

  const as = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  // 根据level设置默认大小
  const sizeMap = useMemo(
    () => ({
      1: "3xl" as const,
      2: "2xl" as const,
      3: "xl" as const,
      4: "lg" as const,
      5: "base" as const,
      6: "sm" as const,
    }),
    [],
  );

  const {Component, domRef, children, styles, ...otherProps} = useTypography({
    ...rest,
    as,
    size: sizeMap[level],
    weight,
    ref,
  });

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Title.displayName = "CloudStackDesign.Title";

export default Title;

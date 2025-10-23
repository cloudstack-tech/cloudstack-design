import {forwardRef} from "@cloudstack-design/system";
import {TypographyProps} from "./typography";
import {useTypography} from "./use-typography";

export interface TextProps extends Omit<TypographyProps, "as"> {}

const Text = forwardRef<"span", TextProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} = useTypography({
    ...props,
    as: "span",
    ref,
  });

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Text.displayName = "CloudStackDesign.Text";

export default Text;

import {forwardRef} from "@cloudstack-design/system";

import {UseAffixProps, useAffix} from "./use-affix";

export interface AffixProps extends UseAffixProps {}

const Affix = forwardRef<"div", AffixProps>((props, ref) => {
  const {
    Component,
    domRef,
    children,
    styles,
    placeholderRef,
    placeholderStyle,
    contentStyle,
    ...otherProps
  } = useAffix({...props, ref});

  return (
    <div className={styles.base()}>
      {/* 占位元素 */}
      <div
        ref={placeholderRef}
        className={styles.placeholder()}
        style={placeholderStyle}
        aria-hidden="true"
      />

      {/* 实际内容 */}
      <Component ref={domRef} className={styles.content()} style={contentStyle} {...otherProps}>
        {children}
      </Component>
    </div>
  );
});

Affix.displayName = "CloudStackDesign.Affix";

export default Affix;

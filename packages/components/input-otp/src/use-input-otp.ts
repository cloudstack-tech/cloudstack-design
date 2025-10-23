import type {InputOTPVariantProps} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {inputOTP} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo} from "react";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export type UseInputOtpProps = Props & InputOTPVariantProps;

export function useInputOtp(originalProps: UseInputOtpProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, inputOTP.variantKeys);

  const {ref, as, className, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
    () =>
      inputOTP({
        ...variantProps,
        className,
      }),
    [objectToDeps(variantProps), className],
  );

  return {Component, styles, domRef, ...otherProps};
}

export type UseInputOtpReturn = ReturnType<typeof useInputOtp>;

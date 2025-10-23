import {forwardRef} from "@cloudstack-design/system";

import { UseFormProps, useForm } from "./use-form";

export interface FormProps extends UseFormProps {}

const Form = forwardRef<"div", FormProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useForm({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Form.displayName = "CloudStackDesign.Form";

export default Form;
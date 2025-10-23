import {forwardRef} from "@cloudstack-design/system";

import { UseModalProps, useModal } from "./use-modal";

export interface ModalProps extends UseModalProps {}

const Modal = forwardRef<"div", ModalProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useModal({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Modal.displayName = "CloudStackDesign.Modal";

export default Modal;
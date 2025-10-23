import {forwardRef} from "@cloudstack-design/system";

import { UseUploadProps, useUpload } from "./use-upload";

export interface UploadProps extends UseUploadProps {}

const Upload = forwardRef<"div", UploadProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useUpload({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Upload.displayName = "CloudStackDesign.Upload";

export default Upload;
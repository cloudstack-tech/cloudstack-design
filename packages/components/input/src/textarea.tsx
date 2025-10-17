import {forwardRef} from "react";
import {X} from "lucide-react";
import {useTextarea, UseTextareaProps, TextareaRef} from "./use-textarea";

export interface TextareaProps extends Omit<UseTextareaProps, "ref"> {}

const Textarea = forwardRef<TextareaRef, TextareaProps>((props, ref) => {
  const {
    showClearIcon,
    getBaseProps,
    getInputWrapperProps,
    getTextareaProps,
    getClearButtonProps,
  }: any = useTextarea({...props, ref});

  return (
    <div {...getBaseProps()}>
      <div {...getInputWrapperProps()}>
        <textarea {...getTextareaProps()} />

        {showClearIcon && (
          <button type="button" {...getClearButtonProps()}>
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
});

Textarea.displayName = "CloudStackDesign.Textarea";

export default Textarea;

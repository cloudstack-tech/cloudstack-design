import {forwardRef} from "react";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
});

Textarea.displayName = "CloudStackDesign.Textarea";

export default Textarea;

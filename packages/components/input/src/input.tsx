import {forwardRef} from "react";
import {useInput, UseInputProps, InputRef} from "./use-input";

export interface InputProps extends Omit<UseInputProps, "ref"> {}

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    prefix,
    suffix,
    showClearIcon,
    getBaseProps,
    getInputWrapperProps,
    getInputProps,
    getClearButtonProps,
    getPrefixProps,
    getSuffixProps,
  }: any = useInput({...props, ref});

  return (
    <div {...getBaseProps()}>
      <div {...getInputWrapperProps()}>
        {prefix && <div {...getPrefixProps()}>{prefix}</div>}

        <input {...getInputProps()} />

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

        {suffix && <div {...getSuffixProps()}>{suffix}</div>}
      </div>
    </div>
  );
});

Input.displayName = "CloudStackDesign.Input";

export default Input;

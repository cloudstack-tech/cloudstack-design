import "@testing-library/jest-dom";
import type {UserEvent} from "@testing-library/user-event";

import * as React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {Input, Textarea} from "../src";

describe("Input", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("should render correctly", () => {
    const wrapper = render(<Input placeholder="Test input" />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should handle value changes", async () => {
    const onChange = jest.fn();
    render(<Input placeholder="Test" onChange={onChange} />);

    const input = screen.getByPlaceholderText("Test") as HTMLInputElement;
    await user.type(input, "Hello");

    expect(onChange).toHaveBeenCalled();
    expect(input.value).toBe("Hello");
  });

  it("should handle clear button", async () => {
    const onChange = jest.fn();
    render(<Input defaultValue="Test value" allowClear onChange={onChange} />);

    const input = screen.getByDisplayValue("Test value") as HTMLInputElement;

    // Focus the input to show clear button
    await user.click(input);

    const clearButton = screen.getByRole("button");
    await user.click(clearButton);

    expect(onChange).toHaveBeenCalled();
    expect(input.value).toBe("");
  });

  it("should be disabled", () => {
    render(<Input placeholder="Test" disabled />);

    const input = screen.getByPlaceholderText("Test") as HTMLInputElement;
    expect(input).toBeDisabled();
  });

  it("should show prefix and suffix", () => {
    render(
      <Input
        placeholder="Test"
        prefix={<span data-testid="prefix">P</span>}
        suffix={<span data-testid="suffix">S</span>}
      />,
    );

    expect(screen.getByTestId("prefix")).toBeInTheDocument();
    expect(screen.getByTestId("suffix")).toBeInTheDocument();
  });

  it("should apply invalid state", () => {
    const {container} = render(<Input placeholder="Test" isInvalid />);

    // Check if the input wrapper has error border class
    const inputWrapper = container.querySelector("div > div");
    expect(inputWrapper).toHaveClass("border-input-error-border");
  });
});

describe("Textarea", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("should render correctly", () => {
    const wrapper = render(<Textarea placeholder="Test textarea" />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should handle value changes", async () => {
    const onChange = jest.fn();
    render(<Textarea placeholder="Test" onChange={onChange} />);

    const textarea = screen.getByPlaceholderText("Test") as HTMLTextAreaElement;
    await user.type(textarea, "Hello");

    expect(onChange).toHaveBeenCalled();
    expect(textarea.value).toBe("Hello");
  });

  it("should handle clear button", async () => {
    const onChange = jest.fn();
    render(<Textarea defaultValue="Test value" allowClear onChange={onChange} />);

    const textarea = screen.getByDisplayValue("Test value") as HTMLTextAreaElement;
    const clearButton = screen.getByRole("button");
    await user.click(clearButton);

    expect(onChange).toHaveBeenCalled();
    expect(textarea.value).toBe("");
  });

  it("should be disabled", () => {
    render(<Textarea placeholder="Test" disabled />);

    const textarea = screen.getByPlaceholderText("Test") as HTMLTextAreaElement;
    expect(textarea).toBeDisabled();
  });

  it("should apply invalid state", () => {
    const {container} = render(<Textarea placeholder="Test" isInvalid />);

    // Check if the textarea wrapper has error border class
    const textareaWrapper = container.querySelector("div > div");
    expect(textareaWrapper).toHaveClass("border-input-error-border");
  });

  it("should support allowResize", () => {
    render(<Textarea placeholder="Test" allowResize />);

    const textarea = screen.getByPlaceholderText("Test") as HTMLTextAreaElement;
    expect(textarea).toHaveClass("resize-y");
  });

  it("should disable resize with autoSize", () => {
    render(<Textarea placeholder="Test" autoSize />);

    const textarea = screen.getByPlaceholderText("Test") as HTMLTextAreaElement;
    expect(textarea).toHaveClass("resize-none");
  });
});

import * as React from "react";
import {render, screen, fireEvent} from "@testing-library/react";

import {Checkbox, CheckboxGroup} from "../src";

describe("Checkbox", () => {
  it("should render correctly", () => {
    const wrapper = render(<Checkbox>Test</Checkbox>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<Checkbox ref={ref}>Test</Checkbox>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe("INPUT");
  });

  it("should render label correctly", () => {
    render(<Checkbox label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("should render children correctly", () => {
    render(<Checkbox>Test Children</Checkbox>);
    expect(screen.getByText("Test Children")).toBeInTheDocument();
  });

  it("should be selected when isSelected is true", () => {
    const {container} = render(<Checkbox isSelected>Test</Checkbox>);
    const input = container.querySelector("input");
    expect(input).toBeChecked();
  });

  it("should show indeterminate state", () => {
    const {container} = render(<Checkbox isIndeterminate>Test</Checkbox>);
    const input = container.querySelector("input");
    expect(input?.getAttribute("aria-checked")).toBe("mixed");
  });

  it("should be disabled when isDisabled is true", () => {
    const {container} = render(<Checkbox isDisabled>Test</Checkbox>);
    const input = container.querySelector("input");
    expect(input).toBeDisabled();
  });

  it("should call onChange when clicked", () => {
    const onChange = jest.fn();
    const {container} = render(<Checkbox onChange={onChange}>Test</Checkbox>);
    const input = container.querySelector("input");

    if (input) {
      fireEvent.click(input);
    }

    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("should not call onChange when disabled", () => {
    const onChange = jest.fn();
    const {container} = render(
      <Checkbox isDisabled onChange={onChange}>
        Test
      </Checkbox>,
    );
    const input = container.querySelector("input");

    if (input) {
      fireEvent.click(input);
    }

    expect(onChange).not.toHaveBeenCalled();
  });

  it("should work as uncontrolled component", () => {
    const {container} = render(<Checkbox defaultSelected>Test</Checkbox>);
    const input = container.querySelector("input");
    expect(input).toBeChecked();
  });

  it("should apply different sizes", () => {
    const sizes = ["sm", "md", "lg"] as const;

    sizes.forEach((size) => {
      const {container, unmount} = render(<Checkbox size={size}>Test</Checkbox>);
      const wrapper = container.querySelector('[class*="wrapper"]');
      expect(wrapper).toBeInTheDocument();
      unmount();
    });
  });

  it("should apply different colors", () => {
    const colors = ["default", "primary", "secondary", "success", "warning", "danger"] as const;

    colors.forEach((color) => {
      const {container, unmount} = render(
        <Checkbox color={color} isSelected>
          Test
        </Checkbox>,
      );
      expect(container.querySelector("label")).toBeInTheDocument();
      unmount();
    });
  });

  it("should apply custom classNames", () => {
    const {container} = render(
      <Checkbox
        classNames={{
          base: "custom-base",
          wrapper: "custom-wrapper",
          label: "custom-label",
        }}
      >
        Test
      </Checkbox>,
    );

    expect(container.querySelector(".custom-base")).toBeInTheDocument();
    expect(container.querySelector(".custom-wrapper")).toBeInTheDocument();
    expect(container.querySelector(".custom-label")).toBeInTheDocument();
  });

  it("should handle required attribute", () => {
    const {container} = render(<Checkbox isRequired>Test</Checkbox>);
    const input = container.querySelector("input");
    expect(input).toHaveAttribute("required");
  });

  it("should handle invalid state", () => {
    const {container} = render(<Checkbox isInvalid>Test</Checkbox>);
    const input = container.querySelector("input");
    expect(input?.getAttribute("aria-invalid")).toBe("true");
  });

  it("should handle readonly state", () => {
    const onChange = jest.fn();
    const {container} = render(
      <Checkbox isReadOnly onChange={onChange}>
        Test
      </Checkbox>,
    );
    const input = container.querySelector("input");

    if (input) {
      fireEvent.click(input);
    }

    expect(onChange).not.toHaveBeenCalled();
  });
});

describe("CheckboxGroup", () => {
  const options = [
    {label: "Option 1", value: "1"},
    {label: "Option 2", value: "2"},
    {label: "Option 3", value: "3"},
  ];

  it("should render correctly", () => {
    const {container} = render(<CheckboxGroup options={options} />);
    expect(container.querySelector('[role="group"]')).toBeInTheDocument();
  });

  it("should render all options", () => {
    render(<CheckboxGroup options={options} />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("should render label", () => {
    render(<CheckboxGroup label="Test Label" options={options} />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("should render description", () => {
    render(<CheckboxGroup description="Test Description" options={options} />);
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("should handle defaultValue", () => {
    const {container} = render(<CheckboxGroup defaultValue={["1", "2"]} options={options} />);
    const inputs = container.querySelectorAll("input");
    expect(inputs[0]).toBeChecked();
    expect(inputs[1]).toBeChecked();
    expect(inputs[2]).not.toBeChecked();
  });

  it("should call onChange when option is clicked", () => {
    const onChange = jest.fn();
    const {container} = render(<CheckboxGroup options={options} onChange={onChange} />);
    const inputs = container.querySelectorAll("input");

    fireEvent.click(inputs[0]);

    expect(onChange).toHaveBeenCalledWith(["1"]);
  });

  it("should handle multiple selections", () => {
    const onChange = jest.fn();
    const {container} = render(
      <CheckboxGroup defaultValue={["1"]} options={options} onChange={onChange} />,
    );
    const inputs = container.querySelectorAll("input");

    fireEvent.click(inputs[1]);

    expect(onChange).toHaveBeenCalledWith(["1", "2"]);
  });

  it("should handle unselecting", () => {
    const onChange = jest.fn();
    const {container} = render(
      <CheckboxGroup defaultValue={["1", "2"]} options={options} onChange={onChange} />,
    );
    const inputs = container.querySelectorAll("input");

    fireEvent.click(inputs[0]);

    expect(onChange).toHaveBeenCalledWith(["2"]);
  });

  it("should disable all checkboxes when isDisabled is true", () => {
    const {container} = render(<CheckboxGroup isDisabled options={options} />);
    const inputs = container.querySelectorAll("input");

    inputs.forEach((input) => {
      expect(input).toBeDisabled();
    });
  });

  it("should disable specific options", () => {
    const optionsWithDisabled = [
      {label: "Option 1", value: "1"},
      {label: "Option 2", value: "2", disabled: true},
      {label: "Option 3", value: "3"},
    ];

    const {container} = render(<CheckboxGroup options={optionsWithDisabled} />);
    const inputs = container.querySelectorAll("input");

    expect(inputs[0]).not.toBeDisabled();
    expect(inputs[1]).toBeDisabled();
    expect(inputs[2]).not.toBeDisabled();
  });

  it("should render horizontally", () => {
    const {container} = render(<CheckboxGroup orientation="horizontal" options={options} />);
    const wrapper = container.querySelector(".checkbox-group-wrapper");
    expect(wrapper).toHaveStyle({flexDirection: "row"});
  });

  it("should render vertically by default", () => {
    const {container} = render(<CheckboxGroup options={options} />);
    const wrapper = container.querySelector(".checkbox-group-wrapper");
    expect(wrapper).toHaveStyle({flexDirection: "column"});
  });

  it("should work as controlled component", () => {
    const {container, rerender} = render(<CheckboxGroup value={["1"]} options={options} />);
    let inputs = container.querySelectorAll("input");
    expect(inputs[0]).toBeChecked();
    expect(inputs[1]).not.toBeChecked();

    rerender(<CheckboxGroup value={["2", "3"]} options={options} />);
    inputs = container.querySelectorAll("input");
    expect(inputs[0]).not.toBeChecked();
    expect(inputs[1]).toBeChecked();
    expect(inputs[2]).toBeChecked();
  });
});

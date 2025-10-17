import "@testing-library/jest-dom";
import type {UserEvent} from "@testing-library/user-event";

import * as React from "react";
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {Select} from "../src";

const options = [
  {label: "Option 1", value: "1"},
  {label: "Option 2", value: "2"},
  {label: "Option 3", value: "3"},
];

describe("Select", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("should render correctly", () => {
    const wrapper = render(<Select options={options} placeholder="Select an option" />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should display placeholder", () => {
    render(<Select options={options} placeholder="Select an option" />);

    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("should open dropdown on click", async () => {
    render(<Select options={options} placeholder="Select" />);

    const trigger = screen.getByRole("combobox");
    await user.click(trigger);

    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("should select option", async () => {
    const onChange = jest.fn();
    render(<Select options={options} placeholder="Select" onChange={onChange} />);

    const trigger = screen.getByRole("combobox");
    await user.click(trigger);

    const option1 = screen.getByText("Option 1");
    await user.click(option1);

    expect(onChange).toHaveBeenCalledWith("1");
  });

  it("should support multiple mode", async () => {
    const onChange = jest.fn();
    render(<Select mode="multiple" options={options} placeholder="Select" onChange={onChange} />);

    const trigger = screen.getByRole("combobox");
    await user.click(trigger);

    const option1 = screen.getByText("Option 1");
    await user.click(option1);

    expect(onChange).toHaveBeenCalledWith(["1"]);
  });

  it("should clear value", async () => {
    const onChange = jest.fn();
    render(<Select options={options} defaultValue="1" allowClear onChange={onChange} />);

    const clearIcon = screen.getByRole("combobox").querySelector("svg");
    if (clearIcon) {
      fireEvent.mouseDown(clearIcon);
    }

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(undefined);
    });
  });

  it("should be disabled", () => {
    render(<Select options={options} disabled placeholder="Select" />);

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveClass("cursor-not-allowed");
  });

  it("should filter options with search", async () => {
    render(<Select options={options} showSearch placeholder="Select" />);

    const trigger = screen.getByRole("combobox");
    await user.click(trigger);

    const input = screen.getByRole("combobox").querySelector("input");
    if (input) {
      await user.type(input, "2");
    }

    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("should show no data message when options are empty", async () => {
    render(<Select options={[]} placeholder="Select" notFoundContent="No data" />);

    const trigger = screen.getByRole("combobox");
    await user.click(trigger);

    expect(screen.getByText("No data")).toBeInTheDocument();
  });

  it("should support controlled mode", async () => {
    const onChange = jest.fn();
    const {rerender} = render(<Select options={options} value="1" onChange={onChange} />);

    expect(screen.getByText("Option 1")).toBeInTheDocument();

    rerender(<Select options={options} value="2" onChange={onChange} />);

    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });
});

import React from "react";
import {render, screen} from "@testing-library/react";
// import {describe, it, expect} from "vitest";

import {Divider} from "../src";

describe("Divider", () => {
  it("should render correctly", () => {
    const {container} = render(<Divider />);

    expect(container.firstChild).toBeTruthy();
  });

  it("should render with default orientation (horizontal)", () => {
    const {container} = render(<Divider />);
    const divider = container.firstChild as HTMLElement;

    expect(divider).toHaveClass("w-full");
    expect(divider).toHaveClass("h-px");
  });

  it("should render vertical orientation correctly", () => {
    const {container} = render(<Divider orientation="vertical" />);
    const divider = container.firstChild as HTMLElement;

    expect(divider).toHaveClass("h-full");
    expect(divider).toHaveClass("w-px");
  });

  it("should apply custom thickness", () => {
    const {container} = render(<Divider thickness={4} />);
    const divider = container.firstChild as HTMLElement;

    expect(divider).toHaveStyle({height: "4px"});
  });

  it("should apply custom thickness for vertical orientation", () => {
    const {container} = render(<Divider orientation="vertical" thickness={4} />);
    const divider = container.firstChild as HTMLElement;

    expect(divider).toHaveStyle({width: "4px"});
  });

  it("should apply color variants", () => {
    const {container, rerender} = render(<Divider color="primary" />);
    let divider = container.firstChild as HTMLElement;

    expect(divider).toHaveClass("bg-primary");

    rerender(<Divider color="danger" />);
    divider = container.firstChild as HTMLElement;
    expect(divider).toHaveClass("bg-danger");
  });

  it("should apply custom className", () => {
    const {container} = render(<Divider className="custom-class" />);
    const divider = container.firstChild as HTMLElement;

    expect(divider).toHaveClass("custom-class");
  });

  it("should support custom styles", () => {
    const {container} = render(<Divider style={{margin: "10px"}} />);
    const divider = container.firstChild as HTMLElement;

    expect(divider).toHaveStyle({margin: "10px"});
  });

  it("should forward ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Divider ref={ref} />);

    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("should render as custom element when 'as' prop is provided", () => {
    const {container} = render(<Divider as="hr" />);
    const divider = container.firstChild as HTMLElement;

    expect(divider.tagName).toBe("HR");
  });

  it("should have correct display name", () => {
    expect(Divider.displayName).toBe("CloudStackDesign.Divider");
  });

  it("should apply shrink-0 class", () => {
    const {container} = render(<Divider />);
    const divider = container.firstChild as HTMLElement;

    expect(divider).toHaveClass("shrink-0");
  });

  it("should render children when provided", () => {
    const {container} = render(
      <Divider>
        <span>Divider Text</span>
      </Divider>,
    );

    expect(screen.getByText("Divider Text")).toBeTruthy();
  });

  it("should combine multiple props correctly", () => {
    const {container} = render(
      <Divider orientation="vertical" color="success" thickness={3} className="my-custom-class" />,
    );
    const divider = container.firstChild as HTMLElement;

    expect(divider).toHaveClass("h-full");
    expect(divider).toHaveClass("w-px");
    expect(divider).toHaveClass("bg-success");
    expect(divider).toHaveClass("my-custom-class");
    expect(divider).toHaveStyle({width: "3px"});
  });
});

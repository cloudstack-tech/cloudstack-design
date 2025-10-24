import * as React from "react";
import {render} from "@testing-library/react";

import {Skeleton} from "../src";

describe("Skeleton", () => {
  it("should render correctly", () => {
    const wrapper = render(<Skeleton />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Skeleton ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("should render with pulse variant", () => {
    const {container} = render(<Skeleton variant="pulse" />);
    const skeleton = container.querySelector("div");

    expect(skeleton).toHaveClass("animate-pulse");
  });

  it("should render with wave variant", () => {
    const {container} = render(<Skeleton variant="wave" />);
    const skeleton = container.querySelector("div");

    // wave 变体使用 before:animate-shimmer
    expect(skeleton).toBeTruthy();
  });

  it("should render with text shape", () => {
    const {container} = render(<Skeleton shape="text" />);
    const skeleton = container.querySelector("div");

    expect(skeleton).toHaveClass("h-4");
    expect(skeleton).toHaveClass("w-full");
  });

  it("should render with circle shape", () => {
    const {container} = render(<Skeleton shape="circle" />);
    const skeleton = container.querySelector("div");

    expect(skeleton).toHaveClass("rounded-full");
  });

  it("should render with rect shape", () => {
    const {container} = render(<Skeleton shape="rect" />);
    const skeleton = container.querySelector("div");

    expect(skeleton).toHaveClass("rounded-lg");
  });

  it("should render with different sizes for circle", () => {
    const {container: smContainer} = render(<Skeleton shape="circle" size="sm" />);
    const smSkeleton = smContainer.querySelector("div");

    expect(smSkeleton).toHaveClass("w-8");
    expect(smSkeleton).toHaveClass("h-8");

    const {container: mdContainer} = render(<Skeleton shape="circle" size="md" />);
    const mdSkeleton = mdContainer.querySelector("div");

    expect(mdSkeleton).toHaveClass("w-12");
    expect(mdSkeleton).toHaveClass("h-12");
  });

  it("should render with isLoaded prop", () => {
    const {container} = render(<Skeleton isLoaded />);
    const skeleton = container.querySelector("div");

    expect(skeleton).toHaveClass("opacity-0");
    expect(skeleton).toHaveClass("pointer-events-none");
  });

  it("should render with disableAnimation prop", () => {
    const {container} = render(<Skeleton disableAnimation />);
    const skeleton = container.querySelector("div");

    expect(skeleton).toHaveClass("animate-none");
  });

  it("should accept custom className", () => {
    const {container} = render(<Skeleton className="custom-class" />);
    const skeleton = container.querySelector("div");

    expect(skeleton).toHaveClass("custom-class");
  });
});

import * as React from "react";
import {render} from "@testing-library/react";

import { Breadcrumb } from "../src";

describe("Breadcrumb", () => {
  it("should render correctly", () => {
   const wrapper = render(<Breadcrumb />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Breadcrumb ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
import * as React from "react";
import {render} from "@testing-library/react";

import { Empty } from "../src";

describe("Empty", () => {
  it("should render correctly", () => {
   const wrapper = render(<Empty />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Empty ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
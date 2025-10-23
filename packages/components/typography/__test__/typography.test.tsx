import * as React from "react";
import {render} from "@testing-library/react";

import { Typography } from "../src";

describe("Typography", () => {
  it("should render correctly", () => {
   const wrapper = render(<Typography />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Typography ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
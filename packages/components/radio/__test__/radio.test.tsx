import * as React from "react";
import {render} from "@testing-library/react";

import { Radio } from "../src";

describe("Radio", () => {
  it("should render correctly", () => {
   const wrapper = render(<Radio />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Radio ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
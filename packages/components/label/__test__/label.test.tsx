import * as React from "react";
import {render} from "@testing-library/react";

import { Label } from "../src";

describe("Label", () => {
  it("should render correctly", () => {
   const wrapper = render(<Label />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Label ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
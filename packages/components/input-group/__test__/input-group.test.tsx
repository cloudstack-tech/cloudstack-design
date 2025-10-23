import * as React from "react";
import {render} from "@testing-library/react";

import { InputGroup } from "../src";

describe("InputGroup", () => {
  it("should render correctly", () => {
   const wrapper = render(<InputGroup />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<InputGroup ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
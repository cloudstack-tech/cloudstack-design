import * as React from "react";
import {render} from "@testing-library/react";

import { Checkbox } from "../src";

describe("Checkbox", () => {
  it("should render correctly", () => {
   const wrapper = render(<Checkbox />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Checkbox ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
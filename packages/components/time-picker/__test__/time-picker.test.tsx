import * as React from "react";
import {render} from "@testing-library/react";

import { TimePicker } from "../src";

describe("TimePicker", () => {
  it("should render correctly", () => {
   const wrapper = render(<TimePicker />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<TimePicker ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
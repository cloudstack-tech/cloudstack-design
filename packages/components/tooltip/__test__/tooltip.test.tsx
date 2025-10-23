import * as React from "react";
import {render} from "@testing-library/react";

import {Tooltip} from "../src";

describe("Tooltip", () => {
  it("should render correctly", () => {
    const wrapper = render(<Tooltip />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Tooltip ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

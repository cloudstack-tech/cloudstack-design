import * as React from "react";
import {render} from "@testing-library/react";

import {Splitter} from "../src";

describe("Splitter", () => {
  it("should render correctly", () => {
    const wrapper = render(<Splitter />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Splitter ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

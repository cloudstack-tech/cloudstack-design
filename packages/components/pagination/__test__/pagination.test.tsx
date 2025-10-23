import * as React from "react";
import {render} from "@testing-library/react";

import { Pagination } from "../src";

describe("Pagination", () => {
  it("should render correctly", () => {
   const wrapper = render(<Pagination />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Pagination ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";

import SumApp from "./SumApp";

describe("SumApp", () => {
  it("Render SumApp", () => {
    const { asFragment } = render(<SumApp />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Sum 1 + 1", () => {
    const { container } = render(<SumApp param1={1} param2={2} />);

    const sumSpan = container.querySelector("#sum");

    expect(container.querySelector("h1")).toHaveTextContent("Sum...");

    expect(sumSpan.textContent).toBe("3");
  });
});

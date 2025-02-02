import { render, screen } from "@testing-library/react";

import App from "../App";

describe("Render App", () => {
  it("Render App", () => {
    render(<App />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
});

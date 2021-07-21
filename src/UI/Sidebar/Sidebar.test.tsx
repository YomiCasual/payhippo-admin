import "jest-canvas-mock";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Sidebar from ".";

describe("sidebar", () => {
  it("renders the sidebar with contents", () => {
    render(<Sidebar />);
    const dashboardNav = screen.getByText(/dashboard/i);

    expect(dashboardNav).toBeInTheDocument();
  });
  it("renders the logo with alt attribute pay-hippo", () => {
    render(<Sidebar />);
    const logo = screen.getByTestId("logo");
    expect(logo).toHaveAttribute("alt", "payhippo-logo");
  });
});

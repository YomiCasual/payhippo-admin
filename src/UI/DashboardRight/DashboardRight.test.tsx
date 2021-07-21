import "jest-canvas-mock";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DashboardRight from ".";

describe("right-dashboard", () => {
  it("renders the top users and recent transactions header", () => {
    render(<DashboardRight />);
    const topUsers = screen.getByText(/top users/i);
    const recentTransactions = screen.getByText(/recent transactions/i);

    expect(topUsers).toBeInTheDocument();
    expect(recentTransactions).toBeInTheDocument();
  });
});

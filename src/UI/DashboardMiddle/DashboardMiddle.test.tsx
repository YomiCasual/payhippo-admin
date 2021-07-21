import "jest-canvas-mock";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DashboardMiddle from ".";

jest.mock('react-chartjs-2', () => ({ Bar: () => null }))

describe("middle-dashboard", () => {
  it("renders the top bar", () => {
  
    render(<DashboardMiddle />);
    const header = screen.getByText("Dashboard");
    const registerdUsers = screen.getByText(/registered users/i)
    const totalLoanDisbursed = screen.getByText(/total loan disbursed/i)
    const unresolvedTickets = screen.getByText(/unresolved tickets/i)
    expect(header).toBeInTheDocument();
    expect(registerdUsers).toBeInTheDocument()
    expect(totalLoanDisbursed).toBeInTheDocument()
    expect(unresolvedTickets).toBeInTheDocument()
  });
});



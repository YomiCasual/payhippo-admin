import "jest-canvas-mock";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

jest.mock("react-chartjs-2", () => ({ Bar: () => null }));

describe("App", () => {
  it("renders component correctly", () => {
    render(<App />);
  });
});

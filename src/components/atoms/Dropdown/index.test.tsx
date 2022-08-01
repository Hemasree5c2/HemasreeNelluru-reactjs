import { render, screen } from "@testing-library/react";
import React from "react";
import DropDown from ".";

describe("Dropdown Testing", () => {
  test("Checking for Input field placeholder", () => {
    render(<DropDown placeholder="dropdown" onChange={() => {}} />);
    expect(screen.getByPlaceholderText("dropdown")).toBeInTheDocument();
  });
});

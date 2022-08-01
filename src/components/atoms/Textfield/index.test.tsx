import { render, screen } from "@testing-library/react";
import React from "react";
import Textfield from ".";

describe("Text Box Testing", () => {
  test("Checking for Input field placeholder", () => {
    render(<Textfield error placeholder="textbox" handleChange={() => {}} />);
    expect(screen.getByPlaceholderText("textbox")).toBeInTheDocument();
  });
});

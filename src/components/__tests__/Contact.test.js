import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact us page", () => {
  it("Should render three input fields", () => {
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBox.length).toBe(3);
  });

  it("Should have an email input field", () => {
    render(<Contact />);
    const email = screen.getByPlaceholderText("Email");
    expect(email).toHaveAttribute("type", "email");
  });

  it("Should display a 'Send Message' button", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

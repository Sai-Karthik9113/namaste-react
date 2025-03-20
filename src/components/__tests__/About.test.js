import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import About from "../About";

describe("About us page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
  });

  it("Should have a link to navigate to the home page", () => {
    const homeLink = screen.getByRole("link", {
      name: /order now on xwippy/i,
    });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/home");
  });

  it("Should have link to navigate to the contact us page", () => {
    const contactLink = screen.getByRole("link", { name: /contact us/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contactus");
  });
});

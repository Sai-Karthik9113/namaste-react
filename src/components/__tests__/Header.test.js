import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../redux_store/appStore";

describe("Header", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });
  it("Should have link to navigate to the home page", () => {
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/home");
  });

  it("Should have link to navigate to the about us page", () => {
    const aboutLink = screen.getByRole("link", { name: /about us/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/aboutus");
  });

  it("Should have link to navigate to the contact us page", () => {
    const contactLink = screen.getByRole("link", { name: /contact us/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contactus");
  });

  it("Should have link to navigate to the cart page", () => {
    const cartLink = screen.getByRole("link", { name: /cart/i });
    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute("href", "/cart");
  });

  it("Should toggle the login/logout button when clicked", () => {
    expect.assertions(3);

    //Check if the login button is initially present
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();

    //Click the login button
    fireEvent.click(loginButton);

    //Check if the logout button appears after clicking login
    const logoutButton = screen.getByRole("button", { name: /logout/i });
    expect(logoutButton).toBeInTheDocument();

    //Click the logout button
    fireEvent.click(logoutButton);

    //Check if the login button appears after clicking logout
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("Should enable and disable dark mode when clicked", () => {
    expect.assertions(4);

    const darkModeButton = screen.getByTestId("dark-mode-toggle");

    //Check if the darkmode button is present
    expect(darkModeButton).toBeInTheDocument();

    //Check initial theme mode (light mode)
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    //Click to enable dark mode
    fireEvent.click(darkModeButton);
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    //Click again to disable dark mode
    fireEvent.click(darkModeButton);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantListMockData.json";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { MemoryRouter } from "react-router-dom";
import { act } from "react";

jest.mock("../../utils/useOnlineStatus", () => jest.fn());

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("Home Page", () => {
  beforeEach(() => {
    useOnlineStatus.mockReturnValue(true);
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Should render body component without crashing", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Body />
        </MemoryRouter>
      );
    });

    const cardLength = await waitFor(() =>
      screen.getAllByTestId("restaurantCard")
    );
    expect(cardLength.length).toBe(24);
  });

  it("Should display offline message when not online", async () => {
    useOnlineStatus.mockReturnValue(false);
    await act(async () => {
      render(
        <MemoryRouter>
          <Body />
        </MemoryRouter>
      );
    });

    expect(screen.getByText("Looks like you are offline!")).toBeInTheDocument();
  });

  it("Should check the presence of Shimmer UI", async () => {
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ data: { cards: [] } }),
    });
    await act(async () => {
      render(
        <MemoryRouter>
          <Body />
        </MemoryRouter>
      );
    });

    expect(screen.getByTestId("shimmerCard")).toBeInTheDocument();
  });

  it("Should search restaurant list for pizza as input", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Body />
        </MemoryRouter>
      );
    });

    const searchBox = screen.getByPlaceholderText("Search restaurants...");
    fireEvent.change(searchBox, { target: { value: "Burger" } });
    expect(searchBox.value).toBe("Burger");

    fireEvent.click(screen.getByRole("button", { name: /search/i }));

    const filteredCards = await waitFor(() =>
      screen.getAllByTestId("restaurantCard")
    );
    expect(filteredCards.length).toBe(2);
  });

  it("Should filter restaurants with ratings equal to or greater than 4.5", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Body />
        </MemoryRouter>
      );
    });

    const filterButton = screen.getByRole("button", { name: /top rated/i });
    fireEvent.click(filterButton);
    const filteredCards = await waitFor(() =>
      screen.getAllByTestId("restaurantCard")
    );
    expect(filteredCards.length).toBe(13);
  });

  it("Should remove the 'Top Rated' filter when Clear button is clicked", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Body />
        </MemoryRouter>
      );
    });

    //Top Rated Filter
    const filterButton = screen.getByRole("button", { name: /top rated/i });
    fireEvent.click(filterButton);
    const filteredCards = await waitFor(() =>
      screen.getAllByTestId("restaurantCard")
    );
    expect(filteredCards.length).toBe(13);

    //Click on Clear Button
    const clearButton = screen.getByRole("button", { name: /clear/i });
    fireEvent.click(clearButton);

    const cardLength = await waitFor(() =>
      screen.getAllByTestId("restaurantCard")
    );
    expect(cardLength.length).toBe(24);
  });

  it("Should remove the search results when clear button is clicked", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Body />
        </MemoryRouter>
      );
    });

    //Search Funtionality
    const searchBox = screen.getByPlaceholderText("Search restaurants...");
    fireEvent.change(searchBox, { target: { value: "pizza" } });
    expect(searchBox.value).toBe("pizza");

    fireEvent.click(screen.getByRole("button", { name: /search/i }));

    const searchCards = await waitFor(() =>
      screen.getAllByTestId("restaurantCard")
    );
    expect(searchCards.length).toBe(1);

    //Click on Clear Button
    fireEvent.click(screen.getByRole("button", { name: /clear/i }));

    const totalCardLength = await waitFor(() =>
      screen.getAllByTestId("restaurantCard")
    );
    expect(totalCardLength.length).toBe(24);
  });

  it("Should navigate to restaurant details page when a restaurant card is clicked", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Body />
        </MemoryRouter>
      );
    });
    const restaurantLinks = await waitFor(() => screen.getAllByRole("link"));
    expect(restaurantLinks[0]).toHaveAttribute("href", "/restaurants/10576");
  });

  test("Should correctly merge restaurants from API response", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Body />
        </MemoryRouter>
      );
    });

    const firstCard = await waitFor(() => screen.findByText("KFC"));
    expect(firstCard).toBeInTheDocument();

    const secondCard = await waitFor(() => screen.getByText("Chinese Wok"));
    expect(secondCard).toBeInTheDocument();
  });

  it("Should log an error when API call fails", async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error("API Failure")));

    await act(async () => {
      render(
        <MemoryRouter>
          <Body />
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith("Error: ", expect.any(Error));
    });
  });
});

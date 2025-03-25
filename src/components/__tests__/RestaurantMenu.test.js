import { screen, waitFor, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import MOCK_DATA from "../mocks/restaurantMenuMockData.json";
import { Provider } from "react-redux";
import appStore from "../../redux_store/appStore";
import { act } from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("Restaurant Menu Page", () => {
  it("Should render without crashing", async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      );
    });
    const restaurantName = await waitFor(() =>
      screen.getByText("LunchBox - Meals and Thalis")
    );
    expect(restaurantName).toBeInTheDocument();
    expect(
      screen.getByText("4.4 (8.2K+ ratings) • ₹200 for two")
    ).toBeInTheDocument();
    expect(screen.getByText("Thalis, North Indian")).toBeInTheDocument();
    expect(screen.getByText("Hsr Layout 5th Sector")).toBeInTheDocument();
    expect(screen.getByText("30-35 MINS")).toBeInTheDocument();
  });

  it("Should have all the categories displayed", async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      );
    });
    const categories = await waitFor(() =>
      screen.getAllByTestId("restaurantCategory")
    );
    expect(categories.length).toBe(18);
  });

  it("Should check the presence of Shimmer UI", async () => {
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve([]),
    });

    await act(async () => {
      render(<RestaurantMenu />);
    });

    const shimmerCard = screen.getByTestId("shimmerDishUI");
    expect(shimmerCard).toBeInTheDocument();
  });
});

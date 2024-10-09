import { act, fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu";
import ResMenuMock from "../Mocks/ResMenuMock.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header"
import "@testing-library/jest-dom";
import Cart from "../Cart"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{return Promise.resolve(ResMenuMock)}
    })
})

it("should render cart component",async()=>{
    await act(async()=>{
        render(
          <Provider store={appStore}>
            <BrowserRouter>
              <Header />
              <RestaurantMenu />
              <Cart />
            </BrowserRouter>
          </Provider>
        );
    })
    const accordian = screen.getByText("Breads(4)")
    fireEvent.click(accordian)
    const item = screen.getAllByTestId("foodItems")
    expect(item.length).toBe(4)
    const add = screen.getAllByRole("button", { name: "+Add" });
    fireEvent.click(add[0])
    expect(screen.getByText("Cart (1 items )")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(5);
    const clear = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clear);
    const text = screen.getByText("cart is Empty!! please add some Items!");
    expect(text).toBeInTheDocument();
})
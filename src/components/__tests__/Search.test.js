import { act, fireEvent, render, screen } from "@testing-library/react";
import ResDataMock from "../Mocks/ResDataMock.json";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch =jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(ResDataMock)
        }
    })
})

it("should search restaurant list based on input box",async()=>{
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    ))
    const searchBtn = screen.getByRole("button", { name: "🔍Search" });
    const InputBox =screen.getByTestId("searchInputBox")
    fireEvent.change(InputBox,{target:{value:"burger"}})
    fireEvent.click(searchBtn);
    const cards = await screen.findAllByTestId("ResCard");
    expect(cards.length).toBe(2);
})

it("should search restaurant list based on clicking Top Rated Restaurant", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });
  fireEvent.click(searchBtn);
  const cards = await screen.findAllByTestId("ResCard");
  expect(cards.length).toBe(7);
});
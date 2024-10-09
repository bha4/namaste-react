import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import ResCardMock from "../Mocks/ResCardMock.json"
import "@testing-library/jest-dom"

it("should render restaurant Card Component",()=>{
    render(<RestaurantCard {...ResCardMock}/>);

    const name = screen.getByText("Chinese Wok");

    expect(name).toBeInTheDocument();
})
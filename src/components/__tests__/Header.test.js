 import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load Header component with a Login Button",()=>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const LoginBtn = screen.getByRole("button",{name:"Login"});
    
    expect(LoginBtn).toBeInTheDocument();
})

it("should load Header component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const LoginBtn = screen.getByText("Cart (0 items )");

  expect(LoginBtn).toBeInTheDocument();
});

it("should load Header component with a Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const LoginBtn = screen.getByText(/Cart/);

  expect(LoginBtn).toBeInTheDocument();
});

it("should load Header component that change Login to Logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const Login= screen.getByRole("button",{name:"Login"});

    fireEvent.click(Login);
    const Logout = screen.getByRole("button", { name: "Logout" });

  expect(Logout).toBeInTheDocument();
});
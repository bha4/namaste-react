import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("this is contant page testcases",()=>{
    test("should load Contact component ",()=>{
        render(<Contact/>);
        const heading=screen.getByRole("heading");
        expect(heading).toBeInTheDocument(); 
    })

    test("should load button in Contact component", () => {
      render(<Contact />);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    test("should load button name in Contact component", () => {
      render(<Contact />);
      const button = screen.getByText("Submit");
      expect(button).toBeInTheDocument();
    });

    it("should load input boxes in Contact component", () => {
      render(<Contact />);
      const textbox = screen.getAllByRole("textbox");
      expect(textbox.length).toBe(2);
    });
})
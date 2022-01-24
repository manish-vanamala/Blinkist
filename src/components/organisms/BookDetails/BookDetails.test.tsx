import {screen,render,fireEvent} from "@testing-library/react";
import BookDetails from "./BookDetails";
import { BrowserRouter } from "react-router-dom";
function renderBookDetails() {
    render(
        <BrowserRouter><BookDetails/></BrowserRouter>
    )
}
describe("BookDetails",()=>{
  it("render BookDetails title",()=>{
    renderBookDetails();
    const HeadingElement = screen.getByText("Beyond Entrepreneurship 2.0");
    expect(HeadingElement).toBeInTheDocument();
  });
  it("render a finished reading button",()=>{
    renderBookDetails();
    const ButtonElement = screen.getByRole("button",{name:/Finished Reading/i});
    expect(ButtonElement).toBeInTheDocument();
  })
  it("render naviagate to my Library",()=>{
    renderBookDetails();
    const ButtonElement = screen.getByRole("button",{name:/Finished Reading/i});
    fireEvent.click(ButtonElement);
    expect(window.location.pathname).toBe("/");
  });
})
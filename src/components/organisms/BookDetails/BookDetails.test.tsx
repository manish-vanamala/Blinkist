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
    const ButtonElement = screen.getByRole("button",{name:/Finished Reading/i});
    expect(ButtonElement).toBeInTheDocument();
    fireEvent.click(ButtonElement);
  });
})
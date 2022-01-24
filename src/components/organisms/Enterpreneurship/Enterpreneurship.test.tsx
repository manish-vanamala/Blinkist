import {screen,render} from "@testing-library/react";
import Enterpreneurship from "./Enterpreneurship";
import { BrowserRouter } from "react-router-dom";
function renderEnterPreneurship() {
    render(
        <BrowserRouter><Enterpreneurship/></BrowserRouter>
    )
}
describe("Enterpreneurship",()=>{
    it("should render input",()=>{
        renderEnterPreneurship();
        const textElement = screen.getByPlaceholderText("Search by Title or Author");
        expect(textElement).toBeInTheDocument();
    })
})
import {screen,render, fireEvent} from "@testing-library/react";
import Enterpreneurship from "./Enterpreneurship";
import { BrowserRouter } from "react-router-dom";
function renderEnterPreneurship() {
    render(
        <BrowserRouter><Enterpreneurship/></BrowserRouter>
    )
}
describe("Enterpreneurship",()=>{

    beforeEach(() => {
        jest.mock("../../../__mocks__/axios")
    })


    it("should render input",()=>{
        renderEnterPreneurship();
        const textElement = screen.getByPlaceholderText("Search by Title or Author");
        expect(textElement).toBeInTheDocument();
    })
    it("should be able to type into input",()=>{
        renderEnterPreneurship();
        const inputElement = screen.getByPlaceholderText("Search by Title or Author");
        fireEvent.click(inputElement);
        fireEvent.change(inputElement, { target: { value: "Beyond" } })
        expect((inputElement as HTMLInputElement).value).toBe("Beyond");
    })
    /*it("should render the card named dropshipping",async ()=>{
        renderEnterPreneurship();
        const cardElement =await screen.findByTestId("card-12");
        
        expect(cardElement).toBeInTheDocument();
    })*/
})
import {screen, render, fireEvent} from "@testing-library/react";
import Explore from "./Explore";

import { BrowserRouter } from "react-router-dom";
function renderExplore(){
    render(
        <BrowserRouter><Explore/></BrowserRouter>
    )
}

describe("Explore component",()=>{
    it("should render explore button",()=>{
        renderExplore();
        const ButtonElement = screen.getByRole("button",{name:/explore/i});
        expect(ButtonElement).toBeInTheDocument();
    })
    it("should have expandMoreIcon",()=>{
        renderExplore();
        const more = screen.getByTestId("expandmore");
        expect(more).toBeInTheDocument();
    })
    it("should explore button to be clickable",()=>{
        renderExplore();
        const ButtonElement = screen.getByRole("button",{name:/explore/i});
        fireEvent.click(ButtonElement);
        const text = screen.getByText(/Enterpreneurship/i);
        expect(text).toBeInTheDocument();
    })
    it("should have less icon on click explore button",()=>{
        renderExplore();
        const ButtonElement = screen.getByRole("button",{name:/explore/i});
        fireEvent.click(ButtonElement);
        const less = screen.getByTestId("expandless");
        expect(less).toBeInTheDocument();
    })
    it("should navigate to bookdetailspage on click enterpreneurship link",()=>{
        renderExplore();
        const ButtonElement = screen.getByRole("button",{name:/explore/i});
        fireEvent.click(ButtonElement);
        const text = screen.getByText(/Enterpreneurship/i);
        fireEvent.click(text);
        expect(window.location.pathname).toBe("/enterpreneurship");
    })
})
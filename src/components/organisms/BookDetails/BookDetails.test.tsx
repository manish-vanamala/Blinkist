import { screen, render, fireEvent } from "@testing-library/react";
import BookDetails from "./BookDetails";
import { BrowserRouter } from "react-router-dom";
function renderBookDetails() {
  render(
    <BrowserRouter>
      <BookDetails />
    </BrowserRouter>
  );
}
describe("BookDetails", () => {
  it("render BookDetails title", () => {
    renderBookDetails();
    const HeadingElement = screen.getByText("Beyond Entrepreneurship 2.0");
    expect(HeadingElement).toBeInTheDocument();
  });
  it("render a finished reading button", () => {
    renderBookDetails();
    const ButtonElement = screen.getByRole("button", {
      name: /Finished Reading/i,
    });
    expect(ButtonElement).toBeInTheDocument();
  });
  it("should naviagate to my Library", () => {
    renderBookDetails();
    const ButtonElement = screen.getByRole("button", {
      name: /Finished Reading/i,
    });
    fireEvent.click(ButtonElement);
    expect(window.location.pathname).toBe("/");
  });
  it("should have read now button",()=>{
    renderBookDetails();
    const buttonElement = screen.getByRole("button",{name:/read now/i});
    expect(buttonElement).toBeTruthy();
  })
  it("should have send to kindle button",()=>{
    renderBookDetails();
    const buttonElement = screen.getByRole("button",{name:/send to kindle/i});
    expect(buttonElement).toBeTruthy();
  })
  it("should have synopsis tab",()=>{
    renderBookDetails();
    const synopsisTab = screen.getByRole("tab",{name:/synopsis/i});
    expect(synopsisTab).toBeTruthy();
  })
  it("should display value starts with far on click who tab",()=>{
    renderBookDetails();
    const whoTab = screen.getByRole("tab",{name:/who/i});
    fireEvent.click(whoTab);
    expect(screen.getByText(/Far far away, behind the word mountains/i)).toBeTruthy();
  })
  it("should display value starts with Even the all-powerful on click about tab",()=>{
    renderBookDetails();
    const aboutTab = screen.getByRole("tab",{name:/about/i});
    fireEvent.click(aboutTab);
    expect(screen.getByText(/Even the all-powerful/i)).toBeTruthy();
  })
});

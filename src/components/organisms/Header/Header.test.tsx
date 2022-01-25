import { screen, render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
function renderHeader() {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

describe("Header Component", () => {
  it("should render explore component", () => {
    renderHeader();
    const exploreComponent = screen.getByTestId("explorebutton");
    expect(exploreComponent).toBeInTheDocument();
  });
  it("should render MyLibrary Button", () => {
    renderHeader();
    const mylibraryButton = screen.getByRole("button", { name: /mylibrary/i });
    expect(mylibraryButton).toBeInTheDocument();
  });
  it("should Mylibrary on click naviagate to homepage", () => {
    renderHeader();
    const mylibraryButton = screen.getByRole("button", { name: /mylibrary/i });
    fireEvent.click(mylibraryButton);
    expect(window.location.pathname).toBe("/");
  });
  it("should contain avatar", () => {
    renderHeader();
    const ReactElement = screen.getByAltText(/A/i);
    expect(ReactElement).toBeInTheDocument();
  });
});

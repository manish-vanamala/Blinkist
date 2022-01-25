import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import Enterpreneurship from "./Enterpreneurship";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "@testing-library/jest-dom";
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
const data = [
  {
    id: 16,
    title: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    image: "/assets/img/5.png",
    status: "explore",
    value: 50,
  },
  {
    id: 17,
    title: "Loving Your Business",
    author: "Debbie King",
    image: "/assets/img/6.png",
    status: "explore",
    value: 0,
  },
];
const response = { data: data };
function renderEnterPreneurship() {
  render(
    <BrowserRouter>
      <Enterpreneurship />
    </BrowserRouter>
  );
}

describe("input type to be worked", () => {
  it("should render input",async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();

    const textElement = screen.getByPlaceholderText(
      "Search by Title or Author"
    );
    await waitFor(() => {
    expect(textElement).toBeInTheDocument();
    })
  });
  it("should be able to type into input",async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const inputElement = screen.getByPlaceholderText(
      "Search by Title or Author"
    );
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "Beyond" } });
    await waitFor(() => {
    expect((inputElement as HTMLInputElement).value).toBe("Beyond");
    })
  });
});

describe("Enterpreneurship", () => {
  it("should render the card named loving your business", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const cardElement = await screen.findByTestId("card-17");
    await waitFor(() => {
    expect(cardElement).toBeInTheDocument();
    })
  });
  it("should render two cards", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const cardElements = await screen.findAllByTestId(/card/i);
    await waitFor(() => {
    expect(cardElements.length).toBe(2);
    })
  });
  it("should navigate to book details page on click the card", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const cardElement = await screen.findByTestId("card-17");
    fireEvent.click(cardElement);
    await waitFor(() => {
    expect(window.location.pathname).toBe('/book');
    })
  });
});

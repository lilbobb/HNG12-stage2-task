import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SelectTicket from "./selectTicket";
import { vi } from "vitest";
import "@testing-library/jest-dom";


describe("SelectTicket Component", () => {
  beforeEach(() => {
    vi.spyOn(Storage.prototype, "setItem"); // Mock localStorage
  });

  it("renders ticket options correctly", () => {
    render(
      <MemoryRouter>
        <SelectTicket />
      </MemoryRouter>
    );

    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getByText("$150")).toBeInTheDocument();
    expect(screen.getByText("$250")).toBeInTheDocument();
  });

  it("selects a ticket when clicked", () => {
    render(
      <MemoryRouter>
        <SelectTicket />
      </MemoryRouter>
    );

    const freeTicket = screen.getByText("Free");
    fireEvent.click(freeTicket);

    expect(freeTicket.parentElement).toHaveClass("selected");
  });

  it("enables the 'Next' button after selecting a ticket", () => {
    render(
      <MemoryRouter>
        <SelectTicket />
      </MemoryRouter>
    );

    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeDisabled();

    fireEvent.click(screen.getByText("Free"));
    expect(nextButton).toBeEnabled();
  });

  it("stores selected ticket details in localStorage", () => {
    render(
      <MemoryRouter>
        <SelectTicket />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Free"));
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "2" } });
    fireEvent.click(screen.getByText("Next"));

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "ticketData",
      JSON.stringify({
        ticketType: "Free",
        access: "REGULAR ACCESS",
        ticketQuantity: "2",
      })
    );
  });
});

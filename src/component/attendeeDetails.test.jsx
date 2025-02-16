// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import { MemoryRouter, useNavigate } from "react-router-dom";
// import axios from "axios";
// import AttendeeDetails from "./attendeeDetails";
// import { saveToStorage, getFromStorage } from "./storageHelper";
// import "@testing-library/jest-dom";

// vi.mock("axios");
// vi.mock("./storageHelper", () => ({
//   saveToStorage: vi.fn(),
//   getFromStorage: vi.fn(() => null), // Ensure it starts with no stored data
// }));

// const mockNavigate = vi.fn();

// vi.mock("react-router-dom", async () => {
//   const actual = await vi.importActual("react-router-dom");
//   return {
//     ...actual,
//     useNavigate: () => mockNavigate,
//   };
// });

// describe("AttendeeDetails Component", () => {
//   beforeEach(() => {
//     vi.clearAllMocks();
//   });

//   test("renders the form correctly", () => {
//     render(
//       <MemoryRouter>
//         <AttendeeDetails />
//       </MemoryRouter>
//     );

//     expect(screen.getByText("Attendee Details")).toBeInTheDocument();
//     expect(screen.getByText("Upload Profile Photo")).toBeInTheDocument();
//     expect(screen.getByPlaceholderText("hello@ukurowo.io")).toBeInTheDocument();
//     expect(screen.getByText("Get my free Ticket")).toBeInTheDocument();
//   });

//   test("allows user to input full name and email", () => {
//     render(
//       <MemoryRouter>
//         <AttendeeDetails />
//       </MemoryRouter>
//     );

//     const nameInput = screen.getByRole("textbox", { name: /enter your name/i });
//     const emailInput = screen.getByPlaceholderText("hello@ukurowo.io");

//     fireEvent.change(nameInput, { target: { value: "Robert Adoga" } });
//     fireEvent.change(emailInput, { target: { value: "ukurowo@example.com" } });

//     expect(nameInput.value).toBe("Robert Adoga");
//     expect(emailInput.value).toBe("ukurowo@example.com");
//   });

//   test("shows validation errors on empty submission", async () => {
//     render(
//       <MemoryRouter>
//         <AttendeeDetails />
//       </MemoryRouter>
//     );

//     fireEvent.click(screen.getByTestId("get-ticket"));

//     expect(await screen.findByTestId("Full name is required")).toBeInTheDocument();
//     expect(await screen.findByTestId("Email is required")).toBeInTheDocument();
//     expect(screen.getByTestId("Invalid avatar URL")).toBeInTheDocument();
//   });

//   test("uploads an image and updates the form", async () => {
//     render(
//       <MemoryRouter>
//         <AttendeeDetails />
//       </MemoryRouter>
//     );

//     const file = new File(["dummy content"], "avatar.png", {
//       type: "image/png",
//     });

//     axios.post.mockResolvedValueOnce({
//       data: { secure_url: "https://mocked.cloudinary.com/avatar.png" },
//     });

//     const fileInput = screen.getByTestId("imageInput");
//     fireEvent.change(fileInput, { target: { files: [file] } });

//     await waitFor(() => {
//       expect(axios.post).toHaveBeenCalledTimes(1);
//       expect(saveToStorage).toHaveBeenCalledWith(
//         "attendeeData",
//         expect.objectContaining({
//           avatar: "https://mocked.cloudinary.com/avatar.png",
//         })
//       );
//       expect(screen.getByAltText("Uploaded")).toHaveAttribute(
//         "src",
//         "https://mocked.cloudinary.com/avatar.png"
//       );
//     });
//   });

//   test("navigates to /ticketready on successful form submission", async () => {
//     render(
//       <MemoryRouter>
//         <AttendeeDetails />
//       </MemoryRouter>
//     );

//     fireEvent.change(
//       screen.getByRole("textbox", { name: /enter your name/i }),
//       { target: { value: "Robert Adoga" } }
//     );
//     fireEvent.change(screen.getByPlaceholderText("hello@ukurowo.io"), {
//       target: { value: "ukurowo@example.com" },
//     });

//     fireEvent.click(screen.getByTestId("get-ticket"));

//     await waitFor(() => {
//       expect(mockNavigate).toHaveBeenCalledWith("/ticketready");
//     });
//   });

//   test("does not navigate if form is invalid", async () => {
//     render(
//       <MemoryRouter>
//         <AttendeeDetails />
//       </MemoryRouter>
//     );

//     fireEvent.click(screen.getByTest("get-ticket"));

//     await waitFor(() => {
//       expect(mockNavigate).not.toHaveBeenCalled();
//     });
//   });
// });

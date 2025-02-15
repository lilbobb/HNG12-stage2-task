// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import { MemoryRouter, useNavigate } from "react-router-dom";
// import axios from "axios";
// import AttendeeDetails from "./attendeeDetails";
// import { saveToStorage, getFromStorage } from "./storageHelper";
// import "@testing-library/jest-dom";

// vi.mock("axios");
// vi.mock("./storageHelper", () => ({
//   saveToStorage: vi.fn(),
//   getFromStorage: vi.fn(),
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

//     fireEvent.change(nameInput, { target: { value: "John Doe" } });
//     fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });

//     expect(nameInput.value).toBe("John Doe");
//     expect(emailInput.value).toBe("johndoe@example.com");
//   });

//   test("shows validation errors on empty submission", async () => {
//     render(
//       <MemoryRouter>
//         <AttendeeDetails />
//       </MemoryRouter>
//     );

//     fireEvent.click(screen.getByText("Get my free Ticket"));

//     expect(
//       await screen.findByText("Full name is required")
//     ).toBeInTheDocument();
//     expect(await screen.findByText("Invalid email format")).toBeInTheDocument();
//     // Check if the avatar validation span exists
//     expect(screen.getByText("Invalid avatar URL")).toBeInTheDocument();
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

//     const fileInput = screen.getByLabelText("Drag & drop or click to upload", {
//       selector: "input",
//     });
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
//       { target: { value: "John Doe" } }
//     );
//     fireEvent.change(screen.getByPlaceholderText("hello@ukurowo.io"), {
//       target: { value: "john@example.com" },
//     });

//     fireEvent.click(screen.getByText("Get my free Ticket"));

//     await waitFor(() => {
//       expect(mockNavigate).toHaveBeenCalledWith("/ticketready");
//     });
//   });
// });

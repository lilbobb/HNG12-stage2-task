# 🎟️ Conference Ticket Generator

Welcome to the **Conference Ticket Generator** project! This application allows users to generate event tickets by filling out a form with their details, uploading an avatar, and validating the inputs. The ticket is generated upon successful submission, ensuring a smooth and accessible user experience.

## 🚀 Task Overview

This project is part of the **Stage 2 Task** in which developers build a Conference Ticket Generator using **React or any React Framework (e.g., Next.js).** The goal is to create a pixel-perfect, accessible, and responsive web application following best practices.

## 📚 Study Material

To help you complete this task efficiently, check out the following resources:

- [React Official Documentation](https://react.dev/)
- [React Forms and Validation](https://reactjs.org/docs/forms.html)
- [React State Management](https://react.dev/learn/managing-state)
- [React Event Handling](https://react.dev/learn/responding-to-events)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Accessible Forms in React](https://www.digitala11y.com/react-forms-and-accessibility/)
- [CSS Layouts for Responsive Design](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
- **UI Reference (Figma Design):** _Event Ticket Booking UI - Open Source Practice Project_

## 🔥 Task Requirements

### 🎯 Core Features

#### **Form Elements:**
- **Full Name:** Text input for the user's full name.
- **Email Address:** Email input field with proper validation.
- **Avatar Upload:** Users upload an avatar image stored via Cloudinary or any external image hosting service. Only the image URL is stored.
- **Submit Button:** A button to submit the form.

#### **Form Validation:**
- Ensure all required fields are filled before submission.
- Validate email format.
- Accept only Cloudinary URLs or external image links for the avatar upload.
- Display clear error messages near the respective fields when validation fails.

#### **State Persistence:**
- Retain user inputs using **IndexedDB or local storage** to prevent data loss on page refresh.

#### **Accessibility:**
- Ensure all form fields, hints, and error messages are **screen-reader accessible**.
- All elements must be **focusable**, with clear **hover and focus states**.
- Users must be able to navigate and submit the form **using only the keyboard**.

#### **Ticket Generation:**
- On successful submission, generate and display a **Conference Ticket** containing:
  - **Full Name**
  - **Email Address**
  - **Avatar** (displayed as an image from the provided URL)
- The ticket should only be generated if the form passes validation.

#### **Responsive Design:**
- Ensure the form and ticket layout **adjust seamlessly** across different screen sizes.
- Optimize for **mobile screens** with proper spacing and stacking.

## ✅ Acceptance Criteria

### **Form Validation:**
✔️ Users must provide all required details before submission.  
✔️ The email should be in a valid format.  
✔️ Avatar uploads should be handled via **Cloudinary or any external image URL**.  
✔️ Display relevant **error messages** near respective fields.  

### **State Persistence:**
✔️ User inputs should be **retained using IndexedDB or local storage**.  
✔️ Data should persist even if the page is refreshed.  

### **Ticket Generation:**
✔️ The generated ticket should display:  
  - **User’s Full Name**  
  - **Email Address**  
  - **Avatar Image**  
✔️ The ticket should only appear when **all form validations** pass successfully.  

### **Accessibility:**
✔️ All form elements and error messages must be **screen-reader accessible**.  
✔️ The application must support **keyboard-only navigation**.  

### **Responsive Design:**
✔️ The form and ticket must be **fully responsive** and optimized for all device sizes.  
✔️ The ticket should be **clearly visible** immediately after submission on both **mobile and desktop screens**.  

### **Code Quality:**
✔️ Write **modular, well-structured, and readable** code.  
✔️ Utilize appropriate **React hooks** (e.g., `useState`, `useEffect`) for state management and validation.  
✔️ Implement proper **form element types** and **validation techniques**.  

---

## 📌 Installation & Setup

### **Prerequisites:**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

##📜 License
This project is open-source and available under the MIT License.

### **Clone the Repository:**


```bash
git clone https://github.com/your-username/conference-ticket-generator.git
cd conference-ticket-generator


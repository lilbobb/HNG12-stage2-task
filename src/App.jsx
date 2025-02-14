import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectTicket from "./component/selectTicket";
import AttendeeDetails from "./component/attendeeDetails";
import TicketReady from "./component/ticketReady";
import Navbar from "./component/nav";
import { CartProvider } from "./component/cartContext.jsx";
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<SelectTicket />} />
              <Route path="attendeedetails" element={<AttendeeDetails />} />
              <Route path="ticketReady" element={<TicketReady />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;

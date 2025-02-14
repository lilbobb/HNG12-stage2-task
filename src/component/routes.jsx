import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectTicket from "./component/selectTicket";
import AttendeeDetails from "./component/attendeeDetails";
import TicketReady from "./component/ticketReady";
import Navbar from "./component/nav";
import "./App.css";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SelectTicket />} />
        <Route path="/attendeedetails" element={<AttendeeDetails />} />
        <Route path="/ticketready" element={<TicketReady />} />
      </Routes>
    </Router>
  );
};

export default Routes;
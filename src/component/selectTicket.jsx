import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../component/progressBar";

const SelectTicket = () => {
  const navigate = useNavigate();
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    { type: "Free", access: "REGULAR ACCESS", remaining: "20/52" },
    { type: "$150", access: "VIP ACCESS", remaining: "20/52" },
    { type: "$250", access: "VVIP ACCESS", remaining: "20/52" },
  ];

  const handleTicketSelect = (ticketType) => {
    setSelectedTicket(ticketType);
  };

  return (
    <div className="select-ticket">
      {/* Reusable Progress Bar */}
      <h1>Ticket Selection</h1>
      <ProgressBar currentStep={1} totalSteps={3} />

      {/* Event Information */}
      <div className="techFest">
        <div className="techFest-content">
          <h1>Techember Fest '25</h1>
          <p>Join us for an unforgettable experience at</p>
          <p>[Event Name]! Secure your spot now.</p>
          <p>[Event Location] || March 15, 2025 | 7:00 PM</p>
        </div>

        <div id="line"></div>

        {/* Ticket Type Selection */}
        <h2>Select Ticket Type:</h2>
        <div className="ticket-type">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className={`free-ticket ${selectedTicket === ticket.type ? "selected" : ""}`}
              onClick={() => handleTicketSelect(ticket.type)}
            >
              <h1>{ticket.type}</h1>
              <p>{ticket.access}</p>
              <p>{ticket.remaining}</p>
            </div>
          ))}
        </div>

        {/* Ticket Quantity Selection */}
        <h2>Number of Tickets:</h2>
        <select className="select">
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        {/* Buttons */}
        <div className="buttons">
          <button className="ticket-quantity-button">Cancel</button>
          <button
            className="ticket-quantity-button"
            onClick={() => selectedTicket && navigate("/attendeedetails")}
            disabled={!selectedTicket} // Prevents navigating without selection
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectTicket;

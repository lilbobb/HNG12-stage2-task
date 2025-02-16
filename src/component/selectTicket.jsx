import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../component/progressBar";

const SelectTicket = () => {
  const navigate = useNavigate();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketNumber, setTicketNumber] = useState(1);
  const [error, setError] = useState(""); // New error state

  const tickets = [
    { type: "Free", access: "REGULAR ACCESS", remaining: "20/52" },
    { type: "$150", access: "VIP ACCESS", remaining: "20/52" },
    { type: "$250", access: "VVIP ACCESS", remaining: "20/52" },
  ];

  const handleTicketSelect = (ticketType) => {
    setSelectedTicket(ticketType);
    setError(""); // Clear error when a ticket is selected
  };

  const handleProceed = () => {
    if (!selectedTicket) {
      setError("Please select a ticket type before proceeding.");
      return;
    }

    const selectedTicketObject = tickets.find(
      (ticket) => ticket.type === selectedTicket
    );

    const ticketData = {
      ticketType: selectedTicketObject.type,
      access: selectedTicketObject.access,
      ticketQuantity: ticketNumber,
    };

    localStorage.setItem("ticketData", JSON.stringify(ticketData));
    navigate("/attendeedetails");
  };

  return (
    <div className="select-ticket">
      <div>
        <ProgressBar currentStep={1} totalSteps={3} />
      </div>

      <div className="techFest">
        <div className="techFest-content">
          <h1>Techember Fest "25</h1>
          <p>
            Join us for an unforgettable experience at Techember Fest "25!
            Secure your spot now.
          </p>
          <p>04 Rumens road, Ikoyi, Lagos || March 15, 2025 | 7:00 PM</p>
        </div>

        <div id="line"></div>

        <h2>Select Ticket Type:</h2>
        <div className="ticket-type">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className={`free-ticket ${
                selectedTicket === ticket.type ? "selected" : ""
              }`}
              onClick={() => handleTicketSelect(ticket.type)}
            >
              <h1>{ticket.type}</h1>
              <p>{ticket.access}</p>
              <p>{ticket.remaining}</p>
            </div>
          ))}
        </div>

        {error && <p className="error-text">{error}</p>}

        <h2>Number of Tickets:</h2>
        <select
          className="select"
          value={ticketNumber}
          onChange={(e) => setTicketNumber(e.target.value)}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <div className="buttons">
          <button
            className="ticket-quantity-button"
            onClick={() => {
              setSelectedTicket(null);
              setTicketNumber(1);
              setError(""); // Reset error when canceling
            }}
          >
            Cancel
          </button>
          <button className="ticket-quantity-button" onClick={handleProceed}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectTicket;

import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import BarCode from "../assets/BarCode.png";
import { getFromStorage } from "./storageHelper";
import subtract from "../assets/Subtract.png";
import { FaCalendar, FaMapPin } from "react-icons/fa6";
import ProgressBar from "./progressBar";

const TicketReady = () => {
  const navigate = useNavigate();
  const attendee = getFromStorage("attendeeData");
  const ticketData = getFromStorage("ticketData") || {};

  if (!ticketData.ticketType) {
    return (
      <div className="ticket">
        <h2>No ticket found. Please select a ticket first.</h2>
        <button className="btn" onClick={() => navigate("/selectticket")}>
          Go Back
        </button>
      </div>
    );
  }

  const defaultAvatar = "https://via.placeholder.com/100";
  const avatarUrl = attendee.avatar || defaultAvatar;

  const handleDownload = () => {
    const ticketElement = document.getElementById("ticket-container");

    if (ticketElement) {
      html2canvas(ticketElement, {
        scale: 3, // Increase scale for better quality
        useCORS: true, // Ensure external images load
        allowTaint: true,
        logging: false,
        backgroundColor: null, // Preserve transparency
      }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "Techember_Ticket.png";
        link.click();
      });
    }
  };

  return (
    <div className="ticketready">
      <div className="ready">
        <ProgressBar currentStep={3} totalSteps={3} />
      </div>
      <h1>Your Ticket is Booked!</h1>
      <p>
        Check your email for a copy or you can <strong>download</strong>
      </p>

      <div className="ticketready-main" id="ticket-container">
        <img src={subtract} className="background-image" alt="Background" />

        <div className="container">
          <div className="content">
            <h1>Techember Fest '25</h1>
            <p>
              <FaMapPin /> 04 Rumens road, Ikoyi, Lagos.
            </p>
            <p>
              <FaCalendar /> March 15, 2025 | 7:00 PM
            </p>
          </div>

          <div className="content-img">
            <img src={avatarUrl} alt="Attendee Avatar" className="avatar" />
          </div>

          <div className="details">
            <div className="grid">
              <strong>Full Name:</strong> <br />
              <span>{attendee.fullName || "N/A"}</span>
            </div>
            <div className="grid">
              <strong>Email Address:</strong> <br />
              <span>{attendee.email || "N/A"}</span>
            </div>
            <div className="grid">
              <strong>Ticket Type:</strong> <br />
              <span>{ticketData.access || "General"}</span>
            </div>
            <div className="grid">
              <strong>Ticket for:</strong> <br />
              <span>{ticketData.ticketQuantity || "N/A"}</span>
            </div>
            <div className="grid">
              <strong>Special Request?</strong> <br />
              <span>{attendee.specialRequest || "None"}</span>
            </div>
          </div>
        </div>

        <div className="barcode">
          <img src={BarCode} alt="Barcode" className="barcode" />
        </div>
      </div>

      <div className="buttons">
        <button className="quantity-button" onClick={() => navigate("/")}>
          Book Another Ticket
        </button>
        <button className="quantity-button" onClick={handleDownload}>
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketReady;

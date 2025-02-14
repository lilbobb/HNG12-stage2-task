import React from "react";
import { getFromStorage } from "./storageHelper";
import { Link } from "react-router-dom";
import BarCode from "../assets/BarCode.png";
import subtract from "../assets/Subtract.png";
import { FaCalendar, FaMapPin } from "react-icons/fa6";
import ProgressBar from "./progressBar";

const TicketReady = () => {
  //   const attendee = getFromStorage("attendeeData");

  //   if (!attendee) {
  //     return (
  //       <div className="ticket">
  //         <h2>No ticket found. Please enter your details first.</h2>
  //         <Link to="/" className="btn">
  //           Go Back
  //         </Link>
  //       </div>
  //     );
  //   }

  // const defaultAvatar = "https://via.placeholder.com/100";

  return (
    <div className="ticketready">
      <div className="ready">
        <h1 className="readtext">Ready</h1>

        <ProgressBar currentStep={3} totalSteps={3} />
      </div>
      <h1>Your Ticket is Booked!</h1>
      <p>
        Check your email for a copy or you can <strong>download</strong>
      </p>

      <div className="ticketready-main">
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
            <p>Drag & drop or click to upload</p>
          </div>

          {/* Grid Layout */}
          <div className="details">
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
          </div>

          {/* Barcode */}
        </div>
        <div className="barcode">
          <img src={BarCode} alt="Barcode" className="barcode" />
        </div>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button
          className="quantity-button"
          onClick={() => navigate("/attendeedetails")}
        >
          Book Another Ticket
        </button>
        <button className="quantity-button" onClick={() => navigate("#")}>
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketReady;

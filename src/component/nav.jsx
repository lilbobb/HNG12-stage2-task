import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo.png";
import { getFromStorage } from "./storageHelper";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleMyTicketsClick = () => {
    const ticketData = getFromStorage("ticketData");
    if (ticketData && ticketData.ticketType) {
      navigate("/ticketready"); 
    } else {
      alert("No ticket found. Please book a ticket first.");
      navigate("/selectticket"); 
    }
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="nav-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </Link>

      <div className="nav-center">
        <Link to="#" className="nav-link">
          Events
        </Link>
        <Link to="#" className="nav-link">
          My Ticket
        </Link>
        <Link to="./about" className="nav-link">
          About Project
        </Link>
      </div>

      <div className="nav-right">
        <button className="nav-link my-tickets" onClick={handleMyTicketsClick}>
          My Tickets <FaArrowRight />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

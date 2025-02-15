import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        {" "}
        <div className="nav-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </Link>

      <div className="nav-center">
        <Link to="/events" className="nav-link">
          Events
        </Link>
        <Link to="/my-tickets" className="nav-link">
          My Ticket
        </Link>
        <Link to="/about" className="nav-link">
          About Project
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/my-tickets" className="nav-link my-tickets">
          My Tickets <FaArrowRight />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectTicket from "./component/selectTicket";
import AttendeeDetails from "./component/attendeeDetails";
import TicketReady from "./component/ticketReady";
import Countdown from "./component/countDown";
import Navbar from "./component/nav";
import { CartProvider } from "./component/cartContext.jsx";
import "./App.css";

const App = () => {
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCountdown(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      <Router>
        <div>
          {showCountdown ? (
            <Countdown />
          ) : (
            <>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<SelectTicket />} />
                  <Route path="attendeedetails" element={<AttendeeDetails />} />
                  <Route path="ticketReady" element={<TicketReady />} />
                </Routes>
              </main>
            </>
          )}
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;

const AboutPage = () => {
  return (
    <div className="select-ticket">
      <h1 className="title">
        Event Ticket Booking UI – Open Source Practice Project 🎟️
      </h1>

      <section>
        <h2 className="subtitle">Overview</h2>
        <p>
          This is a beginner-friendly yet practical Event Ticket Booking UI
          designed for developers to clone, explore, and build upon. The design
          focuses on a seamless, login-free ticket reservation flow, allowing
          users to book event tickets quickly and efficiently.
        </p>
        <p>
          The project consists of a three-step ticket booking flow, and
          developers can extend it further by integrating payment solutions,
          user authentication (optional), and ticket validation systems.
        </p>
      </section>

      <section>
        <h2 className="subtitle">Flow & Features</h2>
        <h3 className="section-heading">1️⃣ Ticket Selection</h3>
        <ul>
          <li>Users can browse available tickets (Free & Paid).</li>
          <li>Ticket options are displayed in a list or card view.</li>
          <li>
            For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee
            details.
          </li>
          <li>
            For Paid Tickets → Clicking “Purchase Ticket” would ideally open a
            payment modal.
          </li>
        </ul>

        <h3 className="section-heading">2️⃣ Attendee Details Form</h3>
        <ul>
          <li>Users input their Name, Email, and optional Phone Number.</li>
          <li>Profile picture upload option with preview functionality.</li>
          <li>
            Ticket summary is visible to ensure users review their details
            before submission.
          </li>
        </ul>

        <h3 className="section-heading">3️⃣ Payment or Success Page</h3>
        <ul>
          <li>
            If the ticket is free, the user is taken directly to the Ticket
            Confirmation Page.
          </li>
          <li>
            If the ticket is paid, developers can integrate Stripe, Paystack, or
            Flutterwave to process payments before showing the confirmation
            page.
          </li>
          <li>
            Upon successful booking, users should receive:
            <ul>
              <li>A visual ticket preview with a unique QR Code.</li>
              <li>
                An option to download the ticket as PDF or save it to their
                device.
              </li>
              <li>An email confirmation containing ticket details.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="subtitle">How to Build This 🚀</h2>
        <h3 className="section-heading">📌 Frontend (Next.js or React)</h3>
        <ul>
          <li>
            Component Breakdown:
            <ul>
              <li>
                <code>SelectTicket.jsx</code> → Displays ticket details
              </li>
              <li>
                <code>AttendeeDetails.jsx</code> → Captures user details
              </li>
              <li>
                <code>TicketReady.jsx</code> → Shows the final ticket preview
              </li>
            </ul>
          </li>
          <li>
            State Management: React’s Context API, Zustand, or Redux (if
            needed).
          </li>
          <li>
            File Handling: Users should be able to upload images (profile
            picture for ticket) using Firebase Storage, Cloudinary, or local
            preview with <code>URL.createObjectURL()</code>.
          </li>
        </ul>

        <h3 className="section-heading">📌 Backend (Optional)</h3>
        <ul>
          <li>
            If persistence is required, a backend can be built using:
            <ul>
              <li>Node.js & Express or Firebase Functions</li>
              <li>
                Database: MongoDB, PostgreSQL, or Firebase Firestore to store
                ticket records
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="subtitle">What You’ll Learn 🧑‍💻</h2>
        <ul>
          <li>File handling & validation (profile picture uploads).</li>
          <li>Dynamic UI updates based on ticket selection.</li>
          <li>Persisting bookings using local state or a backend.</li>
          <li>Integrating payment gateways for ticket purchases.</li>
          <li>
            Generating & validating QR Codes for event check-in (Advanced).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="subtitle">Need Help? Reach Out! 💬</h2>
        <p>
          If you have any questions, feel free to reach out to the community or
          contribute to the project.
        </p>
      </section>
      <div className="about-btns">
        <a
          href="https://www.figma.com/design/CpyoeFn7SueVRRpGQMs4J0/Event-Ticket-Booking-UI-%E2%80%93-Open-Source-Practice-Project-%F0%9F%8E%9F%EF%B8%8F-(Community)-(Copy)?node-id=11-355&t=yxX6jrWV8pAnuwVW-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="about-btn">Design File</button>
        </a>
        <a
          href="https://github.com/lilbobb/HNG12-stage2-task/tree/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="about-btn">Github code</button>
        </a>
      </div>
    </div>
  );
};

export default AboutPage;

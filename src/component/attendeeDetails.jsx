import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveToStorage, getFromStorage } from "./storageHelper";
import ProgressBar from "../component/progressBar";
import { FaCloudArrowDown, FaEnvelope } from "react-icons/fa6";

const AttendeeDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    avatar: "",
    errors: {},
  });

  useEffect(() => {
    const savedData = getFromStorage("attendeeData");
    if (savedData) setFormData((prev) => ({ ...prev, ...savedData }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      errors.email = "Invalid email format";
    if (!/^https?:\/\/.+/.test(formData.avatar))
      errors.avatar = "Invalid avatar URL";

    setFormData((prev) => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      saveToStorage("attendeeData", formData);
      navigate("/ticket");
    }
  };

  return (
    <div className="select-ticket">
      <h1>Attendee Details</h1>

      <ProgressBar currentStep={2} totalSteps={3} />
      <div className="attendee-section">
        <div className="attendee-main">
          <h1>Upload Profile Photo</h1>
          <div className="attendee-upload">
            <div className="image-upload">
              <FaCloudArrowDown />
              <p>Drag & drop or click to upload</p>
            </div>
          </div>
        </div>
        <div id="line"></div>

        <div className="attendee-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h2>Enter Your Name</h2>
              <input
                className="form-input"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {formData.errors.fullName && (
                <span>{formData.errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <h2>Enter Your Email</h2>
              <div className="input-container">
                <FaEnvelope className="input-icon" />
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@ukurowo.io"
                />
              </div>
              {formData.errors.email && <span>{formData.errors.email}</span>}
            </div>

            <div className="form-group">
              <h2>Special Request</h2>
              <textarea
                className="form-textarea"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                placeholder="Textarea"
              />
              {formData.errors.avatar && <span>{formData.errors.avatar}</span>}
            </div>

            <div className="buttons">
              <button className="quantity-button" onClick={() => navigate("/")}>
                Back
              </button>
              <button type="submit" className="quantity-button" onClick={() => navigate("/ticketready")}>
                Get my free Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDetails;

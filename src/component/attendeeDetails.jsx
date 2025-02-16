import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveToStorage, getFromStorage } from "./storageHelper";
import ProgressBar from "../component/progressBar";
import { FaCloudArrowDown, FaEnvelope } from "react-icons/fa6";
import axios from "axios";

const AttendeeDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    avatar: "",
    specialRequest: "",
    errors: {},
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedData = getFromStorage("attendeeData");
    if (savedData) {
      setFormData((prev) => ({ ...prev, ...savedData }));
    }
  }, []);

  const validateForm = () => {
    let errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    if (!formData.avatar) {
      errors.avatar = "Profile photo is required.";
    }

    setFormData((prev) => ({ ...prev, errors }));
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      saveToStorage("attendeeData", formData);
      navigate("/ticketready");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "HNG12-task");

    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/ds2fs7l6e/image/upload",
        uploadData
      );
      const imageUrl = response.data.secure_url;

      setFormData((prev) => {
        const updatedData = {
          ...prev,
          avatar: imageUrl,
          errors: { ...prev.errors, avatar: "" },
        };
        saveToStorage("attendeeData", updatedData);
        return updatedData;
      });

      setLoading(false);
    } catch (error) {
      console.error("Image upload failed", error.response?.data || error);
      setFormData((prev) => ({
        ...prev,
        errors: { ...prev.errors, avatar: "Image upload failed. Try again." },
      }));
      setLoading(false);
    }
  };

  return (
    <div className="select-ticket">
      <div>
        <ProgressBar currentStep={2} totalSteps={3} />
      </div>
      <div className="attendee-section">
        <div className="attendee-main">
          <h1>Upload Profile Photo</h1>
          <div className="attendee-upload">
            <div
              className="image-upload"
              onClick={() => document.querySelector("#imageInput").click()}
            >
              {!loading && !formData.avatar && (
                <>
                  <FaCloudArrowDown />
                  <p>Drag & drop or click to upload</p>
                </>
              )}

              <input
                id="imageInput"
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />

              {loading && <p className="uploading-text">Uploading...</p>}

              {!loading && formData.avatar && (
                <img
                  src={formData.avatar}
                  alt="Uploaded"
                  className="uploaded-image"
                />
              )}

              {formData.errors.avatar && <span>{formData.errors.avatar}</span>}
            </div>
          </div>
        </div>
        <div id="line"></div>

        <div className="attendee-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Enter Your Name</label>
              <input
                id="fullName"
                className="form-input"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {formData.errors.fullName && (
                <span className="error-text">{formData.errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Enter Your Email</label>
              <div className="input-container">
                <FaEnvelope className="input-icon" />
                <input
                  id="email"
                  className="form-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@ukurowo.io"
                />
              </div>
              {formData.errors.email && (
                <span className="error-text">{formData.errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="specialRequest">Special Request</label>
              <textarea
                id="specialRequest"
                className="form-textarea"
                name="specialRequest"
                value={formData.specialRequest}
                onChange={handleChange}
                placeholder="Textarea"
              />
            </div>

            <div className="buttons">
              <button
                type="button"
                className="quantity-button"
                data-testid="get-ticket"
                onClick={() => navigate("/")}
              >
                Back
              </button>
              <button
                type="submit"
                className="quantity-button"
                data-testid="get-ticket"
              >
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

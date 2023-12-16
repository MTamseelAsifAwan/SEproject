import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/BloodDonationForm.css";
import Navbar from "../Components/Navbar copy";
import { ToastContainer, toast } from "react-toastify";

function DonarForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [Name, setName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [Birth, setBirth] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [Address, setAddress] = useState("");
  const [Country, setCountry] = useState("");
  const [Province, setProvince] = useState("");
  const [City, setCity] = useState("");
  const [BloodGroup, setBloodGroup] = useState("default");
  const [Age, setAge] = useState("");
  const [MonthlyIncome, setMonthlyIncome] = useState("default");
  const [MedicalConditions, setMedicalConditions] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!Name.trim()) {
      errors.Name = "Patient name is required";
    } else if (Name.trim().length < 8) {
      errors.Name = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }
    if (!CNIC.trim()) {
      errors.CNIC = "CNIC Number is required";
    } else if (CNIC.trim().length !== 13) {
      errors.CNIC = "CNIC number must be of 13 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }
    if (!Birth) {
      errors.Birth = "Appointment time is required";
    } else {
      const selectedTime = new Date(Birth).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime == currentTime) {
        errors.Birth = "You are too young!";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
// Validate Full Name
if (!Name.trim()) {
  errors.Name = "Patient name is required";
} else if (Name.trim().length < 8) {
  errors.Name = "Patient name must be at least 8 characters";
}

// Validate Phone Number
if (!patientNumber.trim()) {
  errors.patientNumber = "Patient phone number is required";
} else if (patientNumber.trim().length !== 10) {
  errors.patientNumber = "Patient phone number must be of 10 digits";
}

// Validate CNIC Number
if (!CNIC.trim()) {
  errors.CNIC = "CNIC Number is required";
} else if (CNIC.trim().length !== 13) {
  errors.CNIC = "CNIC number must be of 13 digits";
}

// Validate Gender
if (patientGender === "default") {
  errors.patientGender = "Please select patient gender";
}

// Validate Date Of Birth
if (!Birth) {
  errors.Birth = "Date of birth is required";
} else {
  const selectedTime = new Date(Birth).getTime();
  const currentTime = new Date().getTime();
  if (selectedTime === currentTime) {
    errors.Birth = "You are too young!";
  }
}

    // Reset form fields and errors after successful submission
    setName("");
    setPatientNumber("");
    setCNIC("");
    setPatientGender("default");
    setBirth("");
    setPreferredMode("default");
    setAddress("");
    setCountry("");
    setProvince("");
    setCity("");
    setBloodGroup("default");
    setAge("");
    setMonthlyIncome("default");
    setMedicalConditions("");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <><div className="home-section">
      <Navbar />

    </div><div className="appointment-form-section">
   
          
       

        <div className="form-container">
          <h2 className="form-title">
            <span>Blood Donation Form</span>
          </h2>

          <form className="form-content" onSubmit={handleSubmit}>
            <label>
             Full Name:
              <input
                type="text"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required />
              {formErrors.Name && <p className="error-message">{formErrors.Name}</p>}
            </label>

            <br />
            <label>
              Phone Number:
              <input
                type="text"
                value={patientNumber}
                onChange={(e) => setPatientNumber(e.target.value)}
                required />
              {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
            </label>

            <br />
            <label>
             Gender:
              <select
                value={patientGender}
                onChange={(e) => setPatientGender(e.target.value)}
                required
              >
                <option value="default">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="private">Rather not Say</option>
              </select>
              {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
            </label>

            <br />
          
            <label>
            CNIC Number
              <input
                type="text"
                value={CNIC}
                onChange={(e) => setCNIC(e.target.value)}
                required />
              {formErrors.CNIC && <p className="error-message">{formErrors.CNIC}</p>}
            </label>
            <label>
              Date Of Birth:
              <input
                type="datetime-local"
                value={Birth}
                onChange={(e) => setBirth(e.target.value)}
                required />
              {formErrors.Birth && <p className="error-message">{formErrors.Birth}</p>}
            </label>

            <br />
            <label>
              Preferred Mode:
              <select
                value={preferredMode}
                onChange={(e) => setPreferredMode(e.target.value)}
                required
              >
                <option value="default">Select</option>
                <option value="voice">Voice Call</option>
                <option value="video">Video Call</option>
              </select>
              {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
            </label>
            {/* New fields */}
            <label>
              Address:
              <input
                type="text"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
            
            <br />
            <label>
              Country:
              <input
                type="text"
                value={Country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </label>
            
            <br />
            <label>
              Province:
              <input
                type="text"
                value={Province}
                onChange={(e) => setProvince(e.target.value)}
                required
              />
            </label>
            
            <br />
            <label>
              City:
              <input
                type="text"
                value={City}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </label>
            
            <br />
            <label>
              Blood Group:
              <select
                value={BloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                required
              >
                <option value="default">Select</option>
                {/* Add options for different blood groups */}
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                {/* ... (other blood groups) */}
              </select>
            </label>
            
            <br />
            <label>
              Age:
              <input
                type="number"
                value={Age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </label>
            
            <br />
            <label>
              Monthly Income:
              <select
                value={MonthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                required
              >
                <option value="default">Select</option>
                <option value="under_20000">Under 20,000</option>
                <option value="20000_to_50000">20,000 to 50,000</option>
                {/* Add other income ranges */}
              </select>
            </label>
            
            <label>
            Other Medical Conditions:

              <input
                type="text"
                value={MedicalConditions}
                onChange={(e) => setMedicalConditions(e.target.value)}
                required
              />
            </label>

            <br />
            <button type="submit" className="text-appointment-btn">
              Confirm
            </button>

            <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>Appointment details has been sent to the patients phone number via SMS.</p>
          </form>
        </div>

        <div className="legal-footer">
          <p>© 2013-2025 Thali-Care+. All rights reserved to TA Services and JZT.</p>
        </div>

        <ToastContainer autoClose={5000} limit={1} closeButton={false} />
      </div></>
  );
}

export default DonarForm;

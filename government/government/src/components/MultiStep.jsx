import React, { useState } from "react";

function MultiStep() {
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState('');

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    // You can send the data to the server or handle it as needed
    // For simplicity, we'll just log the values to the console
    console.log("Mobile Number:", mobileNumber);
    console.log("OTP:", otp);
    console.log("Name:", name);
  };

  return (
    <div className="multi-step-form-container">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="step">
            <h2>Signup</h2>
            <div className="line"></div>
            <div className="form_inside">
              <div className="form_label_input">
                <label htmlFor="">Mobile number</label>
                <input
                  type="text"
                  placeholder="80xxxx08"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>

              <button type="button" onClick={handleNext}>
                Send OTP
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="step">
            <h2>Step 2: Enter OTP</h2>
            <div className="line"></div>
            <div className="form_inside">

            {/* <select value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
             
            </select> */}

              <div className="form_label_input">
                <label htmlFor="">Mobile number</label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>


              <button type="button" >
               Login
              </button>
            </div>
           
          </div>
        )}
      </form>
    </div>
  );
}

export default MultiStep;

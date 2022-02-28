import React, { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import "./addcontact.css";
import { PROD_ENDPOINT } from "./constants";

function Addcontact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    address: "",
    number: "",
  });

  function handleFormInput(event) {
    const { name, value } = event.target;

    setContactForm((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newContact = {
      name: contactForm.name,
      address: contactForm.address,
      number: contactForm.number,
    };
    axios.post(PROD_ENDPOINT, newContact);
  }

  return (
    <div className="contactstyle">
      <Navbar />

      <h1>Add Contact</h1>
      <form>
        <div className="addcontact-page">
          <div className="inputs">
            <div className="form-group">
              <input
                name="name"
                className="form-group"
                autoComplete="off"
                placeholder="John Doe"
                onChange={handleFormInput}
                value={contactForm.name}
              ></input>
            </div>
          </div>

          <div className="inputs">
            <div className="form-group">
              <input
                name="address"
                className="form-group"
                autoComplete="off"
                placeholder="1234 peacock dr."
                onChange={handleFormInput}
                value={contactForm.address}
              ></input>
            </div>
          </div>

          <div className="inputs">
            <div className="form-group">
              <input
                name="number"
                className="form-group"
                autoComplete="off"
                placeholder="(123)4566789"
                onChange={handleFormInput}
                value={contactForm.number}
              ></input>
            </div>
          </div>

          <button
            className="btn btn-lg btn-info"
            type="submit"
            onClick={handleClick}
          >
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addcontact;

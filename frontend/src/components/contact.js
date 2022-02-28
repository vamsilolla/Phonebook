import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { CONTACT_ENDPOINT } from "./contactConstant";


function Contact() {
  const [contact, setContact] = useState([
    {
      name: "",
      address: "",
      number: "",
    },
  ]);

  useEffect((async() => {
    
        try {
            const res = await fetch(CONTACT_ENDPOINT)
            if (res.ok) {
               
                return res.json()
            } else {
            
                throw Error("Failed to reach contact endpoint")
                
            }
        } catch(err) {
            handleContactError()
        }
    
  })(), []);

  function handleContactError(){
      alert("Something went wrong!");
  }

  return (
    <div>
      <Navbar />

      <h1> contact </h1>
      {contact.map((contact) => (
        <div>
          <h1 key="One">{contact.name}</h1>
          <p key="Two">{contact.address}</p>
          <p key="Three">{contact.number}</p>
        </div>
      ))}
    </div>
  );
}

export default Contact;

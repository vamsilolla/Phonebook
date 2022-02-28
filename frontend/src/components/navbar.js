import React from 'react'
import {Link} from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <nav className="navbar bg-dark container">
        <h3>Home</h3>
        <h3>Contact</h3>
        <h3>Add contact</h3>

    </nav> 
  )
}

export default Navbar

{/* // <Link to="/">Home</Link>
// <Link to="/contacts">Contacts</Link>
// <Link to="/addcontact">Add Contact</Link> */}
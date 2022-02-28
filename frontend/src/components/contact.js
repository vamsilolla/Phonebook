import React, {useEffect, useState} from 'react'
import Navbar from './navbar'
function Contact() {

    const [contact, setContact] = useState([{
        name: '',
        address: '',
        number: ''
    }])

    useEffect(() => {
        fetch('/contact').then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setContact(jsonRes));
    })

  return (
    <div>
        <Navbar />

    <h1> contact </h1>
    {contact.map(contact =>
    <div>
        <h1>{contact.name}</h1>
        <p>{contact.address}</p>
        <p>{contact.number}</p>
    </div>
    )}
    </div>
  )
}

export default Contact
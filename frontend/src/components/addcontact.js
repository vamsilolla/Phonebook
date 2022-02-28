import React, { useState } from 'react'
import axios from "axios";
import Navbar from './navbar'
import "./addcontact.css"


function Addcontact() {

    const [input, setInput] = useState({
        name: '',
        address: '',
        number: ''
    });

    function handleChange(event){
        const {name, value} = event.target; 

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    

    function handleClick(event){
        event.preventDefault(); 
        console.log(input);
        const newContact = {
            name: input.name,
            address: input.address,
            number: input.number
     }
        axios.post('http://localhost:3001/create', newContact)
    }
 



  return (
    <div className='contactstyle'>
        <Navbar />

    <h1>Add Contact</h1>
    <form> 


    <div className='addcontact-page'>

    <div className= "inputs">
    <div className='form-group'>
        <input name="name" className='form-group' autoComplete="off" placeholder='John Doe' onChange={handleChange} value={input.name}></input>
        </div>
        </div>

        <div className= "inputs">   
        <div className='form-group'>
        <input name="address" className='form-group' autoComplete="off" placeholder='1234 peacock dr.' onChange={handleChange} value={input.address}></input>

        </div> 
        </div>

        <div className= "inputs">   
        <div className='form-group'>
   
        <input name="number" className='form-group' autoComplete="off" placeholder='(123)4566789' onChange={handleChange} value={input.number}></input>
        </div> 
        </div>

        <button className="btn btn-lg btn-info" type='submit' onClick={handleClick}>Add Contact</button>
        </div>
    </form>
    </div>
  )
}

export default Addcontact
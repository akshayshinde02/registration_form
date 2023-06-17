
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const RegistrationForm = () => {
  const [regis, setregis] = useState({
    firstname:"",
    lastname:"",
    email:"", 
    pass:"",
    number:"",
  });

  const navigate = useNavigate();

  const call = (e) => {
    setregis({ ...regis, [e.target.name]: e.target.value });
  };

  const submit1 = (e) => {
    e.preventDefault();
    
    console.log(regis);

    let v1 = regis.firstname;
    let v2 = regis.lastname;
    let v3 = regis.email;
    let v4 = regis.pass;
    let v5 = regis.number;
    
    if(v1==="" || v2==="" || v3==="" || v4==="" || v5==="" ){
      alert("Details must be filled")
    }
    else
    navigate('/confirmation', { state: { regis } });
  };

  return (
    <>

<div className="container">
        <h1>Registration Form</h1>
    <form onSubmit={submit1} >
    {/* <form onSubmit={()=>{submit1,validateform()}} > */}
        <label >First Name</label><br />
        <input type='text' name='firstname' placeholder='Enter First Name'
        
        value={regis.firstname}
        onChange={call}
        /><br /><br />

        <label >Last Name</label><br />
        <input type='text' name='lastname'  placeholder='Enter Last Name'
        
        value={regis.lastname}
        onChange={call}
        /><br /><br />

        <label >Email</label><br />
        <input type='email' name='email' placeholder='Enter Email'
        
        value={regis.email}
        onChange={call}
        /><br /><br />
        <label >Password</label><br />

        <input type='password' name='pass' placeholder='Enter Password'
        
        value={regis.pass}
        onChange={call}
        /><br /><br />
        <label >Phone </label><br />
        <input type='text' name='number' placeholder='Enter Phone number'

        value={regis.number}
        onChange={call}
        /><br /><br />

        <button type='submit'>Submit</button>
    </form>

    </div>
    </>
  );
};

export default RegistrationForm;

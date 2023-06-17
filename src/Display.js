

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Register.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const regis = location.state?.regis;

  return (
    <div className='container'>
      <h2>Confirmation Page</h2>
      <p>First Name: {regis.firstname}</p>
      <p>Last Name: {regis.lastname}</p>
      <p>Email: {regis.email}</p>
      <p>Password: {regis.pass}</p>
      <p>Number: {regis.number}</p>
    </div>
  );
};

export default ConfirmationPage;

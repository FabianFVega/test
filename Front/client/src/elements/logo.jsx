import React from 'react';
import logo from '../assets/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyLogo = () => {
  return (
    <div>
      <img src={logo} alt="Logo" className="img-fluid rounded mx-auto d-block mb-4"  />
    </div>
  );
};

export default MyLogo;
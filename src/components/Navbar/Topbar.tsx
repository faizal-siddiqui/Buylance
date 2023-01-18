import React from 'react';
import "./top.css"
const Topbar= () => {
  return (
    <nav>
        <img src={process.env.PUBLIC_URL + './logo.png'} alt="Logo" />
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <h1>CART</h1>

    </nav>
  );
};

export default Topbar;

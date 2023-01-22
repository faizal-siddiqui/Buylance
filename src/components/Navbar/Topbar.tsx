import React from 'react';
import {Link} from "react-router-dom";
import "./top.css"
const Topbar= () => {
    const changecolor=(e:React.MouseEvent<HTMLButtonElement>)=>{
        (e.target as HTMLButtonElement).style.color = '#c9048f';

    }
    const backtonormal=(e:React.MouseEvent<HTMLButtonElement>)=>{
        (e.target as HTMLButtonElement).style.color = 'black';

    }
  return (
    <nav>
      <Link to="/">  <img src={process.env.PUBLIC_URL + './logo.png'} alt="Logo" /></Link>
        <div className='creds'>
        <div>
        <input type="text" placeholder="Search" />
      </div>
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",width:"150px"}} className="nav-right">
          <button onMouseEnter={changecolor} onMouseLeave={backtonormal} className="signup-btn"><Link to="/login">Sign Up</Link></button>
          <button onMouseEnter={changecolor} onMouseLeave={backtonormal} className="login-btn"><Link to="/signup">Login</Link></button>
        </div>
      <h1 style={{cursor:"pointer"}}><Link to="/cart">CART</Link></h1>
      </div>

    </nav>
  );
};

export default Topbar;

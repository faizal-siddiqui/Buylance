import React from 'react';
import "./top.css"
const Topbar= () => {
    const changecolor=(e:React.MouseEvent<HTMLButtonElement>)=>{
        (e.target as HTMLButtonElement).style.color = '#c9048f';

    }
    const backtonormal=(e:React.MouseEvent<HTMLButtonElement>)=>{
        (e.target as HTMLButtonElement).style.color = 'black';

    }
  return (
    <nav >
        <img src={process.env.PUBLIC_URL + './logo.png'} alt="Logo" />
        <div className='creds'>
        <div className="searchbar">
        <input type="text" placeholder="Search" />
      </div>
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",width:"150px"}} className="nav-right">
          <button onMouseEnter={changecolor} onMouseLeave={backtonormal} className="signup-btn">Sign Up</button>
          <button onMouseEnter={changecolor} onMouseLeave={backtonormal} className="login-btn">Login</button>
        </div>
      <h1 style={{cursor:"pointer"}}>CART</h1>
      </div>

    </nav>
  );
};

export default Topbar;

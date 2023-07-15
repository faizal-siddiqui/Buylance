import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import UpdatedNavbar from "../../components/Navbar/UpdatedNavbar";

type Props = {};

const Categories = (props: Props) => {
  return (
    <div>
      <UpdatedNavbar />
      <div id="container">
        <h1 id="men">Men</h1>
        <div id="line"></div>
        <div id="men_categories">
          <div>
            <img
              src="https://imagescdn.abof.com/img/app/categorymedia/production/4/405-49-10572.jpg?auto=format&w=220"
              alt="error"
            />
            <Link to="/men/t-shirt">
              <button className="button">SHOP NOW</button>
            </Link>
          </div>
          <div>
            <img
              src="https://imagescdn.abof.com/img/app/categorymedia/production/4/407-49-10573.jpg?auto=format&w=220"
              alt="error"
            />
            <button className="button">SHOP NOW</button>
          </div>
          <div>
            <img
              src="https://imagescdn.abof.com/img/app/categorymedia/production/1/1620-49-11498.jpg?auto=format&w=220"
              alt="error"
            />
            <button className="button">SHOP NOW</button>
          </div>
          <div>
            <img
              src="https://imagescdn.abof.com/img/app/categorymedia/production/1/1623-49-11501.jpg?auto=format&w=220"
              alt="error"
            />
            <button className="button">SHOP NOW</button>
          </div>
          <div>
            <img
              src="https://imagescdn.abof.com/img/app/categorymedia/production/1/1768-49-10629.jpg?auto=format&w=220"
              alt="error"
            />
            <button className="button">SHOP NOW</button>
          </div>
          <div>
            <img
              src="https://imagescdn.abof.com/img/app/categorymedia/production/7/7379-49-10575.jpg?auto=format&w=220"
              alt="error"
            />
            <button className="button">SHOP NOW</button>
          </div>
          <div>
            <img
              src="https://imagescdn.abof.com/img/app/categorymedia/production/7/7419-49-10576.jpg?auto=format&w=220"
              alt="error"
            />
            <button className="button">SHOP NOW</button>
          </div>
          <div>
            <img
              src="https://imagescdn.abof.com/img/app/categorymedia/production/7/7420-49-10628.jpg?auto=format&w=220"
              alt="error"
            />
            <button className="button">SHOP NOW</button>
          </div>
          <div>
            <img
              src="https://imagescdn.abof.com/img/app/categorymedia/production/7/7442-49-11500.jpg?auto=format&w=220"
              alt="error"
            />
            <button className="button">SHOP NOW</button>
          </div>
          <div>
            <img
              src="https://imagescdn.abof.com/img/app/categorymedia/production/8/8365-49-11499.jpg?auto=format&w=220"
              alt="error"
            />
            <button className="button">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

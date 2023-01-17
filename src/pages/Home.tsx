import React from "react";
import Carousel from "../components/Home/Carousel";
import "../components/Home/CSS/home.css";

const images = [
  "https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10334.jpg?w=1898.75&auto=format",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb24lMjBsYW5kc2NhcGUlMjBzaXplfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

function Home() {
  return (
    <div>
      <div
        style={{
          width: "90%",
          height: "480px",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <Carousel images={images} interval={5000} />
      </div>
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "700",
          color: "#2b2b2b",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Top categories
      </h1>
      <div
        className="category-banner"
        style={{
          width: "90%",
          height: "auto",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <div className="category">
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10026.jpg?w=303.8&auto=format"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10027.jpg?w=303.8&auto=format"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10028.jpg?w=303.8&auto=format"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9682.jpg?w=303.8&auto=format"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10029.jpg?w=303.8&auto=format"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9683.jpg?w=303.8&auto=format"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10030.jpg?w=303.8&auto=format"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10103.jpg?w=303.8&auto=format"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10032.ords?w=303.8&auto=format"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9970.jpg?w=303.8&auto=format"
            alt="alt_img"
          />
        </div>
      </div>
      <div
        className="banner-1"
        style={{
          height: "550px",
          width: "90%",
          margin: "auto",
          marginTop: "20px",
          backgroundColor: "#ebf9ff",
        }}
      >
        <div>
          <img
            style={{ height: "100%" }}
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10521.jpg?w=501.27000000000004&auto=format"
            alt="img_alt"
          />
        </div>
        <div>
          <img
            style={{ height: "100%" }}
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10522.jpg?w=1002.5400000000001&auto=format"
            alt="img_alt"
          />
        </div>
      </div>
      <div
        className="banner-2"
       
      >
        <div className="subbanner-1">
          <h1
           
          >
            BEST BUY STORE
          </h1>
          <button>VIEW ALL</button>
        </div>
        <div className="subbanner-2">
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9972.jpg?w=190&auto=format"
            alt="img_alt"
          />
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9974.jpg?w=190&auto=format"
            alt="img_alt"
          />
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9976.jpg?w=190&auto=format"
            alt="img_alt"
          />
          <img
            src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9978.jpg?w=190&auto=format"
            alt="img_alt"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

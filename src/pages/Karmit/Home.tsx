import React from "react";
import Carousel from "../../components/Home/Carousel";
import "../../components/Home/CSS/home.css";
import Footer from "../../components/Footer/footer/footer";
import Navbar from "../../components/Navbar/navbar";
import { Link } from "react-router-dom";
import UpdatedNavbar from "../../components/Navbar/UpdatedNavbar";
const images = [
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/summer_loading_1728x.webp?v=1678446322",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb24lMjBsYW5kc2NhcGUlMjBzaXplfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <UpdatedNavbar />
      <div className="carousel">
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
          <Link to="/men/t-shirt">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-PremiumPicks-Superdry-BHPC-3050-Revised%20.jpg"
              alt="alt_img"
            />
          </Link>
        </div>
        <div className="category">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Premiumpicks-P1-Min60.jpg"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-PremiumPicks-AldoSteveMadden-3050.jpg"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-PremiumPicks-DieselGstarraw-Upto40.jpg"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-PremiumPicks-DieselGstarraw-Upto40.jpg"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-PremiumPicks-MnS-Upto50.jpg"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-PremiumPicks-GuessKennethCole-Upto60ff.jpg"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-The%20Ethnic%20Affair-P3-Starting499.jpg"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-The%20Ethnic%20Affair-P5-Upto80.jpg"
            alt="alt_img"
          />
        </div>
        <div className="category">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-The%20Ethnic%20Affair-P1-Starting599.jpg"
            alt="alt_img"
          />
        </div>
      </div>
      <div className="banner-1">
        <div>
          <img
            style={{ height: "100%", width: "100%" }}
            src="https://assets.ajio.com/cms/AJIO/WEB/29032023-UHP-D-Daily-P2-IntBrands-KennethColeGrimelange-Min50.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ height: "100%", width: "100%" }}
            src="https://assets.ajio.com/cms/AJIO/WEB/29032023-UHP-D-Daily-P4-AllenSollyVanheusen-Min40.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="banner-2">
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Aim%20For%20The%20Stars-Brands-P9-Min50%20(1).jpg"
          alt="img_alt"
        />
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Aim%20For%20The%20Stars-Brands-P2-Min50.jpg"
          alt="img_alt"
        />
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Aim%20For%20The%20Stars-Brands-P1-Min55.jpg"
          alt="img_alt"
        />
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-MoreStars-Superdry-3050ssss.jpg"
          alt="img_alt"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

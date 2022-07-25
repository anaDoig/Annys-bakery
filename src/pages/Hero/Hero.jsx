import "./Hero.scss";
import { useState } from "react";
import backImg from "../../assets/img/background.jpg";
import cupcakeImg from "../../assets/img/cupcakes.jpg";
import cookieImg from "../../assets/img/redvelvetCookies.jpg";
import cakeImg from "../../assets/img/chocoCake.jpg";

const Hero = () => {
  const [current, setCurrent] = useState("");

  return (
    <>
      <div className="carrusel-container">
        <div className="arrow-left" />
        <div className="arrow-rigth" />

        <div className="slides">
          <div>
            <img src={backImg} alt="Carrusel" className="img-slider" />
          </div>
          <div>
            <img src={cupcakeImg} alt="Carrusel" className="img-slider" />
          </div>
          <div>
            <img src={cookieImg} alt="Carrusel" className="img-slider" />
          </div>
          <div>
            <img src={cakeImg} alt="Carrusel" className="img-slider" />
          </div>
        </div>

        {/* <div>
          <button className="button-slider-container" >SIGUIENTE</button>
          <a href={cupcakeImg}>
            <i className="fa-circle"></i>
          </a>
          <a href={cookieImg}>
            <i className="fa-circle"></i>
          </a>
          <a href={cakeImg}>
            <i className="fa-circle"></i>
          </a>
        </div> */}
      </div>
    </>
  );
};

export default Hero;

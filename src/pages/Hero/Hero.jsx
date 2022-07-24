import "./Hero.scss";
import backImg from "../../assets/img/background.jpg";
import cupcakeImg from "../../assets/img/lemonCupcakes.jpg";
import cookieImg from "../../assets/img/redvelvetCookies.jpg";
import cakeImg from "../../assets/img/tropicalCake1.jpg";

const Hero = () => {
  return (
    <>
      <h1>Inicio</h1>
      <div className="carrusel-container">
        <div className="slider-container">
          <div id="slider1" className="slider">
            <img src={backImg} alt="Carrusel" className="img-slider" />
          </div>
          <div id="slider2" className="slider">
            <img src={cupcakeImg} alt="Carrusel" className="img-slider" />
          </div>
          <div id="slider3" className="slider">
            <img src={cookieImg} alt="Carrusel" className="img-slider" />
          </div>
          <div id="slider4" className="slider">
            <img src={cakeImg} alt="Carrusel" className="img-slider" />
          </div>
        </div>

        <div>
          <button className="button-slider-container">SIGUIENTE</button>
          <a href={cupcakeImg}>
            <i className="fa-circle"></i>
          </a>
          <a href={cookieImg}>
            <i className="fa-circle"></i>
          </a>
          <a href={cakeImg}>
            <i className="fa-circle"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;

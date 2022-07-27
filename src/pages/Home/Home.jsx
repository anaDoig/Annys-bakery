import "./Home.scss";
import backImg from "../../assets/img/background.jpg";
import cupcakeImg from "../../assets/img/cupcakes.jpg";
import cookieImg from "../../assets/img/redvelvetCookies.jpg";
import cakeImg from "../../assets/img/chocoCake.jpg";

const Home = () => (
  <div className='carrusel-container'>
    <div className='arrow-left' />
    <div className='arrow-rigth' />

    <div className='slides'>
      <div>
        <img src={backImg} alt='Carrusel' className='img-slider' />
      </div>
      <div>
        <img src={cupcakeImg} alt='Carrusel' className='img-slider' />
      </div>
      <div>
        <img src={cookieImg} alt='Carrusel' className='img-slider' />
      </div>
      <div>
        <img src={cakeImg} alt='Carrusel' className='img-slider' />
      </div>
    </div>
  </div>
);

export default Home;

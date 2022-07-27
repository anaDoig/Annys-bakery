import "./Footer.scss";
import instagramIcon from "../../assets/img/instagram.png";
import Newsletter from "../Newsletter/Newsletter";

const Footer = () => {
  return (
    <footer className="bg-mauve">
      <>
        <Newsletter />
        {/* <!-- Contact  --> */}
        <div className="social-media-container">
            <a
              target="_blank"
              href="https://www.instagram.com/annysbakery"
              rel="noreferrer"
            > <img className="private" src={instagramIcon} alt="instagram"/>
            </a>
        </div>

        {/* <!-- copyrigth --> */}
        <div className="copyright-container">
          <p>
          © ANNY'S BAKERY 2022
          </p>
          <p className="private">
            <a href="/" className="links">
              AVISO LEGAL
            </a>
            <a href="/" className="links">
              POLÍTICA DE PRIVACIDAD
            </a>
            <a href="/" className="links">
              POLÍTICA DE COOKIES
            </a>
          </p>
        </div>

        </>
      </footer>  
  );
};

export default Footer;

import "./Footer.scss";
import instagramIcon from "../../assets/img/instagram.png";

const Footer = () => {
  return (
    <footer className='bg-mauve'>
      <>
        {/* <!-- Contact  --> */}
        <div className='social-media-container'>
          <a target='_blank' href='https://www.instagram.com/annysbakery' rel='noreferrer'>
            <img className='private' src={instagramIcon} alt='instagram' />
          </a>
        </div>

        {/* <!-- copyrigth --> */}
        <div className='copyright-container'>
          <p>© ANNY'S BAKERY 2022</p>
          <p className='private'>
            <p className='links'>AVISO LEGAL</p>
            <p className='links'>POLÍTICA DE PRIVACIDAD</p>
            <p className='links'>POLÍTICA DE COOKIES</p>
          </p>
        </div>
      </>
    </footer>
  );
};

export default Footer;

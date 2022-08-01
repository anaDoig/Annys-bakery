import './Footer.scss';
import instagramIcon from '../../assets/img/instagram.png';

const Footer = () => {
	return (
		<footer className="footer bg-mauve">
			<>
				{/* <!-- Contact  --> */}
				<a className="social-media" target="_blank" href="https://www.instagram.com/annysbakery" rel="noreferrer">
					<img src={instagramIcon} alt="instagram" />
				</a>

				{/* <!-- copyrigth --> */}
				<p>© ANNY'S BAKERY 2022</p>

				<div className="private">
					<p className="links">AVISO LEGAL</p>
					<p className="links">POLÍTICA DE PRIVACIDAD</p>
					<p className="links">POLÍTICA DE COOKIES</p>
				</div>
			</>
		</footer>
	);
};

export default Footer;

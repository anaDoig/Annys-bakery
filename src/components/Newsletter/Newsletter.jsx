import './Newsletter.scss';
import '../../assets/scss/styles.scss';
import { FormNewsletter } from '../Newsletter/FormNewsletter';

const Newsletter = () => {
	return (
		<section className="bg-multicolor">
			<div className="main-container center">
				<h3>Únete a Nuestra Newsletter</h3>
				<p>Recibe nuestras últimas actualizaciones de productos, descuentos exclusivos y más sorpresas en tu bandeja de entrada.</p>

				<FormNewsletter />
			</div>
		</section>
	);
};

export default Newsletter;

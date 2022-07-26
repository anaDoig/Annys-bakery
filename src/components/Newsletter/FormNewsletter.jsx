import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Newsletter/FormNewsletter.scss';

const Result = () => {
	return <p>Gracias por suscribirte!</p>;
};

export const FormNewsletter = () => {
	const form = useRef();

	const [result, showResult] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_w1ywuhs', 'template_sjq1x0c', form.current, 'BjK6UIXoFoytTKhqu').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			},
		);
		e.target.reset();
		showResult(true);
	};

	setTimeout(() => {
		showResult(false);
	}, 5000);

	return (
		<div className="inputWithButton">
			<form className="form-newsletter" ref={form} onSubmit={sendEmail}>
				<input className="input" required type="email" id="fname" name="user_email" placeholder="ESCRIBE TU EMAIL"></input>

				<button className="button" type="submit" value="Send">
					ENVIAR
				</button>

				{result ? <Result /> : null}
			</form>
		</div>
	);
};

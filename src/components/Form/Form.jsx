import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.scss';

const Result = () => {
	return <p>Tu Mensaje ha sido Enviado</p>;
};

export const Form = () => {
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
		<form ref={form} onSubmit={sendEmail}>
			<label for="fname">First Name</label>
			<input required type="text" id="fname" name="user_name"></input>

			<label for="fname">Email</label>
			<input required type="email" id="fname" name="user_email"></input>

			<label for="fname">Mensaje</label>
			<textarea required type="text" id="fname" name="message"></textarea>

			<button className="button" type="submit" value="Send">
				ENVIAR
			</button>

			{result ? <Result /> : null}
		</form>
	);
};

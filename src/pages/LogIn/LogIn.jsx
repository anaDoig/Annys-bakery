import { useLocation, useNavigate } from 'react-router-dom';

import { useAuthDispatch } from '../../modules/auth';
import './LogIn.scss';

const LogIn = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { login } = useAuthDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		const {
			email: { value: email },
			password: { value: password },
		} = event.target;

		login({ email, password }).then(() => {
			const toRedirect = location.state?.from?.pathname || '/';
			navigate(toRedirect);
		});
	};

	return (
		<section className="login">
			<div className="bg-green">
				<div className="title-container">
					<h2>Login</h2>
				</div>
			</div>
			<div className="login-container">
				<form onSubmit={handleSubmit} className="login">
					<fieldset>
						<label htmlFor="email" className="login__label">
							Email
						</label>
						<input className="login__input" id="email" required />
					</fieldset>
					<fieldset>
						<label htmlFor="password" className="login__label">
							Password
						</label>
						<input className="login__input" id="password" type="password" required />
					</fieldset>

					<button>Login</button>
				</form>
			</div>
		</section>
	);
};

export default LogIn;

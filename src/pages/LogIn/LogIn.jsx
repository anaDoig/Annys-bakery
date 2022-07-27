import { useLocation, useNavigate } from "react-router-dom";

import { useAuthDispatch } from "../../modules/auth";
import "./LogIn.scss";

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

    login({ email, password })
      .then(() => {
        const toRedirect = location.state?.from?.pathname || "/";
        navigate(toRedirect);
      })
      .catch((error) => {
        prompt(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="email" placeholder="username" />
      <input id="password" placeholder="password" type="password" />

      <button>LogIn</button>
    </form>
  );
};

export default LogIn;

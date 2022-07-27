import { useSelector } from "react-redux";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./NavBar.scss";
import logo from "../../assets/img/logo2.png";
import user from "../../assets/img/user.png";
import cart from "../../assets/img/shopping-cart.png";

const getShoppingCartCounter = (state) => ({
  counter: state.shoppingCart.items.length,
});

export default function Navbar() {
  const { counter } = useSelector(getShoppingCartCounter);

  return (
    <header>
      <nav className="navbar">
        <div className="left-menu">
          <ul>
            <li>
              <CustomLink to="/products">PRODUCTOS</CustomLink>
            </li>
            <li>
              <CustomLink to="/aboutus">SOBRE NOSOTRAS</CustomLink>
            </li>
            <li>
              <CustomLink to="/contact">CONTACTO</CustomLink>
            </li>
          </ul>
        </div>

        <ul>
          <CustomLink to="/">
            <img className="logo" src={logo} alt="logo"></img>
          </CustomLink>
        </ul>

        <ul>
          <CustomLink to="/">
            <img className="logo" src={logo} alt="logo"></img>
          </CustomLink>
        </ul>

        <div className="right-menu">
          <ul>
            <li>
              <CustomLink to="/login">
                <img src={user} alt="logo"></img>
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/shoppingcart">
                <div className="container-link">
                  <img src={cart} alt="logo"></img>
                  <span className="cart-counter">{counter}</span>
                </div>
              </CustomLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

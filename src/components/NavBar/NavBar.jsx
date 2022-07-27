import { useSelector } from "react-redux";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { useAuthContext } from "../../modules/auth/AuthContext";
import logo from "../../assets/img/logo2.png";
import user from "../../assets/img/user.png";
import cart from "../../assets/img/shopping-cart.png";
import { IconLogout } from "../../components/Icon/IconLogout";
import "./NavBar.scss";

const getShoppingCartCounter = (state) => ({
  counter: state.shoppingCart.items.length,
});

export default function Navbar() {
  const { counter } = useSelector(getShoppingCartCounter);
  const [auth, { logout }] = useAuthContext();

  return (
    <header>
      <nav className='navbar'>
        <div className='left-menu'>
          <ul>
            <li>
              <CustomLink to='/products'>PRODUCTOS</CustomLink>
            </li>
            <li>
              <CustomLink to='/aboutus'>SOBRE NOSOTRAS</CustomLink>
            </li>
            <li>
              <CustomLink to='/contact'>CONTACTO</CustomLink>
            </li>
          </ul>
        </div>

        <ul>
          <CustomLink to='/'>
            <img className='logo' src={logo} alt='logo'></img>
          </CustomLink>
        </ul>

        <div className='right-menu'>
          <ul>
            <li>
              <CustomLink to='/login'>
                {auth.user ? <IconLogout onClick={logout} width={25} heigth={25} /> : <img src={user} alt='logo'></img>}
              </CustomLink>
            </li>
            <li>
              <CustomLink to='/shoppingcart'>
                <div className='container-link'>
                  <img src={cart} alt='logo'></img>
                  <span className='cart-counter' data-counter={counter} />
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
    <Link to={to} className={isActive ? "active" : ""} {...props}>
      {children}
    </Link>
  );
}

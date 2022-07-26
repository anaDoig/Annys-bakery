import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './NavBar.scss';
import logo from '../../assets/img/logo.png'
import user from '../../assets/img/user.png'
import cart from '../../assets/img/shopping-cart.png'


export default function Navbar() {
    
    return (
        <header>
            <nav className="navbar">
                <div className="left-menu">
                    <ul>
                        <li><CustomLink to="/products">PRODUCTS</CustomLink></li>
                        <li><CustomLink to="/aboutus">ABOUT US</CustomLink></li>
                        <li><CustomLink to="/contact">CONTACT</CustomLink></li>
                    </ul>
                </div>
                
                <ul>
                <CustomLink to="/"><img className="logo" src={logo} alt="logo"></img></CustomLink>
                </ul>

                <div className="right-menu">
                    <ul>
                        <li><CustomLink to="/login"><img src={user} alt="logo"></img></CustomLink></li>
                        <li><CustomLink to="/shoppingcart"><img src={cart} alt="logo"></img></CustomLink></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
        </li>
    )
}
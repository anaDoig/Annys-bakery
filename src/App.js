import './App.css';
import  Home  from './pages/Home/Home';
import  AboutUs  from './pages/AboutUs/AboutUs';
import  Contact from './pages/Contact/Contact';
import  Products  from './pages/Products/Products';
import  LogIn from './pages/LogIn/LogIn';
import  ShoppingCart  from './pages/ShoppingCart/ShoppingCart';
import { Route, Routes } from "react-router-dom"
import Menu from "./Menu"

function App() {

  return (
    <>
      <Menu />
          <div className="navbar">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
            </Routes>
          </div>


    </>
  )
}

export default App;

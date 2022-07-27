import "./App.css";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";
import LogIn from "./pages/LogIn/LogIn";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ProductsComponent from "./components/ProductsComponent/ProductsComponent";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Cookies from "./pages/Cookies/Cookies";
import Cupcakes from "./pages/Cupcakes/Cupcakes";
import Cakes from "./pages/Cakes/Cakes";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <NavBar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/shoppingcart"
            element={
              <Protected>
                <ShoppingCart />
              </Protected>
            }
          />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/cupcakes" element={<Cupcakes />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;

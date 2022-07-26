import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cookies.scss";
import { fetchCookies } from "../../modules/cookies/actions";
import { getCookies } from "../../modules/cookies/selectors";
import Modal from "../../components/Modal/Modal";
import ProductCard from "../../components/ProductCard/ProductCard";

const Cookies = () => {
    
  const dispatch = useDispatch();
  const { cookies, loading, errors } = useSelector(getCookies);
  const [modalState, setModalState] = useState({
    isOpen: false,
    selected: null,
  });

  useEffect(() => {
    dispatch(fetchCookies());
  }, []);

  const handleSelect = (product) => {
    setModalState((prev) => ({ ...prev, selected: product, isOpen: true }));
  };

  return (
    <>
      {modalState.isOpen && (
        <Modal setIsOpen={setModalState} selected={modalState.selected} />
      )}

      <section className="cookies">
        <div className="bg-green">
          <div className="main-container">
            <div className="products-hero col-2">
              <div className="col">
                <div className="hero-content">
                  <ul className="breadcrumbs">
                    <li>
                      <Link to="/products">Productos</Link>
                    </li>
                    <li>
                      <Link to="">Cookies</Link>
                    </li>
                  </ul>
                  <h2>Cookies</h2>
                  <p>
                    No need to play favorites! Our sample packs offer an
                    assortment of Magnolia Bakery classics and best sellers.
                  </p>
                </div>
              </div>
              <div className="col">
                <figure>
                  <img src="https://i.imgur.com/c7hW5L6.jpeg"></img>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="col-4">
            {cookies.map((cookie) => (
              <ProductCard
                key={cookie.id}
                product={cookie}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cookies;

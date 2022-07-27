import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cakes.scss';
import { fetchCakes } from "../../modules/cakes/actions";
import { getCakes } from "../../modules/cakes/selector";
import Modal from "../../components/Modal/Modal";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductsHero from "../../components/ProductsHero/ProductsHero";

const Cakes = () => {

    const title = 'Tartas';
    const text = 'No need to play favorites! Our sample packs offer an assortment of Magnolia Bakery classics and best sellers.';
    const link = '/products';
    const firstLinkText = 'Productos';
    const currentText = 'Tartas';

    const dispatch = useDispatch();
    const { cakes, loading, errors } = useSelector(getCakes);
    const [modalState, setModalState] = useState({
        isOpen: false,
        selected: null,
      });

    useEffect(() => {
        dispatch(fetchCakes());
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
            <div className="bg-mauve">
                <ProductsHero 
                    title={title} 
                    text={text} 
                    link={link} 
                    firstLinkText={firstLinkText}
                    currentText={currentText} />
            </div>
            
            <div className="main-container">
                <div className="col-4">
                    {cakes.map((cake) => (
                        <ProductCard
                            key={cake.id}
                            product={cake}
                            onSelect={handleSelect}
                    />
                    ))}
                </div>
            </div>
        </section>
    </>
    )
}

export default Cakes;
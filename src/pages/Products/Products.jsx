import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
	const dispatch = useDispatch();

	return (
		<section>
			<div className="title-container center bg-green">
				<h1>Nuestros Productos</h1>
			</div>

			<div className="products">
				<div className="main-container center">
					<h2>Cookies</h2>
					<Link to="/cookies" title="Cookies" className="products__link">
						Ver más
					</Link>
					<div className="column-container">
						<div className="col">
							<a className="product-card" href="" title="Product name">
								<figure className="product-card__img">
									<img src='https://i.imgur.com/DYHgYm3.jpg"' alt="Tarta"></img>
								</figure>
								<h4>Tarta de chocolate</h4>
								<p className="product-card__description">
									Our first-ever breakfast sampler includes three delicious loaves: Lemon, blab a bla bla bla
								</p>
								<p className="product-card__price">
									Desde <span>product.price</span>
								</p>
							</a>
						</div>
						<div className="col">
							<a className="product-card" href="" title="Product name">
								<figure className="product-card__img">
									<img src="https://i.imgur.com/e5x99uq.jpg" alt="Tarta"></img>
								</figure>
								<h4>Tarta de chocolate</h4>
								<p className="product-card__description">
									Our first-ever breakfast sampler includes three delicious loaves: Lemon, blab a bla bla bla
								</p>
								<p className="product-card__price">
									Desde <span>product.price</span>
								</p>
							</a>
						</div>
						<div className="col">
							<a className="product-card" href="" title="Product name">
								<figure className="product-card__img">
									<img src="https://i.imgur.com/4NLoDj0.jpg" alt="Tarta"></img>
								</figure>
								<h4>Tarta de chocolate</h4>
								<p className="product-card__description">
									Our first-ever breakfast sampler includes three delicious loaves: Lemon, blab a bla bla bla
								</p>
								<p className="products__price">
									Desde <span>product.price</span>
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="products bg-mauve">
				<div className="main-container center">
					<h2>Tartas</h2>
					<Link to="/Cakes" title="Cookies" className="products__link">
						Ver más
					</Link>
					<div className="column-container">
						<div className="col">
							<a className="product-card" href="" title="Product name">
								<figure className="product-card__img">
									<img src='https://i.imgur.com/DYHgYm3.jpg"' alt="Tarta"></img>
								</figure>
								<h4>Tarta de chocolate</h4>
								<p className="product-card__description">
									Our first-ever breakfast sampler includes three delicious loaves: Lemon, blab a bla bla bla
								</p>
								<p className="product-card__price">
									Desde <span>product.price</span>
								</p>
							</a>
						</div>
						<div className="col">
							<a className="product-card" href="" title="Product name">
								<figure className="product-card__img">
									<img src="https://i.imgur.com/e5x99uq.jpg" alt="Tarta"></img>
								</figure>
								<h4>Tarta de chocolate</h4>
								<p className="product-card__description">
									Our first-ever breakfast sampler includes three delicious loaves: Lemon, blab a bla bla bla
								</p>
								<p className="product-card__price">
									Desde <span>product.price</span>
								</p>
							</a>
						</div>
						<div className="col">
							<a className="product-card" href="" title="Product name">
								<figure className="product-card__img">
									<img src="https://i.imgur.com/4NLoDj0.jpg" alt="Tarta"></img>
								</figure>
								<h4>Tarta de chocolate</h4>
								<p className="product-card__description">
									Our first-ever breakfast sampler includes three delicious loaves: Lemon, blab a bla bla bla
								</p>
								<p className="product-card__price">
									Desde <span>product.price</span>
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="products">
				<div className="main-container center">
					<h2>Cupcakes</h2>
					<Link to="/cupcakes" title="Cookies" className="products__link">
						Ver más
					</Link>
					<div className="column-container">
						<div className="col">
							<a className="product-card" href="" title="Product name">
								<figure className="product-card__img">
									<img src='https://i.imgur.com/DYHgYm3.jpg"' alt="Tarta"></img>
								</figure>
								<h4>Tarta de chocolate</h4>
								<p className="product-card__description">
									Our first-ever breakfast sampler includes three delicious loaves: Lemon, blab a bla bla bla
								</p>
								<p className="product-card__price">
									Desde <span>product.price</span>
								</p>
							</a>
						</div>
						<div className="col">
							<a className="product-card" href="" title="Product name">
								<figure className="product-card__img">
									<img src="https://i.imgur.com/e5x99uq.jpg" alt="Tarta"></img>
								</figure>
								<h4>Tarta de chocolate</h4>
								<p className="product-card__description">
									Our first-ever breakfast sampler includes three delicious loaves: Lemon, blab a bla bla bla
								</p>
								<p className="product-card__price">
									Desde <span>product.price</span>
								</p>
							</a>
						</div>
						<div className="col">
							<a className="product-card" href="" title="Product name">
								<figure className="product-card__img">
									<img src="https://i.imgur.com/4NLoDj0.jpg" alt="Tarta"></img>
								</figure>
								<h4>Tarta de chocolate</h4>
								<p className="product-card__description">
									Our first-ever breakfast sampler includes three delicious loaves: Lemon, blab a bla bla bla
								</p>
								<p className="products__price">
									Desde <span>product.price</span>
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;

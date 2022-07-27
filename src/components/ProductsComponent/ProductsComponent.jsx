import "./ProductsComponent.scss";

import ProductCard from "../../components/ProductCard/ProductCard";

const ProductsComponent = ({ source, productLink, productTitle }) => (
  <section>
    <div className='products'>
      <div className='main-container center'>
        <h2>{productTitle}</h2>
        <a href={productLink} title='Ver más' className='products__link'>
          Ver más
        </a>
        <div className='column-container'>
          {source.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProductsComponent;

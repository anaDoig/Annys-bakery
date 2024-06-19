import { Link, useNavigate } from "react-router-dom";
import "./ProductsComponent.scss";

import ProductCard from "../../components/ProductCard/ProductCard";

const ProductsComponent = ({ source, link, title }) => {
  const navigate = useNavigate();

  return (
    <section>
        <div className='main-container center'>
          <h2>{title}</h2>
          <Link to={link} title='Ver más' className='products__link'>
            Ver más
          </Link>
          <div className='column-container'>
            {source.map((product) => (
              <ProductCard key={product.id} product={product} onSelect={() => navigate(link)} />
            ))}
          </div>
        </div>
    </section>
  );
};

export default ProductsComponent;

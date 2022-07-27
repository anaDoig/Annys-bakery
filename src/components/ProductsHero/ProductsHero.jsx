import ProductsHeroBreadcrumbs from "../ProductsHeroBreadcrums/ProductsHeroBreadcrums";

const ProductsHero = ({ title, text, link, firstLinkText, currentText }) => {
  return (
    <>
      <div className='main-container'>
        <div className='products-hero col-2'>
          <div className='col'>
            <div className='hero-content'>
              <ProductsHeroBreadcrumbs link={link} firstLinkText={firstLinkText} currentText={currentText} />
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
          <div className='col'>
            <figure>
              <img src='https://i.imgur.com/c7hW5L6.jpeg'></img>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsHero;

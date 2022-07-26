import { Link } from "react-router-dom";

const ProductsHeroBreadcrumbs = ({link, firstLinkText, currentText}) => {
    return (
        <>
            <ul className="breadcrumbs">
                <li>
                    <Link to={link}>{firstLinkText}</Link>
                </li>
                <li>
                    <Link to="">{currentText}</Link>
                </li>
            </ul>
        </>
    );
};

export default ProductsHeroBreadcrumbs;
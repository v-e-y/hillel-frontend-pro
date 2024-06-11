import { TiShoppingCart } from 'react-icons/ti';

/**
 * Product Preview Card
 * @returns {JSX.Element}
 */
const ProductPreviewCard = ({ product }) =>  (
    <div className="card card-body card-flush">
        <img src={product.image} alt={product.name} className="img-fluid mb-4" />
        <div className="text-center">
            <h3 className="mb-4">{product.name}</h3>
            <div className="row align-items-center justify-content-between mb-4">
                <div className="col-6">
                    <h5 className="text-warning mb-0">${product.price}</h5>
                </div>
                <div className="col-6">
                    Кількість: {product.quantity}
                </div>
            </div>
            <button 
                className={`btn btn-link ${product.quantity > 0 ? 'text-success' : 'text-danger'}`}
            >
                <TiShoppingCart
                    className="fs-2"
                />
                {product.quantity > 0 ? 'Готовий до відправки' : 'Немає в наявності'}
            </button>
        </div>
    </div>
);

export default ProductPreviewCard;
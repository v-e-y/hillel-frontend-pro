import productImage from '../../assets/images/products/image.png';
import ProductPreviewCard from "../../components/ProductPreviewCard/ProductPreviewCard";

/**
 * Products preview (like Category page)
 * @returns {JSX.Element}
 */
const ProductPreview = () => {
    const products = [
        {id: 1, name: 'Ноутбук Lenovo Y50-70 Aluminum Black', quantity: 10, price: 100, image: productImage},
        {id: 2, name: 'Ноутбук Lenovo Y50-70 Aluminum Black', quantity: 23, price: 100500, image: productImage},
        {id: 3, name: 'Ноутбук Lenovo Y50-70 Aluminum Black', quantity: 0, price: 100500, image: productImage},
        {id: 4, name: 'Ноутбук Lenovo Y50-70 Aluminum Black', quantity: 0, price: 100500, image: productImage},
        {id: 5, name: 'Ноутбук Lenovo Y50-70 Aluminum Black', quantity: 3, price: 23423, image: productImage},
        {id: 6, name: 'Ноутбук Lenovo Y50-70 Aluminum Black', quantity: 8, price: 12423, image: productImage},
        {id: 7, name: 'Ноутбук Lenovo Y50-70 Aluminum Black', quantity: 0, price: 100500, image: productImage},
        {id: 8, name: 'Ноутбук Lenovo Y50-70 Aluminum Black', quantity: 100, price: 98000, image: productImage},
    ];

    return (
        <div>
            <div className="container">
                <div className="row g-4">
                    {products.map((product) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}> 
                            <ProductPreviewCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductPreview;
import './ProductCard.css';

function ProductCard({productName, productImage, description, price}){
    return (
        <div className="product-card">
            <img 
            src={productImage}
            alt="product"
            className="image"
             />
            <div className="product-info">
                <h3 className="product-name">{productName}</h3>
                <p className="product-description">{description}</p>
            </div>
            <p className="price">{price}</p>
        </div>
    );
}

export default ProductCard;
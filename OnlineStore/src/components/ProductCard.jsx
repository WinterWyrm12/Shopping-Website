import './ProductCard.css';

function ProductCard({product, addToCart, productId, onDeleteProduct, showDeleteButton}){
    return (
        <div className="product-card">
            <img 
            src={product.image}
            alt={product.nam }
            className="image"
             />
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
            </div>
            <p className="price">${product.price}</p>
            {/* only display add when featured */}
            <div className='action-btns'>
                {!showDeleteButton && (
                <button onClick={() => addToCart(product)}>Add to Cart</button>
                )}
            
                {/* only display remove when in cart */}
                {showDeleteButton && (
                <button className="delete-btn" onClick={()=> onDeleteProduct(productId)}>Remove from Cart</button>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
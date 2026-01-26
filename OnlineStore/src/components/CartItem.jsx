import './CartItem.css';

function CartItem({product, onDeleteProduct}){
    return(
        <div className="cart-item">
            <div className="cart-item-name">
                <h3>{product.name}</h3>
            </div>
            <div className="cart-item-price">
                <p>${product.price}</p>
            </div>
            <div className='action-btns'>
                {/* only display remove when in cart */}
                <button className="delete-btn" onClick={()=> onDeleteProduct(product.id)}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CartItem
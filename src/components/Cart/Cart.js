import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
const Cart = () => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="cart-box mt-2 mb-2">
            <div className="welcome-style text-success">
                <h5>Welcome To  Online Yoga Class</h5>
                <h6> {element} My Cart</h6>
             </div>
            <div className="iteams">
                <p>Items added : 0</p>
                <p>Totall : 0</p>
            </div>
        </div>
    );
};

export default Cart;
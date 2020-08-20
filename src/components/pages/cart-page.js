import React from 'react';
import CartTable from '../cart-table';

const CartPage = () => {
    return (
        <div className="cart">
            <div className="cart__title">Ваш заказ:</div>
            <CartTable/>
        </div>
    )
}

export default CartPage;

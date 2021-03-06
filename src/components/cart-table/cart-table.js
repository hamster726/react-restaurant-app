import React from 'react';
import {connect} from 'react-redux';
import './cart-table.scss';
import {deleteFromCart, increaseCount, decreaseCount, acceptOrder, clearCart} from "../../actions";
import WithRestoService from "../hoc";
import {Link} from "react-router-dom";


const CartTable = ({items, deleteFromCart, increaseCount, decreaseCount, RestoService, acceptOrder, orderAccepted, clearCart}) => {

    if (items.length === 0) return (
        <div className="cart__list">
            <div className="cart__list-empty">Your cart is empty :(</div>
        </div>
    )


    const orderAcceptPopup = () => {
        return (

            <div className="orderAcceptContainer">

                <div className="orderAcceptContainer popup">

                    <Link to='/menu'>
                        <div onClick={() => {acceptOrder(false); clearCart()}} className="popup-close">
                            &times;
                        </div>
                    </Link>

                    Your order is accepted! 🎉

                </div>
            </div>

        )
    }

    const viewElement = orderAccepted ? orderAcceptPopup() : null;


    return (
        <>
            {viewElement}
            <div className="cart__list">

                <div className="cart__title">Your order</div>

                <button onClick={() => {
                    RestoService.setOrder(generateOrder(items));
                    acceptOrder(true);
                }} className="menu__btn-submit">Submit
                </button>

                {
                    items.map(item => {
                        const {url, title, price, id, count} = item;

                        return (
                            <>
                                <div className="cart__item" key={`${id}`}>
                                    <img src={url} className="cart__item-img" alt={title}/>
                                    <div className="cart__item-title">{title}</div>
                                    <div className="cart__item-price">{price} $</div>
                                    <div className="cart__item-counter">
                                        <div onClick={() => increaseCount(id)} className="cart__item-counter-add">+
                                        </div>
                                        <div
                                            className="cart__item-counter-count">{`${count} ${count === 1 ? 'pc' : 'pcs'}`}</div>
                                        <div onClick={() => decreaseCount(id)} className="cart__item-counter-remove">-
                                        </div>
                                    </div>
                                    <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                                </div>

                            </>
                        )

                    })
                }

            </div>
        </>
    );
};

const generateOrder = (items) => {

    const newOrder = items.map((item) => {
        const newItem = {
            id: item.id,
            count: item.count
        }
        return newItem;
    })
    return newOrder;
}

const mapStateToProps = ({items, orderAccepted}) => {
    return (
        {
            items,
            orderAccepted
        }
    )
}

const mapDispatchToProps = {
    deleteFromCart,
    increaseCount,
    decreaseCount,
    acceptOrder,
    clearCart
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));

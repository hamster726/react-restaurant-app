import React from 'react';
import {connect} from 'react-redux';
import './cart-table.scss';
import {deleteFromCart, increaseCount, decreaseCount} from "../../actions";


const CartTable = ({items, deleteFromCart, increaseCount, decreaseCount}) => {
    return (
        <>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {url, title, price, id, count} = item;

                        return (
                            <div className="cart__item" key={`${id}`}>
                                <img src={url} className="cart__item-img" alt={title}/>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div className="cart__item-counter">
                                    <div onClick={() => increaseCount(id)} className="cart__item-counter-add">+</div>
                                    <div className="cart__item-counter-count">{count}</div>
                                    <div onClick={() => decreaseCount(id)} className="cart__item-counter-remove">-</div>
                                </div>
                                <div onClick={()=> deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )

                    })
                }

            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return (
        {
            items
        }
    )
}

const mapDispatchToProps =  {
    deleteFromCart,
    increaseCount,
    decreaseCount
}


export default connect(mapStateToProps,mapDispatchToProps)(CartTable);

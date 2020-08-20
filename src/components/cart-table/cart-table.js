import React from 'react';
import {connect} from 'react-redux';
// import {onDelete} from '../../actions'
import './cart-table.scss';
import {deleteFromCart} from "../../actions";


const CartTable = ({items, deleteFromCart}) => {
    return (
        <>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {url, title, price, id} = item;

                        return (
                            <div className="cart__item" key={`cart-${id}`}>
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
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
    deleteFromCart
}


export default connect(mapStateToProps,mapDispatchToProps)(CartTable);

import React from 'react';
import './menu-list-item.scss';
import {Link} from "react-router-dom";

const MenuListItem = ({menuItem, renderCategory, onAddToCart}) => {
    const {title, price, url, category} = menuItem;
    return (
        <>

            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <Link to={`${menuItem.id}`}>
                    <img className="menu__img" src={url} alt={title}/>
                </Link>
                <div className="menu__category">Category: <span>{renderCategory(category)}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>

            </li>
        </>
    )
}

export default MenuListItem;

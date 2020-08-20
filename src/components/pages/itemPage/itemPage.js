import React, {Component} from 'react';
import {connect} from 'react-redux';
import {menuLoaded, menuRequested, menuError} from "../../../actions";
import WithRestoService from "../../hoc";
import './item-page.scss';
import Spinner from "../../spinner";
import Error from "../../error";


class ItemPage extends Component {

    componentDidMount() {
        if (this.props.menuItems.length === 0){

            const {RestoService} = this.props;
            this.props.menuRequested();

            RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(error => this.props.menuError());
        }

    }


    renderCategory = (category) => {
        switch (category) {
            case 'salads' :
                return `🥗 ${category}`
            case 'pizza' :
                return `🍕 ${category}`
            case 'meat' :
                return `🍖 ${category}`
            default :
                return category;
        }
    }

    render() {
        if (this.props.loading) return <Spinner/>
        if (this.props.loading) return <Error/>

        const item = this.props.menuItems.find(el => +el.id === +this.props.match.params.id);
        const {title, url, category, price} = item;

        return (
            <>
                <div className="menu__item">
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}/>
                    <div className="menu__category">Category: <span>{this.renderCategory(category)}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button className="menu__btn">Add to cart</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            menuItems: state.menu,
            loading: state.loading,
            error: state.error
        }
    )
}

const mapDispatchToProps = {
    menuLoaded,
    menuError,
    menuRequested
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));

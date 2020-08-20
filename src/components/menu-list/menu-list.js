import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from "../hoc";
import {menuLoaded, menuRequested, menuError, addedToCart} from "../../actions";
import Spinner from "../spinner";
import './menu-list.scss';
import Error from "../error";

class MenuList extends Component {


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

    renderItems = (menuItems) => {

        return menuItems.map((menuItem) => {
            return <MenuListItem key={menuItem.id}
                                 menuItem={menuItem}
                                 renderCategory={this.renderCategory}
                                 onAddToCart={() => this.props.onAddToCart(menuItem.id)}/>
        })

    }

    render() {

        return (
            <ul className="menu__list">
                {this.renderItems(this.props.menuItems)}
            </ul>
        )
    }
}


const withData = (View) => {
    return class extends Component {

        componentDidMount() {
            this.props.menuRequested();

            const {RestoService} = this.props;
            RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch((e) => {
                    this.props.menuError()
                });
        }

        render() {
            const {menuItems, loading, error} = this.props;
            if (error) return <Error/>
            if (loading) return <Spinner/>

            return <View menuItems={menuItems} onAddToCart={this.props.addedToCart}/>
        }


    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(withData(MenuList)));

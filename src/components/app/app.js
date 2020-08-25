import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ItemPage from "../pages/itemPage/itemPage";
import {connect} from 'react-redux';

const App = ({summaryPrice}) => {
    return (
        <Router>
            <div className="app">
                <AppHeader total={summaryPrice}/>
                <Switch>
                    <Route path='/menu' exact component={MainPage}/>
                    <Route path='/cart/' exact component={CartPage}/>
                    <Route path='/menu/:id' component={ItemPage}/>
                </Switch>
            </div>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return (
        {
            summaryPrice: state.summaryPrice
        }
    )
}


export default connect(mapStateToProps)(App);

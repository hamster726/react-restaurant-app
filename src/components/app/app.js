import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ItemPage from "../pages/itemPage/itemPage";


const App = () => {
    return (
        <Router>
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader total={50}/>
                <Switch>
                    <Route path='/menu' exact component={MainPage}/>
                    <Route path='/cart/' exact component={CartPage}/>
                    <Route path='/menu/:id' component={ItemPage}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;

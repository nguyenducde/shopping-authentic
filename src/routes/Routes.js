import React from "react";
import {Switch, Route} from "react-router-dom";
import Cart from "../pages/Cart";
import Category from "../pages/Category";
import Home from "../pages/Home";
import Product from "../pages/Product";

export default function Routes(){
    return (
        <Switch>
            <Route exact path='/' >
                <Home />
            </Route>
            <Route path='/category/product/:slug'>
                <Product />
            </Route>
            <Route path='/category'>
                <Category />
            </Route>
            <Route path='/cart'>
                <Cart />
            </Route>
        </Switch>
    )
}
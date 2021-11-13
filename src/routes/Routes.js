import React from "react";
import {Switch, Route} from "react-router-dom";
import Cart from "../pages/Cart";
import Category from "../pages/Category";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Login from "../pages/Login";

export default function Routes(){
    return (
        <Switch>
            <Route exact path='/' >
                <Home />
            </Route>
            <Route path='/san-pham/:slug'>
                <Product />
            </Route>
            <Route path='/danh-muc/san-pham/:slug'>
                <Product />
            </Route>
            <Route path='/danh-muc'>
                <Category />
            </Route>
            <Route path='/gio-hang'>
                <Cart />
            </Route>
            <Route path='/dang-nhap'>
                <Login />
            </Route>
        </Switch>
    )
}
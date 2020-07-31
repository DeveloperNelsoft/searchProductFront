import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { SnackBarSupplier } from 'material-snackbar-supplier';
import ProductsList from '../views/product/product.list';
import ProductsListGrid from "../views/product-grid/product-grid.list";

export default function Router() {
    return (
        <SnackBarSupplier settings={{ autoHideDuration: 1500 }}>
            <BrowserRouter>
                {/* <Route exact path="/product-grid" component={ProductsListGrid} /> */}
                <Route exact path="/" component={ProductsListGrid} />
                <Route exact path="/product" component={ProductsList} />
            </BrowserRouter>
        </SnackBarSupplier>
    );
}

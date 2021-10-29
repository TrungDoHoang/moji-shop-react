import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, Switch } from 'react-router'
import ShowToCart from './pages/ShowToCart'
import PayPage from './pages/PayPage'

function cart() {
    const Err404 = React.lazy(() => import('../../components/404'))
    return (
        <Suspense fallback={
            <div id="preloader">
                <div id="loader"></div>
            </div>
        }>
            <Switch>
                <Redirect exact from="/cart" to="/cart/show" />
                <Route path="/cart/show" component={ShowToCart} />
                <Route path="/cart/pay" component={PayPage} />
                <Route component={Err404} />
            </Switch>
        </Suspense>
    )
}

cart.propTypes = {

}

export default cart


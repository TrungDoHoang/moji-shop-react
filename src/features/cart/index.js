import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import ShowToCart from './pages/ShowToCart'
import PayPage from './pages/PayPage'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function cart() {
    const Err404 = React.lazy(() => import('../../components/404'))
    return (
        <Suspense fallback={
            <div id="preloader">
                <div id="loader"></div>
            </div>
        }>
            <Header/>
            <Switch>
                <Redirect exact from="/cart" to="/cart/show" />
                <Route path="/cart/show" component={ShowToCart} />
                <Route path="/cart/pay" component={PayPage} />
                <Route component={Err404} />
            </Switch>
            <Footer />
        </Suspense>
    )
}

cart.propTypes = {

}

export default cart


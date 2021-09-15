import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/Shop'
import Home from './pages/Home'

function products(props) {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
        </Switch>
    )
}

products.propTypes = {}

export default products


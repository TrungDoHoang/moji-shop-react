import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/Shop/index'
import Home from './pages/Home'

function products(props) {
    const Err404 = React.lazy(() => import('../../components/404'))
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/shop/sach_vo" component={Shop} />
            <Route exact path="/shop/dung_cu" component={Shop} />
            <Route component={Err404} />
        </Switch>
    )
}

products.propTypes = {}

export default products


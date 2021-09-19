import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/Shop/index'
import Home from './pages/Home'
import Detail from './pages/Detail/Detail'
import SearchPage from './pages/SearchPage'

function products(props) {
    const Err404 = React.lazy(() => import('../../components/404'))
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search/:slug" component={SearchPage} />
            <Route path="/shop" component={Shop} />
            <Route path="/detail/:slug" component={Detail} />
            <Route path="/shop/sach_vo" component={Shop} />
            <Route path="/shop/dung_cu" component={Shop} />
            <Route component={Err404} />
        </Switch>
    )
}

products.propTypes = {}

export default products


import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/Shop/index'
import Home from './pages/Home'
import Detail from './pages/Detail/Detail'
import SearchPage from './pages/SearchPage'
import ShopByCategory from './pages/Shop/ShopByCategory'
import '../../Loading.css'

function products() {
    const Err404 = React.lazy(() => import('../../components/404'))
    return (
        <Suspense fallback={
            <div id="preloader">
                <div id="loader"></div>
            </div>
        }>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search/:slug" component={SearchPage} />
                <Route path="/shop/:slug" component={ShopByCategory} />
                <Route path="/shop" component={Shop} />
                <Route path="/detail/:slug" component={Detail} />
                <Route path="/shop/sach_vo" component={Shop} />
                <Route path="/shop/dung_cu" component={Shop} />
                <Route component={Err404} />
            </Switch>
        </Suspense>
    )
}

products.propTypes = {}

export default products


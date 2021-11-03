import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import './admin.css'
import Sidenav from './components/Sidenav'
import HeaderAdmin from './components/HeaderAdmin'
import Products from './pages/Products'
import Customer from './pages/Customer'
import CreatePr from './pages/Products/Create'
import HoaDon from './pages/HoaDon'

function user(props) {
    
    const Err404 = React.lazy(() => import('../../components/404'))
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="admin">
                <Sidenav />
                <div id="main">
                    <HeaderAdmin />
                    
                    <Switch>
                        <Redirect exact from="/admin" to="/admin/dashboard" />
                        <Route path="/admin/dashboard" component={Dashboard} />
                        <Route path="/admin/products/create" component={CreatePr} />
                        <Route path="/admin/products" component={Products} />
                        <Route path="/admin/customer" component={Customer} />
                        <Route path="/admin/bill" component={HoaDon} />
                        <Route component={Err404} />
                    </Switch>
                    <div className="clearfix" />
                </div>
            </div>
        </Suspense>
    )
}

user.propTypes = {}

export default user

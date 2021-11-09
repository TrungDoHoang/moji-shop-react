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
import ChitietHD from './pages/HoaDon/ChitietHD'
import UserADM from './pages/UserADM'
import ChangePass from './pages/UserADM/ChangePass'
import Manager from './pages/Manager'
import News from './pages/News'

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
                        <Route path="/admin/account/changepass" component={ChangePass} />
                        <Route path="/admin/account" component={UserADM} />
                        <Route path="/admin/news" component={News} />
                        <Route path="/admin/manager" component={Manager} />
                        <Route path="/admin/products/create" component={CreatePr} />
                        <Route path="/admin/products" component={Products} />
                        <Route path="/admin/customer" component={Customer} />
                        <Route exact path="/admin/bill/:slug" component={ChitietHD} />
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


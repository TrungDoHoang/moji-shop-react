import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ChangePass from './pages/ChangePass'
import InfoUser from './pages/InfoUser'
import Order from './pages/Order'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
// import './User.css'

function user(props) {
    const Err404 = React.lazy(() => import('../../components/404'))

    return (
        <Suspense fallback={
            <div id="preloader">
                <div id="loader"></div>
            </div>}>
            <Header />
            <Switch>
                <Route path="/user/info" component={InfoUser} />
                <Route path="/user/order" component={Order} />
                <Route path="/user/changePass" component={ChangePass} />
                <Route path="/user/signin" component={SignIn} />
                <Route path="/user/signup" component={SignUp} />
                <Route component={Err404} />
            </Switch>
            <Footer />
        </Suspense>
    )
}

user.propTypes = {}

export default user


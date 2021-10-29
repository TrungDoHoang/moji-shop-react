import { isEmptyObject } from 'jquery'
import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router-dom'
import { userSelector } from '../../app/reducers/userSlice'
import ChangePass from './pages/ChangePass'
import InfoUser from './pages/InfoUser'
import Order from './pages/Order'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
// import './User.css'

function user(props) {
    const Err404 = React.lazy(() => import('../../components/404'))
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path="/user/info" component={InfoUser} />
            <Route path="/user/order" component={Order} />
            <Route path="/user/changePass" component={ChangePass} />
            <Route path="/user/signin" component={SignIn} />
            <Route path="/user/signup" component={SignUp} />
            <Route component={Err404} />
        </Switch>
        </Suspense>
    )
}

user.propTypes = {}

export default user


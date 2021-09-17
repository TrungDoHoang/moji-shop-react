import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Contact from './pages/Contact'

function user(props) {
    const Err404 = React.lazy(() => import('../../components/404'))
    return (
        <Switch>
            <Route path="/contact" component={Contact} />
            <Route component={Err404} />
        </Switch>
    )
}

user.propTypes = {}

export default user


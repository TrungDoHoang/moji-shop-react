import React from 'react'
import { Route, Switch } from 'react-router-dom'
import News from './pages/News'

function news(props) {
    const Err404 = React.lazy(() => import('../../components/404'))
    return (
        <Switch>
            <Route path="/news" component={News} />
            <Route component={Err404} />
        </Switch>
    )
}

news.propTypes = {}

export default news


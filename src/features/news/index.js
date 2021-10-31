import React from 'react'
import { Route, Switch } from 'react-router-dom'
import News from './pages/News'

function news(props) {
    const Err404 = React.lazy(() => import('../../components/404'))
    const Header = React.lazy(() => import('../../components/Header'))
    const Footer = React.lazy(() => import('../../components/Footer'))
    return (
        <>
            <Header />
            <Switch>
                <Route path="/news" component={News} />
                <Route component={Err404} />
            </Switch>
            <Footer />
        </>
    )
}

news.propTypes = {}

export default news


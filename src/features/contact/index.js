import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Contact from './pages/Contact'

function contact(props) {
    const Err404 = React.lazy(() => import('../../components/404'))
    return (
        <>
            <Header />
            <Switch>
                <Route path="/contact" component={Contact} />
                <Route component={Err404} />
            </Switch>
            <Footer />
        </>
    )
}

contact.propTypes = {}

export default contact


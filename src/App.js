import React, { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import './Loading.css'
import './App.css';
import { QueryParamProvider } from 'use-query-params';
import ScrollToTop from './components/ScrollToTop';
import { useDispatch } from 'react-redux';
import { getProducts } from './app/reducers/productsSlice';
import { getCategories } from './app/reducers/categorySlice';
const Products = React.lazy(() => import('./features/products'))
const Cart = React.lazy(() => import('./features/cart'))
const User = React.lazy(() => import('./features/user'))
const Contact = React.lazy(() => import('./features/contact'))
const News = React.lazy(() => import('./features/news'))
const Admin = React.lazy(() => import('./features/admin'))
function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
        dispatch(getProducts())
        dispatch(getCategories())
  })
  return (
    <Suspense fallback={
      <div id="preloader">
        <div id="loader"></div>
      </div>
    }>
      <QueryParamProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/user" component={User} />
            <Route path="/contact" component={Contact} />
            <Route path="/news" component={News} />
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Products} />
          </Switch>
          <ScrollToTop/>
        </BrowserRouter>
      </QueryParamProvider>
    </Suspense>
  );
}

export default App;

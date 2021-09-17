import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import { QueryParamProvider } from 'use-query-params';

const Products = React.lazy(() => import('./features/products'))
const User = React.lazy(() => import('./features/user'))
const Contact = React.lazy(() => import('./features/contact'))
function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <QueryParamProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/user" component={User} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Products} />
        </Switch>
        <Footer />
      </BrowserRouter>
      </QueryParamProvider>
    </Suspense>
  );
}

export default App;

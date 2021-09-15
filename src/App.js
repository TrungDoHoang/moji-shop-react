import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

const Products = React.lazy(() => import('./features/products'))
function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Products} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

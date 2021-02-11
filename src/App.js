/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { list } from './data/data';

// component
import NavMenu from './components/NavMenu';

// pages
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  // modifie l'index de la catégorie de produi  ts
  const [categorie, setCategorie] = useState(0);

  // liste de produits  filtrés après la  rc  herche
  const [productsFilter, setProductsFilter] = useState(list);

  // est ont en train de filter la recherche ?
  const [isFiltering, setFiltering] = useState(false);

  // conteu du panier d'achat
  const [cartCount, setCartCount] = useState(0);

  // filtre le résultat de la recherhe dans   la barre de navigation
  const filterResult = (input) => {
    const fullList = list.flat();

    const result = fullList.filter((item) => {
      const name = item.name.toLowerCase();
      const terme = input.toLowerCase();
      return name.indexOf(terme) !== -1;
    });

    setProductsFilter(result);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <NavMenu
              filter={filterResult}
              setFiltering={setFiltering}
              cartCount={cartCount}
            />
            <Home
              cartCount={cartCount}
              setCategorie={setCategorie}
              categorie={categorie}
              filteredProducts={productsFilter}
              setCartCount={setCartCount}
              list={list}
              isFiltering={isFiltering}
            />
          </Route>
          <Route exact path="/cart">
            <NavMenu
              filter={filterResult}
              setFiltering={setFiltering}
              cartCount={cartCount}
            />
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

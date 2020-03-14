import React, { useState } from "react";
import "./App.css";
import NavWrapper from "./components/NavWrapper";
import data from "./products";
import {
  Route,
  BrowserRouter as Router,
  useRouteMatch
} from "react-router-dom";
import SubNav from "./components/SubNav";

function App() {
  const [products, setProducts] = useState(data);

  console.log(products);
  return (
    <div className="App">
      <Route
        path="/"
        render={props => <NavWrapper {...props} products={products} />}
      ></Route>

      {products.map(product => {
        return (
          <Route
            path={`/${product.category}`}
            render={props => <SubNav {...props} products={products} />}
          ></Route>
        );
      })}
    </div>
  );
}

const NavWrapper2 = props => {
  return (
    <div>
      {props.products.map(product => (
        <a key={product.category} href={product.category}>
          {product.category}
        </a>
      ))}
    </div>
  );
};

export default App;

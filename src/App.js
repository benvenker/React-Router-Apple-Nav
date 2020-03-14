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
      {/* What shold be the nav component */}
      {/* {products.map(product => {
        return <a href={product.category}>{product.category}</a>;
      })}
      <NavWrapper2 /> */}
      <Route
        path="/"
        render={props => <NavWrapper {...props} products={products} />}
      ></Route>

      <Route
        path="/mac"
        render={props => <MacNav {...props} products={products} />}
      ></Route>
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

const MacNav = props => {
  const match = useRouteMatch();
  console.log("match", match);
  const mac = props.products.find(product => product.category === "mac");
  console.log("mac", mac.items);
  return (
    <div>
      {mac.items.map(item => (
        <a key={item.name} href={item.name}>
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default App;

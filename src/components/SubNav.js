import React from "react";
import products from "../products";
import { useRouteMatch } from "react-router-dom";

const SubNav = props => {
  const match = useRouteMatch();
  const category = props.match.path.substring(1);
  const mac = props.products.find(product => product.category === category);
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

export default SubNav;

import React from "react";

import "../assets/style/product.css";
import AddToCart from "./addToCart.jsx";

/** 
 define product component
*/
export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * use when the component is update
   * @returns {JSX.Element} create product, AddToCart
   */
  render() {
    const { weight, name, description, image, price, stock } = this.props;
    return (
      <div className="product">
        <div className="info">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
          <div className="weight">{weight}</div>
        </div>
        <div className="imageProduit">
          <img src={image} alt={this.props.description} />
        </div>
        <div className="stock"> qté <div className="petit">{stock}</div>
        </div>
        <div className="price">{price}</div>
        <AddToCart
          handleAddToCart={() => this.props.handleAddToCart(this.props.product)}
        />
      </div>
    );
  }
}

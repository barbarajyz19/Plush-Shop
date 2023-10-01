import React from "react";

import "../assets/style/cart.css";
import bin from "../assets/images/poubelle.jpg";

/** 
 define ProducInCart component
*/
export default class ProductInCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: this.props.stock,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  /**
   * calls the handleDeleteCart function passed in props to update the cart
   */
  handleDelete() {
    this.props.handleDeleteCart();
  }

  /**
   * calls the handleInputChange function passed in props to update the cart
   * @param {object} event
   */
  handleValueChange(event) {
    this.props.handleInputChange(this.props.id, event.target.value);
  }

  /**
   * use when the component is update
   * @returns {JSX.Element} create product
   */
  render() {
    const { name, image, stock } = this.props;
    return (
      <div className="product">
        <div className="info">
          <div className="name">{name}</div>
        </div>
        <div className="imageProduit">
          <img src={image} alt="product" />
        </div>
        <input
          type="number"
          min="1"
          value={stock}
          onChange={this.handleValueChange}
        />
        <img
          className="button"
          src={bin}
          alt="bin"
          onClick={this.handleDelete}
        />
      </div>
    );
  }
}

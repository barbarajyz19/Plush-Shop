import React from "react";

import cart from "../assets/images/panier.jpg";

/** 
 define AddToCart component
*/
export default class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.handleCart = this.handleCart.bind(this);
  }

  /**
   * calls the handleAddToCart function passed in props to update the cart
   */
  handleCart() {
    this.props.handleAddToCart(this.props);
  }

  /**
   * use when the component is update
   * @returns {JSX.Element} button for the cart
   */
  render() {
    return (
      <img className="button" src={cart} alt="cart" onClick={this.handleCart} />
    );
  }
}

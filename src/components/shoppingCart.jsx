import React from "react";

import "../assets/style/product.css";
import ProductInCart from "./productInCart.jsx";
import TotalCart from "./totalCart.jsx";

/** 
 define shoppingCart component
*/
export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartWithProduct: [],
      totalWeight: 0,
    };
  }

  /**
   * use when the value change and do the update
   * @param {props} prevProps
   */
  componentDidUpdate(prevProps) {
    if (prevProps.productsCart !== this.props.productsCart) {
      this.setState({
        cartWithProduct: this.props.productsCart,
        totalWeight: this.props.productsCart.reduce(
          (total, product) => total + product.weight * product.stock,0)
      });
    }
  }

  /**
   * use when the component is update
   * @returns {JSX.Element} TotalCart, ProductInCart
   */
  render() {
    const productsList = this.state.cartWithProduct.map((product) => (
      <ProductInCart
        key={product.id}
        name={product.name}
        image={product.image}
        stock={product.stock}
        price={product.price}
        id={product.id}
        handleDeleteCart={() => this.props.handleDeleteCart(product)}
        handleInputChange={this.props.handleInputChange}
      />
    ));
    return (
      <div className="cart">
        <h4>Panier</h4>
        {productsList}
        <TotalCart cartWithProduct={this.state.cartWithProduct} />
        <div className="weight">poids total {this.state.totalWeight} </div>
      </div>
    );
  }
}

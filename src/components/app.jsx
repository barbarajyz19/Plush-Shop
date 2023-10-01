import React from "react";

import "../assets/style/app.css";
import dataProduct from "../data/products.js";
import ProductList from "./productList.jsx";
import ShoppingCart from "./shoppingCart.jsx";

/** 
 define root component
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: dataProduct,
      productsCart: [],
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleDeleteCart = this.handleDeleteCart.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * manages the event of adding a product to the cart
   * @param {product} product the product you want to add
   */
  handleAddToCart(product) {
    if (product.stock > 0) {
      const { products, productsCart } = this.state;
      const matchingProductIndex = productsCart.findIndex(
        (element) => element.id === product.id
      );
      if (matchingProductIndex !== -1) {
        const updatedCart = [...productsCart];
        updatedCart[matchingProductIndex].stock++;

        const updatedProducts = [...products];
        updatedProducts.find((element) => element.id === product.id).stock--;

        this.setState({
          products: updatedProducts,
          productsCart: updatedCart,
        });
      } else {
        const existingProduct = products.find(
          (element) => element.id === product.id
        );
        const updatedCart = [...productsCart, { ...product, stock: 1 }];
        existingProduct.stock--;
        this.setState({
          productsCart: updatedCart,
        });
      }
    }
  }

  /**
   * manages the event of deleting a product to the cart
   * @param {product} product the product you want to delete
   */
  handleDeleteCart(product) {
    const matchingProductIndex = this.state.products.findIndex(
      (element) => element.id === product.id
    );
    const existingProduct = this.state.productsCart.find(
      (element) => element.id === product.id
    );
    if (matchingProductIndex !== -1) {
      const updatedProducts = [...this.state.products];
      updatedProducts[matchingProductIndex].stock += parseInt(
        existingProduct.stock
      );

      const updatedCart = this.state.productsCart.filter(
        (element) => element.id !== product.id
      );

      this.setState({
        products: updatedProducts,
        productsCart: updatedCart,
      });
    }
  }

  /**
   * manages the event of the input for the product in the cart
   * @param {number} id the id of the product being updated
   * @param {number} quantity the new quantity of the product
   */
  handleInputChange(id, quantity) {
    const { productsCart, products } = this.state;
    const indexItem = productsCart.findIndex((element) => element.id === id);
    if (indexItem !== -1) {
      const modifiedItem = { ...productsCart[indexItem], stock: quantity };
      const newCart = [
        ...productsCart.slice(0, indexItem),
        modifiedItem,
        ...productsCart.slice(indexItem + 1),
      ];

      const productIndex = products.findIndex((element) => element.id === id);
      const diff =
        products[productIndex].stock +
        (productsCart[indexItem].stock - quantity);
      if (diff >= 0) {
        const updatedProducts = [...products];
        updatedProducts[productIndex].stock = diff;

        this.setState({
          productsCart: newCart,
          products: updatedProducts,
        });
      }
    }
  }

  /**
   * use when the component is update
   * @returns {JSX.Element} ProductList, ShoppingCart
   */
  render() {
    return (
      <div>
        <ProductList handleAddToCart={this.handleAddToCart} />
        <ShoppingCart
          productsCart={this.state.productsCart}
          handleDeleteCart={this.handleDeleteCart}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

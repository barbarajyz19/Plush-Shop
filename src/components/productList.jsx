import React from "react";
import dataProducts from "../data/products.js";
import "../assets/style/productList.css";
import ProductFilter from "./productFilter.jsx";
import Product from "./product.jsx";

/**
 define productList component
*/
export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
    };
    this.filterProduct = this.filterProduct.bind(this);
  }

  /**
   * updates the state of the main component by changing the value of the filterText key with the new value passed as a parameter
   * @param {string} newFilterText
   */
  filterProduct(newFilterText) {
    this.setState({
      filterText: newFilterText,
    });
  }

  /**
   * use when the component is update
   * @returns {JSX.Element} Product, ProductFilter
   */
  render() {
    const filteredProducts = dataProducts.filter((product) =>
      product.name.toLowerCase().includes(this.state.filterText.toLowerCase())
    );
    const productsList = filteredProducts.map((product) => (
      <Product
        {...product}
        key={product.id}
        handleAddToCart={() => this.props.handleAddToCart(product)}
      />
    ));
    return (
      <div className="productList">
        <h4>Boutique</h4>
        <ProductFilter
          filterText={this.state.filterText}
          onFilterText={this.filterProduct}
        />
        <div className="productsZone">{productsList}</div>
      </div>
    );
  }
}

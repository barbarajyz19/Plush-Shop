import React from "react";

/** 
 define totalCart component
*/
export default class TotalCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
    };
  }

  /**
   * use when the value change and do the update
   * @param {props} prevProps
   */
  componentDidUpdate(prevProps) {
    if (prevProps.cartWithProduct !== this.props.cartWithProduct) {
      this.setState({
        totalPrice: this.props.cartWithProduct.reduce((total, product) => {
          return total + product.price * product.stock;
        }, 0),
      });
    }
  }

  /**
   * use when the component is update
   * @returns {JSX.Element} price
   */
  render() {
    return (
      <div className="total">
        total commande : <div className="price">{this.state.totalPrice} </div>
      </div>
    );
  }
}

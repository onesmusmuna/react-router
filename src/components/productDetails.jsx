import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Programatic navigation, mainly used when you are Redirecting a user || Submiting a form

    // This code will Redirect the user to given url, when they click the btn
    this.props.history.push("/products");
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;

import React, { Component } from 'react';
import Products from './Products';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  render() {
    return (
      <div className="container main-content">
        {this.state.products.map(product => (
          <Products
            key={product.id}
            image={product.image}
            name={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;

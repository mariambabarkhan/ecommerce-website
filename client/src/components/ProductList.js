import React from 'react';
import '../styles/ProductList.css'; // Add this file for your product list styles

const products = [
  { id: 1, name: 'Product 1', price: '$20', image: '/img/product1.jpg' },
  { id: 2, name: 'Product 2', price: '$30', image: '/img/product2.jpg' },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <section className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductList;

import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 200 },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => alert('Added to cart')}>Añadir al carrito</button>
    </div>
  );
};

export default ProductDetail;

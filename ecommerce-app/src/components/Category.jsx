import React from 'react';
import { useParams, Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'iPhone 14', category: 'Celulares', description: 'Latest Apple iPhone with A16 Bionic chip', price: 999 },
    { id: 2, name: 'Samsung Galaxy S23', category: 'Celulares', description: 'Samsung flagship smartphone with advanced features', price: 899 },
    { id: 3, name: 'iPad Pro', category: 'Tablets', description: 'Apple iPad Pro with M2 chip', price: 1099 },
    { id: 4, name: 'Samsung Galaxy Tab S8', category: 'Tablets', description: 'High-performance Android tablet', price: 799 },
    { id: 5, name: 'MacBook Air M2', category: 'Laptops', description: 'Lightweight and powerful laptop from Apple', price: 1299 },
    { id: 6, name: 'Dell XPS 13', category: 'Laptops', description: 'Premium Windows laptop with compact design', price: 1199 },
  ];

const Category = () => {
  const { categoryName } = useParams();
  const filteredProducts = products.filter(product => product.category === categoryName);

  return (
    <div>
      <h2>Categoria: {categoryName}</h2>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

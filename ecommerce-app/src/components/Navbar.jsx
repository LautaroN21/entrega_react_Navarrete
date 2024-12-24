import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const categories = ['Celulares', 'Tablets', 'Laptops'];

  return (
    <nav>
      <Link to="/">Home</Link>
      {categories.map(category => (
        <Link key={category} to={`/category/${category}`}>{category}</Link>
      ))}
    </nav>
  );
};

export default Navbar;

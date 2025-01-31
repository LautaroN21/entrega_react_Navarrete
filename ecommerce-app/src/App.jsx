
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Category from './components/Category';
import ProductDetail from './components/ProductDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from ".";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:categoryName" element={<Category />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
    </Routes>
  </Router>
);

function App() {
const [product, setProduct] = useState({});

  useEffect(() => {
    const db = getFirestore(firebaseApp);

    const biciRef = doc(db, "items", "x5pJaob5CEIseOhQom28");
  
    getDoc(biciRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.id, doc.data());
        setProduct({id: snapshot.id, ...snapshot.data() });
        console.log({id: snapshot.id, ...snapshot.data()});
      } else {
        console.log("Item no encontrado");
      }
    });
   }, []),

    return <div className="App"></div>;
  }

export default App;

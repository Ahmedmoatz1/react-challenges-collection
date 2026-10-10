import React, { useState, useEffect } from 'react';
import styles from "./DoubleFetching.module.css";

function DoubleFetching() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const foundProduct = products.find((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSelectedProduct(foundProduct || null);
  };

  if (loading) {
    return (
      <div className={styles.contierd}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.contierd}>
      <h1>Double Fetching</h1>
      
      <div className={styles.display}>
        {selectedProduct ? (
          <div className={styles.card}>
            <img 
              src={selectedProduct.thumbnail} 
              alt={selectedProduct.title} 
              className={styles.image} 
            />
            <div className={styles.cardInfo}>
              <h3>{selectedProduct.title}</h3>
              <p className={styles.price}>Price: ${selectedProduct.price}</p>
            </div>
          </div>
        ) : (
          <p className={styles.placeholder}>Type a product name and click search</p>
        )}
      </div>

      <div className={styles.forms}>
        <form onSubmit={handleSearch} className={styles.form}>
          <input 
            type="text" 
            placeholder="Enter product name..." 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default DoubleFetching;
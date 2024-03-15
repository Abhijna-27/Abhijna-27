import React, { useState } from 'react';
import { productsData } from './mockData';

function Products() {
  const [products, setProducts] = useState(productsData);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stockQuantity: '' });
  const [editProductId, setEditProductId] = useState(null);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleAddProduct = () => {
    // Check if any field in newProduct is empty
    if (Object.values(newProduct).some(value => value === '')) {
      alert('Please fill in all fields.');
      return;
    }
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
  };

  const handleEditProduct = (id) => {
    setEditProductId(id);
    // Find the product to edit and set its values to newProduct state
    const productToEdit = products.find(product => product.id === id);
    setNewProduct(productToEdit);
  };

  const handleSaveEditProduct = () => {
    const updatedProducts = products.map(product => {
      if (product.id === editProductId) {
        return newProduct;
      }
      return product;
    });
    setProducts(updatedProducts);
    setEditProductId(null);
    setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
  };

  return (
    <div className="products">
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th style={{ width: '200px' }}>Stock Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} style={{textAlign:'center'}}>
              <td>{editProductId === product.id ? (
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
              ) : (
                product.name
              )}</td>
              <td>{editProductId === product.id ? (
                <input
                  type="text"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                />
              ) : (
                product.category
              )}</td>
              <td>{editProductId === product.id ? (
                <input
                  type="text"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
              ) : (
                product.price
              )}</td>
              <td>{editProductId === product.id ? (
                <input
                  type="text"
                  value={newProduct.stockQuantity}
                  onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: e.target.value })}
                />
              ) : (
                product.stockQuantity
              )}</td>
              <td style={{ textAlign: 'center' }}>
                {editProductId === product.id ? (
                  <button onClick={handleSaveEditProduct} style={{ backgroundColor:'green'}}>Save</button>
                ) : (
                  <>
                   <div style={{ textAlign: 'center' }}>
                    <button onClick={() => handleEditProduct(product.id)}>Edit</button>
                    <span style={{ margin: '0 20px' }}></span>
                    <button onClick={() => handleDeleteProduct(product.id)} style={{backgroundColor: 'tomato',color: 'white'}}>Delete</button>
                   </div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editProductId !== null && (
        <div>
          <button onClick={() => setEditProductId(null)}>Cancel</button>
        </div>
      )}
      {editProductId === null && (
        <div>
          <h3>Add New Product</h3>
          <input
            type="text"
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          />
          <input
            type="text"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Stock Quantity"
            value={newProduct.stockQuantity}
            onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: e.target.value })}
          />
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
      )}
    </div>
  );
}

export default Products;

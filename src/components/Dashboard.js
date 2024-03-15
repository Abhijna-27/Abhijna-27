import React from 'react';
import { Link } from 'react-router-dom';
import { productsData, ordersData } from './mockData'; // Import mock data

function Dashboard() {
  // Calculate total number of products
  const totalProducts = productsData.length;

  // Calculate total number of orders
  const totalOrders = ordersData.length;

  return (
    <div className="dashboard">
      <nav>
        <ul>
          <li><Link>Home</Link></li>
          <li><Link to="/orders">Orders</Link> ({totalOrders})</li>
          <li><Link to="/products">Products</Link> ({totalProducts})</li>
          <li><Link>Help & Support</Link></li>
        </ul>
      </nav>
      
    </div>
  );
}

export default Dashboard;
